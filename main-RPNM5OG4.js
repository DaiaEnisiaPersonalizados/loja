import{a as lt}from"./chunk-CT4BPLMB.js";import{a as Rt}from"./chunk-Q7TQ3LCV.js";import{a as mt,c as ut,e as ht,f as ft,j as jt}from"./chunk-U3EZT35U.js";import{a as N,d as dt,e as gt,f as wt,g as vt,h as St,i as R,j as bt,k as yt,l as kt,n as Tt}from"./chunk-X4FC5EXN.js";import{a as Nt}from"./chunk-T2MXKUF6.js";import{a as Mt}from"./chunk-PGM3J4RZ.js";import{b as xt,c as f,e as It,f as y,g as Et,k as Dt}from"./chunk-TFTH57TL.js";import{a as b}from"./chunk-54LLRSOY.js";import{$b as M,$d as et,Ab as W,B as O,Bb as z,Db as V,Ea as L,Eb as K,Fb as Y,L as a,M as m,N as P,O as s,T as G,Td as _,U as u,Wb as Z,Yb as Q,Zb as h,_d as tt,aa as U,be as rt,ea as J,ge as ot,he as it,i as w,k as C,m as d,me as nt,nb as B,p as A,q as I,qe as st,re as at,s as H,sd as X,se as ct,te as pt,vb as v,vd as q,w as F,wb as $,zb as S}from"./chunk-MGJMJS24.js";var k=class{http;prefix;suffix;constructor(t,i="/assets/i18n/",e=".json"){this.http=t,this.prefix=i,this.suffix=e}getTranslation(t){return this.http.get(`${this.prefix}${t}${this.suffix}`)}};var E=new P("JWT_OPTIONS"),T=(()=>{class r{constructor(i=null){this.tokenGetter=i&&i.tokenGetter||function(){}}urlBase64Decode(i){let e=i.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:{e+="==";break}case 3:{e+="=";break}default:throw new Error("Illegal base64url string!")}return this.b64DecodeUnicode(e)}b64decode(i){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o="";if(i=String(i).replace(/=+$/,""),i.length%4===1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(let n=0,c,p,Vt=0;p=i.charAt(Vt++);~p&&(c=n%4?c*64+p:p,n++%4)?o+=String.fromCharCode(255&c>>(-2*n&6)):0)p=e.indexOf(p);return o}b64DecodeUnicode(i){return decodeURIComponent(Array.prototype.map.call(this.b64decode(i),e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join(""))}decodeToken(i=this.tokenGetter()){return i instanceof Promise?i.then(e=>this._decodeToken(e)):this._decodeToken(i)}_decodeToken(i){if(!i||i==="")return null;let e=i.split(".");if(e.length!==3)throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");let o=this.urlBase64Decode(e[1]);if(!o)throw new Error("Cannot decode the token.");return JSON.parse(o)}getTokenExpirationDate(i=this.tokenGetter()){return i instanceof Promise?i.then(e=>this._getTokenExpirationDate(e)):this._getTokenExpirationDate(i)}_getTokenExpirationDate(i){let e;if(e=this.decodeToken(i),!e||!e.hasOwnProperty("exp"))return null;let o=new Date(0);return o.setUTCSeconds(e.exp),o}isTokenExpired(i=this.tokenGetter(),e){return i instanceof Promise?i.then(o=>this._isTokenExpired(o,e)):this._isTokenExpired(i,e)}_isTokenExpired(i,e){if(!i||i==="")return!0;let o=this.getTokenExpirationDate(i);return e=e||0,o===null?!1:!(o.valueOf()>new Date().valueOf()+e*1e3)}getAuthScheme(i,e){return typeof i=="function"?i(e):i}}return r.\u0275fac=function(i){return new(i||r)(s(E))},r.\u0275prov=a({token:r,factory:r.\u0275fac}),r})(),Ct=r=>r instanceof Promise?H(()=>r):d(r),Kt=(()=>{class r{constructor(i,e,o){this.jwtHelper=e,this.document=o,this.standardPorts=["80","443"],this.tokenGetter=i.tokenGetter,this.headerName=i.headerName||"Authorization",this.authScheme=i.authScheme||i.authScheme===""?i.authScheme:"Bearer ",this.allowedDomains=i.allowedDomains||[],this.disallowedRoutes=i.disallowedRoutes||[],this.throwNoTokenError=i.throwNoTokenError||!1,this.skipWhenExpired=i.skipWhenExpired}isAllowedDomain(i){let e=new URL(i.url,this.document.location.origin);if(e.host===this.document.location.host)return!0;let o=`${e.hostname}${e.port&&!this.standardPorts.includes(e.port)?":"+e.port:""}`;return this.allowedDomains.findIndex(n=>typeof n=="string"?n===o:n instanceof RegExp?n.test(o):!1)>-1}isDisallowedRoute(i){let e=new URL(i.url,this.document.location.origin);return this.disallowedRoutes.findIndex(o=>{if(typeof o=="string"){let n=new URL(o,this.document.location.origin);return n.hostname===e.hostname&&n.pathname===e.pathname}return o instanceof RegExp?o.test(i.url):!1})>-1}handleInterception(i,e,o){let n=this.jwtHelper.getAuthScheme(this.authScheme,e);if(!i&&this.throwNoTokenError)throw new Error("Could not get token from tokenGetter function.");let c=d(!1);return this.skipWhenExpired&&(c=i?Ct(this.jwtHelper.isTokenExpired(i)):d(!0)),i?c.pipe(A(p=>p&&this.skipWhenExpired?e.clone():e.clone({setHeaders:{[this.headerName]:`${n}${i}`}})),I(p=>o.handle(p))):o.handle(e)}intercept(i,e){if(!this.isAllowedDomain(i)||this.isDisallowedRoute(i))return e.handle(i);let o=this.tokenGetter(i);return Ct(o).pipe(I(n=>this.handleInterception(n,i,e)))}}return r.\u0275fac=function(i){return new(i||r)(s(E),s(T),s(B))},r.\u0275prov=a({token:r,factory:r.\u0275fac}),r})(),At=(()=>{class r{constructor(i){if(i)throw new Error("JwtModule is already loaded. It should only be imported in your application's main module.")}static forRoot(i){return{ngModule:r,providers:[{provide:W,useClass:Kt,multi:!0},i.jwtOptionsProvider||{provide:E,useValue:i.config},T]}}}return r.\u0275fac=function(i){return new(i||r)(s(r,12))},r.\u0275mod=u({type:r}),r.\u0275inj=m({}),r})();function Ht(r,t){if(r)throw new Error(`${t} has already been loaded. Import Core modules in the AppModule only.`)}var Ft=[f,y,Rt,Nt,Mt,pt,nt,ct,st,at,tt],Ot=(()=>{let t=class t{static forRoot(){return{ngModule:t,providers:[...Ft]}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=u({type:t}),t.\u0275inj=m({providers:[...Ft],imports:[v]});let r=t;return r})();var Pt=[{url:"https://github.com/akveo/nebular",target:"_blank",icon:"github"},{url:"https://www.facebook.com/akveo/",target:"_blank",icon:"facebook"},{url:"https://twitter.com/akveo_inc",target:"_blank",icon:"twitter"}],Yt=[{provide:f,useClass:y}],Zt=(()=>{let t=class t extends N{constructor(){super(),this.userDataSubject=new C(null),this.userData$=this.userDataSubject.asObservable().pipe(O()),this.userDataSubject.next(localStorage.getItem("user"))}getUserData(){return JSON.parse(this.userDataSubject.getValue()||"{}")}getRole(){let e=this.getUserData();return d(e&&e.role||"guest")}getRoleFromToken(e){let o=JSON.parse(e);return o&&o.role?o.role:"guest"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=a({token:t,factory:t.\u0275fac});let r=t;return r})(),Qt=[...Ot.forRoot().providers,...R.forRoot({strategies:[St.setup({name:"email",delay:3e3})],forms:{login:{socialLinks:Pt},register:{socialLinks:Pt}}}).providers,dt.forRoot({accessControl:kt}).providers,...Yt,{provide:N,useClass:Zt},ht],Gt=(()=>{let t=class t{constructor(e){Ht(e,"CoreModule")}static forRoot(){return{ngModule:t,providers:[...Qt,gt,wt]}}};t.\u0275fac=function(o){return new(o||t)(s(t,12))},t.\u0275mod=u({type:t}),t.\u0275inj=m({imports:[v,R]});let r=t;return r})();var j=(()=>{let t=class t{constructor(){this.jwtHelper=new T,this.strategy="jwt"}getToken(){return this.getManualToken()}getManualToken(){return document.cookie.jwt??localStorage.getItem(this.strategy)??sessionStorage.getItem(this.strategy)}tokenIsExpired(){return this.jwtHelper.isTokenExpired(this.getManualToken())}validateToken(e){return this.jwtHelper.isTokenExpired(e)}setToken(e){typeof e!="string"&&(e=JSON.stringify(e)),sessionStorage.setItem(this.strategy,e),localStorage.setItem(this.strategy,e)}clearToken(){sessionStorage.removeItem(this.strategy),localStorage.removeItem(this.strategy)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=a({token:t,factory:t.\u0275fac});let r=t;return r})();var Ut=(()=>{let t=class t{constructor(e,o){this.httpService=e,this.provider=o,this.completeUrl=n=>this.httpService.apiPath+this.url+n,this.hasDataChanges=new J,this.delay=0,this.url="",this.header={headers:this.authHeader}}get authHeader(){return new $().set("Content-Type","application/json").set("Accept","application/json")}sendLogin(e){return this.provider.post(this.completeUrl("/login"),e,this.header).pipe(F(o=>d(xt(o))))}};t.\u0275fac=function(o){return new(o||t)(s(f),s(S))},t.\u0275prov=a({token:t,factory:t.\u0275fac});let r=t;return r})();var x=(()=>{let t=class t extends Ut{constructor(){super(...arguments),this.url="auth",this.login=e=>this.sendLogin(e)}};t.\u0275fac=(()=>{let e;return function(n){return(e||(e=U(t)))(n||t)}})(),t.\u0275prov=a({token:t,factory:t.\u0275fac});let r=t;return r})();var g=(()=>{let t=class t extends vt{constructor(e,o){super(),this.tokenStorage=e,this.authService=o,this.strategy="jwt",this.delayTime=1e3,this._handlerNext=n=>{let{token:c}=n;if(!c)return this.clear();this.tokenStorage.validateToken(c)||(this.set(c),setTimeout(()=>window.location.reload(),this.delayTime+500))},this._handlerComplete=()=>console.info("complete"),this._handlerError=n=>console.error("error",n)}login(e){this.authService.login(e).subscribe({next:o=>this._handlerNext(o),error:o=>this._handlerError(o)})}get(){return this.tokenStorage.getToken()}set(e){this.tokenStorage.setToken(e)}clear(){this.tokenStorage.clearToken()}expired(){return this.tokenStorage.tokenIsExpired()}};t.\u0275fac=function(o){return new(o||t)(s(j),s(x))},t.\u0275prov=a({token:t,factory:t.\u0275fac});let r=t;return r})();var Lt=(()=>{let t=class t{constructor(e,o){this.router=e,this.loginService=o}canActivate(){return new w(e=>{let o=this.loginService.expired();o||this.router.navigate(["pages","dashboard"]),console.warn("\u274E - AuthGuardLogin"),e.next(o),e.complete()})}};t.\u0275fac=function(o){return new(o||t)(s(h),s(g))},t.\u0275prov=a({token:t,factory:t.\u0275fac});let r=t;return r})();var Bt=(()=>{let t=class t{constructor(e,o){this.router=e,this.loginService=o}canActivate(){return new w(e=>{let o=this.loginService.expired();o&&this.router.navigate(["auth","login"]),console.warn("\u2705 - AuthGuard"),e.next(!o),e.complete()})}};t.\u0275fac=function(o){return new(o||t)(s(h),s(g))},t.\u0275prov=a({token:t,factory:t.\u0275fac});let r=t;return r})();var _t=[{path:"",pathMatch:"full",redirectTo:"pages/dashboard"},{path:"admin",canActivate:[yt,bt],loadChildren:()=>import("./chunk-TNIIY3RG.js").then(r=>r.PagesRoutesModule)},{path:"pages",loadChildren:()=>import("./chunk-4ZOIAWPH.js").then(r=>r.PagesModule)},{path:"auth",loadChildren:()=>import("./chunk-NPGHL6QX.js").then(r=>r.AuthModule)},{path:"**",redirectTo:"pages/error/404"}],te={useHash:b?.production},$t=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=u({type:t}),t.\u0275inj=m({providers:[Lt,Bt,x,g,j,Et,It],imports:[M.forRoot(_t,te),M]});let r=t;return r})();var Wt=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=G({type:t,selectors:[["ngx-app"]],decls:1,vars:0,template:function(o,n){o&1&&L(0,"router-outlet")},dependencies:[Q],encapsulation:2});let r=t;return r})();var re="AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY";function oe(r){return new k(r)}var zt=(()=>{let t=class t{constructor(e,o){this.router=e,this.title=o,this.siteName="Daia Enisia Personalizados ",this.getFullTitle=()=>this.siteName+this.getRouterNameByParam(),this.getRouterNameByParam=()=>{let n=this.router.routerState.snapshot.url.split("/"),c=new ft().transform(n[2]),p=parseInt(n.pop())||"";return`- ${c} ${p}`},e.events.subscribe(n=>{n instanceof Z&&this.title.setTitle(this.getFullTitle())})}};t.\u0275fac=function(o){return new(o||t)(s(h),s(Y))},t.\u0275mod=u({type:t,bootstrap:[Wt]}),t.\u0275inj=m({imports:[K,lt,z,ut.forRoot({defaultLanguage:"br",loader:{useFactory:oe,provide:mt,deps:[S]}}),At,$t,Dt,Tt.forRoot(),Gt.forRoot(),jt.forRoot(),X.forRoot(),et.forRoot(),ot.forRoot(),rt.forRoot(),q.forRoot(),it.forRoot(),_.forRoot({messageGoogleMapKey:re})]});let r=t;return r})();b?.production&&void 0;V().bootstrapModule(zt).catch(r=>console.error(r));
