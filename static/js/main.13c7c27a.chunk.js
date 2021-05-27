(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{22:function(t,e,n){t.exports={contactList:"ContactList_contactList__1Zd4T",contactListItem:"ContactList_contactListItem__2IBNd"}},71:function(t,e,n){},75:function(t,e,n){"use strict";n.r(e);var c,a,r=n(0),o=n.n(r),u=n(10),s=n.n(u),i=n(12),b=n(13),l=n(16),d=n(14),j=n(6),f=n(21),h=n.n(f),m=n(32),O=n(17),p=n.n(O),C=n(2),g=Object(C.b)("contacts/fetchContactsRequest"),v=Object(C.b)("contacts/fetchContactsSuccess"),x=Object(C.b)("contacts/fetchContactsError"),_=Object(C.b)("contacts/addContactRequest"),y=Object(C.b)("contacts/addContactSuccess"),I=Object(C.b)("contacts/addContactError"),k=Object(C.b)("contacts/deleteContactRequest"),N=Object(C.b)("contacts/deleteContactSuccess"),w=Object(C.b)("contacts/deleteContactError"),F=Object(C.b)("contacts/changeFilter"),L=function(){return function(){var t=Object(m.a)(h.a.mark((function t(e){var n,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(g()),t.prev=1,t.next=4,p.a.get("http://localhost:3000/contacts");case 4:n=t.sent,c=n.data,e(v(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(x(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},S=function(t){return function(e){var n={name:t.name,number:t.number};e(_()),p.a.post("http://localhost:3000/contacts",n).then((function(t){var n=t.data;return e(y(n))})).catch((function(t){return e(I(t))}))}},A=function(t){return function(e){e(k()),p.a.delete("http://localhost:3000/contacts/".concat(t)).then((function(){return e(N(t))})).catch((function(t){return e(w(t))}))}},q=n(11),z=function(t){return t.contacts.filter},B=function(t){return t.contacts.loading},E={getFilter:z,getVisibleContacts:Object(q.a)([function(t){return t.contacts.items},z],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},M=n(22),Z=n.n(M),D=n(1),J=Object(j.b)((function(t){return{contacts:E.getVisibleContacts(t)}}),(function(t){return{deleteContact:function(e){return t(A(e))}}}))((function(t){var e=t.contacts,n=t.deleteContact;return Object(D.jsx)("ul",{className:Z.a.contactList,children:e.map((function(t){return Object(D.jsxs)("li",{className:Z.a.contactListItem,children:[Object(D.jsx)("p",{children:t.name}),Object(D.jsx)("p",{children:t.number}),Object(D.jsx)("button",{type:"button",onClick:function(){return n(t.id)},children:"Delete contact"})]})}))})})),R=n(5),T=n(23),P=n.n(T),V=n(8),X=n.n(V),$=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.nameInputId=P.a.generate(),t.numberInputId=P.a.generate(),t.handleChange=function(e){t.setState(Object(R.a)({},e.target.name,e.target.value))},t.reset=function(){t.setState({name:"",number:""})},t.handleSubmit=function(e){e.preventDefault(),t.props.onAdd(t.state),t.reset()},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(D.jsxs)("form",{onSubmit:this.handleSubmit,className:X.a.ContactForm,children:[Object(D.jsxs)("label",{className:X.a.label,children:["Name:",Object(D.jsx)("input",{id:this.nameInputId,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,placeholder:"Input name"})]}),Object(D.jsxs)("label",{label:!0,className:X.a.label,children:["Phone number:",Object(D.jsx)("input",{id:this.numberInputId,type:"number",name:"number",value:this.state.number,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,className:X.a.input_name,placeholder:"Input number"})]}),Object(D.jsx)("button",{type:"submit",className:X.a.add_btn,children:"Add contact"})]})}}]),n}(r.Component),G=Object(j.b)(null,(function(t){return{onAdd:function(e){return t(S(e))}}}))($),H=(n(71),Object(j.b)((function(t){return{valueState:E.getFilter(t)}}),(function(t){return{filterByName:function(e){return t(F(e.target.value))}}}))((function(t){var e=t.valueState,n=t.filterByName;return Object(D.jsx)("label",{className:"label",children:Object(D.jsx)("input",{type:"text",value:e,onChange:n})})}))),K=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(G,{}),Object(D.jsx)(J,{}),Object(D.jsx)(H,{})]})}}]),n}(r.Component),Q=Object(j.b)((function(t){return{isLoadingContacts:B(t)}}),(function(t){return{fetchContacts:function(){return t(L())}}}))(K),U=n(15),W=n(3),Y=Object(C.c)([],(c={},Object(R.a)(c,y,(function(t,e){var n=e.payload;return[].concat(Object(U.a)(t),[n])})),Object(R.a)(c,N,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),tt=Object(C.c)("",Object(R.a)({},F,(function(t,e){return e.payload}))),et=Object(C.c)(!1,(a={},Object(R.a)(a,_,(function(){return!0})),Object(R.a)(a,y,(function(){return!1})),Object(R.a)(a,I,(function(){return!1})),Object(R.a)(a,k,(function(){return!0})),Object(R.a)(a,N,(function(){return!1})),Object(R.a)(a,w,(function(){return!1})),a)),nt=Object(W.b)({items:Y,filter:tt,loading:et}),ct=n(33),at=n.n(ct),rt=n(7),ot=n(34),ut={key:"contacts",storage:n.n(ot).a,blacklist:["filter"]},st=Object(W.b)({contacts:Object(rt.g)(ut,nt)}),it=[].concat(Object(U.a)(Object(C.d)({serializableCheck:{ignoredActions:[rt.a,rt.f,rt.b,rt.c,rt.d,rt.e]}})),[at.a]),bt=Object(C.a)({reducer:st,middleware:it,devtools:!1}),lt={store:bt,persistor:Object(rt.h)(bt)};s.a.render(Object(D.jsx)(o.a.StrictMode,{children:Object(D.jsx)(j.a,{store:lt.store,children:Object(D.jsx)(Q,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__1nP7t",label:"ContactForm_label__1u4Tw",input_name:"ContactForm_input_name__3Th8M",add_btn:"ContactForm_add_btn__3I6Xg"}}},[[75,1,2]]]);
//# sourceMappingURL=main.13c7c27a.chunk.js.map