(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3064:function(e){e.exports={reactStrictMode:!0,assetPrefix:"https://waynechoi.dev/"}},2167:function(e,t,r){"use strict";var n=r(3848);t.default=void 0;var a,o=(a=r(7294))&&a.__esModule?a:{default:a},i=r(1063),s=r(4651),c=r(7426);var l={};function u(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,a=s.useRouter(),f=o.default.useMemo((function(){var t=i.resolveHref(a,e.href,!0),r=n(t,2),o=r[0],s=r[1];return{href:o,as:e.as?i.resolveHref(a,e.as):s||o}}),[a,e.href,e.as]),d=f.href,h=f.as,m=e.children,_=e.replace,p=e.shallow,v=e.scroll,g=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var b=(t=o.default.Children.only(m))&&"object"===typeof t&&t.ref,x=c.useIntersection({rootMargin:"200px"}),j=n(x,2),y=j[0],k=j[1],w=o.default.useCallback((function(e){y(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,y]);o.default.useEffect((function(){var e=k&&r&&i.isLocalURL(d),t="undefined"!==typeof g?g:a&&a.locale,n=l[d+"%"+h+(t?"%"+t:"")];e&&!n&&u(a,d,h,{locale:t})}),[h,d,k,g,r,a]);var O={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:c,scroll:s}))}(e,a,d,h,_,p,v,g)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof g?g:a&&a.locale,E=a&&a.isLocaleDomain&&i.getDomainLocale(h,N,a&&a.locales,a&&a.domainLocales);O.href=E||i.addBasePath(i.addLocale(h,N,a&&a.defaultLocale))}return o.default.cloneElement(t,O)};t.default=f},7426:function(e,t,r){"use strict";var n=r(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,c=a.useRef(),l=a.useState(!1),u=n(l,2),f=u[0],d=u[1],h=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||f||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return a.useEffect((function(){if(!i&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[h,f]};var a=r(7294),o=r(3447),i="undefined"!==typeof IntersectionObserver;var s=new Map},3790:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,{default:function(){return N}});var a=r(7294),o=(r(9645),r(1163)),i=r(1664),s=r(6645),c=r.n(s),l=r(5893);function u(e){var t=e.menu,r=(0,o.useRouter)();return(0,l.jsx)("li",{className:r.pathname===t.path?c().list_item_active:c().list_item,children:(0,l.jsx)("div",{className:c().link,children:(0,l.jsx)(i.default,{href:t.path,children:t.name})})})}var f=r(7245),d=r.n(f),h=r(1880),m=r.n(h);function _(e){var t=e.prefix,r=e.isDark,n=(0,o.useRouter)(),i=(0,a.useState)(""),s=i[0],c=i[1];return(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n.push({pathname:"/search",query:{q:s}})},className:"".concat(d().container," ").concat(r?m().dark:m().light),children:[(0,l.jsx)("input",{id:"keyword",type:"text",placeholder:"keywords...",onChange:function(e){return c(e.target.value)},required:!0,className:r?m().dark:m().light}),(0,l.jsx)("button",{type:"submit",children:(0,l.jsx)("img",{alt:"search",src:t+"images/search.svg"})})]})}var p=r(5216),v=r.n(p);function g(e){var t=e.prefix,r=e.isDark,n=(0,o.useRouter)(),s=(0,a.useState)(!0),c=s[0],f=s[1],d=(0,a.useState)(!0),h=d[0],p=d[1];(0,a.useEffect)((function(){f(!0),p(!0)}),[n]);var g=[{name:"HOME",path:"/"},{name:"ABOUT",path:"/about"},{name:"PORTFOLIO",path:"/portfolio"}];return(0,l.jsxs)("div",{className:v().container,children:[(0,l.jsxs)("div",{className:v().header,children:[(0,l.jsx)("button",{className:v().mobileMenuButton,onClick:function(){c?(p(!0),f(!1)):f(!0)},children:c?(0,l.jsx)("img",{alt:"menu",src:t+"images/menu.svg"}):(0,l.jsx)("img",{alt:"menu",src:t+"images/close.svg"})}),(0,l.jsx)(i.default,{href:"/",children:(0,l.jsx)("a",{className:v().name,children:"WayneChoi.dev"})}),(0,l.jsx)("ul",{className:v().list,children:g.map((function(e,t){return(0,l.jsx)(u,{menu:e},t)}))}),(0,l.jsx)("div",{className:v().searchBar,children:(0,l.jsx)(_,{prefix:t,isDark:r})}),(0,l.jsx)("button",{className:v().mobileSearchButton,onClick:function(){h?(f(!0),p(!1)):p(!0)},children:h?(0,l.jsx)("img",{alt:"search",src:t+"images/search.svg"}):(0,l.jsx)("img",{alt:"search",src:t+"images/close.svg"})})]}),!h&&(0,l.jsx)("div",{className:"".concat(v().mobileSearchBar," ").concat(r?m().dark:m().light),children:(0,l.jsx)(_,{prefix:t,isDark:r})}),!c&&(0,l.jsx)("ul",{className:"".concat(v().mobileMenuBar," ").concat(r?m().dark:m().light),children:g.map((function(e,t){return(0,l.jsx)(u,{menu:e},t)}))})]})}var b=r(3102),x=r.n(b),j=new Date;function y(e){var t=e.prefix,r=e.children,n=e.isDark;return(0,l.jsxs)("div",{className:x().container,children:[(0,l.jsx)("header",{className:"".concat(x().header," ").concat(n?m().dark:m().light),children:(0,l.jsx)(g,{prefix:t,isDark:n})}),(0,l.jsx)("section",{className:x().contents,children:r}),(0,l.jsxs)("footer",{className:x().footer,children:["(C) ",j.getFullYear(),". Wonjun Choi. All rights reserved."]})]})}var k=r(3064);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e){var t=e.Component,r=e.pageProps,n=(0,a.useState)(!1),i=n[0],s=n[1],c=(0,o.useRouter)().pathname;return(0,a.useEffect)((function(){var e=window.localStorage.getItem("bgMode");s(!("light"===e||!e))}),[]),(0,a.useEffect)((function(){i||"/cli"===c?(document.getElementsByTagName("html")[0].classList.add("dark_theme"),document.getElementsByTagName("html")[0].classList.remove("light_theme")):(document.getElementsByTagName("html")[0].classList.add("light_theme"),document.getElementsByTagName("html")[0].classList.remove("dark_theme"))}),[i,c]),"/cli"===c?(0,l.jsx)(t,O({},r)):(0,l.jsx)(y,{prefix:k.assetPrefix,isDark:i,children:(0,l.jsx)(t,O(O({},r),{},{prefix:k.assetPrefix,isDark:i,toggleTheme:function(){i?(s(!1),window.localStorage.setItem("bgMode","light")):(s(!0),window.localStorage.setItem("bgMode","dark"))}}))})}},6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3790)}])},5216:function(e){e.exports={container:"header_container__2Vvjg",header:"header_header__3lGRs",name:"header_name__2PEvs",desc:"header_desc__3Cwo2",list:"header_list__2sooW",searchBar:"header_searchBar__3VAZB",mobileMenuButton:"header_mobileMenuButton__1vVY8",mobileSearchButton:"header_mobileSearchButton__1r9xs",mobileMenuBar:"header_mobileMenuBar__w8Cx2",mobileSearchBar:"header_mobileSearchBar__1jwk9",dark_theme:"header_dark_theme__2Lbl_",light_theme:"header_light_theme__12Ql0"}},6645:function(e){e.exports={list_item_active:"header_item_list_item_active__3nSjh",list_item:"header_item_list_item__33J-y"}},3102:function(e){e.exports={container:"layout_container__1ROar",header:"layout_header__MPs9E",contents:"layout_contents__wGaub",footer:"layout_footer__2KiKH"}},7245:function(e){e.exports={container:"search_bar_container__2559w"}},1880:function(e){e.exports={dark:"theme_dark__XSYps",light:"theme_light__2lu4I"}},9645:function(){},1664:function(e,t,r){e.exports=r(2167)},1163:function(e,t,r){e.exports=r(4651)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(4651)}));var r=e.O();_N_E=r}]);