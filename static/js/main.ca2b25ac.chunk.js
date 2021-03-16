(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={name:"Contacts_name__1oTse",list:"Contacts_list__otVY-"}},20:function(t,e,n){t.exports={label:"Filter_label__19jWm",input:"Filter_input__2CEsa"}},41:function(t,e,n){},8:function(t,e,n){t.exports={form:"PhoneBook_form__iwi9G",submitButton:"PhoneBook_submitButton__JssVS",label:"PhoneBook_label__2k2zR",input:"PhoneBook_input__24bNF"}},88:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(12),o=n.n(r),u=(n(41),n(29)),s=n(30),i=n(36),b=n(34),l=n(8),j=n.n(l),h=n(7),f=n(10),p=function(t){return t.contacts.items},m=function(t){return t.contacts.filter},O={getContactItem:p,getContactsFilter:m,getShownContacts:Object(f.a)([p,m],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e)?t:null}))}))},d=n(9),x=n.n(d),v=n(14),g=n(2),k=Object(g.b)("phonebook/delete"),C=Object(g.b)("phonebook/add"),_=Object(g.b)("phonebook/getItems"),y=Object(g.b)("phonebook/submitContactRequest"),N=Object(g.b)("phonebook/submitContactSuccess"),w=Object(g.b)("phonebook/submitContactError"),I=Object(g.b)("phonebook/DeleteItemRequest"),S=Object(g.b)("phonebook/DeleteItemSuccess"),F=Object(g.b)("phonebook/DeleteItemError"),B=Object(g.b)("phonebook/GetItemsRequest"),D=Object(g.b)("phonebook/GetItemsSuccess"),E=Object(g.b)("phonebook/GetItemsError"),q=n(11),P=n.n(q);P.a.defaults.baseURL="http://localhost:3000/";var R,T,G=n(1),L=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",id:"",number:""},t.handleNameChange=function(e){var n=e.currentTarget.value;t.setState({name:n})},t.handleNumberChange=function(e){var n=e.currentTarget.value;t.setState({number:n})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.handleSubmit,c=e.items;return Object(G.jsxs)("form",{className:j.a.form,onSubmit:function(e){e.preventDefault(),n(t.state,c)},children:[Object(G.jsxs)("label",{className:j.a.label,children:["Name",Object(G.jsx)("input",{className:j.a.input,onChange:this.handleNameChange,value:this.state.name,type:"text",required:!0})]}),Object(G.jsxs)("label",{className:j.a.label,children:["Number",Object(G.jsx)("input",{className:j.a.input,onChange:this.handleNumberChange,value:this.state.number,type:"tel",pattern:"[0-9]{7}",placeholder:"533-33-23",minLength:"7",maxLength:"7",required:!0})]}),Object(G.jsx)("button",{className:j.a.submitButton,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),A=Object(h.b)((function(t){return{items:O.getContactItem(t)}}),(function(t){return{handleSubmit:function(e,n){var c;if(!n.find((function(t){return t.name===e.name})))return t((c=e,function(){var t=Object(v.a)(x.a.mark((function t(e){var n,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(y()),t.prev=1,t.next=4,P.a.post("contacts",c);case 4:n=t.sent,a=n.data,e(N()),e(C(a)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e(w());case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()));alert("Card with this name already exists")}}}))(L),J=n(19),V=n(13),z=n.n(V),M=Object(h.b)(null,(function(t,e){return{handleDelete:function(n){return t((c=e.id,function(){var t=Object(v.a)(x.a.mark((function t(e){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(I()),t.prev=1,t.next=4,P.a.delete("contacts/".concat(c));case 4:t.sent.data,e(S()),e(k(c)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),e(F()),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()));var c}}}))((function(t){var e=t.name,n=t.number,c=t.handleDelete;return Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)("li",{children:[Object(G.jsxs)("span",{className:z.a.name,children:[e,": ",n]}),Object(G.jsx)("button",{type:"button",onClick:c,children:"Delete"})]})})})),U=Object(h.b)((function(t){return{visContacts:O.getShownContacts(t)}}),(function(t){return{getItems:function(){return t(function(){var t=Object(v.a)(x.a.mark((function t(e){var n,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(B()),t.prev=1,t.next=4,P.a.get("contacts");case 4:n=t.sent,c=n.data,e(D(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(E());case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}}}))((function(t){var e=t.deleteID,n=t.getItems,a=t.visContacts;return Object(c.useEffect)((function(){n()}),[]),console.log(a),Object(G.jsx)("ul",{className:z.a.list,children:a.map((function(t){return Object(G.jsx)(M,Object(J.a)(Object(J.a)({},t),{},{deleteID:e}),t.id)}))})})),W=n(20),Y=n.n(W),H=Object(g.b)("filter"),K=Object(h.b)(null,(function(t){return{handleFilterInput:function(e){return t(H(e.currentTarget.value))}}}))((function(t){var e=t.handleFilterInput;return Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)("label",{className:Y.a.label,children:["Find contacts by name",Object(G.jsx)("input",{className:Y.a.input,onChange:e,type:"text"})]})})})),Q=(n(67),n(32)),X=n.n(Q),Z=Object(h.b)((function(t){return{loader:t.contacts.loading}}))((function(t){var e=t.loader;return Object(G.jsxs)("div",{className:"container",children:[Object(G.jsx)("h1",{children:"PhoneBook"}),Object(G.jsx)(A,{}),Object(G.jsx)("h2",{children:"Contacts"}),Object(G.jsx)(K,{}),Object(G.jsx)(U,{}),e&&Object(G.jsx)(X.a,{color:"#00BFFF",height:150,width:150,type:"TailSpin",style:{textAlign:"center"}})]})})),$=n(5),tt=Object(g.c)("",{filter:function(t,e){return e.payload}}),et=n(4),nt=n(35),ct=Object(g.c)([],(R={},Object(et.a)(R,C,(function(t,e){var n=e.payload;return[].concat(Object(nt.a)(t),[n])})),Object(et.a)(R,k,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(et.a)(R,D,(function(t,e){return e.payload})),R)),at=Object(g.c)(!1,(T={},Object(et.a)(T,y,(function(){return!0})),Object(et.a)(T,N,(function(){return!1})),Object(et.a)(T,w,(function(){return!1})),Object(et.a)(T,I,(function(){return!0})),Object(et.a)(T,S,(function(){return!1})),Object(et.a)(T,F,(function(){return!1})),Object(et.a)(T,_,(function(){return!0})),Object(et.a)(T,B,(function(){return!0})),Object(et.a)(T,D,(function(){return!1})),Object(et.a)(T,E,(function(){return!1})),T)),rt=n(33),ot=(n.n(rt).a,Object($.c)({items:ct,filter:tt,loading:at})),ut=Object($.c)({contacts:ot}),st=Object(g.a)({reducer:ut});o.a.render(Object(G.jsx)(a.a.StrictMode,{children:Object(G.jsx)(h.a,{store:st,children:Object(G.jsx)(Z,{})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.ca2b25ac.chunk.js.map