(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f61fd50"],{"0800":function(e,t,n){"use strict";n("fb0f")},"25a8":function(e,t,n){"use strict";n("f241")},"707f":function(e,t,n){},"9fc4":function(e,t,n){"use strict";n("ef32")},ae1e:function(e,t,n){"use strict";n("707f")},c1f7:function(e,t,n){"use strict";n.r(t);var c=n("7a23");function o(e,t,n,o,r,l){var a=Object(c["resolveComponent"])("my-aside"),i=Object(c["resolveComponent"])("el-aside"),u=Object(c["resolveComponent"])("Expand"),s=Object(c["resolveComponent"])("el-icon"),d=Object(c["resolveComponent"])("Fold"),b=Object(c["resolveComponent"])("MyBreadcrumb"),f=Object(c["resolveComponent"])("my-header"),m=Object(c["resolveComponent"])("el-header"),j=Object(c["resolveComponent"])("my-tabs"),O=Object(c["resolveComponent"])("router-view"),p=Object(c["resolveComponent"])("el-main"),v=Object(c["resolveComponent"])("el-container");return Object(c["openBlock"])(),Object(c["createBlock"])(v,{class:"layout_container"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(i,{width:r.asideWidth+"px"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",{class:"logo",style:Object(c["normalizeStyle"])({height:r.headerHeight+"px"})},"logo",4),Object(c["createVNode"])(a,{isCollapse:r.isAsideCollapse,"sidebar-list":o.sidebars},null,8,["isCollapse","sidebar-list"])]})),_:1},8,["width"]),Object(c["createVNode"])(v,{class:"main_container"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(m,{height:r.headerHeight+"px"},{default:Object(c["withCtx"])((function(){return[r.isAsideCollapse?(Object(c["openBlock"])(),Object(c["createBlock"])(s,{key:0,class:"isCollapseIcon",onClick:t[0]||(t[0]=function(e){return l.toggleSideCollapse(!1)})},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u)]})),_:1})):(Object(c["openBlock"])(),Object(c["createBlock"])(s,{key:1,class:"isCollapseIcon",onClick:t[1]||(t[1]=function(e){return l.toggleSideCollapse(!0)})},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(d)]})),_:1})),Object(c["createVNode"])(b),Object(c["createVNode"])(f)]})),_:1},8,["height"]),Object(c["createVNode"])(p,null,{default:Object(c["withCtx"])((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])(j,{list:r.tabList,"onUpdate:list":t[2]||(t[2]=function(e){return r.tabList=e})},null,8,["list"]),[[c["vShow"],r.tabList&&r.tabList.length>0]]),Object(c["createVNode"])(O)]})),_:1})]})),_:1})]})),_:1})}var r=n("5502"),l=Object(c["defineComponent"])({name:"Expand"});const a={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},i=Object(c["createVNode"])("path",{fill:"currentColor",d:"M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"},null,-1);function u(e,t,n,o,r,l){return Object(c["openBlock"])(),Object(c["createBlock"])("svg",a,[i])}l.render=u,l.__file="packages/components/Expand.vue";var s=l,d=Object(c["defineComponent"])({name:"Fold"});const b={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},f=Object(c["createVNode"])("path",{fill:"currentColor",d:"M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"},null,-1);function m(e,t,n,o,r,l){return Object(c["openBlock"])(),Object(c["createBlock"])("svg",b,[f])}d.render=m,d.__file="packages/components/Fold.vue";var j=d,O=(n("b0c0"),Object(c["createTextVNode"])(" 首页 "));function p(e,t,n,o,r,l){var a=Object(c["resolveComponent"])("el-breadcrumb-item"),i=Object(c["resolveComponent"])("el-breadcrumb");return Object(c["openBlock"])(),Object(c["createBlock"])(i,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(a,{to:{path:"/welcome"},onClick:t[0]||(t[0]=function(e){return l.clickHandler()})},{default:Object(c["withCtx"])((function(){return[O]})),_:1}),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.breadcrumbList,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(a,{key:t},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.name),1)]})),_:2},1024)})),128))]})),_:1})}var v=n("5530"),h={name:"MyBreadcrumb",data:function(){return{}},created:function(){this.getBreadcrumbList()},methods:Object(v["a"])(Object(v["a"])({},Object(r["b"])(["setDefaultActive","getBreadcrumbList","setBreadcrumbList"])),{},{clickHandler:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.setDefaultActive(e),this.setBreadcrumbList(e)}}),computed:Object(r["c"])({breadcrumbList:function(e){return e.user.breadcrumbList}})},C=(n("25a8"),n("d959")),k=n.n(C);const g=k()(h,[["render",p],["__scopeId","data-v-cba0df0c"]]);var B=g,x=function(e){return Object(c["pushScopeId"])("data-v-2b2f938c"),e=e(),Object(c["popScopeId"])(),e},w={class:"header_container"},y=x((function(){return Object(c["createElementVNode"])("span",null,"我是头部",-1)})),V=[y];function _(e,t,n,o,r,l){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",w,V)}var N={name:"MyHeader",data:function(){return{}},components:{},created:function(){},mounted:function(){},methods:{}};n("ae1e");const L=k()(N,[["render",_],["__scopeId","data-v-2b2f938c"]]);var A=L;function E(e,t,n,o,r,l){var a=Object(c["resolveComponent"])("MyAsideItem"),i=Object(c["resolveComponent"])("el-menu"),u=Object(c["resolveComponent"])("el-scrollbar");return Object(c["openBlock"])(),Object(c["createBlock"])(u,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(i,{"default-active":o.defaultActive,class:"el-menu-vertical-demo",collapse:n.isCollapse,"unique-opened":!0,onSelect:o.handleSelect,"text-color":o.textColor,"active-text-color":o.activeTextColor,router:""},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.sidebarList,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(a,{list:e,key:t},null,8,["list"])})),128))]})),_:1},8,["default-active","collapse","onSelect","text-color","active-text-color"])]})),_:1})}function M(e,t,n,o,r,l){var a=Object(c["resolveComponent"])("MyAsideItem",!0),i=Object(c["resolveComponent"])("el-sub-menu"),u=Object(c["resolveComponent"])("el-menu-item");return l.isHaveChildren(n.list)?(Object(c["openBlock"])(),Object(c["createBlock"])(i,{key:0,index:n.list.path},{title:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("i",{class:Object(c["normalizeClass"])(["iconfont","icon-icon-".concat(n.list.icon)])},null,2),Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(n.list.name),1)]})),default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.list.children,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(a,{list:e,key:t},null,8,["list"])})),128))]})),_:1},8,["index"])):(Object(c["openBlock"])(),Object(c["createBlock"])(u,{key:1,index:n.list.path,route:n.list.route},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("i",{class:Object(c["normalizeClass"])(["iconfont","icon-icon-".concat(n.list.icon)])},null,2),Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(n.list.name),1)]})),_:1},8,["index","route"]))}var H={name:"MyAsideItem",props:{list:{type:Object,default:function(){}}},data:function(){return{}},components:{},created:function(){},mounted:function(){},methods:{togoTarget:function(e,t){console.log(e,t)},isHaveChildren:function(e){return!!(e&&e.children&&e.children.length>0)}}};const S=k()(H,[["render",M]]);var T=S,I={name:"MyAside",props:{sidebarList:{type:Array,default:function(){return[]}},isCollapse:{type:Boolean,default:!1}},data:function(){return{}},components:{MyAsideItem:T},mounted:function(){},setup:function(e){var t=Object(r["d"])(),n=function(e,n){t.commit("sidebarSetBreadcrumbList",n),t.commit("setDefaultActive",e)},o=Object(c["ref"])("#5b80b4"),l=Object(c["ref"])("#fff");return Object(c["watchEffect"])((function(){l.value=e.isCollapse?"#409EFF":"#fff"})),Object(c["onMounted"])((function(){t.commit("getDefaultActive")})),{handleSelect:n,textColor:o,activeTextColor:l,defaultActive:Object(c["computed"])((function(){return t.state.user.defaultActive}))}}};n("0800");const z=k()(I,[["render",E],["__scopeId","data-v-84b21764"]]);var F=z;function D(e,t,n,o,r,l){var a=Object(c["resolveComponent"])("el-tab-pane"),i=Object(c["resolveComponent"])("el-tabs");return Object(c["openBlock"])(),Object(c["createBlock"])(i,{modelValue:r.activeName,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.activeName=e}),type:"card",closable:1!==r.number,onTabClick:l.tabClick,onTabRemove:l.tabRemove},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.list,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(a,{label:e.label,name:e.name,key:t},null,8,["label","name"])})),128))]})),_:1},8,["modelValue","closable","onTabClick","onTabRemove"])}n("159b"),n("4de4");var R={name:"MyTabs",props:{list:{type:Array,default:function(){return[]}}},data:function(){return{activeName:"first",number:0}},components:{},created:function(){},mounted:function(){},methods:{tabClick:function(e){var t=this.list;this.togoTarget(t[e.index])},togoTarget:function(e){console.log(e)},tabRemove:function(e){var t=this,n=this.list,c=this.activeName;c===e&&n.forEach((function(o,r){if(o.name===e){var l=n[r+1]||n[r-1];t.togoTarget(l),l&&(c=l.name)}})),this.activeName=c;var o=n.filter((function(t){return t.name!==e}));this.$emit("update:list",o)}},watch:{list:{handler:function(e){console.log(e),this.number=e.length}}}};const W=k()(R,[["render",D]]);var J=W,U={name:"MyLayout",data:function(){return{asideWidth:200,headerHeight:48,isAsideCollapse:!1,tabList:[]}},components:{MyHeader:A,MyAside:F,MyTabs:J,MyBreadcrumb:B,Expand:s,Fold:j},setup:function(){var e,t,n,c=Object(r["d"])();c.dispatch("getRouteList");var o=null!==(e=null===(t=c.state.user)||void 0===t||null===(n=t.personalConfig)||void 0===n?void 0:n.routeList)&&void 0!==e?e:[];return{sidebars:o}},created:function(){},mounted:function(){},methods:{toggleSideCollapse:function(e){this.isAsideCollapse=e,this.asideWidth=e?64:200}}};n("9fc4");const q=k()(U,[["render",o],["__scopeId","data-v-59ae6834"]]);t["default"]=q},ef32:function(e,t,n){},f241:function(e,t,n){},fb0f:function(e,t,n){}}]);
//# sourceMappingURL=chunk-0f61fd50.462ba75c.js.map