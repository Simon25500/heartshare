(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{117:function(e,t,a){e.exports=a(259)},138:function(e,t,a){},140:function(e,t,a){},160:function(e,t,a){},19:function(e,t,a){e.exports=a.p+"static/media/logo_home.ffb43085.svg"},259:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(35),c=a.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(10),s=a(4),i=a(111),u=a(112),m=a.n(u),p=a(39),d=a(22),h=a(113),f=(a(138),a(5)),b=a(6),g=a(7),y=a(8),v=a(19),E=a.n(v),w=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home h-screen"},r.a.createElement("div",null,r.a.createElement("img",{className:"mx-auto pt-40",src:E.a,alt:"logo HeartShare",height:"400",width:"400"}),r.a.createElement("div",null,r.a.createElement("h2",{className:"text-2xl text-center mt-20 font-bold"},"See you soon ",r.a.createElement("span",{"aria-label":"emoji-heart",role:"img"},"\ud83d\ude0d")))))}}]),a}(n.Component);var x=function(){return{type:"USER_SET",payload:fetch("/api/auth/islog",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()}))}},j=function(){return{type:"CARD_SET",payload:fetch("/api/event/index",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},O=function(e){return{type:"CARD_SET",payload:e}},N=function(e){var t=fetch("/api/event/near",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json}));return console.log(e),{type:"CARD_SET",payload:t}},k=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"componentWillMount",value:function(){this.props.isLog()}},{key:"render",value:function(){return null===this.props.user||null===this.props.user.userId?r.a.createElement("div",{className:"profilemenu absolute bg-gray-400"},r.a.createElement(p.b,{to:"/connexion"},r.a.createElement("div",{className:"p-5 border"},r.a.createElement("p",{className:"block profile text-center"},"Connexion"))),r.a.createElement(p.b,{to:"/inscription"},r.a.createElement("div",{className:"p-5 border"},r.a.createElement("p",{className:"block profile text-center"},"Inscription")))):(console.log(this.props.user),r.a.createElement("div",null," coucou"))}}]),a}(n.Component),C=Object(l.b)((function(e){return{user:e.user}}),(function(e){return Object(s.b)({isLog:x},e)}))(k),S=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).handleClick=function(){!1===n.state.active?n.setState({active:!0}):n.setState({active:!1})},n.state={active:!1},n}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"relative"},r.a.createElement("div",{onClick:this.handleClick,className:"profile h-16 w-16 bg-gray-400 rounded-full bg-cover bg-bottom ",style:{backgroundImage:"url(https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png)"}}),!0===this.state.active?r.a.createElement(C,null):"")}}]),a}(n.Component),A=a(115),T=a.n(A),I=(a(140),function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).change=function(){e.style,e.style="search shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"},e.onClick=function(t){e.props.setNear(t)},e.style="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",e}return Object(b.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"py-5 px-10 flex justify-between items-center"},r.a.createElement("img",{src:E.a,alt:"logo HeartShare",height:"150",width:"150"}),r.a.createElement(T.a,{placeholder:"Rechercher par villes",className:this.style,id:"address-input",type:"search",options:{appId:"plU5Y3A0QOV9",apiKey:"b279fc45a0ef9b6d77da799f3dc3ed7f",language:"fr",countries:["fr"],type:"city"},onChange:function(t){t.query,t.rawAnswer;var a=t.suggestion;t.suggestionIndex;return e.onClick(a.latlng)},onSuggestions:function(e){e.rawAnswer,e.query,e.suggestions;return console.log("Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.")},onCursorChanged:function(e){e.rawAnswer,e.query,e.suggestion,e.suggestonIndex;return console.log("Fired when arrows keys are used to navigate suggestions.")},onClear:function(){return console.log("Fired when the input is cleared.")},onLimit:function(e){e.message;return console.log("Fired when you reached your current rate limit.")},onError:function(e){e.message;return console.log("Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.")}}),r.a.createElement(S,null))}}]),a}(n.Component)),_=Object(l.b)(null,(function(e){return Object(s.b)({setNear:N},e)}))(I),D=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).position={},e.geoFindMe=function(){navigator.geolocation.getCurrentPosition((function(t){var a={lat:t.coords.latitude,lng:t.coords.longitude};e.position=a}),(function(){return null}))},e.onClick=function(){"Pr\xe8s de chez vous"===e.props.name?e.props.setNear(e.position):"Tout les \xe9venement"===e.props.name&&e.props.cardSet()},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.geoFindMe()}},{key:"render",value:function(){return r.a.createElement("div",{onClick:this.onClick,className:"cursor-pointer choice py-2 w-1/4 bg-gray-300 rounded-md text-center"},r.a.createElement("p",{className:"font-bold"},this.props.name))}}]),a}(n.Component),L=Object(l.b)(null,(function(e){return Object(s.b)({setNear:N,cardSet:j},e)}))(D),P=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex justify-between mx-8 "},r.a.createElement(L,{name:"Pr\xe8s de chez vous"}),r.a.createElement(L,{name:"Category"}),r.a.createElement(L,{name:"Tout les \xe9venement"}))}}]),a}(n.Component),R=a(77),z=a.n(R),F=(a(160),function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onClick=function(){e.props.cardActive(e.props.card)},e}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{onClick:this.onClick,className:"pin bounce",style:{backgroundColor:this.props.color,cursor:"pointer"},title:this.props.name}),r.a.createElement("div",{className:""}))}}]),a}(n.Component)),U=Object(l.b)(null,(function(e){return Object(s.b)({cardActive:O},e)}))(F),B=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Array.isArray(this.props.cards)?r.a.createElement("div",{className:" bg-gray-900 h-full"},r.a.createElement(z.a,{bootstrapURLKeys:{key:"AIzaSyBbjMtABvfaw7Cq_un0llwAg8derao9yUk"},defaultCenter:this.props.center,zoom:this.props.zoom},this.props.cards.map((function(e){return r.a.createElement(U,{key:e._id,lat:e.lat,lng:e.lng,card:e,name:e.name,color:"red"})})))):r.a.createElement("div",{className:" bg-gray-900 h-full"},r.a.createElement(z.a,{bootstrapURLKeys:{key:"AIzaSyBbjMtABvfaw7Cq_un0llwAg8derao9yUk"},center:{lat:this.props.cards.lat,lng:this.props.cards.lng},zoom:15},r.a.createElement(U,{lat:this.props.cards.lat,lng:this.props.cards.lng,card:this.props.cards,name:this.props.cards.name,color:"red"})))}}]),a}(n.Component);B.defaultProps={center:{lat:46.22,lng:2.21},zoom:5};var M=Object(l.b)((function(e){return{cards:e.cards}}))(B),q=a(161),H=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"block bg-gray-400 w-64 h-64 text-center"},r.a.createElement(q,{name:"calendar",className:"text-6xl mt-10 opacity-25"}),r.a.createElement("p",{className:"p-10 text-gray-700"},"Connectez vous pour voir vos evenement"))}}]),a}(n.Component),J=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onClick=function(){e.props.cardActive(e.props.card)},e}return Object(b.a)(a,[{key:"render",value:function(){var e={backgroundImage:"url(".concat(this.props.img,")")},t="".concat(new Date(this.props.start).toLocaleDateString("fr",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),a="".concat(new Date(this.props.start).toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"})),n="".concat(new Date(this.props.stop).toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}));return r.a.createElement("div",{onClick:this.onClick,className:"cursor-pointer flex border-solid border-b border-gray-600"},r.a.createElement("div",{className:"w-24 h-24 bg-gray-700 bg-cover bg-center",style:e}),r.a.createElement("div",{className:"p-2 flex justify-between w-full"},r.a.createElement("div",{className:"flex flex-col justify-between h-full"},r.a.createElement("p",{className:"text-sm font-bold"},this.props.name),r.a.createElement("p",{className:"text-sm"},t," de ",a," \xe0 ",n," ")),r.a.createElement("div",{className:"flex flex-col justify-between h-full items-end"},r.a.createElement("p",{className:"text-sm"},this.props.city),r.a.createElement("p",{className:"text-xs"},this.props.place))))}}]),a}(n.Component),K=Object(l.b)(null,(function(e){return Object(s.b)({cardActive:O},e)}))(J),W=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.props.cardSet()}},{key:"render",value:function(){if(Array.isArray(this.props.cards))return r.a.createElement("div",{className:"cardlist w-full bg-gray-200 flex-grow overflow-y-scroll h-64",id:"scroll"},this.props.cards.map((function(e){return r.a.createElement(K,{key:e._id,name:e.name,img:e.association.img_url,start:e.start,stop:e.stop,city:e.locationCity,place:e.location,card:e})})));var e={backgroundImage:"url(".concat(this.props.cards.association.img_url,")")},t="".concat(new Date(this.props.cards.start).toLocaleDateString("fr",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),a="".concat(new Date(this.props.cards.start).toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"})),n="".concat(new Date(this.props.cards.stop).toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}));return r.a.createElement("div",{className:"flex flex-col justify-between cardlist w-full bg-gray-400 flex-grow overflow-y-scroll h-64 lg:h-128 lg:p-10",id:"scroll"},r.a.createElement("h3",{className:"text-lg font-bold text-center "},"Evenement"),r.a.createElement("div",{className:"px-5 flex justify-between lg:mt-10"},r.a.createElement("div",null,r.a.createElement("p",{className:"text-md font-bold"},this.props.cards.name),r.a.createElement("p",{className:"text-sm"},t," de ",a," \xe0 ",n," ")),r.a.createElement("div",null,r.a.createElement("p",null,this.props.cards.location),r.a.createElement("p",null,this.props.cards.locationCity))),r.a.createElement("div",{className:"flex lg:flex-grow lg:flex-col lg:items-center lg:justify-around "},r.a.createElement("div",{className:"w-32 h-32 bg-gray-700 bg-cover bg-center lg:mt-5",style:e}),r.a.createElement("div",{className:"w-full text-center "},r.a.createElement("h3",{className:"text-sm font-bold lg:text-lg"},this.props.cards.association.name),r.a.createElement("p",{className:"text-sm lg:text-md lg:mt-10"},this.props.cards.association.description))))}}]),a}(n.Component),G=Object(l.b)((function(e){return{cards:e.cards}}),(function(e){return Object(s.b)({cardSet:j},e)}))(W),Y=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:" mt-20 mx-8 flex justify-between"},r.a.createElement("div",{className:"hidden md:block"},r.a.createElement(H,null),r.a.createElement("div",{className:"actu mt-10 w-64 h-64"})),r.a.createElement("div",{className:"body flex-grow md:ml-10 flex flex-col lg:flex-row"},r.a.createElement(G,null),r.a.createElement("div",{className:"w-full mt-10 h-64 lg:mt-0 lg:ml-10 lg:h-full"},r.a.createElement(M,null))))}}]),a}(n.Component),Q=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement(P,null),r.a.createElement("div",null,r.a.createElement(Y,null)))}}]),a}(n.Component),V=a(261),$=a(260),X=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){e.props.inscription(t,(function(t){return e.props.history.push("/home"),t}))},e}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{className:"mx-auto pt-5",src:E.a,alt:"logo HeartShare",height:"400",width:"400"}),r.a.createElement("div",{className:"mt- mx-auto p-5 bg-red-600 w-1/2 max-w-screen-md rounded-lg "},r.a.createElement("p",{className:"text-xl font-bold  text-center"},"Inscription"),r.a.createElement("div",{className:" w-3/4 max-w-lg mx-auto"},r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:" px-8 pt-6 pb-8 mb-4"},r.a.createElement("div",{className:"mb-4"},r.a.createElement("label",{className:"block  text-sm font-bold mb-2",htmlFor:"email"},"Email"),r.a.createElement(V.a,{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",label:"email",name:"email",component:"input"})),r.a.createElement("div",{className:"mb-6"},r.a.createElement("label",{className:"block  text-sm font-bold mb-2"},"Password"),r.a.createElement(V.a,{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",label:"password",name:"password",type:"password",component:"input",placeholder:"******************"})),r.a.createElement("div",{className:"flex items-center justify-between"},r.a.createElement("button",{className:"bg-white hover:bg-red-200 text-red-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",disabled:this.props.pristine||this.props.submitting},"Inscription"))))))}}]),a}(n.Component),Z=Object($.a)({form:"inscription"})(Object(l.b)(null,{inscription:function(e,t){return fetch("/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("token",e.token)})).then(t),{type:"USER_SET",payload:localStorage.getItem("token")}}})(X)),ee=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){e.props.connexion(t,(function(t){return e.props.history.push("/home"),t}))},e}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{className:"mx-auto pt-5",src:E.a,alt:"logo HeartShare",height:"400",width:"400"}),r.a.createElement("div",{className:"mt- mx-auto p-5 bg-red-600 w-1/2 max-w-screen-md rounded-lg "},r.a.createElement("p",{className:"text-xl font-bold  text-center"},"Connexion"),r.a.createElement("div",{className:" w-3/4 max-w-lg mx-auto"},r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:" px-8 pt-6 pb-8 mb-4"},r.a.createElement("div",{className:"mb-4"},r.a.createElement("label",{className:"block  text-sm font-bold mb-2",htmlFor:"email"},"Email"),r.a.createElement(V.a,{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",label:"email",name:"email",component:"input"})),r.a.createElement("div",{className:"mb-6"},r.a.createElement("label",{className:"block  text-sm font-bold mb-2"},"Password"),r.a.createElement(V.a,{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",label:"password",name:"password",type:"password",component:"input",placeholder:"******************"})),r.a.createElement("div",{className:"flex items-center justify-between"},r.a.createElement("button",{className:"bg-white hover:bg-red-200 text-red-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",disabled:this.props.pristine||this.props.submitting},"Connexion"),r.a.createElement("a",{className:"ml-5 inline-block align-baseline font-bold text-sm text-white hover:text-red-200",href:"/home"},"Forgot Password?"))))))}}]),a}(n.Component),te=Object($.a)({form:"connexion"})(Object(l.b)(null,{connexion:function(e,t){return fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("token",e.token)})).then(t),{type:"USER_SET",payload:localStorage.getItem("token")}}})(ee)),ae=a(262),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_SET":return t.payload;default:return e}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CARD_SET":return t.payload;default:return e}},oe=Object(s.c)({form:ae.a,user:ne,cards:re}),ce=Object(s.a)(m.a,i.logger);c.a.render(r.a.createElement(l.a,{store:Object(s.d)(oe,{},ce)},r.a.createElement(p.a,{history:h.createHistory},r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0,component:w}),r.a.createElement(d.a,{path:"/home",exact:!0,component:Q}),r.a.createElement(d.a,{path:"/connexion",exact:!0,component:te}),r.a.createElement(d.a,{path:"/inscription",exact:!0,component:Z})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[117,1,2]]]);
//# sourceMappingURL=main.1adb6dda.chunk.js.map