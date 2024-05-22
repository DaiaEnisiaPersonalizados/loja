import{a as j,e as M,g as q,h as W,i as $,j as H}from"./chunk-7VISWSNC.js";import{$ as u,$a as T,Bd as R,Ea as r,Fa as c,Ga as v,Ja as x,Ld as B,Ma as h,Oa as p,Ra as A,V as C,Xa as _,Ya as d,_ as f,_a as w,dd as K,ed as F,fd as P,gd as V,hb as S,i as g,ia as I,ib as E,ja as s,ka as y,kb as b,ld as U,sb as z,ta as m,tb as N,va as l,vb as D,yd as O,zd as k}from"./chunk-6JUWCAAP.js";function G(e,a){}function J(e,a){e&1&&m(0,G,0,0,"ng-template")}function Q(e,a){if(e&1&&(r(0,"div"),m(1,J,1,0,null,6),c()),e&2){p();let t=_(4);s(),l("ngTemplateOutlet",t)}}function X(e,a){if(e&1&&(r(0,"button",7),d(1,"Show Attachments"),c()),e&2){p();let t=_(4);l("nbPopover",t)}}function Y(e,a){}function Z(e,a){e&1&&m(0,Y,0,0,"ng-template")}function ee(e,a){}function te(e,a){e&1&&m(0,ee,0,0,"ng-template")}function ne(e,a){if(e&1&&(r(0,"nb-tab",18),m(1,te,1,0,null,6),c()),e&2){p(2);let t=_(6);s(),l("ngTemplateOutlet",t)}}function ie(e,a){e&1&&(r(0,"div")(1,"ngx-dropzone-label",19),v(2,"div",20),c()())}function ae(e,a){e&1&&(r(0,"ngx-dropzone-label")(1,"div"),d(2,"Drop your file here"),c()())}function oe(e,a){if(e&1){let t=x();r(0,"ngx-dropzone-image-preview",21),h("removed",function(n){f(t);let o=p(2);return u(o.onRemoveAttachment(n))}),r(1,"ngx-dropzone-label")(2,"span",22),d(3),S(4,"ngxRound"),c()()()}if(e&2){let t=a.$implicit;l("removable",!0)("file",t),s(3),T("(",t.type,") - ",E(4,4,t.size/1024/1024)," MB")}}function le(e,a){if(e&1&&(r(0,"span"),d(1),c()),e&2){let t=p(2);s(),w(" Please select an item to ",t.selectedId&&t.selectedAction||"Handle"," ")}}function re(e,a){if(e&1){let t=x();r(0,"button",23),h("click",function(){f(t);let n=p(2);return u(n.onDeleteAttachment())}),d(1," Confirm Exclusion "),c()}}function ce(e,a){if(e&1){let t=x();r(0,"nb-user",27),h("click",function(){f(t);let n=p().$implicit,o=p(3);return u(o.selectedId=n.id)}),c()}if(e&2){let t=p().$implicit;A("picture",t.url),l("title",t.alias||t.originName)}}function se(e,a){if(e&1&&(r(0,"div"),m(1,ce,1,2,"nb-user",26),c()),e&2){let t=a.$implicit;s(),l("ngIf",t)}}function pe(e,a){if(e&1&&(r(0,"nb-card-footer")(1,"div",24),m(2,se,2,1,"div",25),c()()),e&2){let t=p(2);s(2),l("ngForOf",t.attachments)}}function me(e,a){if(e&1){let t=x();r(0,"nb-card",8)(1,"nb-card-header"),d(2,"Attachment List"),c(),r(3,"nb-tabset",9),h("changeTab",function(n){f(t);let o=p();return u(n.tabTitle!="Clear"?o.selectedAction=n.tabTitle:o.selectedId=0)}),r(4,"nb-tab",10),m(5,Z,1,0,null,6),c(),m(6,ne,2,1,"nb-tab",11),r(7,"nb-tab",12)(8,"ngx-dropzone",13,3),h("change",function(n){f(t);let o=p();return u(o.onSelectAttachment(n))}),m(10,ie,3,0,"div",5)(11,ae,3,0,"ng-template",null,4,b)(13,oe,5,6,"ngx-dropzone-image-preview",14),c()(),v(14,"nb-tab",15),c(),r(15,"nb-card-body"),m(16,le,2,1,"span",16)(17,re,2,0,"button",17),c(),m(18,pe,3,1,"nb-card-footer",16),c()}if(e&2){let t=_(12),i=p(),n=_(6);s(5),l("ngTemplateOutlet",n),s(),l("ngIf",i.selectedId),s(2),l("multiple",!0)("accept","image/*"),s(2),l("ngIf",i.files&&i.files.length)("ngIfElse",t),s(3),l("ngForOf",i.files),s(3),l("ngIf",!i.selectedId||(i.selectedAction==null?null:i.selectedAction.includes("Preview"))),s(),l("ngIf",i.selectedId&&(i.selectedAction==null?null:i.selectedAction.includes("Delete"))),s(),l("ngIf",i.selectedAction!="Upload")}}function _e(e,a){if(e&1&&(r(0,"nb-card-body",29),v(1,"img",30),c()),e&2){let t=p(2);s(),l("src",t.getSelected().url,I)}}function de(e,a){if(e&1&&m(0,_e,2,1,"nb-card-body",28),e&2){let t=p();l("ngIf",t.selectedId)}}var ye=(()=>{let a=class a{constructor(i,n){this.upload=i,this.notify=n,this.asPopUp=!1,this.valueKey=0,this.typeKey=0,this.selectedAction="",this.selectedId=0,this.attachments=[],this.files=[],this.getImageSource=o=>this.upload.imageSrc(o),this.getFile=o=>this.upload.getFileByNameView("?fileName="+o),this.getSelected=()=>this.attachments&&this.attachments.length&&this.attachments.find(o=>o.id==this.selectedId)||{url:this.upload.defaultPhoto}}ngOnInit(){this.valueKey&&this.valueKey!="new"&&parseInt(this.valueKey)?this.loadAttachments(this.typeKey,parseInt(this.valueKey)):console.error("Invalid ValueKey Id:",this.valueKey)}updateAttachmentsUrl(i){this.attachments=i||[];for(let n in this.attachments)this.attachments[n].url||(this.attachments[n].url=this.getImageSource(this.attachments[n]))}loadAttachments(i,n){this.valueKey&&this.valueKey!="new"?this.upload.getAttachments(i,n).subscribe(o=>g(this,null,function*(){o.success?this.updateAttachmentsUrl(o.content):console.error("Falha ao obter Arquivos",o)})):console.error("Invalid ID:",this.valueKey)}onSelectAttachment(i){return g(this,null,function*(){let n=new FormData;if(!this.valueKey)return this.notify.showError("Upload de Arquivos \xE9 disponivel somente em edi\xE7\xE3o","N\xE3o Aceito");this.files=[],this.files.push(...i.addedFiles),n.set(this.typeKey,this.valueKey);for(let o in this.files)n.append(o,this.files[o],this.files[o].name);this.upload.createFile(n).subscribe(o=>g(this,null,function*(){o.success?(this.attachments.push(...o.content),this.updateAttachmentsUrl(this.attachments)):console.error("Falha no Upload dos Arquivos",o)}))})}onRemoveAttachment(i){this.files.splice(this.files.indexOf(i),1)}onDeleteAttachment(){let i=this.attachments.findIndex(n=>n.id==this.selectedId);this.selectedId&&i>-1?(this.attachments.splice(i,1),this.upload.deleteAttachment(this.selectedId).subscribe(n=>g(this,null,function*(){n.success?(this.selectedId=0,this.updateAttachmentsUrl(this.attachments),this.notify.showSuccess("Deleted!","Success")):this.notify.showError("Failed to Delete","Failure")}))):console.error("Invalid ID")}};a.\u0275fac=function(n){return new(n||a)(y(q),y(M))},a.\u0275cmp=C({type:a,selectors:[["base-attachment"]],inputs:{asPopUp:"asPopUp",valueKey:"valueKey",typeKey:"typeKey"},decls:7,vars:2,consts:[["popup",""],["templateRef",""],["preview",""],["drop",""],["elseBlock",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["nbButton","","fullWidth","","status","info","size","medium",3,"nbPopover"],[1,"margin-bottom-0"],[3,"changeTab"],["tabTitle","Preview","tabIcon","eye-outline"],["tabTitle","Delete","tabIcon","trash-outline",4,"ngIf"],["tabTitle","Upload","tabIcon","cloud-upload-outline"],[1,"dropzoneSize","mt-6",3,"change","multiple","accept"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"removable","file","removed",4,"ngFor","ngForOf"],["tabTitle","Clear","tabIcon","backspace-outline"],[4,"ngIf"],["nbButton","","fullWidth","","status","warning","size","small",3,"click",4,"ngIf"],["tabTitle","Delete","tabIcon","trash-outline"],[2,"position","relative","text-align","center","color","white"],[2,"position","absolute","top","50%","left","50%","transform","translate(-50%, -50%)","width","50%"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"removed","removable","file"],[2,"color","white"],["nbButton","","fullWidth","","status","warning","size","small",3,"click"],[1,"my-4",2,"display","flex","flex-wrap","wrap","justify-content","space-around","flex-basis","25%"],[4,"ngFor","ngForOf"],["shape","rectangle","name","","size","large",3,"picture","title","click",4,"ngIf"],["shape","rectangle","name","","size","large",3,"click","picture","title"],["class","image-preview-container",4,"ngIf"],[1,"image-preview-container"],["alt","Image preview",1,"image-preview",3,"src"]],template:function(n,o){if(n&1&&m(0,Q,2,1,"div",5)(1,X,2,1,"ng-template",null,0,b)(3,me,19,10,"ng-template",null,1,b)(5,de,1,1,"ng-template",null,2,b),n&2){let L=_(2);l("ngIf",!o.asPopUp)("ngIfElse",L)}},dependencies:[k,O,B,$,W,H,z,N,D,V,F,P,K,R,U,j],styles:[".image-preview-container[_ngcontent-%COMP%]{justify-content:center;align-items:center;display:flex}.image-preview[_ngcontent-%COMP%]{object-fit:cover}"]});let e=a;return e})();export{ye as a};
