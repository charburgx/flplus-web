(this.webpackJsonpflplus=this.webpackJsonpflplus||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},42:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(26),i=n.n(s),r=(n(33),n(12)),l=(n(34),n(35),{html_url:"",name:"Beta",tag_name:"b0.1.0",loading:!0}),o="charburgx/flplus-win",j="https://github.com/"+o,h=j+"/issues",d=j+"/wiki",b=n(10),u=n(0),m=function(e){return Object(u.jsx)("div",Object(b.a)(Object(b.a)({},e),{},{className:"valign-wrapper ".concat(e.className),children:e.children}))},x=function(e){var t=e.href,n=e.pos,c=e.icon,a=e.children;return Object(u.jsxs)("a",{href:t,className:"waves-effect btn dl-btn-".concat(n),children:[c?Object(u.jsx)("i",{className:"material-icons ".concat(n),children:c}):"",a]})},O=n(9),f=function(e){var t=e.href,n=e.children;return"http"===t.substring(0,4)?Object(u.jsx)(a.a.Fragment,{children:a.a.Children.map(n,(function(e){return a.a.isValidElement(e)?a.a.cloneElement(e,{href:t}):e}))}):Object(u.jsx)(O.b,{to:t,children:n})},p=function(e){var t=e.entries;return Object(u.jsx)("div",{className:"links",children:t.map((function(e,t,n){var c=n.length;return Object(u.jsxs)(a.a.Fragment,{children:[Object(u.jsx)(f,{href:e.href,children:Object(u.jsxs)("a",{className:"waves-effect waves-light btn-small btn-clear",children:[e.icon?Object(u.jsx)("i",{className:"material-icons left",children:e.icon}):"",Object(u.jsx)("span",{children:e.text})]})}),c!==t+1?Object(u.jsx)("div",{className:"sep"}):""]})}))})},g=function(e){var t=e.ver;return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)(m,{className:"title-wrapper",children:[Object(u.jsx)("img",{src:"/favicon.svg",alt:"",draggable:"false"}),Object(u.jsx)("span",{className:"title",children:"FL Plus"}),t.loading?"":Object(u.jsx)("span",{className:"version",children:t.tag_name})]}),Object(u.jsx)("span",{className:"subtitle",children:"Boost workflow productivity in FL Studio"}),Object(u.jsx)(x,{href:t.html_url,pos:"left",icon:"download",children:"Download"}),Object(u.jsx)(x,{href:j,pos:"right",icon:"code",children:"Source"}),Object(u.jsx)(p,{entries:[{text:"Documentation",icon:"book",href:d},{text:"FAQ",icon:"help",href:"/faq"},{text:"GitHub",icon:"code",href:j},{text:"Suggestion",icon:"announcement",href:h}]})]})},v=(n(42),[{title:"Quick Create Automation Clip",content:["Simply press CTRL+SHIFT+A to create an automation clip on the most recently tweaked parameter."],image:"/panel_1_3_3.png"},{title:"Rapidly Swap Colors",content:["Simply press X and the desired color to quickly switch between colors while editing in the Piano Roll."],image:"/panel2.png"},{title:"Multiple Custom Workspaces",content:["Say goodbye to wrangling windows."],image:"/panel3.png"},{title:"Automatically Disable Reach Playback",content:["No longer experience Edison randomly jumping to the start of playback."],image:"/panel4_2.png"}]),w=["s6 m6 l4","s6 m6 l8"],y=function(e){var t=e.children;return Object(u.jsx)("div",{className:"col ".concat("s12 m6"," outer"),children:t})},N=function(e){var t=e.children;return Object(u.jsxs)("div",{className:"row inner",children:[Object(u.jsx)("div",{className:"col ".concat(w[0]),children:t&&t.length>0?t[0]:""}),Object(u.jsx)("div",{className:"col ".concat(w[1]),children:t&&t.length>1?t[1]:""})]})},F=function(e){var t=e.i;return Object(u.jsx)(y,{children:Object(u.jsxs)(N,{children:[Object(u.jsx)("img",{src:v[t].image,id:"img".concat(t),alt:"",draggable:"false"}),Object(u.jsxs)("div",{className:"text",children:[Object(u.jsx)("span",{className:"text-header",children:v[t].title}),v[t].content.map((function(e,t,n){var c=n.length;return Object(u.jsxs)(a.a.Fragment,{children:[Object(u.jsx)("span",{children:e}),t+1===c?"":Object(u.jsx)("br",{})]})}))]})]})})},k=function(){return Object(u.jsxs)("div",{className:"main-content container",children:[Object(u.jsx)("div",{className:"row outer",children:[0,1].map((function(e){return Object(u.jsx)(F,{i:e})}))}),Object(u.jsx)("div",{className:"row outer",children:[2,3].map((function(e){return Object(u.jsx)(F,{i:e})}))}),Object(u.jsx)("div",{className:"and-more",children:Object(u.jsx)("span",{className:"text-header",children:"And more!"})})]})},L=function(e){var t=e.ver;return Object(u.jsxs)("div",{className:"main",children:[Object(u.jsx)(g,{ver:t}),Object(u.jsx)(k,{})]})},S=n(28),A=n.n(S),P=n(2),I=(n(61),function(e){var t=e.text;return Object(u.jsx)(c.Fragment,{children:Object(u.jsxs)(m,{className:"nav back",children:[Object(u.jsx)(O.b,{to:"/",children:Object(u.jsxs)("a",{className:"waves-effect waves-light btn-small btn-clear",children:[Object(u.jsx)("i",{className:"material-icons left",children:"arrow_back"}),"Back"]})}),Object(u.jsx)("div",{className:"sep"}),Object(u.jsx)("span",{className:"text-small",style:{marginLeft:"16px"},children:t})]})})}),_=function(e){var t=e.page,n=e.info;return Object(u.jsx)(c.Fragment,{children:Object(u.jsxs)("div",{className:"page-info container",children:[Object(u.jsx)(I,{text:t}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col s12 m7 l6 xl5",children:n.map((function(e){return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("span",{className:"text-header",children:e.title}),e.content.map((function(e,t,n){var a=n.length;return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("span",{className:"text",children:e}),a!==t+1?Object(u.jsx)("br",{}):Object(u.jsx)("div",{className:"block-end"})]})}))]})}))})})]})})},C=[{title:"Is FL Plus available on Mac?",content:["There are currently no plans for FL Plus on Mac, sorry."]},{title:"Is this legal?",content:["Given the recent DMCA on another project auxiliary to FL (which will not be named here), it is worth addressing the legality of our project.",Object(u.jsxs)(c.Fragment,{children:["The following is crucial: ",Object(u.jsx)("b",{children:"FL Plus is in no way a modification of FL Studio's code"}),". Everything one can achieve with FL Plus is doable without FL Plus and without making any changes to the FL Studio executable. ",Object(u.jsx)("b",{children:"FL Plus simply takes functionality that already exists and makes it faster."})]}),"That being said, FL Plus is 100% willing to cooperate with Image-Line on any legal matters."]},{title:"It isn't working!",content:[Object(u.jsxs)(c.Fragment,{children:["Most likely, this is because you have not detached your windows. A guide for this can be found ",Object(u.jsx)("a",{href:d,children:"here"}),"."]}),Object(u.jsxs)(c.Fragment,{children:["If this is not the case, you can always issue a ticket on the ",Object(u.jsx)("a",{href:h,children:"GitHub Issues"})," page. In case you have encountered an error, hopefully someone can fix it soon. Please keep in mind that this is a small project effectively run by one person, so you might not get immediate support."]})]}],E=function(){return Object(u.jsx)(_,{page:"Frequently Asked Questions",info:C})},M=function(){var e=function(){var e=Object(c.useState)(l),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return A.a.get("https://api.github.com/repos/charburgx/flplus-win/releases").then((function(e){if(Array.isArray(e.data)&&!(e.data.length<=0)){var t=e.data[0];a(Object(b.a)(Object(b.a)({},t),{},{loading:!1}))}})).catch((function(e){console.log(e)})),function(){return a(l)}}),[]),[n]}(),t=Object(r.a)(e,1)[0];return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(O.a,{children:Object(u.jsxs)(P.d,{children:[Object(u.jsx)(P.b,{exact:!0,path:"/",children:Object(u.jsx)(L,{ver:t})}),Object(u.jsx)(P.b,{path:"/faq",children:Object(u.jsx)(E,{})}),Object(u.jsx)(P.b,{path:"*",children:Object(u.jsx)(P.a,{to:"/"})})]})})})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.3546f01c.chunk.js.map