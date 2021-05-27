import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactFailure,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactFailure,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsFailure,
} from './contacts-actions';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('http://localhost:3000/contacts');
    console.log(data);
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsFailure(error));
  }
};

const addContact = values => dispatch => {
  const contact = {
    name: values.name,
    number: values.number,
  };

  dispatch(addContactRequest());
  axios
    .post('http://localhost:3000/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactFailure(error)));
};

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`http://localhost:3000/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactFailure(error)));
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
};
