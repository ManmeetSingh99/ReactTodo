(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(7),i=c.n(s),r=c(8),d=c(6),j=c(3),l=(c(13),c(0)),o=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(function(){var e=localStorage.getItem("todoListData");return e?JSON.parse(e):[]}()),o=Object(j.a)(i,2),b=o[0],u=o[1],f=Object(a.useState)(""),m=Object(j.a)(f,2),O=m[0],h=m[1],x=Object(a.useState)(!1),v=Object(j.a)(x,2),p=v[0],g=v[1],N=function(){if(c)if(c&&p)u(b.map((function(e){return e.id===O?Object(d.a)(Object(d.a)({},e),{},{name:c}):e}))),h(),s(""),g(!1);else{var e={id:(new Date).getTime().toString(),name:c};u([].concat(Object(r.a)(b),[e])),s("")}else alert("Enter Data!")};return Object(a.useEffect)((function(){localStorage.setItem("todoListData",JSON.stringify(b))}),[b]),Object(l.jsx)(n.a.Fragment,{children:Object(l.jsx)("div",{className:"main-div",children:Object(l.jsxs)("div",{className:"child-div",children:[Object(l.jsxs)("figure",{children:[Object(l.jsx)("img",{src:"./images/todo.svg",alt:"todo"}),Object(l.jsx)("figcaption",{children:"Add Your List Here "})]}),Object(l.jsxs)("div",{className:"addItems",children:[Object(l.jsx)("input",{className:"form-control",type:"text",placeholder:"\u270d\ufe0f Add Items",value:c,onChange:function(e){return s(e.target.value)}}),p?Object(l.jsx)("i",{className:"far fa-edit add-btn",onClick:N}):Object(l.jsx)("i",{className:"fa fa-plus add-btn",onClick:N}),";"]}),Object(l.jsx)("div",{className:"showItems",children:b.map((function(e){return Object(l.jsxs)("div",{className:"eachItem",children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsxs)("div",{className:"todo-btn",children:[Object(l.jsx)("i",{className:"far fa-edit add-btn",onClick:function(){return function(e){var t=b.find((function(t){return t.id===e}));h(e),s(t.name),g(!0)}(e.id)},children:" "}),Object(l.jsx)("i",{className:"far fa-trash-alt add-btn",onClick:function(){return function(e){var t=b.filter((function(t){return t.id!==e}));u(t)}(e.id)}})]})]},e.id)}))}),Object(l.jsx)("div",{className:"showItems",children:Object(l.jsx)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){u([])},children:Object(l.jsx)("span",{children:"CHECK LIST"})})})]})})})},b=function(){return Object(l.jsx)(n.a.Fragment,{children:Object(l.jsx)(o,{})})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.90682964.chunk.js.map