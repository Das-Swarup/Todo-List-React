(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(18),o=a.n(s),l=(a(25),a(11)),r=a(20),i=(a(26),a(8)),d=a(0);function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(i.b,{className:"navbar-brand",to:"/Home",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/Home",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link",to:"about",children:"About"})})]}),e.searchBar?Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})}b.defaultProps={title:"Your Title Here",searchBar:!1};var j=function(e){var t=e.todo,a=e.onDelete;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{className:"",children:t.title}),Object(d.jsx)("p",{children:t.desc}),Object(d.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){a(t)},children:"Delete"})]}),Object(d.jsx)("hr",{})]})},m=function(e){return Object(d.jsxs)("div",{className:"container my-3",style:{minHeight:"70vh",background:"#FFFABF"},children:[Object(d.jsx)("h3",{className:" my-3",children:"Todos List"}),0===e.todos.length?Object(d.jsx)("h5",{className:"text-center my-5",children:" No Todos to display"}):e.todos.map((function(t){return Object(d.jsx)(j,{todo:t,onDelete:e.onDelete},t.sno)}))]})};function u(){return Object(d.jsx)("footer",{className:"bg-dark text-light py-3 ",style:{position:"relative",top:"100px"},children:Object(d.jsx)("p",{className:"text-center",children:"Copyright \xa9 Swarup Das"})})}var h=function(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],s=a[1],o=Object(c.useState)(""),r=Object(l.a)(o,2),i=r[0],b=r[1];return Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h3",{className:"text-center",children:"Add a Todo"}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n&&i?(e.addTodo(n,i),s(""),b("")):alert("Title or Description cannot be blank")},children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(d.jsx)("input",{type:"text",value:n,onChange:function(e){s(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(d.jsx)("input",{type:"text",value:i,onChange:function(e){b(e.target.value)},className:"form-control",id:"desc"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Add Todo"})]})]})},x=function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"text-center",children:"About the project"}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"This is a To-do list application made with React.JS and is my very first React project. Just Getting started and made a really simple one. All copyrights own by Swarup Das."})]})},O=a(2);var p=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("I am ondelete of todo",e),j(o.filter((function(t){return t!==e}))),localStorage.getItem("todos",JSON.stringify(o))},a=function(e,t){console.log("I am Addding this todo",e,t);var a={sno:0===o.length?1:o[o.length-1].sno+1,title:e,desc:t};j([].concat(Object(r.a)(o),[a])),console.log(a)},n=Object(c.useState)(e),s=Object(l.a)(n,2),o=s[0],j=s[1];return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(d.jsxs)(i.a,{children:[Object(d.jsx)(b,{title:"Your Todos List",searchBar:!1}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{exact:!0,path:"/Home",render:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{addTodo:a}),Object(d.jsx)(m,{todos:o,onDelete:t})]})}}),Object(d.jsx)(O.a,{exact:!0,path:"/about",children:Object(d.jsx)(x,{})})]}),Object(d.jsx)(u,{})]})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.e59ed318.chunk.js.map