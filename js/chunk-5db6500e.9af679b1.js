(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5db6500e"],{"0b8c":function(e,t,n){},"33fe":function(e,t,n){},"4f8d":function(e,t,n){"use strict";n("0b8c")},"5a68":function(e,t,n){"use strict";n("95a5")},"73b9":function(e,t,n){"use strict";n("33fe")},"95a5":function(e,t,n){},c1f7:function(e,t,n){"use strict";n.r(t);var o=n("7a23");function c(e,t,n,c,r,l){var a=Object(o["resolveComponent"])("my-aside"),i=Object(o["resolveComponent"])("el-aside"),s=Object(o["resolveComponent"])("Expand"),u=Object(o["resolveComponent"])("el-icon"),b=Object(o["resolveComponent"])("Fold"),d=Object(o["resolveComponent"])("MyBreadcrumb"),m=Object(o["resolveComponent"])("my-header"),p=Object(o["resolveComponent"])("el-header"),f=Object(o["resolveComponent"])("my-tabs"),j=Object(o["resolveComponent"])("router-view"),O=Object(o["resolveComponent"])("el-main"),v=Object(o["resolveComponent"])("el-container");return Object(o["openBlock"])(),Object(o["createBlock"])(v,{class:"layout_container"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{width:r.asideWidth+"px"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",{class:"logo",style:Object(o["normalizeStyle"])({height:r.headerHeight+"px"})},"logo",4),Object(o["createVNode"])(a,{isCollapse:r.isAsideCollapse,"sidebar-list":c.sidebars},null,8,["isCollapse","sidebar-list"])]})),_:1},8,["width"]),Object(o["createVNode"])(v,{class:"main_container"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(p,{height:r.headerHeight+"px"},{default:Object(o["withCtx"])((function(){return[r.isAsideCollapse?(Object(o["openBlock"])(),Object(o["createBlock"])(u,{key:0,class:"isCollapseIcon",onClick:t[0]||(t[0]=function(e){return l.toggleSideCollapse(!1)})},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s)]})),_:1})):(Object(o["openBlock"])(),Object(o["createBlock"])(u,{key:1,class:"isCollapseIcon",onClick:t[1]||(t[1]=function(e){return l.toggleSideCollapse(!0)})},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(b)]})),_:1})),Object(o["createVNode"])(d,{list:r.breadcrumbList},null,8,["list"]),Object(o["createVNode"])(m)]})),_:1},8,["height"]),Object(o["createVNode"])(O,null,{default:Object(o["withCtx"])((function(){return[Object(o["withDirectives"])(Object(o["createVNode"])(f,{list:r.tabList,"onUpdate:list":t[2]||(t[2]=function(e){return r.tabList=e})},null,8,["list"]),[[o["vShow"],r.tabList&&r.tabList.length>0]]),Object(o["createVNode"])(j)]})),_:1})]})),_:1})]})),_:1})}var r=n("5502"),l=Object(o["defineComponent"])({name:"Expand"});const a={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},i=Object(o["createVNode"])("path",{fill:"currentColor",d:"M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"},null,-1);function s(e,t,n,c,r,l){return Object(o["openBlock"])(),Object(o["createBlock"])("svg",a,[i])}l.render=s,l.__file="packages/components/Expand.vue";var u=l,b=Object(o["defineComponent"])({name:"Fold"});const d={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},m=Object(o["createVNode"])("path",{fill:"currentColor",d:"M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"},null,-1);function p(e,t,n,c,r,l){return Object(o["openBlock"])(),Object(o["createBlock"])("svg",d,[m])}b.render=p,b.__file="packages/components/Fold.vue";var f=b,j=(n("b0c0"),Object(o["createTextVNode"])(" 首页 "));function O(e,t,n,c,r,l){var a=Object(o["resolveComponent"])("el-breadcrumb-item"),i=Object(o["resolveComponent"])("el-breadcrumb");return Object(o["openBlock"])(),Object(o["createBlock"])(i,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(a,{to:{path:"/welcome"}},{default:Object(o["withCtx"])((function(){return[j]})),_:1}),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.breadcrumbList,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(a,{key:t},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.name),1)]})),_:2},1024)})),128))]})),_:1})}var v={name:"MyBreadcrumb",data:function(){return{}},created:function(){},methods:{},computed:Object(r["b"])({breadcrumbList:function(e){return e.user.breadcrumbList}})},h=n("d959"),C=n.n(h);const k=C()(v,[["render",O]]);var g=k,B=function(e){return Object(o["pushScopeId"])("data-v-7a12903b"),e=e(),Object(o["popScopeId"])(),e},w={class:"header_container"},x=B((function(){return Object(o["createElementVNode"])("span",null,"我是头部",-1)})),y=[x];function V(e,t,n,c,r,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",w,y)}var N={name:"MyHeader",data:function(){return{}},components:{},created:function(){},mounted:function(){},methods:{}};n("4f8d");const _=C()(N,[["render",V],["__scopeId","data-v-7a12903b"]]);var L=_;function E(e,t,n,c,r,l){var a=Object(o["resolveComponent"])("MyAsideItem"),i=Object(o["resolveComponent"])("el-menu"),s=Object(o["resolveComponent"])("el-scrollbar");return Object(o["openBlock"])(),Object(o["createBlock"])(s,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{"default-active":"1",class:"el-menu-vertical-demo",collapse:n.isCollapse,"unique-opened":!0,onSelect:c.handleSelect,"text-color":c.textColor,"active-text-color":c.activeTextColor},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.sidebarList,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(a,{list:e,key:t},null,8,["list"])})),128))]})),_:1},8,["collapse","onSelect","text-color","active-text-color"])]})),_:1})}function M(e,t,n,c,r,l){var a=Object(o["resolveComponent"])("MyAsideItem",!0),i=Object(o["resolveComponent"])("el-sub-menu"),s=Object(o["resolveComponent"])("el-menu-item");return l.isHaveChildren(n.list)?(Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:0,index:n.list.path},{title:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("i",{class:Object(o["normalizeClass"])(["iconfont","icon-icon-".concat(n.list.icon)])},null,2),Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(n.list.name),1)]})),default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.list.children,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(a,{list:e,key:t},null,8,["list"])})),128))]})),_:1},8,["index"])):(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:1,index:n.list.path,route:n.list.route},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("i",{class:Object(o["normalizeClass"])(["iconfont","icon-icon-".concat(n.list.icon)])},null,2),Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(n.list.name),1)]})),_:1},8,["index","route"]))}var S={name:"MyAsideItem",props:{list:{type:Object,default:function(){}}},data:function(){return{}},components:{},created:function(){},mounted:function(){},methods:{togoTarget:function(e,t){console.log(e,t)},isHaveChildren:function(e){return!!(e&&e.children&&e.children.length>0)}}};const T=C()(S,[["render",M]]);var H=T,A={name:"MyAside",props:{sidebarList:{type:Array,default:function(){return[]}},isCollapse:{type:Boolean,default:!1}},data:function(){return{}},components:{MyAsideItem:H},mounted:function(){},setup:function(e){var t=Object(r["c"])(),n=function(e,n){console.log("handleSelect",e,n),t.commit("sidebarSetBreadcrumbList",n)},c=Object(o["ref"])("#5b80b4"),l=Object(o["ref"])("#fff");return Object(o["watchEffect"])((function(){l.value=e.isCollapse?"#409EFF":"#fff"})),{handleSelect:n,textColor:c,activeTextColor:l}}};n("73b9");const z=C()(A,[["render",E],["__scopeId","data-v-67e82bec"]]);var I=z;function F(e,t,n,c,r,l){var a=Object(o["resolveComponent"])("el-tab-pane"),i=Object(o["resolveComponent"])("el-tabs");return Object(o["openBlock"])(),Object(o["createBlock"])(i,{modelValue:r.activeName,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.activeName=e}),type:"card",closable:1!==r.number,onTabClick:l.tabClick,onTabRemove:l.tabRemove},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.list,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(a,{label:e.label,name:e.name,key:t},null,8,["label","name"])})),128))]})),_:1},8,["modelValue","closable","onTabClick","onTabRemove"])}n("159b"),n("4de4");var R={name:"MyTabs",props:{list:{type:Array,default:function(){return[]}}},data:function(){return{activeName:"first",number:0}},components:{},created:function(){},mounted:function(){},methods:{tabClick:function(e){var t=this.list;this.togoTarget(t[e.index])},togoTarget:function(e){console.log(e)},tabRemove:function(e){var t=this,n=this.list,o=this.activeName;o===e&&n.forEach((function(c,r){if(c.name===e){var l=n[r+1]||n[r-1];t.togoTarget(l),l&&(o=l.name)}})),this.activeName=o;var c=n.filter((function(t){return t.name!==e}));this.$emit("update:list",c)}},watch:{list:{handler:function(e){console.log(e),this.number=e.length}}}};const D=C()(R,[["render",F]]);var W=D,J={name:"MyLayout",data:function(){return{asideWidth:200,headerHeight:48,isAsideCollapse:!1,tabList:[],breadcrumbList:[{path:"/welcome",name:"homepage"},{path:"/welcome",name:"homepage"},{name:"homepage"}]}},components:{MyHeader:L,MyAside:I,MyTabs:W,MyBreadcrumb:g,Expand:u,Fold:f},setup:function(){var e,t,n,o=Object(r["c"])();o.dispatch("getRouteList");var c=null!==(e=null===(t=o.state.user)||void 0===t||null===(n=t.personalConfig)||void 0===n?void 0:n.routeList)&&void 0!==e?e:[];return{sidebars:c}},created:function(){},mounted:function(){},methods:{toggleSideCollapse:function(e){console.log(e),this.isAsideCollapse=e,this.asideWidth=e?64:200}}};n("5a68");const U=C()(J,[["render",c],["__scopeId","data-v-fc37db04"]]);t["default"]=U}}]);
//# sourceMappingURL=chunk-5db6500e.9af679b1.js.map