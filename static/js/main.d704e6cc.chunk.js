(this.webpackJsonpfullcalendar_demo=this.webpackJsonpfullcalendar_demo||[]).push([[0],{88:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(6),s=a.n(n),c=a(0),o=a(59),l=a(100),i=a(101),d=a(98),r=a(97),j=a(15),m=a.n(j),b=(a(86),a(87),a(88),a(67)),h=a.n(b),p=a(10);m.a.locale("zh-cn",{week:{dow:0}});const x=Object(o.b)(m.a);function O(){const[e,t]=Object(c.useState)([]),[a,n]=Object(c.useState)("month"),[s,j]=Object(c.useState)(m()().toDate());return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(o.a,{defaultView:a,selectable:!0,localizer:x,date:s,events:e,style:{height:"100vh"},onSelectEvent:e=>alert(JSON.stringify(e)),onSelectSlot:n=>{let{start:s,end:c}=n;"month"===a&&(c=m()(Date.parse(c)).endOf("day").toDate());const o=window.prompt("New Event name start:".concat(m()(Date.parse(s)).format("YYYY-MM-DD HH:mm:ss"),", end:").concat(m()(Date.parse(c)).format("YYYY-MM-DD HH:mm:ss")));o&&t([...e,{start:s,end:c,title:o}])},components:{toolbar:e=>{let{onView:t}=e;const c={day:"\u65e5",week:"\u5468",month:"\u6708"},o=m()(Date.parse(s));return Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",margin:"16px 0"},children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(p.jsx)(d.a,{style:{borderRadius:8,border:"1px solid rgba(217, 217, 217, 1)",marginRight:24,width:64,height:40},onClick:()=>j(m()().toDate()),children:"\u4eca\u5929"}),Object(p.jsx)(d.a,{className:"date-pre",icon:Object(p.jsx)(l.a,{}),onClick:()=>{let e=Date.parse(s);"week"===a&&j(m()(e).clone().subtract(7,"d").toDate()),"day"===a&&j(m()(e).clone().subtract(1,"day").toDate()),"month"===a&&j(m()(e).clone().subtract(1,"M").toDate())}}),Object(p.jsx)(d.a,{className:"date-next",icon:Object(p.jsx)(i.a,{}),onClick:()=>{let e=Date.parse(s);"week"===a&&j(m()(e).clone().add(7,"d").toDate()),"day"===a&&j(m()(e).clone().add(1,"day").toDate()),"month"===a&&j(m()(e).clone().add(1,"M").toDate())}}),Object(p.jsx)("span",{className:"date-show",children:"day"===a?o.format("YYYY\u5e74MM\u6708DD\u65e5"):o.format("YYYY\u5e74  MM\u6708")})]}),Object(p.jsx)("div",{className:"d-flex date-group",children:h.a.map(Object.keys(c),(e=>Object(p.jsx)("div",{className:"date-group-item d-flex justify-content-center align-items-center ".concat(a===e?"active-item":""),onClick:()=>{n(e),t(e)},children:c[e]},e)))})]})},event:e=>Object(p.jsxs)("div",{className:"",style:{display:"flex",flexDirection:"row",alignContent:"center",alignItems:"center"},children:["month"===a&&Object(p.jsx)("div",{className:"item-left"}),"month"!==a&&Object(p.jsx)("div",{className:"item-nonMonth",style:{height:"100%",position:"absolute",top:0,left:0}}),Object(p.jsx)(r.a,{title:e.title,children:Object(p.jsx)("div",{style:{marginLeft:"month"!==a?10:0},children:e.title})})]})}})})}const f=document.getElementById("root");s.a.render(Object(p.jsx)(O,{}),f)}},[[91,1,2]]]);
//# sourceMappingURL=main.d704e6cc.chunk.js.map