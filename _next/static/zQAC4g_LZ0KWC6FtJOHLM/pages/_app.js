(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery;return n||o&&(void 0!==a&&a)}},"/TnQ":function(t,e,n){"use strict";var r=n("ANjH").compose;e.__esModule=!0,e.composeWithDevTools=function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},e.devToolsEnhancer=function(){return function(t){return t}}},0:function(t,e,n){n("Cnnx"),t.exports=n("nOHt")},"5fIB":function(t,e,n){var r=n("7eYB");t.exports=function(t){if(Array.isArray(t))return r(t)}},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=s,e.default=void 0;var r=c(n("q1tI")),o=c(n("Xuae")),a=n("lwAK"),i=n("FYa8"),u=n("/0+H");function c(t){return t&&t.__esModule?t:{default:t}}function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);t.has(i)?a=!1:t.add(i)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var s=f[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],p=r[s]||new Set;p.has(l)?a=!1:(p.add(l),r[s]=p)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var d=(0,o.default)();function h(t){var e=t.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,u.isInAmpMode)(t)},e)}))})))}h.rewind=d.rewind;var v=h;e.default=v},B5Ud:function(t,e,n){"use strict";var r=n("vJKn"),o=n("/GRZ"),a=n("i2R6"),i=n("48fX"),u=n("tCBg"),c=n("T0f4"),s=n("qVT1");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var f=n("AroE");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=m,e.default=void 0;var p=f(n("q1tI")),d=n("g/15");function h(t){return v.apply(this,arguments)}function v(){return(v=s(r.mark((function t(e){var n,o,a;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,o=e.ctx,t.next=3,(0,d.loadGetInitialProps)(n,o);case 3:return a=t.sent,t.abrupt("return",{pageProps:a});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=d.AppInitialProps;var y=function(t){i(n,t);var e=l(n);function n(){return o(this,n),e.apply(this,arguments)}return a(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,a=t.__N_SSP;return(p.default.createElement(n,Object.assign({},r,o||a?{}:{url:m(e)})))}}]),n}(p.default.Component);function m(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=y,y.origGetInitialProps=h,y.getInitialProps=h},Cnnx:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("P9BO")}])},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);e.HeadManagerContext=o},P9BO:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r),a=n("HaE+"),i=n("1OyB"),u=n("vuIU"),c=n("Ji7U"),s=n("md7G"),l=n("foSv"),f=n("q1tI"),p=n.n(f),d=n("8Bbg"),h=n.n(d),v=n("/MKj"),y=n("vOnD"),m=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),b=function(){return(b=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},w=function(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{c(r.next(t))}catch(e){a(e)}}function u(t){try{c(r.throw(t))}catch(e){a(e)}}function c(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(i,u)}c((r=r.apply(t,e||[])).next())}))},g=function(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(u){a=[6,u],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},S=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},O={storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(t){return t},deserializeState:function(t){return t}},P={colors:{primary:"#ffffff"}},_=n("kluC"),x=n("ANjH");function j(t){return function(e){var n=e.dispatch,r=e.getState;return function(e){return function(o){return"function"===typeof o?o(n,r,t):e(o)}}}}var k=j();k.withExtraArgument=j;var C=k,A=n("/TnQ"),I=n("rePB"),E=n("h1MZ");function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(Object(n),!0).forEach((function(e){Object(I.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var M={home:{version:1},image:{url:""},statusData:{data:[]},embarkData:{data:[]},nimbusData:{data:[]},subspaceData:{data:[]},active:0},D=Object(x.combineReducers)({home:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case E.a.Home.SetReducer:return T(T({},t),e.payload);case E.a.Home.ResetReducer:return M;case"STATUS":return T(T({},t),{},{active:0});case"EMBARK":return T(T({},t),{},{active:1});case"SUBSPACE":return T(T({},t),{},{active:2});case"NIMBUS":return T(T({},t),{},{active:3});default:return t}}}),N=(n("K7KY"),n("8Kt/")),B=n.n(N),H=f.createElement;function K(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var q=function(t){Object(c.a)(n,t);var e=K(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps,r=t.store;return H(v.a,{store:r},H(B.a,null,H("title",null,"The Status Network Tutorials"),H("meta",{charSet:"utf-8"}),H("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),H("meta",{name:"theme-color",content:"#000000"}),H("meta",{property:"og:title",content:"The Status Network Tutorials"}),H("meta",{property:"og:image",content:"https://github.com/status-im/ambassador.status.im/blob/develop/public/status-logo-symbol.jpg?raw=true"}),H("meta",{property:"og:description",content:"Welcome to the Status Network tutorials archive"}),H("meta",{name:"twitter:title",content:"The Status Network Tutorials"}),H("meta",{name:"twitter:description",content:"Welcome to the Status Network tutorials archive"}),H("meta",{name:"twitter:image",content:"https://github.com/status-im/ambassador.status.im/blob/develop/public/status-logo-symbol.jpg?raw=true"}),H("meta",{name:"twitter:card",content:"summary"}),H("meta",{name:"twitter:site",content:"@ethstatus"})),H(y.a,{theme:P},H(e,n)))}}],[{key:"getInitialProps",value:function(){var t=Object(a.a)(o.a.mark((function t(e){var n,r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.Component,r=e.ctx,!n.getInitialProps){t.next=7;break}return t.next=4,n.getInitialProps(r);case 4:t.t0=t.sent,t.next=8;break;case 7:t.t0={};case 8:return a=t.t0,t.abrupt("return",{pageProps:a});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),n}(h.a);e.default=function(t,e){e=b({},O,e);var n="undefined"===typeof window,r=function(r){var o=r.initialState,a=r.ctx,i=e.storeKey,u=function(){return t(e.deserializeState(o),b({},a,e,{isServer:n}))};return n?u():(window.hasOwnProperty(i)||(window[i]=u()),window[i])};return function(t){var o;return(o=function(n){function o(t,o){var a=n.call(this,t,o)||this,i=t.initialState;return e.debug&&console.log("4. WrappedApp.render created new store with initialState",i),a.store=r({initialState:i}),a}return m(o,n),o.prototype.render=function(){var e=this.props,n=e.initialProps,r=(e.initialState,S(e,["initialProps","initialState"]));return p.a.createElement(t,b({},r,n,{store:this.store}))},o}(f.Component)).displayName="withRedux("+(t.displayName||t.name||"App")+")",o.getInitialProps=function(o){return w(void 0,void 0,void 0,(function(){var a,i;return g(this,(function(u){switch(u.label){case 0:if(!o)throw new Error("No app context");if(!o.ctx)throw new Error("No page context");return a=r({ctx:o.ctx}),e.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",a.getState()),o.ctx.store=a,o.ctx.isServer=n,i={},"getInitialProps"in t?[4,t.getInitialProps.call(t,o)]:[3,2];case 1:i=u.sent(),u.label=2;case 2:return e.debug&&console.log("3. WrappedApp.getInitialProps has store state",a.getState()),[2,{isServer:n,initialState:e.serializeState(a.getState()),initialProps:i}]}}))}))},o}}((function(t){return Object(x.createStore)(D,t,Object(A.composeWithDevTools)(Object(x.applyMiddleware)(C)))}))(Object(_.a)(q))},Xuae:function(t,e,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),a=n("i2R6"),i=n("48fX"),u=n("tCBg"),c=n("T0f4"),s=n("mPvQ");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(u){i(s,u);var c=l(s);function s(t){var a;return r(this,s),a=c.call(this,t),p&&(e.add(o(a)),n(o(a))),a}return a(s,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),a(s,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(f.Component))}},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},mPvQ:function(t,e,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");t.exports=function(t){return r(t)||o(t)||a(t)||i()}},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}}},[[0,1,2,0,3,4]]]);