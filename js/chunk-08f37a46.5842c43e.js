(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08f37a46"],{"1dde":function(t,r,n){var o=n("d039"),e=n("b622"),c=n("2d00"),i=e("species");t.exports=function(t){return c>=51||!o((function(){var r=[],n=r.constructor={};return n[i]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"65f0":function(t,r,n){var o=n("861d"),e=n("e8b5"),c=n("b622"),i=c("species");t.exports=function(t,r){var n;return e(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!e(n.prototype)?o(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===r?0:r)}},8418:function(t,r,n){"use strict";var o=n("c04e"),e=n("9bf2"),c=n("5c6c");t.exports=function(t,r,n){var i=o(r);i in t?e.f(t,i,c(0,n)):t[i]=n}},"99af":function(t,r,n){"use strict";var o=n("23e7"),e=n("d039"),c=n("e8b5"),i=n("861d"),u=n("7b0b"),a=n("50c4"),f=n("8418"),s=n("65f0"),d=n("1dde"),l=n("b622"),p=n("2d00"),v=l("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",g=p>=51||!e((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),_=d("concat"),y=function(t){if(!i(t))return!1;var r=t[v];return void 0!==r?!!r:c(t)},w=!g||!_;o({target:"Array",proto:!0,forced:w},{concat:function(t){var r,n,o,e,c,i=u(this),d=s(i,0),l=0;for(r=-1,o=arguments.length;r<o;r++)if(c=-1===r?i:arguments[r],y(c)){if(e=a(c.length),l+e>h)throw TypeError(b);for(n=0;n<e;n++,l++)n in c&&f(d,l,c[n])}else{if(l>=h)throw TypeError(b);f(d,l++,c)}return d.length=l,d}})},e6dc:function(t,r,n){"use strict";n.r(r);var o=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("h2",[t._v("這裡是產品頁")]),n("table",t._l(t.products,(function(r){return n("tr",{key:r.id},[n("td",[t._v(t._s(r.title))]),n("td",[t._v(t._s(r.origin_price))]),n("td",[n("router-link",{attrs:{to:"/product/"+r.id}},[t._v("連結")])],1),n("td",[n("button",{on:{click:function(n){return t.goPage(r)}}},[t._v("進入頁面")])]),n("td",[n("a",{attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.goPage(r)}}},[t._v("進入頁面")])])])})),0)])},e=[],c=(n("99af"),{data:function(){return{products:[]}},methods:{goPage:function(t){console.log(this.$router),this.$router.push("/product/".concat(t.id))}},created:function(){var t=this;console.log("UUID:","5bffb293-5936-4139-961e-e2006317c701"),this.$http.get("".concat("https://course-ec-api.hexschool.io/","/api/").concat("5bffb293-5936-4139-961e-e2006317c701","/ec/products")).then((function(r){console.log(r),t.products=r.data.data}))}}),i=c,u=n("2877"),a=Object(u["a"])(i,o,e,!1,null,null,null);r["default"]=a.exports},e8b5:function(t,r,n){var o=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}}}]);
//# sourceMappingURL=chunk-08f37a46.5842c43e.js.map