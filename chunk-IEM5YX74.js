import{c as _e,d as pe,h as ue,i as fe,j as ge}from"./chunk-W2NMA7JQ.js";import{a as M}from"./chunk-FDVHJP7D.js";import{a as me}from"./chunk-5FYL2Y4A.js";import{a as be}from"./chunk-ATT2UKJQ.js";import{$a as h,$b as W,$c as F,Ad as $,Bd as ee,Ca as c,Da as a,Ea as g,Ha as f,Ib as q,Ka as b,M as A,Ma as l,Mb as G,Md as te,Pb as J,Qd as ne,T as x,U as R,Ud as ie,Va as v,Vd as oe,Wa as p,Wd as re,Xd as ae,Y as m,Ya as B,Yb as Q,Z as _,Za as z,_a as y,ab as S,bd as U,ca as w,cd as N,ce,de as le,eb as K,ed as T,fd as X,gd as Y,ha as s,hd as Z,ia as P,ib as V,ie as se,jd as D,je as de,pa as I,qb as j,ra as u,rb as E,ta as d,tb as H}from"./chunk-7I3W2GY5.js";var Ce=(()=>{let o=class o{};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=x({type:o,selectors:[["ngx-products"]],decls:1,vars:0,template:function(n,r){n&1&&g(0,"router-outlet")},dependencies:[Q],encapsulation:2});let t=o;return t})();function Se(t,o){}function we(t,o){t&1&&u(0,Se,0,0,"ng-template")}function Pe(t,o){}function Ie(t,o){t&1&&u(0,Pe,0,0,"ng-template")}function Ve(t,o){if(t&1){let e=f();c(0,"base-list-style",14),b("onSelected",function(n){m(e);let r=l(2);return _(r.selectedConfirm(n))})("onCreate",function(n){m(e);let r=l(2);return _(r.onCreateConfirm(n))})("onDelete",function(n){m(e);let r=l(2);return _(r.onDeleteConfirm(n))})("onFilter",function(n){m(e);let r=l(2);return _(r.onFilterConfirm(n))})("onEdit",function(n){m(e);let r=l(2);return _(r.onEditConfirm(n))}),a()}if(t&2){let e=l(2);d("source",e.service.source)("sourceData",e.service.sourceData)("columns",e.service.columns)("routerName",e.routerName)("model",e.model)}}function Ee(t,o){if(t&1){let e=f();c(0,"nb-card-body"),u(1,Ve,1,5,"base-list-style",11),c(2,"button",12),b("click",function(){m(e);let n=l();return _(n.service.refreshData())}),g(3,"nb-icon",13),p(4,"Refresh Data "),a()()}if(t&2){let e=l();s(),d("ngIf",e.service)}}var xe=(()=>{let o=class o extends ue{constructor(i){super(i),this.injector=i,this.routerName="Smart Products",this.model=pe(),this.service=i.get(M)}};o.\u0275fac=function(n){return new(n||o)(P(w))},o.\u0275cmp=x({type:o,selectors:[["ngx-smart-product"]],features:[I],decls:18,vars:6,consts:[["flip",""],["listView",""],[3,"flipped"],["accent","warning"],[4,"ngTemplateOutlet"],["accent","success"],[2,"display","flex","align-items","center"],["size","medium"],["icon","chevron-left-outline",3,"click"],[2,"flex","1",3,"value","status","displayValue"],["icon","chevron-right-outline",3,"click"],[3,"source","sourceData","columns","routerName","model","onSelected","onCreate","onDelete","onFilter","onEdit",4,"ngIf"],["nbButton","","status","info","shape","semi-round",1,"ml-4",3,"click"],["icon","refresh-outline"],[3,"onSelected","onCreate","onDelete","onFilter","onEdit","source","sourceData","columns","routerName","model"]],template:function(n,r){if(n&1){let C=f();c(0,"nb-flip-card",2,0)(2,"nb-card-front")(3,"nb-card",3),u(4,we,1,0,null,4),a()(),c(5,"nb-card-back")(6,"nb-card",5),u(7,Ie,1,0,null,4),a()()(),c(8,"nb-card")(9,"nb-card-body")(10,"div",6)(11,"nb-actions",7)(12,"nb-action",8),b("click",function(){m(C);let k=v(1);return _(r.setPage(-1,k))}),a()(),g(13,"nb-progress-bar",9),c(14,"nb-actions",7)(15,"nb-action",10),b("click",function(){m(C);let k=v(1);return _(r.setPage(1,k))}),a()()()()(),u(16,Ee,5,1,"ng-template",null,1,V)}if(n&2){let C=v(17);d("flipped",!0),s(4),d("ngTemplateOutlet",C),s(3),d("ngTemplateOutlet",C),s(6),d("value",r.progress)("status","info")("displayValue",!0)}},dependencies:[fe,E,H,T,N,X,Y,Z,F,D,$,ee,te],encapsulation:2});let t=o;return t})();var Fe=(t,o)=>({productId:t,categoryId:o});function Ne(t,o){if(t&1){let e=f();c(0,"div")(1,"div",11)(2,"label",18),p(3,"Description"),a(),c(4,"input",19),S("ngModelChange",function(n){m(e);let r=l(3);return h(r.service.data.description,n)||(r.service.data.description=n),_(n)}),a()()()}if(t&2){let e=l(3);s(4),y("ngModel",e.service.data.description)}}function Te(t,o){if(t&1&&(c(0,"nb-option",24),p(1),a()),t&2){let e=o.$implicit,i=l(5);d("value",K(3,Fe,i.service==null||i.service.data==null?null:i.service.data.id,e.id)),s(),z(" ",e.id,": ",e.name," ")}}function De(t,o){if(t&1){let e=f();c(0,"div",22)(1,"nb-select",23),S("ngModelChange",function(n){m(e);let r=l(4);return h(r.service.data.categories,n)||(r.service.data.categories=n),_(n)}),c(2,"nb-option",24),p(3,"Reset"),a(),u(4,Te,2,6,"nb-option",25),a()()}if(t&2){let e=l(4);s(),y("ngModel",e.service.data.categories),d("selected",e.service.data.categories)("compareWith",e.compareByIds),s(),d("value",null),s(2),d("ngForOf",e.relations.categories)}}function Me(t,o){if(t&1&&(c(0,"div")(1,"div",11)(2,"label",20),p(3,"Linked Categories"),a(),u(4,De,5,5,"div",21),a()()),t&2){let e=l(3),i=v(5);s(4),d("ngIf",e.relations.categories&&e.relations.categories.length)("ngIfElse",i)}}function ke(t,o){if(t&1){let e=f();c(0,"nb-tag",28),b("click",function(){let n=m(e).$implicit,r=l(4);return _(r.linkCategory(n))}),a()}if(t&2){let e=o.$implicit,i=l(4);d("appearance",i.existData(e)>-1?"filled":"outline")("text",e.name)("status",e.color)}}function Be(t,o){if(t&1&&(c(0,"div")(1,"div",11)(2,"label",20),p(3,"Linked Categories"),a(),c(4,"nb-tag-list",26),u(5,ke,1,3,"nb-tag",27),a()()()),t&2){let e=l(3);s(5),d("ngForOf",e.relations.categories)}}function We(t,o){if(t&1){let e=f();c(0,"nb-accordion-item",null,1)(2,"nb-accordion-item-header"),p(3),a(),c(4,"nb-accordion-item-body")(5,"nb-card")(6,"nb-card-header"),p(7,"Product"),a(),c(8,"nb-card-body")(9,"div",9)(10,"div",10)(11,"div",11)(12,"label",12),p(13,"Name"),a(),c(14,"input",13),S("ngModelChange",function(n){m(e);let r=l(2);return h(r.service.data.name,n)||(r.service.data.name=n),_(n)}),a()()(),c(15,"div",10)(16,"div",11)(17,"label",14),p(18,"Code"),a(),c(19,"input",15),S("ngModelChange",function(n){m(e);let r=l(2);return h(r.service.data.code,n)||(r.service.data.code=n),_(n)}),a()()()(),c(20,"div",9)(21,"div",10)(22,"div",11)(23,"label",16),p(24,"Price"),a(),c(25,"input",17),S("ngModelChange",function(n){m(e);let r=l(2);return h(r.service.data.price,n)||(r.service.data.price=n),_(n)}),a()()()()()(),c(26,"nb-card")(27,"nb-card-header"),p(28,"Product Data"),a(),c(29,"nb-card-body"),u(30,Ne,5,1,"div",8)(31,Me,5,2,"div",8)(32,Be,6,1,"div",8),a()()()()}if(t&2){let e=l(2);s(3),B(" Product - ",!(e.service==null||e.service.data==null)&&e.service.data.id?"Edit":"Creat","ing "),s(11),y("ngModel",e.service.data.name),s(5),y("ngModel",e.service.data.code),s(6),y("ngModel",e.service.data.price),s(5),d("ngIf",e.service==null?null:e.service.data),s(),d("ngIf",!1),s(),d("ngIf",e.service==null?null:e.service.data)}}function Oe(t,o){if(t&1&&(c(0,"nb-accordion-item-body"),g(1,"base-attachment",29),a()),t&2){let e=l(3);s(),d("typeKey",2)("valueKey",e.service==null||e.service.data==null?null:e.service.data.id)}}function Le(t,o){if(t&1&&(c(0,"nb-accordion-item",null,2)(2,"nb-accordion-item-header"),p(3),a(),u(4,Oe,2,2,"nb-accordion-item-body",8),a()),t&2){let e=l(2);s(3),B(" Attachment - ",!(e.service==null||e.service.data==null)&&e.service.data.id?"Edit":"Creat","ing "),s(),d("ngIf",e.service==null||e.service.data==null?null:e.service.data.id)}}function Ae(t,o){t&1&&(c(0,"nb-accordion",7),u(1,We,33,7,"nb-accordion-item",8)(2,Le,5,2,"nb-accordion-item",8),a()),t&2&&(s(),d("ngIf",!0),s(),d("ngIf",!0))}function Re(t,o){if(t&1){let e=f();c(0,"nb-card",30)(1,"nb-card-body",31)(2,"button",32),b("click",function(){m(e);let n=l();return _(n.onSave())}),g(3,"nb-icon",33),p(4,"Salvar"),a(),c(5,"button",34),b("click",function(){m(e);let n=l();return _(n.onDelete())}),g(6,"nb-icon",35),p(7,"Deletar"),a()()()}if(t&2){let e=l();s(2),d("disabled",!(!(e.service==null||e.service.data==null)&&e.service.data.code)||!(!(e.service==null||e.service.data==null)&&e.service.data.name))}}function ze(t,o){t&1&&(c(0,"nb-card-body"),p(1,"Categories Not Loaded"),a())}var ve=(()=>{let o=class o extends ge{constructor(i){super(i),this.injector=i,this.service=i.get(M),this.categoryService=i.get(me)}ngOnInit(){this.loadSettings(),this.getData(this.loadNewData()),this.getRelationships()}loadNewData(){return new _e}validateProductData(){return!0}getRelationships(){this.categoryService.refreshFullData().subscribe({next:i=>{i&&i.content?(this.setRelationData("categories",i.content),this.notify.showSuccess("Loaded Categories","Success")):this.notify.showNoData()},error:i=>this.service._handlerError(i)})}setRelationData(i,n){i&&n?this.relations[i]=n:console.error("Invalid Key or Data")}existData(i){return this.service?.data?.categories?.findIndex(n=>(n.categoryId||n.id)==(i.categoryId||i.id))}linkCategory(i){let n=this.existData(i);n>-1?this.service.data.categories=this.service.data.categories.filter((r,C)=>C!=n):this.service.data.categories.push({productId:this.service.data.id,categoryId:i.id})}};o.\u0275fac=function(n){return new(n||o)(P(w))},o.\u0275cmp=x({type:o,selectors:[["ngx-form-product"]],features:[I],decls:6,vars:2,consts:[["noCategories",""],["productForm",""],["attachmentForm",""],["multi","",4,"ngIf"],["style","margin-top: 1%;",4,"ngIf"],["nbSuffix","","nbButton","",3,"click"],["pack","eva","icon","corner-down-left-outline"],["multi",""],[4,"ngIf"],[1,"row"],[1,"col-sm-6"],[1,"form-group"],["for","inputName",1,"label"],["type","text","type","text","id","inputName","fullWidth","","nbInput","","status","basic","shape","rectangle","fieldSize","medium","placeholder","Max 50 chars",3,"ngModelChange","ngModel"],["for","inputCode",1,"label"],["type","text","type","text","id","inputCode","fullWidth","","nbInput","","status","basic","shape","rectangle","fieldSize","medium","placeholder","Max 50 chars",3,"ngModelChange","ngModel"],["for","inputPrice",1,"label"],["type","text","id","inputPrice","fullWidth","","nbInput","","status","basic","shape","rectangle","fieldSize","medium","placeholder","Max 50 chars",3,"ngModelChange","ngModel"],["for","inputEmail",1,"label"],["type","email","nbInput","","fullWidth","","placeholder","Max 100 chars",3,"ngModelChange","ngModel"],["for","categorySelector",1,"label"],["id","categorySelector",4,"ngIf","ngIfElse"],["id","categorySelector"],["multiple","",3,"ngModelChange","ngModel","selected","compareWith"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"row","my-2","mx-1"],[3,"appearance","text","status","click",4,"ngFor","ngForOf"],[3,"click","appearance","text","status"],[3,"typeKey","valueKey"],[2,"margin-top","1%"],[2,"display","flex","justify-content","space-between","padding","1%"],["nbButton","","status","success","shape","semi-round",3,"click","disabled"],["icon","checkmark-circle-outline"],["nbButton","","status","danger","shape","semi-round",3,"click"],["icon","trash-outline"]],template:function(n,r){if(n&1){let C=f();u(0,Ae,3,2,"nb-accordion",3)(1,Re,8,1,"nb-card",4),c(2,"button",5),b("click",function(){return m(C),_(r.onBack())}),g(3,"nb-icon",6),a(),u(4,ze,2,0,"ng-template",null,0,V)}n&2&&(d("ngIf",r.service==null?null:r.service.data),s(),d("ngIf",r.service==null?null:r.service.data))},dependencies:[be,q,G,J,j,E,T,N,U,F,ne,le,ce,D,ie,oe,ae,re,se,de],styles:[".dropzoneSize[_ngcontent-%COMP%]{max-height:20%}"]});let t=o;return t})();var Ke=[{path:"",component:Ce,children:[{path:"smart-product",component:xe},{path:"form-product/:id",component:ve}]}],ct=(()=>{let o=class o{};o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=R({type:o}),o.\u0275inj=A({imports:[W.forChild(Ke),W]});let t=o;return t})();export{ct as a};
