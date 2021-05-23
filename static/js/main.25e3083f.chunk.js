(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{20:function(t,e,n){t.exports={contactList:"ContactList_contactList__1Zd4T",contactListItem:"ContactList_contactListItem__2IBNd"}},66:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);var c,a,r=n(0),o=n.n(r),u=n(9),i=n.n(u),s=n(11),b=n(12),l=n(15),d=n(14),j=n(6),m=n(19),h=n.n(m),O=n(2),f=Object(O.b)("contacts/addContactRequest"),p=Object(O.b)("contacts/addContactSuccess"),C=Object(O.b)("contacts/addContactError"),g=Object(O.b)("contacts/deleteContactRequest"),x=Object(O.b)("contacts/deleteContactSuccess"),_=Object(O.b)("contacts/deleteContactError"),v=Object(O.b)("contacts/changeFilter"),y=function(t){return function(e){var n={name:t.name,number:t.number};e(f()),h.a.post("http://localhost:3000/contacts",n).then((function(t){var n=t.data;return e(p(n))})).catch((function(t){return e(C(t))}))}},I=function(t){return function(e){e(g()),h.a.delete("http://localhost:3000/contacts/".concat(t)).then((function(){return e(x(t))})).catch((function(t){return e(_(t))}))}},N=n(10),F=function(t){return t.contacts.filter},L={getFilter:F,getVisibleContacts:Object(N.a)([function(t){return t.contacts.items},F],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},S=n(20),w=n.n(S),A=n(1),k=Object(j.b)((function(t){return{contacts:L.getVisibleContacts(t)}}),(function(t){return{deleteContact:function(e){return t(I(e))}}}))((function(t){var e=t.contacts,n=t.deleteContact;return Object(A.jsx)("ul",{className:w.a.contactList,children:e.map((function(t){return Object(A.jsxs)("li",{className:w.a.contactListItem,children:[Object(A.jsx)("p",{children:t.name}),Object(A.jsx)("p",{children:t.number}),Object(A.jsx)("button",{type:"button",onClick:function(){return n(t.id)},children:"Delete contact"})]})}))})})),B=n(4),q=n(21),z=n.n(q),Z=n(7),E=n.n(Z),J=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.nameInputId=z.a.generate(),t.numberInputId=z.a.generate(),t.handleChange=function(e){t.setState(Object(B.a)({},e.target.name,e.target.value))},t.reset=function(){t.setState({name:"",number:""})},t.handleSubmit=function(e){e.preventDefault(),t.props.onAdd(t.state),t.reset()},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(A.jsxs)("form",{onSubmit:this.handleSubmit,className:E.a.ContactForm,children:[Object(A.jsxs)("label",{className:E.a.label,children:["Name:",Object(A.jsx)("input",{id:this.nameInputId,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,placeholder:"Input name"})]}),Object(A.jsxs)("label",{label:!0,className:E.a.label,children:["Phone number:",Object(A.jsx)("input",{id:this.numberInputId,type:"number",name:"number",value:this.state.number,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,className:E.a.input_name,placeholder:"Input number"})]}),Object(A.jsx)("button",{type:"submit",className:E.a.add_btn,children:"Add contact"})]})}}]),n}(r.Component),M=Object(j.b)(null,(function(t){return{onAdd:function(e){return t(y(e))}}}))(J),T=(n(66),Object(j.b)((function(t){return{valueState:L.getFilter(t)}}),(function(t){return{filterByName:function(e){return t(v(e.target.value))}}}))((function(t){var e=t.valueState,n=t.filterByName;return Object(A.jsx)("label",{className:"label",children:Object(A.jsx)("input",{type:"text",value:e,onChange:n})})}))),D=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(M,{}),Object(A.jsx)(k,{}),Object(A.jsx)(T,{})]})}}]),n}(r.Component),P=n(13),R=n(5),V=Object(O.c)([],(c={},Object(B.a)(c,p,(function(t,e){var n=e.payload;return[].concat(Object(P.a)(t),[n])})),Object(B.a)(c,x,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),X=Object(O.c)("",Object(B.a)({},v,(function(t,e){return e.payload}))),$=Object(O.c)(!1,(a={},Object(B.a)(a,f,(function(){return!0})),Object(B.a)(a,p,(function(){return!1})),Object(B.a)(a,C,(function(){return!1})),Object(B.a)(a,g,(function(){return!0})),Object(B.a)(a,x,(function(){return!1})),Object(B.a)(a,_,(function(){return!1})),a)),G=Object(R.b)({items:V,filter:X,loading:$}),H=n(30),K=n.n(H),Q=[].concat(Object(P.a)(Object(O.d)()),[K.a]),U=Object(O.a)({reducer:{contacts:G},middleware:Q});i.a.render(Object(A.jsx)(o.a.StrictMode,{children:Object(A.jsx)(j.a,{store:U,children:Object(A.jsx)(D,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__1nP7t",label:"ContactForm_label__1u4Tw",input_name:"ContactForm_input_name__3Th8M",add_btn:"ContactForm_add_btn__3I6Xg"}}},[[68,1,2]]]);
//# sourceMappingURL=main.25e3083f.chunk.js.map