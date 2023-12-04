(this["webpackJsonptalk-to-me-frontend"]=this["webpackJsonptalk-to-me-frontend"]||[]).push([[0],{150:function(e,t){},154:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(27),s=n.n(o),c=(n(93),n(172)),r=n(76),l=n(23),d=n(6),p=(n(96),n(7)),f=n(2),m="#ffa740",u="#f74a61",h=Object(c.a)((function(e){var t,n;return{content:Object(p.a)({"padding-top":"80px",display:"flex","flex-direction":"column","align-items":"center","font-weight":"bold","font-size":"24pt"},e.breakpoints.down("xs"),{"padding-top":"30px",padding:"20px"}),welcomeTitle:(t={width:"100%","min-width":"500px","text-align":"center","font-size":"72pt",color:m},Object(p.a)(t,e.breakpoints.down("sm"),{"font-size":"36pt"}),Object(p.a)(t,e.breakpoints.down("xs"),{"font-size":"24pt"}),t),welcomeTitleWithAnimation:(n={width:"100%","min-width":"500px","text-align":"center","font-size":"72pt",color:m,animation:"$fadeInTitle ease 2000ms","animation-delay":"500ms","animation-fill-mode":"both"},Object(p.a)(n,e.breakpoints.down("sm"),{"font-size":"36pt"}),Object(p.a)(n,e.breakpoints.down("xs"),{"font-size":"24pt"}),n),"@keyframes fadeInTitle":{"0%":{opacity:0,transform:"translateY(-70%)"},"100%":{opacity:1,transform:"translateY(0%)"}},mainBlurb:{width:"800px","padding-top":"40px",color:u,"font-size":"32pt","text-align":"center"},mainBlurbWithAnimation:{width:"800px","padding-top":"40px",color:u,"font-size":"32pt","text-align":"center",animation:"$fadeInMainBlurb ease 2000ms","animation-delay":"1500ms","animation-fill-mode":"both"},"@keyframes fadeInMainBlurb":{"0%":{opacity:0,transform:"translateY(-40%)"},"100%":{opacity:1,transform:"translateY(0%)"}},qAndASection:{"padding-top":"40px","padding-bottom":"80px","max-width":"90vw","font-size":"24pt"},qAndASectionWithAnimation:{"padding-top":"40px","padding-bottom":"80px","max-width":"90vw","font-size":"24pt",animation:"$fadeInQAndA ease 2000ms","animation-delay":"2000ms","animation-fill-mode":"both"},"@keyframes fadeInQAndA":{"0%":{opacity:0,transform:"translateY(-10%)"},"100%":{opacity:1,transform:"translateY(0%)"}},oneQAndA:{display:"flex","min-height":"100px"},lastQAndA:{display:"flex"},question:{padding:"10px","padding-right":"20px","border-right":"2px solid "+m,flex:"2",color:m,"text-align":"end"},answer:{padding:"10px","padding-left":"20px",flex:"3",color:u}}}));var x=function(e){var t=h();return Object(a.useEffect)((function(){e.firstLanding.current&&(e.firstLanding.current=!1)}),[]),Object(f.jsxs)("div",{className:t.content,children:[Object(f.jsx)("div",{className:e.firstLanding.current?t.welcomeTitleWithAnimation:t.welcomeTitle,children:"Welcome to Talk To Me"}),Object(f.jsx)("div",{className:e.firstLanding.current?t.mainBlurbWithAnimation:t.mainBlurb,children:"Your daily dose of wholesome social interaction."}),Object(f.jsxs)("div",{className:e.firstLanding.current?t.qAndASectionWithAnimation:t.qAndASection,children:[Object(f.jsxs)("div",{className:t.oneQAndA,children:[Object(f.jsx)("div",{className:t.question,children:"What is Talk To Me?"}),Object(f.jsx)("div",{className:t.answer,children:"Talk To Me is an anonymous peer-to-peer text chat service."})]}),Object(f.jsxs)("div",{className:t.oneQAndA,children:[Object(f.jsx)("div",{className:t.question,children:"What is the purpose of Talk To Me?"}),Object(f.jsx)("div",{className:t.answer,children:"Talk To Me was created as a place for people to come to, to just talk to someone else. During the COVID-19 pandemic, many people experienced feelings of isolation that be could have been helped if they had someone to talk to. Talk To Me was created to provide that."})]}),Object(f.jsxs)("div",{className:t.lastQAndA,children:[Object(f.jsx)("div",{className:t.question,children:"How does it work?"}),Object(f.jsx)("div",{className:t.answer,children:"Click the button in the top right to be placed in the matchmaking queue. When a chat partner has been found, you will be placed into a chatroom with said person. Please be nice!"})]})]})]})},b=n(18),g=n(175),j=n(177),O=n(79),w=n.n(O),v=n(173),k=n(34),y=n.n(k),T=n(176),N=Object(c.a)((function(e){var t;return{"@keyframes fadeIn":{"0%":{opacity:0,transform:"translateY(-100%)"},"50%":{opacity:0,transform:"translateY(-100%)"},"100%":{opacity:1,transform:"translateY(0%)"}},root:Object(p.a)({position:"relative",top:"-105px","flex-grow":"2",margin:"auto",display:"flex",animation:"$fadeIn ease 3000ms"},e.breakpoints.down("xs"),{"flex-direction":"column",width:"100%"}),backButton:{"margin-top":"10px","margin-right":"20px",height:"40px",width:"40px",color:"#f74a61"},backIcon:{height:"40px",width:"40px"},chatWindow:(t={width:"100%",background:"#FEFEFE",color:"#333","border-radius":"5px","font-weight":"bold","font-size":"32pt",display:"flex","flex-direction":"column","flex-grow":"1"},Object(p.a)(t,e.breakpoints.up("sm"),{width:"600px"}),Object(p.a)(t,e.breakpoints.down("xs"),{top:"-80px"}),t),messages:{flex:"1 1 auto",display:"flex","flex-direction":"column","font-size":"14pt",padding:"10px",overflow:"scroll",height:"100%","max-height":"100%"},myMessage:{margin:"4px",background:"#f74a61",display:"inline-flex","align-self":"flex-end",color:"white",padding:"12px","border-radius":"10px","max-width":"100%"},theirMessage:{margin:"4px",background:"#EEE",display:"inline-flex","align-self":"flex-start",color:"black",padding:"12px","border-radius":"10px","max-width":"100%"},disconnectMessage:{display:"inline-flex","align-self":"center",color:"#888",padding:"10px"},typingStatus:{"font-size":"14pt",padding:"5px",color:"#888"},inputBox:{padding:"5px"}}}));var A=function(e){var t=N();console.log(e);var n=e.messages,i=e.socket,o=Object(a.useState)(!1),s=Object(b.a)(o,2),c=s[0],r=s[1],d=Object(a.useState)(!1),p=Object(b.a)(d,2),m=p[0],u=p[1];Object(a.useEffect)((function(){i.on("user_disconnected",(function(){r(!0)})),i.on("partner_starts_typing",(function(){u(!0)})),i.on("partner_stops_typing",(function(){u(!1)}))})),Object(a.useEffect)((function(){return function(){i.disconnect()}}),[i]);var h=function(t){var n={user_id:e.user_id,secret:e.secret,typing:t};y.a.post(e.api_url+"/typing",n)},x=null;return Object(f.jsxs)("div",{className:t.root,children:[Object(f.jsx)(v.a,{className:t.backButton,component:l.b,onClick:function(){return e.socket.disconnect()},to:"/",children:Object(f.jsx)(w.a,{className:t.backIcon})}),Object(f.jsxs)(g.a,{className:t.chatWindow,children:[Object(f.jsxs)("div",{className:t.messages,children:[n.map((function(e){return Object(f.jsx)("div",{className:e.incoming?t.theirMessage:t.myMessage,children:e.content},e.id)})),c?Object(f.jsx)("div",{className:t.disconnectMessage,children:"Partner has disconnected"}):Object(f.jsx)(f.Fragment,{})]}),Object(f.jsx)("div",{className:t.typingStatus,hidden:!m,children:"Partner is typing..."}),Object(f.jsx)(j.a,{className:t.inputBox,placeholder:"Send a message!",variant:"outlined",onKeyDown:function(t){"Enter"===t.key?(console.log(t.target.value),function(t){var a={message_id:Object(T.a)(),user_id:e.user_id,secret:e.secret,content:t};console.log(a),e.setMessages(n.concat([a])),y.a.post(e.api_url+"/messages",a)}(t.target.value),h(!1),t.target.value=""):(null!=x?clearTimeout(x):h(!0),x=setTimeout((function(){h(!1),x=null}),2500))}})]})]})},M=n(80),z=n.n(M),_=Object(c.a)((function(e){return{root:{margin:"20px",color:"white","font-weight":"bold","font-size":"32pt",display:"flex","flex-direction":"column",height:"calc(100vh - 130px)"},title:{color:"#ffa740",width:"900px"},waitMessage:Object(p.a)({"padding-top":"45px",color:"#ffa740","text-align":"center","font-size":"32pt"},e.breakpoints.down("xs"),{"font-size":"20pt"})}})),S="https://api.talk-to-me.co";var B=function(){var e=_(),t=Object(a.useState)("in"),n=Object(b.a)(t,2),i=n[0],o=n[1],s=Object(a.useState)(null),c=Object(b.a)(s,2),r=c[0],l=c[1],d=Object(a.useState)(null),p=Object(b.a)(d,2),m=p[0],u=p[1],h=Object(a.useState)([]),x=Object(b.a)(h,2),g=x[0],j=x[1],O=Object(a.useState)(null),w=Object(b.a)(O,2),v=w[0],k=w[1];return Object(a.useEffect)((function(){y.a.post(S+"/queue").then((function(e){k(z.a.connect(S,{origins:"http://localhost:8000",transports:["websocket"]})),l(e.data.data.id),u(e.data.data.secret),console.log(e.data.data.id,e.data.data.secret)}))}),[]),Object(a.useEffect)((function(){v&&m&&r&&(v.on("connect",(function(){v.emit("register_sid",m)})),v.on("queue_complete",(function(){console.log("queue complete"),v.emit("join_room",m),o("out")})),v.on("send_message_to_client",(function(e){j(g.concat([e]))})))}),[m,r,v,g]),Object(a.useEffect)((function(){console.log("rerendering with following messages:",g)}),[g]),Object(f.jsxs)("div",{className:e.root,children:["out"===i?Object(f.jsx)("div",{className:e.waitMessage,children:"Match found!"}):Object(f.jsx)("div",{className:e.waitMessage,children:"Finding the perfect match..."}),"out"===i?Object(f.jsx)(A,{messages:g,setMessages:j,user_id:r,secret:m,api_url:S,socket:v}):Object(f.jsx)("div",{})]})},I=n(174),E=Object(c.a)((function(e){return{root:{width:"100%",height:"70px",background:"radial-gradient(circle, rgba(254,131,67,1) 0%, rgba(248,74,98,1) 100%)","border-radius":"2px",color:"white","padding-top":"10px","padding-bottom":"10px",display:"flex","justify-content":"space-between"},title:{"margin-left":"20px",textTransform:"none",color:"white","font-weight":"900","font-size":"24pt"},menuButton:{"margin-left":"10px",display:"none"},menuIcon:{color:"white",height:"30px",width:"30px"},chatButton:{"font-family":"Roboto","margin-top":"14px","margin-right":"15px","border-radius":"30px",background:"rgba(254,131,67,1)",color:"white","font-size":"12pt","font-weight":"600",height:"40px",width:"120px","&:hover":{background:"rgba(254,131,67,1)"},textTransform:"none"}}}));var q=function(){var e=E();return Object(f.jsxs)("div",{className:e.root,children:[Object(f.jsx)(I.a,{className:e.title,component:l.b,to:"/",children:"Talk To Me"}),Object(f.jsx)(d.a,{path:"\\/([^c][^h][^a][^t].*|.{0,3})",children:Object(f.jsx)(I.a,{variant:"contained",className:e.chatButton,component:l.b,to:"/chat",children:"Let's Talk"})})]})},W=Object(c.a)((function(e){return{root:{"font-family":"Roboto",height:"100%"},menuIcon:{"font-size":"30pt","margin-top":"14px","margin-left":"10px",color:"white"},title:{textTransform:"none","padding-top":"5px",color:"white","font-weight":"900","font-size":"40pt"}}}));var Y=function(){var e=W(),t=Object(a.useRef)(!0);return Object(f.jsxs)("div",{className:e.root,children:[Object(f.jsx)(r.a,{children:Object(f.jsx)("title",{children:"Talk To Me"})}),Object(f.jsxs)(l.a,{children:[Object(f.jsx)(q,{}),Object(f.jsx)(d.a,{exact:!0,path:"/",children:Object(f.jsx)(x,{firstLanding:t})}),Object(f.jsx)(d.a,{path:"/chat",children:Object(f.jsx)(B,{})})]})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,180)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),o(e),s(e)}))};s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(Y,{})}),document.getElementById("root")),F()},93:function(e,t,n){},96:function(e,t,n){}},[[154,1,2]]]);
//# sourceMappingURL=main.1b4a8b49.chunk.js.map