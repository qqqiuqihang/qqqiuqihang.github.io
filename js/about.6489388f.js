(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0b42":function(e,t,n){var r=n("e8b5"),a=n("68ee"),i=n("861d"),c=n("b622"),l=c("species");e.exports=function(e){var t;return r(e)&&(t=e.constructor,a(t)&&(t===Array||r(t.prototype))?t=void 0:i(t)&&(t=t[l],null===t&&(t=void 0))),void 0===t?Array:t}},"107c":function(e,t,n){var r=n("d039"),a=n("da84"),i=a.RegExp;e.exports=r((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,n){"use strict";var r=n("d784"),a=n("44e7"),i=n("825a"),c=n("1d80"),l=n("4840"),o=n("8aa5"),u=n("50c4"),s=n("577e"),f=n("dc4a"),d=n("14c3"),p=n("9263"),v=n("9f7f"),h=n("d039"),x=v.UNSUPPORTED_Y,g=[].push,b=Math.min,m=4294967295,E=!h((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=s(c(this)),i=void 0===n?m:n>>>0;if(0===i)return[];if(void 0===e)return[r];if(!a(e))return t.call(r,e,i);var l,o,u,f=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,h=new RegExp(e.source,d+"g");while(l=p.call(h,r)){if(o=h.lastIndex,o>v&&(f.push(r.slice(v,l.index)),l.length>1&&l.index<r.length&&g.apply(f,l.slice(1)),u=l[0].length,v=o,f.length>=i))break;h.lastIndex===l.index&&h.lastIndex++}return v===r.length?!u&&h.test("")||f.push(""):f.push(r.slice(v)),f.length>i?f.slice(0,i):f}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=c(this),i=void 0==t?void 0:f(t,e);return i?i.call(t,a,n):r.call(s(a),t,n)},function(e,a){var c=i(this),f=s(e),p=n(r,c,f,a,r!==t);if(p.done)return p.value;var v=l(c,RegExp),h=c.unicode,g=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(x?"g":"y"),E=new v(x?"^(?:"+c.source+")":c,g),y=void 0===a?m:a>>>0;if(0===y)return[];if(0===f.length)return null===d(E,f)?[f]:[];var I=0,w=0,R=[];while(w<f.length){E.lastIndex=x?0:w;var A,C=d(E,x?f.slice(w):f);if(null===C||(A=b(u(E.lastIndex+(x?w:0)),f.length))===I)w=o(f,w,h);else{if(R.push(f.slice(I,w)),R.length===y)return R;for(var _=1;_<=C.length-1;_++)if(R.push(C[_]),R.length===y)return R;w=I=A}}return R.push(f.slice(I)),R}]}),!E,x)},"14c3":function(e,t,n){var r=n("825a"),a=n("1626"),i=n("c6b6"),c=n("9263");e.exports=function(e,t){var n=e.exec;if(a(n)){var l=n.call(e,t);return null!==l&&r(l),l}if("RegExp"===i(e))return c.call(e,t);throw TypeError("RegExp#exec called on incompatible receiver")}},"159b":function(e,t,n){var r=n("da84"),a=n("fdbc"),i=n("785a"),c=n("17c2"),l=n("9112"),o=function(e){if(e&&e.forEach!==c)try{l(e,"forEach",c)}catch(t){e.forEach=c}};for(var u in a)a[u]&&o(r[u]&&r[u].prototype);o(i)},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,a=n("a640"),i=a("forEach");e.exports=i?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},3838:function(e,t,n){},"44e7":function(e,t,n){var r=n("861d"),a=n("c6b6"),i=n("b622"),c=i("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[c])?!!t:"RegExp"==a(e))}},"5afa":function(e,t,n){"use strict";n("3838")},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("577e"),a=n("ad6d"),i=n("9f7f"),c=n("5692"),l=n("7c73"),o=n("69f3").get,u=n("fce3"),s=n("107c"),f=RegExp.prototype.exec,d=c("native-string-replace",String.prototype.replace),p=f,v=function(){var e=/a/,t=/b*/g;return f.call(e,"a"),f.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),h=i.UNSUPPORTED_Y||i.BROKEN_CARET,x=void 0!==/()??/.exec("")[1],g=v||x||h||u||s;g&&(p=function(e){var t,n,i,c,u,s,g,b=this,m=o(b),E=r(e),y=m.raw;if(y)return y.lastIndex=b.lastIndex,t=p.call(y,E),b.lastIndex=y.lastIndex,t;var I=m.groups,w=h&&b.sticky,R=a.call(b),A=b.source,C=0,_=E;if(w&&(R=R.replace("y",""),-1===R.indexOf("g")&&(R+="g"),_=E.slice(b.lastIndex),b.lastIndex>0&&(!b.multiline||b.multiline&&"\n"!==E.charAt(b.lastIndex-1))&&(A="(?: "+A+")",_=" "+_,C++),n=new RegExp("^(?:"+A+")",R)),x&&(n=new RegExp("^"+A+"$(?!\\s)",R)),v&&(i=b.lastIndex),c=f.call(w?n:b,_),w?c?(c.input=c.input.slice(C),c[0]=c[0].slice(C),c.index=b.lastIndex,b.lastIndex+=c[0].length):b.lastIndex=0:v&&c&&(b.lastIndex=b.global?c.index+c[0].length:i),x&&c&&c.length>1&&d.call(c[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)})),c&&I)for(c.groups=s=l(null),u=0;u<I.length;u++)g=I[u],s[g[0]]=c[g[1]];return c}),e.exports=p},"9f7f":function(e,t,n){var r=n("d039"),a=n("da84"),i=a.RegExp;t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b727:function(e,t,n){var r=n("0366"),a=n("44ad"),i=n("7b0b"),c=n("07fa"),l=n("65f0"),o=[].push,u=function(e){var t=1==e,n=2==e,u=3==e,s=4==e,f=6==e,d=7==e,p=5==e||f;return function(v,h,x,g){for(var b,m,E=i(v),y=a(E),I=r(h,x,3),w=c(y),R=0,A=g||l,C=t?A(v,w):n||d?A(v,0):void 0;w>R;R++)if((p||R in y)&&(b=y[R],m=I(b,R,E),e))if(t)C[R]=m;else if(m)switch(e){case 3:return!0;case 5:return b;case 6:return R;case 2:o.call(C,b)}else switch(e){case 4:return!1;case 7:o.call(C,b)}return f?-1:u||s?s:C}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},bb51:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("p",{ref:"title",staticClass:"title landIn"},[e._v(" I am loser, but I never lost hope. Therefore, I have been working silently. ")]),n("div",{staticClass:"btn"},[e._v("dsadsad")])])},a=[],i=(n("ac1f"),n("1276"),n("159b"),{name:"Home",data:function(){return{title:"Ano hi watashitachi mada shiranai no Fushigi no monogatari desu."}},create:function(){},mounted:function(){this.textShowAnimation()},methods:{textShowAnimation:function(){var e=this.$refs.title,t=e.textContent.split("");e.textContent="",t.forEach((function(t,n){var r=document.createElement("span");r.textContent=t,r.className="title_item",r.style.animationDelay="".concat(.05*n,"s"),e.append(r)}))}},components:{}}),c=i,l=(n("5afa"),n("2877")),o=Object(l["a"])(c,r,a,!1,null,"ac8c53da",null);t["default"]=o.exports},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("9263"),i=n("d039"),c=n("b622"),l=n("9112"),o=c("species"),u=RegExp.prototype;e.exports=function(e,t,n,s){var f=c(e),d=!i((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),p=d&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!d||!p||n){var v=/./[f],h=t(f,""[e],(function(e,t,n,r,i){var c=t.exec;return c===a||c===u.exec?d&&!i?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));r(String.prototype,e,h[0]),r(u,f,h[1])}s&&l(u[f],"sham",!0)}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},fce3:function(e,t,n){var r=n("d039"),a=n("da84"),i=a.RegExp;e.exports=r((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=about.6489388f.js.map