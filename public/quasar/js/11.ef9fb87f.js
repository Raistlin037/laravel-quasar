(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"247d":function(t,e,a){"use strict";var n=a("a7db"),r=a.n(n);r.a},5966:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-footer",{attrs:{elevated:"",reveal:""}},[a("q-toolbar",{staticClass:"bg-white"},[a("div",{staticClass:"row full-width text-center q-pa-sm text-weight-bold text-grey-10"},[a("div",{staticClass:"col-12"},[t._v("\n        Manfred047.com © 2018. All rights reserved.\n      ")]),a("div",{staticClass:"col-12"},[t._v("\n        Multimedia is copyrighted by\n        "),a("a",{staticClass:"text-cyan",attrs:{href:"https://www.facebook.com/Nyamuhh",target:"_blank"}},[t._v("\n          Nyami\n        ")]),t._v("\n        and\n        "),a("a",{staticClass:"text-cyan",attrs:{href:"https://www.artstation.com/patrickfaulwetter",target:"_blank"}},[t._v("\n          Patrick Faulwetter\n        ")])]),a("div",{staticClass:"col-12"},[t._v("\n        The official website for Manfred047 is\n        "),a("a",{staticClass:"text-cyan",attrs:{href:"https://Manfred047.com",target:"_blank"}},[t._v(" manfred047.com")])])])])],1)},r=[],o={name:"FooterLayout"},c=o,s=(a("247d"),a("2877")),i=Object(s["a"])(c,n,r,!1,null,"68994f7c",null);e["a"]=i.exports},"5b1d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh lpr lFf"}},[a("q-header",{staticClass:"bg-indigo-6 glossy",attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",round:"",icon:"home",to:{name:"public.index"}}}),a("q-toolbar-title",[t._v("\n        Laravel 6.0 with Quasar v"+t._s(t.$q.version)+" (SPA) by Manfred047\n      ")]),a("lang-manager"),t.isAuth?[a("q-btn",{attrs:{flat:"",label:t.$t("page_titles.user_title"),to:{name:"auth.user"}}})]:[a("q-btn",{attrs:{flat:"",to:{name:"public.login"},label:t.$t("login.title")}}),a("q-btn",{attrs:{flat:"",to:{name:"public.register"},label:t.$t("register.title")}})]],2)],1),a("q-page-container",[a("router-view")],1),a("footer-layout")],1)},r=[],o=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),c=a.n(o),s=a("5966"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("q-select",{attrs:{options:t.languages,"emit-value":"","map-options":""},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}})],1)},l=[],u=(a("7514"),a("2f62")),f=a("2ef0"),g=a.n(f);function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){c()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={name:"LangManager",beforeMount:function(){this.findLang()},watch:{language:function(t){this.setLanguage([this.$i18n,t])}},computed:p({},Object(u["c"])("lang",["languages","getLanguage"])),methods:p({},Object(u["b"])("lang",["setLanguage"]),{findLang:function(){var t=this,e=g.a.find(this.languages,(function(e){return e.value===t.getLanguage}));this.language=g.a.get(e,["value"],"en")}}),data:function(){return{language:"en"}}},v=d,h=a("2877"),O=Object(h["a"])(v,i,l,!1,null,"8dcec406",null),y=O.exports;function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function w(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){c()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var j={name:"PublicLayout",components:{LangManager:y,FooterLayout:s["a"]},computed:w({},Object(u["c"])("auth",["isAuth"]))},_=j,P=Object(h["a"])(_,n,r,!1,null,null,null);e["default"]=P.exports},a7db:function(t,e,a){}}]);