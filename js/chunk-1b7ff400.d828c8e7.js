(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b7ff400"],{2004:function(e,t,n){},"264a":function(e,t,n){},"4df4":function(e,t,n){"use strict";var o=n("0366"),c=n("7b0b"),r=n("9bdd"),a=n("e95a"),i=n("68ee"),l=n("07fa"),s=n("8418"),u=n("9a1f"),b=n("35a1");e.exports=function(e){var t=c(e),n=i(this),d=arguments.length,f=d>1?arguments[1]:void 0,m=void 0!==f;m&&(f=o(f,d>2?arguments[2]:void 0,2));var p,j,O,v,h,C,y=b(t),k=0;if(!y||this==Array&&a(y))for(p=l(t),j=n?new this(p):Array(p);p>k;k++)C=m?f(t[k],k):t[k],s(j,k,C);else for(v=u(t,y),h=v.next,j=n?new this:[];!(O=h.call(v)).done;k++)C=m?r(v,f,[O.value,k],!0):O.value,s(j,k,C);return j.length=k,j}},"6ac9":function(e,t,n){"use strict";n("2004")},9075:function(e,t,n){},"9bdd":function(e,t,n){var o=n("825a"),c=n("2a62");e.exports=function(e,t,n,r){try{return r?t(o(n)[0],n[1]):t(n)}catch(a){c(e,"throw",a)}}},"9ca7":function(e,t,n){"use strict";n("9075")},a0f2:function(e,t,n){},a630:function(e,t,n){var o=n("23e7"),c=n("4df4"),r=n("1c7e"),a=!r((function(e){Array.from(e)}));o({target:"Array",stat:!0,forced:a},{from:c})},ae1e:function(e,t,n){"use strict";n("a0f2")},c1f7:function(e,t,n){"use strict";n.r(t);var o=n("7a23");function c(e,t,n,c,r,a){var i=Object(o["resolveComponent"])("my-aside"),l=Object(o["resolveComponent"])("el-aside"),s=Object(o["resolveComponent"])("Expand"),u=Object(o["resolveComponent"])("el-icon"),b=Object(o["resolveComponent"])("Fold"),d=Object(o["resolveComponent"])("MyBreadcrumb"),f=Object(o["resolveComponent"])("my-header"),m=Object(o["resolveComponent"])("el-header"),p=Object(o["resolveComponent"])("my-tabs"),j=Object(o["resolveComponent"])("router-view"),O=Object(o["resolveComponent"])("el-main"),v=Object(o["resolveComponent"])("el-container");return Object(o["openBlock"])(),Object(o["createBlock"])(v,{class:"layout_container"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(l,{width:r.asideWidth+"px"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",{class:"logo",style:Object(o["normalizeStyle"])({height:r.headerHeight+"px"})},"logo",4),Object(o["createVNode"])(i,{isCollapse:r.isAsideCollapse,"sidebar-list":c.sidebars},null,8,["isCollapse","sidebar-list"])]})),_:1},8,["width"]),Object(o["createVNode"])(v,{class:"main_container"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(m,{height:r.headerHeight+"px"},{default:Object(o["withCtx"])((function(){return[r.isAsideCollapse?(Object(o["openBlock"])(),Object(o["createBlock"])(u,{key:0,class:"isCollapseIcon",onClick:t[0]||(t[0]=function(e){return a.toggleSideCollapse(!1)})},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s)]})),_:1})):(Object(o["openBlock"])(),Object(o["createBlock"])(u,{key:1,class:"isCollapseIcon",onClick:t[1]||(t[1]=function(e){return a.toggleSideCollapse(!0)})},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(b)]})),_:1})),Object(o["createVNode"])(d),Object(o["createVNode"])(f)]})),_:1},8,["height"]),Object(o["createVNode"])(O,null,{default:Object(o["withCtx"])((function(){return[Object(o["withDirectives"])(Object(o["createVNode"])(p,null,null,512),[[o["vShow"],c.tabbarList&&c.tabbarList.length>0]]),Object(o["createVNode"])(j)]})),_:1})]})),_:1})]})),_:1})}var r=n("5502"),a=Object(o["defineComponent"])({name:"Expand"});const i={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},l=Object(o["createVNode"])("path",{fill:"currentColor",d:"M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"},null,-1);function s(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createBlock"])("svg",i,[l])}a.render=s,a.__file="packages/components/Expand.vue";var u=a,b=Object(o["defineComponent"])({name:"Fold"});const d={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},f=Object(o["createVNode"])("path",{fill:"currentColor",d:"M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"},null,-1);function m(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createBlock"])("svg",d,[f])}b.render=m,b.__file="packages/components/Fold.vue";var p=b,j=(n("b0c0"),Object(o["createTextVNode"])(" 首页 "));function O(e,t,n,c,r,a){var i=Object(o["resolveComponent"])("el-breadcrumb-item"),l=Object(o["resolveComponent"])("el-breadcrumb");return Object(o["openBlock"])(),Object(o["createBlock"])(l,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{to:{path:"/welcome"},onClick:t[0]||(t[0]=function(e){return a.clickHandler("")})},{default:Object(o["withCtx"])((function(){return[j]})),_:1}),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.breadcrumbList,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:t},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.name),1)]})),_:2},1024)})),128))]})),_:1})}var v=n("5530"),h={name:"MyBreadcrumb",data:function(){return{}},created:function(){this.getBreadcrumbList()},methods:Object(v["a"])(Object(v["a"])({},Object(r["b"])(["setDefaultActive","getBreadcrumbList","setBreadcrumbList","setTabbarListTwo"])),{},{clickHandler:function(e){this.setDefaultActive(e),this.setBreadcrumbList(e),this.setTabbarListTwo([])}}),computed:Object(r["c"])({breadcrumbList:function(e){return e.system.breadcrumbList}})},C=(n("9ca7"),n("6b0d")),y=n.n(C);const k=y()(h,[["render",O],["__scopeId","data-v-4fcc03d0"]]);var g=k,w=function(e){return Object(o["pushScopeId"])("data-v-2b2f938c"),e=e(),Object(o["popScopeId"])(),e},B={class:"header_container"},x=w((function(){return Object(o["createElementVNode"])("span",null,"我是头部",-1)})),L=[x];function V(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",B,L)}var A={name:"MyHeader",data:function(){return{}},components:{},created:function(){},mounted:function(){},methods:{}};n("ae1e");const _=y()(A,[["render",V],["__scopeId","data-v-2b2f938c"]]);var S=_;function N(e,t,n,c,r,a){var i=Object(o["resolveComponent"])("MyAsideItem"),l=Object(o["resolveComponent"])("el-menu"),s=Object(o["resolveComponent"])("el-scrollbar");return Object(o["openBlock"])(),Object(o["createBlock"])(s,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(l,{"default-active":c.defaultActive,class:"el-menu-vertical-demo",collapse:n.isCollapse,"unique-opened":!0,onSelect:c.handleSelect,"text-color":c.textColor,"active-text-color":c.activeTextColor,router:""},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.sidebarList,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(i,{list:e,key:t},null,8,["list"])})),128))]})),_:1},8,["default-active","collapse","onSelect","text-color","active-text-color"])]})),_:1})}function T(e,t,n,c,r,a){var i=Object(o["resolveComponent"])("MyAsideItem",!0),l=Object(o["resolveComponent"])("el-sub-menu"),s=Object(o["resolveComponent"])("el-menu-item");return a.isHaveChildren(n.list)?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,index:n.list.path},{title:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("i",{class:Object(o["normalizeClass"])(["iconfont","icon-icon-".concat(n.list.icon)])},null,2),Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(n.list.name),1)]})),default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.list.children,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(i,{list:e,key:t},null,8,["list"])})),128))]})),_:1},8,["index"])):(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:1,index:n.list.path,route:n.list.route,onClick:t[0]||(t[0]=function(e){return a.togoTarget(e,n.list)})},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("i",{class:Object(o["normalizeClass"])(["iconfont","icon-icon-".concat(n.list.icon)])},null,2),Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(n.list.name),1)]})),_:1},8,["index","route"]))}var E={name:"MyAsideItem",props:{list:{type:Object,default:function(){}}},data:function(){return{}},components:{},created:function(){},mounted:function(){},methods:{togoTarget:function(e,t){this.$store.commit("setTabbarList",t)},isHaveChildren:function(e){return!!(e&&e.children&&e.children.length>0)}}};const M=y()(E,[["render",T]]);var H=M,I={name:"MyAside",props:{sidebarList:{type:Array,default:function(){return[]}},isCollapse:{type:Boolean,default:!1}},data:function(){return{}},components:{MyAsideItem:H},mounted:function(){},setup:function(e){var t=Object(r["d"])(),n=function(e,n){t.dispatch("setDemo",n),t.commit("setDefaultActive",e)},c=Object(o["ref"])("#5b80b4"),a=Object(o["ref"])("#fff");return Object(o["watchEffect"])((function(){a.value=e.isCollapse?"#409EFF":"#fff"})),Object(o["onMounted"])((function(){t.commit("getDefaultActive")})),{handleSelect:n,textColor:c,activeTextColor:a,defaultActive:Object(o["computed"])((function(){return t.state.system.defaultActive}))}}};n("cde0");const $=y()(I,[["render",N],["__scopeId","data-v-6ef4314f"]]);var z=$;function D(e,t,n,c,r,a){var i=Object(o["resolveComponent"])("el-tab-pane"),l=Object(o["resolveComponent"])("el-tabs");return Object(o["openBlock"])(),Object(o["createBlock"])(l,{modelValue:c.active,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.active=e}),type:"card",closable:!(c.tabbarList.length<=1),onTabClick:a.tabClick,onTabRemove:a.tabRemove},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.tabbarList,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(i,{label:e.name,name:e.path,key:t},null,8,["label","name"])})),128))]})),_:1},8,["modelValue","closable","onTabClick","onTabRemove"])}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function R(e){if(Array.isArray(e))return F(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function W(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n("fb6a");function J(e,t){if(e){if("string"===typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}function U(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function q(e){return R(e)||W(e)||J(e)||U()}n("159b"),n("4de4");var G=n("a7fe"),K={name:"MyTabs",data:function(){return{}},setup:function(){var e=Object(o["ref"])(""),t=Object(r["d"])();return Object(o["watch"])([function(){return t.state.system.tabbarList},function(){return t.state.system.defaultActive}],(function(){e.value=t.state.system.defaultActive})),{active:e,tabbarList:Object(o["computed"])((function(){return t.state.system.tabbarList}))}},components:{},created:function(){this.$store.commit("getTabbarList")},mounted:function(){},methods:{tabClick:function(e){if(e.props.name!==this.activeue){var t=q(this.$store.state.user.routeList),n=Object(G["c"])(t,e.props.name);this.$store.commit("setDefaultActive",e.props.name),this.$store.commit("setBreadcrumbList",n),this.$router.push({path:e.props.name})}},tabRemove:function(e){var t=q(this.tabbarList),n=this.active;if(n===e){t.forEach((function(o,c){if(o.path===e){var r=t[c+1]||t[c-1];r&&(n=r.path)}}));var o=q(this.$store.state.user.routeList),c=Object(G["c"])(o,n);this.$store.commit("setDefaultActive",n),this.$store.commit("setBreadcrumbList",c),this.$router.push({path:n})}var r=t.filter((function(t){return t.path!==e}));this.$store.commit("setTabbarListTwo",r,1)}}};const P=y()(K,[["render",D]]);var Q=P,X={name:"MyLayout",data:function(){return{asideWidth:200,headerHeight:48,isAsideCollapse:!1}},components:{MyHeader:S,MyAside:z,MyTabs:Q,MyBreadcrumb:g,Expand:u,Fold:p},setup:function(){var e=Object(r["d"])();return e.dispatch("getRouteList"),{sidebars:Object(o["computed"])((function(){var t,n;return null!==(t=null===(n=e.state.user)||void 0===n?void 0:n.routeList)&&void 0!==t?t:[]})),tabbarList:Object(o["computed"])((function(){return e.state.system.tabbarList}))}},created:function(){},mounted:function(){},methods:{toggleSideCollapse:function(e){this.isAsideCollapse=e,this.asideWidth=e?64:200}}};n("6ac9");const Y=y()(X,[["render",c],["__scopeId","data-v-b9390e1a"]]);t["default"]=Y},cde0:function(e,t,n){"use strict";n("264a")},d28b:function(e,t,n){var o=n("746f");o("iterator")},e01a:function(e,t,n){"use strict";var o=n("23e7"),c=n("83ab"),r=n("da84"),a=n("1a2d"),i=n("1626"),l=n("861d"),s=n("9bf2").f,u=n("e893"),b=r.Symbol;if(c&&i(b)&&(!("description"in b.prototype)||void 0!==b().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new b(e):void 0===e?b():b(e);return""===e&&(d[t]=!0),t};u(f,b);var m=f.prototype=b.prototype;m.constructor=f;var p=m.toString,j="Symbol(test)"==String(b("test")),O=/^Symbol\((.*)\)[^)]+$/;s(m,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=p.call(e);if(a(d,e))return"";var n=j?t.slice(7,-1):t.replace(O,"$1");return""===n?void 0:n}}),o({global:!0,forced:!0},{Symbol:f})}}}]);
//# sourceMappingURL=chunk-1b7ff400.d828c8e7.js.map