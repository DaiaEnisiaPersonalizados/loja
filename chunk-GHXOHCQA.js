import{e as ie,f as oe,h as re,i as ae,j as ce}from"./chunk-S4LPRXQU.js";import{a as F}from"./chunk-YXQOJ4T4.js";import{a as le}from"./chunk-7WKCYMLP.js";import{$a as v,$b as W,$c as I,Ad as U,Bd as X,Ca as r,Da as a,Ea as C,Ha as f,Ib as j,Ka as g,M as P,Ma as l,Mb as K,Md as Y,Pb as H,Qd as Z,T as y,U as O,Ud as $,Va as N,Vd as ee,Wa as _,Wd as te,Xd as ne,Y as d,Ya as B,Yb as R,Z as p,_a as x,ab as h,bd as q,ca as S,cd as T,ed as M,fd as G,gd as J,ha as m,hd as Q,ia as w,ib as z,jd as D,pa as V,ra as u,rb as E,ta as s,tb as L}from"./chunk-M3I5HJ6Y.js";var me=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=y({type:i,selectors:[["ngx-categories"]],decls:1,vars:0,template:function(n,o){n&1&&C(0,"router-outlet")},dependencies:[R],encapsulation:2});let t=i;return t})();function Ce(t,i){}function ge(t,i){t&1&&u(0,Ce,0,0,"ng-template")}function fe(t,i){}function be(t,i){t&1&&u(0,fe,0,0,"ng-template")}function ye(t,i){if(t&1){let e=f();r(0,"base-list-style",14),g("onSelected",function(n){d(e);let o=l(2);return p(o.selectedConfirm(n))})("onCreate",function(n){d(e);let o=l(2);return p(o.onCreateConfirm(n))})("onDelete",function(n){d(e);let o=l(2);return p(o.onDeleteConfirm(n))})("onFilter",function(n){d(e);let o=l(2);return p(o.onFilterConfirm(n))})("onEdit",function(n){d(e);let o=l(2);return p(o.onEditConfirm(n))}),a()}if(t&2){let e=l(2);s("source",e.service.source)("sourceData",e.service.sourceData)("columns",e.service.columns)("routerName",e.routerName)("model",e.model)}}function xe(t,i){if(t&1){let e=f();r(0,"nb-card-body"),u(1,ye,1,5,"base-list-style",11),r(2,"button",12),g("click",function(){d(e);let n=l();return p(n.service.refreshData())}),C(3,"nb-icon",13),_(4,"Refresh Data "),a()()}if(t&2){let e=l();m(),s("ngIf",e.service)}}var se=(()=>{let i=class i extends re{constructor(c){super(c),this.injector=c,this.routerName="Smart Categories",this.model=oe(),this.service=c.get(F)}};i.\u0275fac=function(n){return new(n||i)(w(S))},i.\u0275cmp=y({type:i,selectors:[["ngx-smart-category"]],features:[V],decls:18,vars:6,consts:[["flip",""],["listView",""],[3,"flipped"],["accent","warning"],[4,"ngTemplateOutlet"],["accent","success"],[2,"display","flex","align-items","center"],["size","medium"],["icon","chevron-left-outline",3,"click"],[2,"flex","1",3,"value","status","displayValue"],["icon","chevron-right-outline",3,"click"],[3,"source","sourceData","columns","routerName","model","onSelected","onCreate","onDelete","onFilter","onEdit",4,"ngIf"],["nbButton","","status","info","shape","semi-round",1,"ml-4",3,"click"],["icon","refresh-outline"],[3,"onSelected","onCreate","onDelete","onFilter","onEdit","source","sourceData","columns","routerName","model"]],template:function(n,o){if(n&1){let b=f();r(0,"nb-flip-card",2,0)(2,"nb-card-front")(3,"nb-card",3),u(4,ge,1,0,null,4),a()(),r(5,"nb-card-back")(6,"nb-card",5),u(7,be,1,0,null,4),a()()(),r(8,"nb-card")(9,"nb-card-body")(10,"div",6)(11,"nb-actions",7)(12,"nb-action",8),g("click",function(){d(b);let k=N(1);return p(o.setPage(-1,k))}),a()(),C(13,"nb-progress-bar",9),r(14,"nb-actions",7)(15,"nb-action",10),g("click",function(){d(b);let k=N(1);return p(o.setPage(1,k))}),a()()()()(),u(16,xe,5,1,"ng-template",null,1,z)}if(n&2){let b=N(17);s("flipped",!0),m(4),s("ngTemplateOutlet",b),m(3),s("ngTemplateOutlet",b),m(6),s("value",o.progress)("status","info")("displayValue",!0)}},dependencies:[ae,E,L,M,T,G,J,Q,I,D,U,X,Y],encapsulation:2});let t=i;return t})();function ve(t,i){if(t&1){let e=f();r(0,"div")(1,"div",10)(2,"label",17),_(3,"Description"),a(),r(4,"input",18),h("ngModelChange",function(n){d(e);let o=l(3);return v(o.service.data.description,n)||(o.service.data.description=n),p(n)}),a()()()}if(t&2){let e=l(3);m(4),x("ngModel",e.service.data.description)}}function he(t,i){t&1&&(r(0,"div")(1,"div",10)(2,"label",17),_(3,"Parent Category (Need Implement)"),a()()())}function Se(t,i){if(t&1){let e=f();r(0,"nb-accordion-item",null,0)(2,"nb-accordion-item-header"),_(3),a(),r(4,"nb-accordion-item-body")(5,"nb-card")(6,"nb-card-header"),_(7,"Category"),a(),r(8,"nb-card-body")(9,"div",8)(10,"div",9)(11,"div",10)(12,"label",11),_(13,"Name"),a(),r(14,"input",12),h("ngModelChange",function(n){d(e);let o=l(2);return v(o.service.data.name,n)||(o.service.data.name=n),p(n)}),a()()(),r(15,"div",9)(16,"div",10)(17,"label",13),_(18,"Code"),a(),r(19,"input",14),h("ngModelChange",function(n){d(e);let o=l(2);return v(o.service.data.code,n)||(o.service.data.code=n),p(n)}),a()()()(),r(20,"div",8)(21,"div",9)(22,"div",10)(23,"label",15),_(24,"Color"),a(),r(25,"input",16),h("ngModelChange",function(n){d(e);let o=l(2);return v(o.service.data.color,n)||(o.service.data.color=n),p(n)}),a()()()()()(),r(26,"nb-card")(27,"nb-card-header"),_(28,"Category Data"),a(),r(29,"nb-card-body"),u(30,ve,5,1,"div",7)(31,he,4,0,"div",7),a()()()()}if(t&2){let e=l(2);m(3),B(" Category - ",!(e.service==null||e.service.data==null)&&e.service.data.id?"Edit":"Creat","ing "),m(11),x("ngModel",e.service.data.name),m(5),x("ngModel",e.service.data.code),m(6),x("ngModel",e.service.data.color),m(5),s("ngIf",e.service==null?null:e.service.data),m(),s("ngIf",e.service==null?null:e.service.data)}}function we(t,i){if(t&1&&(r(0,"nb-accordion-item-body"),C(1,"base-attachment",19),a()),t&2){let e=l(3);m(),s("typeKey",3)("valueKey",e.service==null||e.service.data==null?null:e.service.data.id)}}function Ve(t,i){if(t&1&&(r(0,"nb-accordion-item",null,1)(2,"nb-accordion-item-header"),_(3),a(),u(4,we,2,2,"nb-accordion-item-body",7),a()),t&2){let e=l(2);m(3),B(" Attachment - ",!(e.service==null||e.service.data==null)&&e.service.data.id?"Edit":"Creat","ing "),m(),s("ngIf",e.service==null||e.service.data==null?null:e.service.data.id)}}function Ne(t,i){t&1&&(r(0,"nb-accordion",6),u(1,Se,32,6,"nb-accordion-item",7)(2,Ve,5,2,"nb-accordion-item",7),a()),t&2&&(m(),s("ngIf",!0),m(),s("ngIf",!0))}function Ee(t,i){if(t&1){let e=f();r(0,"nb-card",20)(1,"nb-card-body",21)(2,"button",22),g("click",function(){d(e);let n=l();return p(n.onSave())}),C(3,"nb-icon",23),_(4,"Salvar"),a(),r(5,"button",24),g("click",function(){d(e);let n=l();return p(n.onDelete())}),C(6,"nb-icon",25),_(7,"Deletar"),a()()()}if(t&2){let e=l();m(2),s("disabled",!(!(e.service==null||e.service.data==null)&&e.service.data.code)||!(!(e.service==null||e.service.data==null)&&e.service.data.name))}}var de=(()=>{let i=class i extends ce{constructor(c){super(c),this.injector=c,this.service=c.get(F)}ngOnInit(){this.loadSettings(),this.getData(this.loadNewData())}loadNewData(){return new ie}validateCategoryData(){return!0}};i.\u0275fac=function(n){return new(n||i)(w(S))},i.\u0275cmp=y({type:i,selectors:[["ngx-form-category"]],features:[V],decls:4,vars:2,consts:[["categoryForm",""],["attachmentForm",""],["multi","",4,"ngIf"],["style","margin-top: 1%;",4,"ngIf"],["nbSuffix","","nbButton","",3,"click"],["pack","eva","icon","corner-down-left-outline"],["multi",""],[4,"ngIf"],[1,"row"],[1,"col-sm-6"],[1,"form-group"],["for","inputName",1,"label"],["type","text","type","text","id","inputName","fullWidth","","nbInput","","status","basic","shape","rectangle","fieldSize","medium","placeholder","Max 50 chars",3,"ngModelChange","ngModel"],["for","inputCode",1,"label"],["type","text","type","text","id","inputCode","fullWidth","","nbInput","","status","basic","shape","rectangle","fieldSize","medium","placeholder","Max 50 chars",3,"ngModelChange","ngModel"],["for","inputColor",1,"label"],["type","text","id","inputColor","fullWidth","","nbInput","","status","basic","shape","rectangle","fieldSize","medium","placeholder","basic, primary, success, warning, danger, info, control",3,"ngModelChange","ngModel"],["for","inputEmail",1,"label"],["type","email","nbInput","","fullWidth","","placeholder","Max 100 chars",3,"ngModelChange","ngModel"],[3,"typeKey","valueKey"],[2,"margin-top","1%"],[2,"display","flex","justify-content","space-between","padding","1%"],["nbButton","","status","success","shape","semi-round",3,"click","disabled"],["icon","checkmark-circle-outline"],["nbButton","","status","danger","shape","semi-round",3,"click"],["icon","trash-outline"]],template:function(n,o){n&1&&(u(0,Ne,3,2,"nb-accordion",2)(1,Ee,8,1,"nb-card",3),r(2,"button",4),g("click",function(){return o.onBack()}),C(3,"nb-icon",5),a()),n&2&&(s("ngIf",o.service==null?null:o.service.data),m(),s("ngIf",o.service==null?null:o.service.data))},dependencies:[le,j,K,H,E,M,T,q,I,Z,D,$,ee,ne,te],styles:[".dropzoneSize[_ngcontent-%COMP%]{max-height:20%}"]});let t=i;return t})();var Ie=[{path:"",component:me,children:[{path:"smart-category",component:se},{path:"form-category/:id",component:de}]}],Ge=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=O({type:i}),i.\u0275inj=P({imports:[W.forChild(Ie),W]});let t=i;return t})();export{Ge as a};