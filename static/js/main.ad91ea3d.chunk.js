(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{45:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},54:function(e,t,a){e.exports=a(87)},59:function(e,t,a){},60:function(e,t,a){},84:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(14),s=a.n(c),l=(a(59),a(6)),u=(a(60),a(61),a(12)),i=a(15),m=a(20),p="http://localhost:4741",d="https://dotdot-api.herokuapp.com",h=(n="localhost"===window.location.hostname?p:d,a(41)),f=a.n(h),b=a(17),E=function(e){var t=Object(r.useState)(),a=Object(l.a)(t,2),c=a[0],s=a[1],u=Object(r.useState)(),i=Object(l.a)(u,2),p=i[0],d=i[1],h=Object(r.useState)(),f=Object(l.a)(h,2),E=f[0],g=f[1];return o.a.createElement("div",{className:"col-md-6 m-auto py-3"},o.a.createElement("form",{className:"auth-form",onSubmit:function(t){t.preventDefault(),function(e){return fetch("".concat(n,"/sign-up/"),{method:"Post",headers:{Accept:"application/json","Content-Type":"application/json","Accept-Language":"ru,en;q=0.9"},body:JSON.stringify({credentials:{email:"".concat(e.email),password:"".concat(e.password),password_confirmation:"".concat(e.passwordConfirmation)}})})}({email:c,password:p,passwordConfirmation:E}).then((function(){return console.log(c)})).then((function(e){return console.log(c,e)})).then((function(){return e.setAlerts([].concat(Object(m.a)(e.alerts),[{title:"Sign up Successful",variant:"success"}]))})).then((function(){return console.log("pro")})).catch((function(t){console.error("ERR",t),e.setAlerts([].concat(Object(m.a)(e.alerts),[{title:"Hello",variant:"success"}]))}))}},o.a.createElement("h3",null,"Sign Up"),o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{required:!0,name:"email",value:c,type:"email",placeholder:"Email",onChange:function(e){return s(e.target.value)}}),o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{required:!0,name:"password",value:p,type:"password",placeholder:"Password",onChange:function(e){return d(e.target.value)}}),o.a.createElement("label",{htmlFor:"passwordConfirmation"},"Confirm Password"),o.a.createElement("input",{required:!0,name:"passwordConfirmation",value:E,type:"password",placeholder:"Confirm Password",onChange:function(e){return g(e.target.value)}}),o.a.createElement(b.a,{variant:"primary",type:"submit"},"Submit")))},g=a(23),v=a(13),w=function(e){var t=Object(r.useState)(""),a=Object(l.a)(t,2),c=a[0],s=a[1],u=Object(r.useState)(""),m=Object(l.a)(u,2),p=m[0],d=m[1],h=Object(i.g)();Object(g.b)();return o.a.createElement("div",{className:"col-md-6 m-auto py-3"},o.a.createElement("form",{className:"auth-form",onSubmit:function(t){t.preventDefault(),function(e){return f()({url:n+"/sign-in",method:"POST",data:{credentials:{email:e.email,password:e.password}}})}({email:c,password:p}).then((function(t){e.setUser(t.data.user)})).then((function(){return v.b.success("Welcome!")})).then((function(){h.push("/new-order")})).catch((function(e){console.error(e),v.b.error("Something went wrong, please check the console.")}))}},o.a.createElement("h3",null,"Sign In"),o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{required:!0,name:"email",value:c,type:"email",placeholder:"Email",onChange:function(e){return s(e.target.value)}}),o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{required:!0,name:"password",value:p,type:"password",placeholder:"Password",onChange:function(e){return d(e.target.value)}}),o.a.createElement(b.a,{variant:"primary",type:"submit"},"Sign In")))},O=(a(84),a(45)),j=a.n(O),y=o.a.createElement(o.a.Fragment,null,o.a.createElement(u.b,{to:"/new-order"},"New Order"),o.a.createElement(u.b,{to:"/change-password"},"Change Password"),o.a.createElement(u.b,{to:"/sign-out"},"Sign Out")),S=o.a.createElement(o.a.Fragment,null,o.a.createElement(u.b,{to:"/sign-up"},"Sign Up"),o.a.createElement(u.b,{to:"/sign-in"},"Sign In")),C=o.a.createElement(o.a.Fragment,null,o.a.createElement(u.b,{to:"/"},"Home")),x=function(e){var t=e.user;return o.a.createElement("header",{className:"main-header"},o.a.createElement("img",{src:j.a,className:"App-logo",alt:"logo"}),o.a.createElement("h1",null,"The Dot DB"),o.a.createElement("nav",null,t&&o.a.createElement("span",null,"Welcome, ",t.email),t?y:S,C))},k=a(51),A=function(e){var t=e.user,a=e.component,n=e.render,r=Object(k.a)(e,["user","component","render"]);return t&&n?o.a.createElement(i.b,Object.assign({},r,{render:n})):o.a.createElement(i.b,Object.assign({},r,{render:function(e){return t?o.a.createElement(a,e):o.a.createElement(i.a,{to:"/"})}}))},N=a(46),F=a(47),P=a(50),T=a(48),U=a(52),I=a(30),q=function(e){function t(e){var a;return Object(N.a)(this,t),(a=Object(P.a)(this,Object(T.a)(t).call(this,e))).timer=void 0,a.handleClose=function(){return a.setState({show:!1})},a.state={show:!0},a}return Object(U.a)(t,e),Object(F.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){e.setState({show:!1})}),4e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.props.alert;return o.a.createElement(I.a,{dismissible:!0,show:this.state.show,variant:e.variant,onClose:this.handleClose},o.a.createElement("div",{className:"container"},o.a.createElement(I.a.Heading,null,e.title)))}}]),t}(o.a.Component),B=a(7),D=a.n(B),J=function(e,t){var a,r,o;return D.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return a=t.token,c.next=3,D.a.awrap(fetch("".concat(n,"/customers/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+a}}));case 3:if(200!==(r=c.sent).status){c.next=11;break}return c.next=7,D.a.awrap(r.json());case 7:return o=c.sent,c.abrupt("return",o);case 11:return c.abrupt("return",!1);case 12:case"end":return c.stop()}}))},W=function(e,t){var a,r,o;return D.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return a=t.token,c.next=3,D.a.awrap(fetch("".concat(n,"/google-maps-masker/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+a}}));case 3:if(200!==(r=c.sent).status){c.next=12;break}return c.next=7,D.a.awrap(r.json());case 7:return o=c.sent,console.log("responseJson",o),c.abrupt("return",o);case 12:return c.abrupt("return",!1);case 13:case"end":return c.stop()}}))},z=function(e,t){var a,r,o;return D.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return a=t.token,c.next=3,D.a.awrap(fetch("".concat(n,"/customers/"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+a},body:JSON.stringify({customer:{name:e.name,phone:e.phoneNumber,currentAddress:e.address}})}));case 3:return r=c.sent,c.next=6,D.a.awrap(r.json());case 6:return o=c.sent,console.log("reponse postAddress",o,"responseCode",r.status),c.abrupt("return",1===r.status);case 9:case"end":return c.stop()}}))},H=a(49),R=function(e){var t=Object(r.useState)(""),a=Object(l.a)(t,2),n=a[0],c=a[1],s=Object(r.useState)(),u=Object(l.a)(s,2),i=u[0],p=u[1],d=Object(r.useState)(),h=Object(l.a)(d,2),f=h[0],E=h[1],g=Object(r.useState)(),w=Object(l.a)(g,2),O=w[0],j=w[1],y=Object(r.useState)(),S=Object(l.a)(y,2),C=S[0],x=S[1],k=Object(r.useState)(),A=Object(l.a)(k,2),N=A[0],F=A[1];return Object(r.useEffect)((function(){!function(){var t;D.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!n||10!==n.length){a.next=5;break}return a.next=3,D.a.awrap(J(n,e.user));case 3:(t=a.sent)?(v.b.success("Address found!"),p(t.customer.currentAddress)):v.b.info("Address not found, please create one.");case 5:case"end":return a.stop()}}))}()}),[n]),Object(r.useEffect)((function(){!function(){var t,a;D.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(i&&i.length>4)){n.next=8;break}return n.next=3,D.a.awrap(W(i,e.user));case 3:!1===(t=n.sent)&&v.b.error("failed! please change the format."),console.log("retrieved addresses",t.response),a=t.response,F(Object(m.a)(a));case 8:case"end":return n.stop()}}))}()}),[i]),o.a.createElement("div",{className:"col-md-6 m-auto py-3"},o.a.createElement("form",{className:"auth-form",onSubmit:function(){return console.log("heyo")}},o.a.createElement("h3",null,"Add new order"),o.a.createElement("label",{htmlFor:"number"},"Phone Number"),o.a.createElement(H.a,{format:"(###) ###-####",mask:"_",onValueChange:function(e){(""===e.value||/^[0-9\b]+$/.test(e.value))&&c(e.value)}}),o.a.createElement("label",{htmlFor:"text"},"Address"),o.a.createElement("input",{required:!0,name:"Address",value:i,type:"text",placeholder:"566 Columbia Rd",onChange:function(e){return p(e.target.value)}}),o.a.createElement("label",{htmlFor:"text"},"Name"),o.a.createElement("input",{name:"name",value:f,type:"text",placeholder:"Big Papa",onChange:function(e){return E(e.target.value)}}),o.a.createElement("label",{htmlFor:"number"},"Order Total"),o.a.createElement("input",{name:"orderTotal",value:O,type:"number",placeholder:"Optional",onChange:function(e){return j(e.target.value)}}),o.a.createElement("label",{htmlFor:"email"},"Date"),o.a.createElement("input",{name:"date",value:C,type:"date",placeholder:"Optional",onChange:function(e){return x(e.target.value)}}),N&&N.length>0&&N.map((function(t,a){return o.a.createElement(b.a,{variant:"primary",key:a,type:"button",onClick:function(){!function(e,t,a,n){D.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:z({phoneNumber:e,address:t,name:a},n);case 2:case"end":return r.stop()}}))}(n,t.description,f,e.user),c(""),p(""),E(""),j(""),x(""),F("")}},t.description)}))))},_=(a(86),function(){var e=Object(r.useState)(),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),s=Object(l.a)(c,2),m=s[0],p=s[1];return o.a.createElement("div",{className:"App"},o.a.createElement("main",{className:"container"},o.a.createElement(v.a,null),o.a.createElement(u.a,null,o.a.createElement(x,{user:a}),m.length>0&&m.map((function(e,t){return o.a.createElement(q,{key:t,dismissible:!0,onClose:function(){return p([])},alert:e},o.a.createElement("p",null,e.title))})),o.a.createElement(i.d,null,o.a.createElement(A,{user:a,exact:!0,path:"/",render:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Under Construction"))}}),o.a.createElement(A,{user:a,exact:!0,path:"/new-order",render:function(){return o.a.createElement(R,{alerts:m,setAlerts:p,user:a})}}),o.a.createElement(A,{user:a,exact:!0,path:"/change-password",render:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Under Construction"))}}),o.a.createElement(i.b,{path:"/sign-up",render:function(){return o.a.createElement(E,{alerts:m,setAlerts:p,setUser:n})}}),a?null:o.a.createElement(i.b,{path:"/sign-in",render:function(){return o.a.createElement(w,{alerts:m,setAlerts:p,setUser:n})}})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(53),$="UPDATE_SESSION",L={loggedIn:!1,session:"",userName:""};var M=a(22),V=Object(M.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(G.a)({},e,{},t.payload);default:return e}}));s.a.render(o.a.createElement(g.a,{store:V},o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[54,1,2]]]);
//# sourceMappingURL=main.ad91ea3d.chunk.js.map