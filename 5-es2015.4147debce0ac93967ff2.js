(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{G6fN:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class e{}var o=t("pMnS"),i=t("SVse");class r{constructor(l,n){this.service=l,this.router=n,this.loginSuccessful=!1}ngOnInit(){this.service.isAuthed()&&(this.loginSuccessful=this.service.isAuthed(),console.log("Login successful?: ",this.loginSuccessful))}attemptLogin(l){""!==l&&this.service.doAdminAuth(l).subscribe(l=>{this.loginSuccessful=this.service.isAuthed(),console.log("Login successful?: ",this.loginSuccessful)})}goToReports(){this.router.navigate(["/admin/reports"])}goToBans(){this.router.navigate(["/admin/bans/"])}}var s=t("LRne"),c=t("AytR"),a=t("JIr8"),b=t("lJxs"),p=(t("5+tZ"),t("Cfvw"),t("IheW"));const d=c.a.apiUrl+"/admin",g=new class{constructor(l=null){this.tokenGetter=l&&l.tokenGetter||function(){}}urlBase64Decode(l){let n=l.replace(/-/g,"+").replace(/_/g,"/");switch(n.length%4){case 0:break;case 2:n+="==";break;case 3:n+="=";break;default:throw new Error("Illegal base64url string!")}return this.b64DecodeUnicode(n)}b64decode(l){let n="";if((l=String(l).replace(/=+$/,"")).length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(let t,u,e=0,o=0;u=l.charAt(o++);~u&&(t=e%4?64*t+u:u,e++%4)?n+=String.fromCharCode(255&t>>(-2*e&6)):0)u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(u);return n}b64DecodeUnicode(l){return decodeURIComponent(Array.prototype.map.call(this.b64decode(l),l=>"%"+("00"+l.charCodeAt(0).toString(16)).slice(-2)).join(""))}decodeToken(l=this.tokenGetter()){if(!l||""===l)return null;const n=l.split(".");if(3!==n.length)throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");const t=this.urlBase64Decode(n[1]);if(!t)throw new Error("Cannot decode the token.");return JSON.parse(t)}getTokenExpirationDate(l=this.tokenGetter()){let n;if(n=this.decodeToken(l),!n||!n.hasOwnProperty("exp"))return null;const t=new Date(0);return t.setUTCSeconds(n.exp),t}isTokenExpired(l=this.tokenGetter(),n){if(!l||""===l)return!0;const t=this.getTokenExpirationDate(l);return n=n||0,null!==t&&!(t.valueOf()>(new Date).valueOf()+1e3*n)}getAuthScheme(l,n){return"function"==typeof l?l(n):l}};let h=(()=>{class l{constructor(l){this.http=l}doAdminAuth(l){return this.http.post(d+"/auth",{password:l}).pipe(Object(a.a)(l=>this.defaultErrorHandler(l))).pipe(Object(b.a)(l=>(l.success&&this.setAdminToken(l.data.authorization),l)))}getReports(){return this.http.get(d+"/reports",this.defaultAuthOptions()).pipe(Object(a.a)(l=>this.defaultErrorHandler(l)))}getReportedMessages(l){return this.http.get(`${d}/reports/${l}/messages`,this.defaultAuthOptions()).pipe(Object(a.a)(l=>this.defaultErrorHandler(l)))}banUser(l,n){return this.http.post(d+"/banuser",{report_id:l,reason:n},this.defaultAuthOptions()).pipe(Object(a.a)(l=>this.defaultErrorHandler(l)))}getBans(){return this.http.get(d+"/bannedusers",this.defaultAuthOptions()).pipe(Object(a.a)(l=>this.defaultErrorHandler(l)))}unbanUser(l){return this.http.post(d+"/unbanuser",{ip:l},this.defaultAuthOptions()).pipe(Object(a.a)(l=>this.defaultErrorHandler(l)))}isAuthed(){const l=this.getAdminToken();try{return null!==l&&!g.isTokenExpired(l)}catch(n){return this.clearAdminToken(),!1}}defaultErrorHandler(l){return console.error(l),403===l.status&&this.clearAdminToken(),Object(s.a)(Object.assign({},l.error,{status:l.status}))}defaultAuthOptions(l){return Object.assign({headers:{Authorization:this.getAdminToken()}},l)}setAdminToken(l){try{localStorage.setItem("admin-token",l)}catch(n){}}getAdminToken(){try{return localStorage.getItem("admin-token")}catch(l){return null}}clearAdminToken(){localStorage.removeItem("admin-token")}}return l.ngInjectableDef=u.Db({factory:function(){return new l(u.Eb(p.c))},token:l,providedIn:"root"}),l})();var m=t("iInd"),x=u.kb({encapsulation:0,styles:[["input[_ngcontent-%COMP%]{border:1px solid;border-radius:10px;padding-left:10px;width:100%;height:25px;background-color:#888}[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#222}[_ngcontent-%COMP%]::-moz-placeholder{color:#222}[_ngcontent-%COMP%]::-ms-input-placeholder{color:#222}[_ngcontent-%COMP%]::placeholder{color:#222}.input_wrapper[_ngcontent-%COMP%]{width:min(100%,450px)}.inputBox[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-family:Arial,Helvetica,sans-serif}.input_button[_ngcontent-%COMP%]{border:1px solid #000;border-radius:10px;height:27px;width:50px;line-height:27px;font-size:14px;text-align:center;background-color:#888;cursor:pointer}.input_button[_ngcontent-%COMP%]:hover{background-color:#777}.admin_buttons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.buttons[_ngcontent-%COMP%]{list-style-type:none;margin-top:15px;padding:0}.admin_button[_ngcontent-%COMP%]{display:block;text-align:center;padding:30px 100px;text-decoration:none;margin-top:20px;margin-bottom:10px;background-color:#999;border-radius:4px;border:1px solid;max-width:400px;font-family:Arial,Helvetica,sans-serif;font-size:15px;box-shadow:2px 2px #222;cursor:pointer}.admin_button[_ngcontent-%COMP%]:visited{color:#000}.admin_button[_ngcontent-%COMP%]:hover{background-color:#777}ul[_ngcontent-%COMP%]{list-style-type:none}"]],data:{}});function f(l){return u.zb(0,[(l()(),u.mb(0,0,null,null,8,"div",[["class","admin_main"]],null,null,null,null,null)),(l()(),u.mb(1,0,null,null,7,"div",[["class","admin_buttons"]],null,null,null,null,null)),(l()(),u.mb(2,0,null,null,6,"ul",[["class","buttons"]],null,null,null,null,null)),(l()(),u.mb(3,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),u.mb(4,0,null,null,1,"a",[["class","admin_button"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.goToReports()&&u),u}),null,null)),(l()(),u.yb(-1,null,["View reports"])),(l()(),u.mb(6,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),u.mb(7,0,null,null,1,"a",[["class","admin_button"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.goToBans()&&u),u}),null,null)),(l()(),u.yb(-1,null,["View bans"]))],null,null)}function v(l){return u.zb(0,[(l()(),u.mb(0,0,null,null,4,"div",[["class","input_wrapper"]],null,null,null,null,null)),(l()(),u.mb(1,0,null,null,3,"div",[["class","inputBox"]],null,null,null,null,null)),(l()(),u.mb(2,0,[["passBox",1]],null,0,"input",[["placeholder","Enter password"]],null,[[null,"keydown.enter"]],(function(l,n,t){var e=!0;return"keydown.enter"===n&&(l.component.attemptLogin(u.wb(l,2).value),e=!1!==(u.wb(l,2).value="")&&e),e}),null,null)),(l()(),u.mb(3,0,null,null,1,"a",[["class","input_button"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(l.component.attemptLogin(u.wb(l,2).value),e=!1!==(u.wb(l,2).value="")&&e),e}),null,null)),(l()(),u.yb(-1,null,["Login"]))],null,null)}function k(l){return u.zb(0,[(l()(),u.mb(0,0,null,null,5,"div",[],null,null,null,null,null)),u.lb(1,16384,null,0,i.k,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),u.bb(16777216,null,null,1,null,f)),u.lb(3,278528,null,0,i.l,[u.K,u.H,i.k],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),u.bb(16777216,null,null,1,null,v)),u.lb(5,278528,null,0,i.l,[u.K,u.H,i.k],{ngSwitchCase:[0,"ngSwitchCase"]},null)],(function(l,n){l(n,1,0,n.component.loginSuccessful),l(n,3,0,!0),l(n,5,0,!1)}),null)}function w(l){return u.zb(0,[(l()(),u.mb(0,0,null,null,1,"ttm-admin",[],null,null,null,k,x)),u.lb(1,114688,null,0,r,[h,m.k],null,null)],(function(l,n){l(n,1,0)}),null)}var _=u.ib("ttm-admin",r,w,{},{},[]);class O{constructor(l,n){this.service=l,this.router=n,this.showingReportedMessages=!1,this.userBanned=!1}ngOnInit(){this.service.isAuthed()?(console.log("viewing reports"),this.service.getReports().subscribe(l=>{l.success&&(this.reportsList=l.data)})):this.router.navigate(["/admin"])}viewReportedMessages(l){this.service.isAuthed()?this.showingReportedMessages?this.showingReportedMessages=!1:(console.log("viewing reported messages"),this.service.getReportedMessages(l).subscribe(l=>{l.success&&(this.reportedMessagesList=l.data,0===this.reportedMessagesList.length?(this.showingReportedMessages=!1,console.log("No messages to show")):this.showingReportedMessages=!0)})):this.router.navigate(["/admin"])}banUser(l,n){this.service.isAuthed()?""!==n&&this.service.banUser(l,n).subscribe(l=>{console.log(l),this.userBanned=!0}):this.router.navigate(["/admin"])}goToAdmin(){this.router.navigate(["/admin"])}}var y=u.kb({encapsulation:0,styles:[[".report_content[_ngcontent-%COMP%]{width:min(100%,450px);background-color:#999;border-radius:4px;border:1px solid;box-shadow:2px 2px #222}.reported_message_content[_ngcontent-%COMP%]{width:min(100%,450px);background-color:#999;border-radius:4px;border:1px solid;box-shadow:2px 2px #222;margin-bottom:10px}input[_ngcontent-%COMP%]{border:1px solid;border-radius:10px;padding-left:10px;width:100%;height:25px;background-color:#888}[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#222}[_ngcontent-%COMP%]::-moz-placeholder{color:#222}[_ngcontent-%COMP%]::-ms-input-placeholder{color:#222}[_ngcontent-%COMP%]::placeholder{color:#222}.input_wrapper[_ngcontent-%COMP%]{width:min(100%,450px)}.inputBox[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-family:Arial,Helvetica,sans-serif}.input_button[_ngcontent-%COMP%]{border:1px solid #000;border-radius:10px;height:27px;width:55px;line-height:27px;font-size:14px;text-align:center;background-color:#888;cursor:pointer}.input_button[_ngcontent-%COMP%]:hover{background-color:#777}ul[_ngcontent-%COMP%]{list-style-type:none}li[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{display:block;text-align:center;text-decoration:none;background-color:#999;border-radius:4px;border:1px solid;font-family:Arial,Helvetica,sans-serif;font-size:15px;box-shadow:2px 2px #222;max-width:200px;margin-bottom:10px;cursor:pointer}li[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:visited{color:#000}li[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:hover{background-color:#777}"]],data:{}});function C(l){return u.zb(0,[(l()(),u.mb(0,0,null,null,9,"div",[["class","reported_message_content"]],null,null,null,null,null)),(l()(),u.mb(1,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.mb(2,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),u.yb(3,null,["Author:     ",""])),(l()(),u.mb(4,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.mb(5,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),u.yb(6,null,['Content:    "','"'])),(l()(),u.mb(7,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.mb(8,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),u.yb(9,null,["Timestamp:  (",")"]))],null,(function(l,n){l(n,3,0,n.parent.context.$implicit.author),l(n,6,0,n.parent.context.$implicit.content),l(n,9,0,n.parent.context.$implicit.timestamp)}))}function M(l){return u.zb(0,[(l()(),u.mb(0,0,null,null,3,"li",[],null,null,null,null,null)),u.lb(1,16384,null,0,i.k,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),u.bb(16777216,null,null,1,null,C)),u.lb(3,278528,null,0,i.l,[u.K,u.H,i.k],{ngSwitchCase:[0,"ngSwitchCase"]},null)],(function(l,n){l(n,1,0,n.context.$implicit.room_id),l(n,3,0,n.parent.parent.context.$implicit.room_id)}),null)}function P(l){return u.zb(0,[(l()(),u.mb(0,0,null,null,5,"div",[["class","reported_messages"]],null,null,null,null,null)),(l()(),u.mb(1,0,null,null,4,"ul",[],null,null,null,null,null)),(l()(),u.mb(2,0,null,null,1,"div",[["class","messages_status"]],null,null,null,null,null)),(l()(),u.yb(3,null,["",""])),(l()(),u.bb(16777216,null,null,1,null,M)),u.lb(5,278528,null,0,i.h,[u.K,u.H,u.p],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,5,0,n.component.reportedMessagesList)}),(function(l,n){l(n,3,0,n.component.messagesStatus)}))}function A(l){return u.zb(0,[(l()(),u.mb(0,0,null,null,29,"li",[],null,null,null,null,null)),u.lb(1,16384,null,0,i.k,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),u.mb(2,0,null,null,18,"div",[["class","report_content"]],null,null,null,null,null)),(l()(),u.mb(3,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.mb(4,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),u.yb(5,null,["Reporter:        ",""])),(l()(),u.mb(6,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.mb(7,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),u.yb(8,null,["Reporter IP:     ",""])),(l()(),u.mb(9,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.mb(10,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),u.yb(11,null,["Reported:        ",""])),(l()(),u.mb(12,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.mb(13,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),u.yb(14,null,["Reported IP:     ",""])),(l()(),u.mb(15,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.mb(16,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),u.yb(17,null,["Report reason:   ",""])),(l()(),u.mb(18,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.mb(19,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),u.yb(20,null,["Report room id:  ",""])),(l()(),u.mb(21,0,null,null,4,"div",[["class","input_wrapper"]],null,null,null,null,null)),(l()(),u.mb(22,0,null,null,3,"div",[["class","inputBox"]],null,null,null,null,null)),(l()(),u.mb(23,0,[["banBox",1]],null,0,"input",[["placeholder","Ban reason"]],null,[[null,"keydown.enter"]],(function(l,n,t){var e=!0;return"keydown.enter"===n&&(l.component.banUser(l.context.$implicit._id,u.wb(l,23).value),e=!1!==(u.wb(l,23).value="")&&e),e}),null,null)),(l()(),u.mb(24,0,null,null,1,"a",[["class","input_button"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(l.component.banUser(l.context.$implicit._id,u.wb(l,23).value),e=!1!==(u.wb(l,23).value="")&&e),e}),null,null)),(l()(),u.yb(-1,null,["Ban"])),(l()(),u.mb(26,0,null,null,1,"b",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.viewReportedMessages(l.context.$implicit.room_id)&&u),u}),null,null)),(l()(),u.yb(-1,null,["View reported messages"])),(l()(),u.bb(16777216,null,null,1,null,P)),u.lb(29,278528,null,0,i.l,[u.K,u.H,i.k],{ngSwitchCase:[0,"ngSwitchCase"]},null)],(function(l,n){l(n,1,0,n.component.showingReportedMessages),l(n,29,0,!0)}),(function(l,n){l(n,5,0,n.context.$implicit.reporter),l(n,8,0,n.context.$implicit.reporter_ip),l(n,11,0,n.context.$implicit.reported),l(n,14,0,n.context.$implicit.reported_ip),l(n,17,0,n.context.$implicit.reason),l(n,20,0,n.context.$implicit.room_id)}))}function S(l){return u.zb(0,[(l()(),u.mb(0,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),u.mb(1,0,null,null,3,"ul",[],null,null,null,null,null)),(l()(),u.mb(2,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),u.mb(3,0,null,null,1,"b",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.goToAdmin()&&u),u}),null,null)),(l()(),u.yb(-1,null,["Back"])),(l()(),u.mb(5,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),u.bb(16777216,null,null,1,null,A)),u.lb(7,278528,null,0,i.h,[u.K,u.H,u.p],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,7,0,n.component.reportsList)}),null)}function T(l){return u.zb(0,[(l()(),u.mb(0,0,null,null,1,"ttm-reports",[],null,null,null,S,y)),u.lb(1,114688,null,0,O,[h,m.k],null,null)],(function(l,n){l(n,1,0)}),null)}var z=u.ib("ttm-reports",O,T,{},{},[]);class R{constructor(l,n){this.service=l,this.router=n}ngOnInit(){this.service.isAuthed()?(console.log("viewing bans"),this.service.getBans().subscribe(l=>{l.success&&(this.bansList=l.data,0===this.bansList.length&&(this.bansStatus="No bans"))})):this.router.navigate(["/admin"])}unbanUser(l){this.service.isAuthed()?this.service.unbanUser(l).subscribe(l=>{console.log(l)}):this.router.navigate(["/admin"])}goToAdmin(){this.router.navigate(["/admin"])}}var j=u.kb({encapsulation:0,styles:[[".ban_content[_ngcontent-%COMP%]{max-width:min(100%,450px);overflow:auto;background-color:#999;border-radius:4px;border:1px solid;box-shadow:2px 2px #222}.ban_obj[_ngcontent-%COMP%]{min-height:27px;margin-bottom:10px;display:inline-flex;font-family:Arial,Helvetica,sans-serif}.unban_button[_ngcontent-%COMP%]{border:1px solid #000;border-radius:10px;height:27px;width:50px;line-height:27px;font-size:14px;text-align:center;background-color:#888;cursor:pointer}.bans_status[_ngcontent-%COMP%]{width:75px;background-color:#999;border-radius:4px}li[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{display:block;text-align:center;text-decoration:none;background-color:#999;border-radius:4px;border:1px solid;font-family:Arial,Helvetica,sans-serif;font-size:15px;box-shadow:2px 2px #222;max-width:200px;margin-bottom:10px;cursor:pointer}li[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:visited{color:#000}li[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:hover{background-color:#777}ul[_ngcontent-%COMP%]{list-style-type:none}[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px;background:0 0}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#333;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#555}"]],data:{}});function B(l){return u.zb(0,[(l()(),u.mb(0,0,null,null,13,"li",[],null,null,null,null,null)),(l()(),u.mb(1,0,null,null,12,"div",[["class","ban_obj"]],null,null,null,null,null)),(l()(),u.mb(2,0,null,null,9,"div",[["class","ban_content"]],null,null,null,null,null)),(l()(),u.mb(3,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.mb(4,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),u.yb(5,null,["Banned IP:      ",""])),(l()(),u.mb(6,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.mb(7,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),u.yb(8,null,['Banned reason:  "','"'])),(l()(),u.mb(9,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.mb(10,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),u.yb(11,null,["Banned date:    (",")"])),(l()(),u.mb(12,0,null,null,1,"b",[["class","unban_button"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.unbanUser(l.context.$implicit.ip)&&u),u}),null,null)),(l()(),u.yb(-1,null,["Unban"]))],null,(function(l,n){l(n,5,0,n.context.$implicit.ip),l(n,8,0,n.context.$implicit.reason),l(n,11,0,n.context.$implicit.date)}))}function H(l){return u.zb(0,[(l()(),u.mb(0,0,null,null,9,"div",[],null,null,null,null,null)),(l()(),u.mb(1,0,null,null,3,"ul",[],null,null,null,null,null)),(l()(),u.mb(2,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),u.mb(3,0,null,null,1,"b",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.goToAdmin()&&u),u}),null,null)),(l()(),u.yb(-1,null,["Back"])),(l()(),u.mb(5,0,null,null,4,"ul",[],null,null,null,null,null)),(l()(),u.mb(6,0,null,null,1,"div",[["class","bans_status"]],null,null,null,null,null)),(l()(),u.yb(7,null,["",""])),(l()(),u.bb(16777216,null,null,1,null,B)),u.lb(9,278528,null,0,i.h,[u.K,u.H,u.p],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,9,0,n.component.bansList)}),(function(l,n){l(n,7,0,n.component.bansStatus)}))}function $(l){return u.zb(0,[(l()(),u.mb(0,0,null,null,1,"ttm-bans",[],null,null,null,H,j)),u.lb(1,114688,null,0,R,[h,m.k],null,null)],(function(l,n){l(n,1,0)}),null)}var E=u.ib("ttm-bans",R,$,{},{},[]);class I{}t.d(n,"AdminModuleNgFactory",(function(){return U}));var U=u.jb(e,[],(function(l){return u.ub([u.vb(512,u.j,u.U,[[8,[o.a,_,z,E]],[3,u.j],u.u]),u.vb(4608,i.j,i.i,[u.r,[2,i.s]]),u.vb(1073742336,i.b,i.b,[]),u.vb(1073742336,m.l,m.l,[[2,m.q],[2,m.k]]),u.vb(1073742336,I,I,[]),u.vb(1073742336,e,e,[]),u.vb(1024,m.i,(function(){return[[{path:"",component:r},{path:"reports",component:O},{path:"bans",component:R}]]}),[])])}))}}]);