(window.webpackJsonp=window.webpackJsonp||[]).push([[11,12],{121:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(o){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),c};e.exports=n,e.exports.default=n},122:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,l]=t;if(n&&l){n=parseInt(n),l=parseInt(l);const e=n<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=n;t!==l;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(90),c=a(22),o=a(25),i=a(88),s=a(3),u=a(7),m=a(82),p=a(81),d=a(96),h=a(100),b=a(101),y=a(99),f=a(84),g=a(89),v=a(103),k=function(e){return r.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},j=a(102),E=a(67),O=a.n(E);var N=function e(t,a){return"link"===t.type?Object(p.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))};function C(e){var t,a,l,c=e.item,o=e.onItemClick,i=e.collapsible,p=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),h=c.items,b=c.label,y=N(c,p),f=(a=y,l=Object(n.useRef)(a),Object(n.useEffect)((function(){l.current=a}),[a]),l.current),g=Object(n.useState)((function(){return!!i&&(!y&&c.collapsed)})),v=g[0],k=g[1],j=Object(n.useRef)(null),E=Object(n.useState)(void 0),C=E[0],x=E[1],_=function(e){var t;void 0===e&&(e=!0),x(e?(null===(t=j.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){y&&!f&&v&&k(!1)}),[y,f,v]);var T=Object(n.useCallback)((function(e){e.preventDefault(),C||_(),setTimeout((function(){return k((function(e){return!e}))}),100)}),[C]);return 0===h.length?null:r.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:b},r.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&y},t[O.a.menuLinkText]=!i,t)),onClick:i?T:void 0,href:i?"#!":void 0},d),b),r.a.createElement("ul",{className:"menu__list",ref:j,style:{height:C},onTransitionEnd:function(){v||_(!1)}},h.map((function(e){return r.a.createElement(S,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:o,collapsible:i,activePath:p})}))))}function x(e){var t=e.item,a=e.onItemClick,n=e.activePath,l=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),c=t.href,o=t.label,i=N(t,n);return r.a.createElement("li",{className:"menu__list-item",key:o},r.a.createElement(f.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":i}),to:c},Object(g.a)(c)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},l),o))}function S(e){switch(e.item.type){case"category":return r.a.createElement(C,e);case"link":default:return r.a.createElement(x,e)}}var _=function(e){var t,a,l=e.path,c=e.sidebar,o=e.sidebarCollapsible,i=void 0===o||o,s=e.onCollapse,u=e.isHidden,f=Object(n.useState)(!1),g=f[0],E=f[1],N=Object(p.useThemeConfig)(),C=N.navbar.hideOnScroll,x=N.hideableSidebar,_=Object(d.a)().isAnnouncementBarClosed,T=Object(y.a)().scrollY;Object(h.a)(g);var P=Object(b.a)();return Object(n.useEffect)((function(){P===b.b.desktop&&E(!1)}),[P]),r.a.createElement("div",{className:Object(m.a)(O.a.sidebar,(t={},t[O.a.sidebarWithHideableNavbar]=C,t[O.a.sidebarHidden]=u,t))},C&&r.a.createElement(v.a,{tabIndex:-1,className:O.a.sidebarLogo}),r.a.createElement("div",{className:Object(m.a)("menu","menu--responsive","thin-scrollbar",O.a.menu,(a={"menu--show":g},a[O.a.menuWithAnnouncementBar]=!_&&0===T,a))},r.a.createElement("button",{"aria-label":g?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){E(!g)}},g?r.a.createElement("span",{className:Object(m.a)(O.a.sidebarMenuIcon,O.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(j.a,{className:O.a.sidebarMenuIcon,height:24,width:24})),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(S,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),E(!1)},collapsible:i,activePath:l})})))),x&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(m.a)("button button--secondary button--outline",O.a.collapseSidebarButton),onClick:s},r.a.createElement(k,{className:O.a.collapseSidebarButtonIcon})))},T={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},P={Prism:a(23).a,theme:T};function w(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var L=/\r\n|\r|\n/,B=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},D=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},M=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=I({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=I({},a,{backgroundColor:null}),r};function R(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var A=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),w(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?M(e.theme,e.language):void 0;return t.themeDict=a})),w(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=I({},R(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(l.style=c.plain),void 0!==r&&(l.style=void 0!==l.style?I({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),w(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var c=n?{display:"inline-block"}:{},o=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[c].concat(o))}})),w(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,c=I({},R(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?I({},c.style,r):r),void 0!==a&&(c.key=a),n&&(c.className+=" "+n),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),c=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,c=0,o=[],i=[o];c>-1;){for(;(l=n[c]++)<r[c];){var s=void 0,u=t[c],m=a[c][l];if("string"==typeof m?(u=c>0?u:["plain"],s=m):(u=D(u,m.type),m.alias&&(u=D(u,m.alias)),s=m.content),"string"==typeof s){var p=s.split(L),d=p.length;o.push({types:u,content:p[0]});for(var h=1;h<d;h++)B(o),i.push(o=[]),o.push({types:u,content:p[h]})}else c++,t.push(u),a.push(s),n.push(0),r.push(s.length)}c--,t.pop(),a.pop(),n.pop(),r.pop()}return B(o),i}(void 0!==c?t.tokenize(n,c,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component),H=a(121),W=a.n(H),F=a(122),$=a.n(F),z={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},J=a(91),K=function(){var e=Object(p.useThemeConfig)().prism,t=Object(J.a)().isDarkTheme,a=e.theme||z,n=e.darkTheme||a;return t?n:a},U=a(68),V=a.n(U),Y=/{([\d,-]+)}/,q=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},G=/(?:title=")(.*)(?:")/,Q=function(e){var t=e.children,a=e.className,l=e.metastring,c=Object(p.useThemeConfig)().prism,o=Object(n.useState)(!1),i=o[0],u=o[1],d=Object(n.useState)(!1),h=d[0],b=d[1];Object(n.useEffect)((function(){b(!0)}),[]);var y=Object(n.useRef)(null),f=[],g="",v=K(),k=Array.isArray(t)?t.join(""):t;if(l&&Y.test(l)){var j=l.match(Y)[1];f=$()(j).filter((function(e){return e>0}))}l&&G.test(l)&&(g=l.match(G)[1]);var E=a&&a.replace(/language-/,"");!E&&c.defaultLanguage&&(E=c.defaultLanguage);var O=k.replace(/\n$/,"");if(0===f.length&&void 0!==E){for(var N,C="",x=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return q(["js","jsBlock"]);case"jsx":case"tsx":return q(["js","jsBlock","jsx"]);case"html":return q(["js","jsBlock","html"]);case"python":case"py":return q(["python"]);default:return q()}}(E),S=k.replace(/\n$/,"").split("\n"),_=0;_<S.length;){var T=_+1,w=S[_].match(x);if(null!==w){switch(w.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":C+=T+",";break;case"highlight-start":N=T;break;case"highlight-end":C+=N+"-"+(T-1)+","}S.splice(_,1)}else _+=1}f=$()(C),O=S.join("\n")}var I=function(){W()(O),u(!0),setTimeout((function(){return u(!1)}),2e3)};return r.a.createElement(A,Object(s.a)({},P,{key:String(h),theme:v,code:O,language:E}),(function(e){var t,a=e.className,n=e.style,l=e.tokens,c=e.getLineProps,o=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,g&&r.a.createElement("div",{style:n,className:V.a.codeBlockTitle},g),r.a.createElement("div",{className:V.a.codeBlockContent},r.a.createElement("div",{tabIndex:0,className:Object(m.a)(a,V.a.codeBlock,"thin-scrollbar",(t={},t[V.a.codeBlockWithTitle]=g,t))},r.a.createElement("div",{className:V.a.codeBlockLines,style:n},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=c({line:e,key:t});return f.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(s.a)({key:t},a),e.map((function(e,t){return r.a.createElement("span",Object(s.a)({key:t},o({token:e,key:t})))})))})))),r.a.createElement("button",{ref:y,type:"button","aria-label":"Copy code to clipboard",className:Object(m.a)(V.a.copyButton),onClick:I},i?"Copied":"Copy")))}))},X=(a(69),a(70)),Z=a.n(X),ee=function(e){return function(t){var a,n=t.id,l=Object(u.a)(t,["id"]),c=Object(p.useThemeConfig)().navbar.hideOnScroll;return n?r.a.createElement(e,l,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(m.a)("anchor",(a={},a[Z.a.enhancedAnchor]=!c,a)),id:n}),l.children,r.a.createElement("a",{className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):r.a.createElement(e,l)}},te=a(71),ae=a.n(te),ne={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(Q,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(f.a,e)},pre:function(e){return r.a.createElement("div",Object(s.a)({className:ae.a.mdxCodeBlock},e))},h1:ee("h1"),h2:ee("h2"),h3:ee("h3"),h4:ee("h4"),h5:ee("h5"),h6:ee("h6")},re=a(92),le=a(86),ce=a(72),oe=a.n(ce);function ie(e){var t,a,o,s,u=e.currentDocRoute,d=e.versionMetadata,h=e.children,b=Object(c.default)(),y=b.siteConfig,f=b.isClient,g=d.pluginId,v=d.permalinkToSidebar,j=d.docsSidebars,E=d.version,O=v[u.path],N=j[O],C=Object(n.useState)(!1),x=C[0],S=C[1],T=Object(n.useState)(!1),P=T[0],w=T[1],I=Object(n.useCallback)((function(){P&&w(!1),S(!x)}),[P]);return r.a.createElement(i.a,{key:f,searchMetadatas:{version:E,tag:Object(p.docVersionSearchTag)(g,E)}},r.a.createElement("div",{className:oe.a.docPage},N&&r.a.createElement("div",{className:Object(m.a)(oe.a.docSidebarContainer,(t={},t[oe.a.docSidebarContainerHidden]=x,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(oe.a.docSidebarContainer)&&x&&w(!0)},role:"complementary"},r.a.createElement(_,{key:O,sidebar:N,path:u.path,sidebarCollapsible:null===(a=null===(o=y.themeConfig)||void 0===o?void 0:o.sidebarCollapsible)||void 0===a||a,onCollapse:I,isHidden:P}),P&&r.a.createElement("div",{className:oe.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:I,onClick:I},r.a.createElement(k,null))),r.a.createElement("main",{className:oe.a.docMainContainer},r.a.createElement("div",{className:Object(m.a)("container padding-vert--lg",oe.a.docItemWrapper,(s={},s[oe.a.docItemWrapperEnhanced]=x,s))},r.a.createElement(l.a,{components:ne},h)))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,l=t.find((function(e){return Object(le.matchPath)(n.pathname,e)}));return l?r.a.createElement(ie,{currentDocRoute:l,versionMetadata:a},Object(o.a)(t)):r.a.createElement(re.default,e)}},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(88);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);