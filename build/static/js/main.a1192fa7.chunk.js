(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var r=t(15),o=t.n(r),a=t(6),c=t(3),i=t(1),u=t(0),s=function(e){var n=e.filteredName,t=e.handleFilterChange;return Object(u.jsxs)("div",{children:["filter shown with:"," ",Object(u.jsx)("input",{value:n,onChange:t})]})},d=function(e){var n=e.handleSubmit,t=e.handleChangeNumber,r=e.handleChangeName,o=e.newName,a=e.newNumber;return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Add a new person to the phonebook"}),"name:"," ",Object(u.jsx)("input",{type:"text",onChange:r,value:o}),Object(u.jsx)("br",{}),"number:"," ",Object(u.jsx)("input",{type:"text",onChange:t,value:a})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})})},l=function(e){var n=e.name,t=e.number,r=e.handleClick;return Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:[n," ",t," ",Object(u.jsx)("button",{onClick:r,children:"delete"})]})})},b=t(4),h=t.n(b),j="/api/persons",m=function(){return h.a.get(j)},f=function(e){return h.a.post(j,e)},O=function(e){return h.a.delete("".concat(j,"/").concat(e))},p=function(e,n){return h.a.put("".concat(j,"/").concat(e),n)},g=function(e){var n=e.message,t=e.error;return null===n?null:t?Object(u.jsx)("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:4,padding:10,marginBottom:10},children:n}):Object(u.jsx)("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:4,padding:10,marginBottom:10},children:n})},v=function(){var e=Object(i.useState)([]),n=Object(c.a)(e,2),t=n[0],r=n[1],o=Object(i.useState)(""),b=Object(c.a)(o,2),h=b[0],j=b[1],v=Object(i.useState)(""),x=Object(c.a)(v,2),w=x[0],k=x[1],y=Object(i.useState)(""),C=Object(c.a)(y,2),S=C[0],N=C[1],T=Object(i.useState)(null),B=Object(c.a)(T,2),D=B[0],z=B[1],E=Object(i.useState)(null),F=Object(c.a)(E,2),J=F[0],L=F[1];Object(i.useEffect)((function(){m().then((function(e){r(e.data)}))}),[]);var P=t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(g,{message:J,error:!1}),Object(u.jsx)(g,{message:D,error:!0}),Object(u.jsx)(s,{filteredName:S,handleFilterChange:function(e){N(e.target.value)}}),Object(u.jsx)(d,{handleSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name===h}));if(n)if(n.number!==w){if(window.confirm("Do you wish to replace ".concat(h,"'s phone number?"))){var o=Object(a.a)(Object(a.a)({},n),{},{number:w});p(o.id,o).then((function(e){var n=t.map((function(n){return o.id!==n.id?n:e.data}));r(n),L("".concat(o.name,"'s number was updated")),setTimeout((function(){L(null)}),5e3),j(""),k("")})).catch((function(e){console.log(e.response.data),z(e.response.data.error),setTimeout((function(){z(null)}),5e3)}))}}else window.alert("".concat(h," is already registered in the phonebook with this phone number")),j(""),k("");else f({name:h,number:w}).then((function(e){r(t.concat(e.data)),L("".concat(h," was added to the phonebook")),setTimeout((function(){L(null)}),5e3),j(""),k("")})).catch((function(e){z(e.response.data.error),setTimeout((function(){z(null)}),5e3)}))},handleChangeName:function(e){j(e.target.value)},handleChangeNumber:function(e){k(e.target.value)},newName:h,newNUmber:w}),P.map((function(e){return Object(u.jsx)(l,{name:e.name,number:e.number,handleClick:function(){return n=e.id,void(window.confirm("Do you really want to delete this person?")&&O(n).then((function(e){var o=t.filter((function(e){return e.id!==n}));r(o),L("Person was deleted from the phonebook"),setTimeout((function(){L(null)}),5e3)})).catch((function(e){L(e.response.data.error),setTimeout((function(){L(null)}),5e3)})));var n}},e.id)}))]})};o.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a1192fa7.chunk.js.map