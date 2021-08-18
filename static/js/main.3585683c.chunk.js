(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",fieldInput:"ContactForm_fieldInput__3zV51",validatorError:"ContactForm_validatorError__3ngg1"}},182:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(65),r=n.n(o),s=(n(79),n(3)),i=n(9),l=(n(80),n(13)),u=n(29),b=n(10),m=n.n(b),d=n(41),j=n(74),h=n(71),f=n.n(h),p=n(1),O=["type","onClick","disabled","children"];function x(e){var t=e.type,n=void 0===t?"button":t,a=e.onClick,c=e.disabled,o=void 0!==c&&c,r=e.children,s=Object(j.a)(e,O);return Object(p.jsx)("button",Object(d.a)(Object(d.a)({type:n,className:f.a.button,disabled:o,onClick:a},s),{},{children:r}))}function _(e){var t=e.onSubmit;return Object(p.jsx)("div",{children:Object(p.jsx)(l.d,{initialValues:{name:"",phoneNumber:""},validationSchema:u.a({name:u.b().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name can contain only letters, ', - and space. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.").required(),phoneNumber:u.b().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number should contain only numbers and it also could contain spaces, dash, parenthesis and startts with +").required()}),onSubmit:function(e,n){var a=n.resetForm;t(e),a()},children:Object(p.jsxs)(l.c,{className:m.a.form,children:[Object(p.jsxs)("label",{className:m.a.label,children:["Name:",Object(p.jsx)(l.b,{className:m.a.fieldInput,name:"name",type:"text"}),Object(p.jsx)(l.a,{name:"name",component:"span",className:m.a.validatorError})]}),Object(p.jsxs)("label",{className:m.a.label,children:["Phone number:",Object(p.jsx)(l.b,{className:m.a.fieldInput,name:"phoneNumber",type:"tel"}),Object(p.jsx)(l.a,{name:"phoneNumber",component:"span",className:m.a.validatorError})]}),Object(p.jsx)(x,{type:"submit",children:"Add contact"})]})})})}var N=n(73),v=n(19),C=n.n(v);function g(e){var t=e.contacts,n=e.onDeleteContact;return Object(p.jsx)("ul",{className:C.a.list,children:t.map((function(e){var t=e.id,a=e.name,c=e.phoneNumber;return Object(p.jsxs)("li",{className:C.a.item,children:[Object(p.jsx)("span",{className:C.a.itemName,children:a}),Object(p.jsx)("span",{className:C.a.itemPhone,children:c}),Object(p.jsx)(x,{onClick:function(){return n(t)},"aria-label":"Delete contact",children:Object(p.jsx)(N.a,{size:"18"})})]},t)}))})}var y=n(72),S=n.n(y);function I(e){var t=e.onChange;return Object(p.jsx)("div",{children:Object(p.jsxs)("label",{children:["Find contacts by name:",Object(p.jsx)("input",{type:"text",name:"filter",onChange:t,className:S.a.fieldInput})]})})}var k=n(184),w="contacts";function F(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),r=Object(i.a)(o,2),l=r[0],u=r[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem(w));e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem(w,JSON.stringify(n))}),[n]);var b=function(e){return e=e.toLowerCase(),n.filter((function(t){return t.name.toLowerCase().includes(e)})).length>0};return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(_,{onSubmit:function(e){var t=e.name,n=e.phoneNumber;if(b(t))alert("".concat(t," is already in contacts"));else{var a={id:Object(k.a)(),name:t,phoneNumber:n};c((function(e){return[a].concat(Object(s.a)(e))}))}}}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(I,{onChange:function(e){u(e.target.value)}}),Object(p.jsx)(g,{contacts:function(){var e=l.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})}r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root"))},19:function(e,t,n){e.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",itemName:"ContactList_itemName__3linx",itemPhone:"ContactList_itemPhone__2aABR"}},71:function(e,t,n){e.exports={button:"FormButton_button__2-gNS"}},72:function(e,t,n){e.exports={fieldInput:"Filter_fieldInput__1at_C"}},79:function(e,t,n){},80:function(e,t,n){}},[[182,1,2]]]);
//# sourceMappingURL=main.3585683c.chunk.js.map