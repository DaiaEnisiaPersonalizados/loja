import{a as pt}from"./chunk-UWMCND7L.js";import{a as Nt}from"./chunk-2DFQA3NL.js";import{a as lt,c as ut,e as dt,f as ht,j as Tt}from"./chunk-JIJSIPFI.js";import{a as M,d as mt,e as ft,f as gt,g as wt,h as vt,i as N,j as St,k as bt,l as yt,n as kt}from"./chunk-H3PR6A5N.js";import{a as Mt}from"./chunk-7TYMS46X.js";import{a as It}from"./chunk-2BSBAHUI.js";import{b as jt,c as f,e as xt,f as b,g as Rt,k as Et}from"./chunk-7VISWSNC.js";import{a as Kt,b as Yt}from"./chunk-AJCNGBOM.js";import{$b as h,Bb as S,Cb as $,D as F,Db as W,Fb as z,Ga as J,Gb as V,Hb as K,N as a,O as u,P as O,Q as s,V as P,Vd as q,W as m,Yb as Y,_b as Z,ae as _,bc as I,be as tt,ca as G,de as et,ga as U,h as Vt,ie as rt,je as ot,k as w,m as D,o as d,oe as it,pb as L,r as C,s as x,se as nt,te as st,u as A,ud as Q,ue as at,ve as ct,xb as v,xd as X,y as H,yb as B}from"./chunk-6JUWCAAP.js";var y=class{http;prefix;suffix;constructor(t,i="/assets/i18n/",e=".json"){this.http=t,this.prefix=i,this.suffix=e}getTranslation(t){return this.http.get(`${this.prefix}${t}${this.suffix}`)}};var R=new O("JWT_OPTIONS"),k=(()=>{class r{constructor(i=null){this.tokenGetter=i&&i.tokenGetter||function(){}}urlBase64Decode(i){let e=i.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:{e+="==";break}case 3:{e+="=";break}default:throw new Error("Illegal base64url string!")}return this.b64DecodeUnicode(e)}b64decode(i){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o="";if(i=String(i).replace(/=+$/,""),i.length%4===1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(let n=0,c,p,zt=0;p=i.charAt(zt++);~p&&(c=n%4?c*64+p:p,n++%4)?o+=String.fromCharCode(255&c>>(-2*n&6)):0)p=e.indexOf(p);return o}b64DecodeUnicode(i){return decodeURIComponent(Array.prototype.map.call(this.b64decode(i),e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join(""))}decodeToken(i=this.tokenGetter()){return i instanceof Promise?i.then(e=>this._decodeToken(e)):this._decodeToken(i)}_decodeToken(i){if(!i||i==="")return null;let e=i.split(".");if(e.length!==3)throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");let o=this.urlBase64Decode(e[1]);if(!o)throw new Error("Cannot decode the token.");return JSON.parse(o)}getTokenExpirationDate(i=this.tokenGetter()){return i instanceof Promise?i.then(e=>this._getTokenExpirationDate(e)):this._getTokenExpirationDate(i)}_getTokenExpirationDate(i){let e;if(e=this.decodeToken(i),!e||!e.hasOwnProperty("exp"))return null;let o=new Date(0);return o.setUTCSeconds(e.exp),o}isTokenExpired(i=this.tokenGetter(),e){return i instanceof Promise?i.then(o=>this._isTokenExpired(o,e)):this._isTokenExpired(i,e)}_isTokenExpired(i,e){if(!i||i==="")return!0;let o=this.getTokenExpirationDate(i);return e=e||0,o===null?!1:!(o.valueOf()>new Date().valueOf()+e*1e3)}getAuthScheme(i,e){return typeof i=="function"?i(e):i}}return r.\u0275fac=function(i){return new(i||r)(s(R))},r.\u0275prov=a({token:r,factory:r.\u0275fac}),r})(),Dt=r=>r instanceof Promise?A(()=>r):d(r),Zt=(()=>{class r{constructor(i,e,o){this.jwtHelper=e,this.document=o,this.standardPorts=["80","443"],this.tokenGetter=i.tokenGetter,this.headerName=i.headerName||"Authorization",this.authScheme=i.authScheme||i.authScheme===""?i.authScheme:"Bearer ",this.allowedDomains=i.allowedDomains||[],this.disallowedRoutes=i.disallowedRoutes||[],this.throwNoTokenError=i.throwNoTokenError||!1,this.skipWhenExpired=i.skipWhenExpired}isAllowedDomain(i){let e=new URL(i.url,this.document.location.origin);if(e.host===this.document.location.host)return!0;let o=`${e.hostname}${e.port&&!this.standardPorts.includes(e.port)?":"+e.port:""}`;return this.allowedDomains.findIndex(n=>typeof n=="string"?n===o:n instanceof RegExp?n.test(o):!1)>-1}isDisallowedRoute(i){let e=new URL(i.url,this.document.location.origin);return this.disallowedRoutes.findIndex(o=>{if(typeof o=="string"){let n=new URL(o,this.document.location.origin);return n.hostname===e.hostname&&n.pathname===e.pathname}return o instanceof RegExp?o.test(i.url):!1})>-1}handleInterception(i,e,o){let n=this.jwtHelper.getAuthScheme(this.authScheme,e);if(!i&&this.throwNoTokenError)throw new Error("Could not get token from tokenGetter function.");let c=d(!1);return this.skipWhenExpired&&(c=i?Dt(this.jwtHelper.isTokenExpired(i)):d(!0)),i?c.pipe(C(p=>p&&this.skipWhenExpired?e.clone():e.clone({setHeaders:{[this.headerName]:`${n}${i}`}})),x(p=>o.handle(p))):o.handle(e)}intercept(i,e){if(!this.isAllowedDomain(i)||this.isDisallowedRoute(i))return e.handle(i);let o=this.tokenGetter(i);return Dt(o).pipe(x(n=>this.handleInterception(n,i,e)))}}return r.\u0275fac=function(i){return new(i||r)(s(R),s(k),s(L))},r.\u0275prov=a({token:r,factory:r.\u0275fac}),r})(),Ct=(()=>{class r{constructor(i){if(i)throw new Error("JwtModule is already loaded. It should only be imported in your application's main module.")}static forRoot(i){return{ngModule:r,providers:[{provide:$,useClass:Zt,multi:!0},i.jwtOptionsProvider||{provide:R,useValue:i.config},k]}}}return r.\u0275fac=function(i){return new(i||r)(s(r,12))},r.\u0275mod=m({type:r}),r.\u0275inj=u({}),r})();function At(r,t){if(r)throw new Error(`${t} has already been loaded. Import Core modules in the AppModule only.`)}var Ht=[f,b,Nt,Mt,It,ct,it,at,nt,st,_],Ft=(()=>{let t=class t{static forRoot(){return{ngModule:t,providers:[...Ht]}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=m({type:t}),t.\u0275inj=u({providers:[...Ht],imports:[v]});let r=t;return r})();var Ot=[{url:"https://github.com/akveo/nebular",target:"_blank",icon:"github"},{url:"https://www.facebook.com/akveo/",target:"_blank",icon:"facebook"},{url:"https://twitter.com/akveo_inc",target:"_blank",icon:"twitter"}],Qt=[{provide:f,useClass:b}],Xt=(()=>{let t=class t extends M{constructor(){super(),this.userDataSubject=new D(null),this.userData$=this.userDataSubject.asObservable().pipe(F()),this.userDataSubject.next(localStorage.getItem("user"))}getUserData(){return JSON.parse(this.userDataSubject.getValue()||"{}")}getRole(){let e=this.getUserData();return d(e&&e.role||"guest")}getRoleFromToken(e){let o=JSON.parse(e);return o&&o.role?o.role:"guest"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=a({token:t,factory:t.\u0275fac});let r=t;return r})(),qt=[...Ft.forRoot().providers,...N.forRoot({strategies:[vt.setup({name:"email",delay:3e3})],forms:{login:{socialLinks:Ot},register:{socialLinks:Ot}}}).providers,mt.forRoot({accessControl:yt}).providers,...Qt,{provide:M,useClass:Xt},dt],Pt=(()=>{let t=class t{constructor(e){At(e,"CoreModule")}static forRoot(){return{ngModule:t,providers:[...qt,ft,gt]}}};t.\u0275fac=function(o){return new(o||t)(s(t,12))},t.\u0275mod=m({type:t}),t.\u0275inj=u({imports:[v,N]});let r=t;return r})();var T=(()=>{let t=class t{constructor(){this.jwtHelper=new k,this.strategy="jwt"}getToken(){return this.getManualToken()}getManualToken(){return document.cookie.jwt??localStorage.getItem(this.strategy)??sessionStorage.getItem(this.strategy)}tokenIsExpired(){return this.jwtHelper.isTokenExpired(this.getManualToken())}validateToken(e){return this.jwtHelper.isTokenExpired(e)}setToken(e){typeof e!="string"&&(e=JSON.stringify(e)),sessionStorage.setItem(this.strategy,e),localStorage.setItem(this.strategy,e)}clearToken(){sessionStorage.removeItem(this.strategy),localStorage.removeItem(this.strategy)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=a({token:t,factory:t.\u0275fac});let r=t;return r})();var Gt=(()=>{let t=class t{constructor(e,o){this.httpService=e,this.provider=o,this.completeUrl=n=>this.httpService.apiPath+this.url+n,this.hasDataChanges=new U,this.delay=0,this.url="",this.header={headers:this.authHeader}}get authHeader(){return new B().set("Content-Type","application/json").set("Accept","application/json")}sendLogin(e){return this.provider.post(this.completeUrl("/login"),e,this.header).pipe(H(o=>d(jt(o))))}};t.\u0275fac=function(o){return new(o||t)(s(f),s(S))},t.\u0275prov=a({token:t,factory:t.\u0275fac});let r=t;return r})();var j=(()=>{let t=class t extends Gt{constructor(){super(...arguments),this.url="auth",this.login=e=>this.sendLogin(e)}};t.\u0275fac=(()=>{let e;return function(n){return(e||(e=G(t)))(n||t)}})(),t.\u0275prov=a({token:t,factory:t.\u0275fac});let r=t;return r})();var g=(()=>{let t=class t extends wt{constructor(e,o){super(),this.tokenStorage=e,this.authService=o,this.strategy="jwt",this.delayTime=1e3,this._handlerNext=n=>{let{token:c}=n;if(!c)return this.clear();this.tokenStorage.validateToken(c)||(this.set(c),setTimeout(()=>window.location.reload(),this.delayTime+500))},this._handlerComplete=()=>console.info("complete"),this._handlerError=n=>console.error("error",n)}login(e){this.authService.login(e).subscribe({next:o=>this._handlerNext(o),error:o=>this._handlerError(o)})}get(){return this.tokenStorage.getToken()}set(e){this.tokenStorage.setToken(e)}clear(){this.tokenStorage.clearToken()}expired(){return this.tokenStorage.tokenIsExpired()}};t.\u0275fac=function(o){return new(o||t)(s(T),s(j))},t.\u0275prov=a({token:t,factory:t.\u0275fac});let r=t;return r})();var Jt=(()=>{let t=class t{constructor(e,o){this.router=e,this.loginService=o}canActivate(){return new w(e=>{let o=this.loginService.expired();o||this.router.navigate(["pages","dashboard"]),console.warn("\u274E - AuthGuardLogin"),e.next(o),e.complete()})}};t.\u0275fac=function(o){return new(o||t)(s(h),s(g))},t.\u0275prov=a({token:t,factory:t.\u0275fac});let r=t;return r})();var Lt=(()=>{let t=class t{constructor(e,o){this.router=e,this.loginService=o}canActivate(){return new w(e=>{let o=this.loginService.expired();o&&this.router.navigate(["auth","login"]),console.warn("\u2705 - AuthGuard"),e.next(!o),e.complete()})}};t.\u0275fac=function(o){return new(o||t)(s(h),s(g))},t.\u0275prov=a({token:t,factory:t.\u0275fac});let r=t;return r})();var ee=[{path:"",pathMatch:"full",redirectTo:"pages/dashboard"},{path:"admin",canActivate:[bt,St],loadChildren:()=>import("./chunk-Q35IYQYI.js").then(r=>r.PagesRoutesModule)},{path:"pages",loadChildren:()=>import("./chunk-MNQ56CYG.js").then(r=>r.PagesModule)},{path:"auth",loadChildren:()=>import("./chunk-C5ZCKTAI.js").then(r=>r.AuthModule)},{path:"**",redirectTo:"pages/error/404"}],re={useHash:!1},Bt=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=m({type:t}),t.\u0275inj=u({providers:[Jt,Lt,j,g,T,Rt,xt],imports:[I.forRoot(ee,re),I]});let r=t;return r})();var $t=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=P({type:t,selectors:[["ngx-app"]],decls:1,vars:0,template:function(o,n){o&1&&J(0,"router-outlet")},dependencies:[Z],encapsulation:2});let r=t;return r})();var ie="AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY";function ne(r){return new y(r)}var Wt=(()=>{let t=class t{constructor(e,o){this.router=e,this.title=o,this.siteName="Daia Enisia Personalizados ",this.getFullTitle=()=>this.siteName+this.getRouterNameByParam(),this.getRouterNameByParam=()=>{let n=this.router.routerState.snapshot.url.split("/"),c=new ht().transform(n[2]),p=parseInt(n.pop())||"";return`- ${c} ${p}`},e.events.subscribe(n=>{n instanceof Y&&this.title.setTitle(this.getFullTitle())})}};t.\u0275fac=function(o){return new(o||t)(s(h),s(K))},t.\u0275mod=m({type:t,bootstrap:[$t]}),t.\u0275inj=u({imports:[V,pt,W,ut.forRoot({defaultLanguage:"br",loader:{useFactory:ne,provide:lt,deps:[S]}}),Ct,Bt,Et,kt.forRoot(),Pt.forRoot(),Tt.forRoot(),Q.forRoot(),tt.forRoot(),rt.forRoot(),et.forRoot(),X.forRoot(),ot.forRoot(),q.forRoot({messageGoogleMapKey:ie})]});let r=t;return r})();var se=(Yt(),Vt(Kt));se.production&&void 0;z().bootstrapModule(Wt).catch(r=>console.error(r));