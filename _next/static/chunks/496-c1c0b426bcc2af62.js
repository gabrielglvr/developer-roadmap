"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[496],{2903:function(e,n,o){o.r(n),o.d(n,{__N_SSG:function(){return j},default:function(){return m}});var r=o(85893),i=o(25115),t=o(11739),x=o(82438),s=o(1832),p=o(27548),l=o(13961),a=o(80202),c=(o(67294),o(71277)),d=o(28641),u=o(15193);function h(e){var n=e.href;return(0,r.jsxs)(i.xu,{my:"30px",children:[(0,r.jsx)(i.iz,{mb:"15px",orientation:"horizontal"}),(0,r.jsx)(i.xv,{lineHeight:"23px",fontWeight:500,fontSize:"14px",color:"gray.500",mb:"10px",children:"This page is a work in progress. Help us by writing a small introduction to the topic and suggesting a few links to read more about this topic."}),(0,r.jsx)(u.zx,{size:"sm",py:"20px",as:i.rU,href:n,target:"_blank",isFullWidth:!0,colorScheme:"gray",_hover:{textDecoration:"none",bg:"gray.200"},children:"Edit this Page"})]})}var f=o(41997);function v(e){var n=e.roadmap,t=e.group;if(!n.contentPathsFilePath)return null;var x=n.contentPathsFilePath.replace(/^\//,""),s=(o(79280)("./".concat(x))[t]||"").replace(/^\//,""),p=o(79280)("./".concat(s)).default;return(0,r.jsx)(i.xu,{children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(p,{}),(0,r.jsx)(h,{href:"".concat(d.url.repoData,"/").concat(s)})]})})}function g(e){var n=e.roadmap,o=e.group.split(":");return(0,r.jsxs)(t.aG,{fontWeight:"medium",fontSize:"sm",separator:(0,r.jsx)(c.XC,{color:"gray.500"}),children:[(0,r.jsx)(t.gN,{children:(0,r.jsx)(t.At,{color:"blue.500",href:"/".concat(n.id),children:n.featuredTitle})}),o.map((function(e,i){return(0,r.jsx)(t.gN,{isCurrentPage:i===o.length-1,children:(0,r.jsx)(t.At,{textTransform:"capitalize",color:"blue.500",href:"/".concat(n.id,"/").concat(o.slice(0,i+1).join(":")),children:e.split("-").join(" ")})},e)}))]})}var j=!0;function m(e){var n,o,t=e.roadmap,l=e.group,c=e.isOutlet;return void 0!==c&&c?(0,r.jsx)(v,{roadmap:t,group:l}):(0,r.jsxs)(i.xu,{bg:"white",minH:"100vh",children:[(0,r.jsx)(x.e,{}),(0,r.jsx)(a.Z,{title:(null===t||void 0===t||null===(n=t.seo)||void 0===n?void 0:n.title)||t.title,description:(null===t||void 0===t||null===(o=t.seo)||void 0===o?void 0:o.description)||t.description,keywords:(null===t||void 0===t?void 0:t.seo.keywords)||[]}),(0,r.jsxs)(i.W2,{my:"60px",maxW:"container.md",position:"relative",children:[(0,r.jsx)(g,{roadmap:t,group:l}),(0,r.jsx)(v,{roadmap:t,group:l})]}),(0,r.jsx)(s.z,{}),(0,r.jsx)(f.i,{}),(0,r.jsx)(p.$,{})]})}},12496:function(e,n,o){o.r(n),o.d(n,{InteractiveRoadmapRenderer:function(){return z},__N_SSG:function(){return S},default:function(){return C}});var r=o(85893),i=o(62730),t=o(67294),x=o(25115),s=o(26461),p=o(82438),l=o(1832),a=o(27548),c=o(80202),d=o(91177),u=o(15193),h=o(91202),f=o(2903),v=o(71277);function g(e){var n=document.querySelectorAll('[data-group-id$="-'.concat(e,'"]')),o=[];return n.forEach((function(n){var r,i=(null===n||void 0===n||null===(r=n.dataset)||void 0===r?void 0:r.groupId)||"";new RegExp("^\\d+-".concat(e,"$")).test(i)&&o.push(n)})),o}function j(e){var n=e.roadmap,o=e.groupId,i=e.onClose,t=void 0===i?function(){return null}:i;if(!o)return null;var s="done"===localStorage.getItem(o);return(0,r.jsxs)(x.xu,{zIndex:99999,pos:"relative",children:[(0,r.jsx)(x.xu,{onClick:t,pos:"fixed",top:0,left:0,right:0,bottom:0,bg:"black",opacity:.4}),(0,r.jsx)(h.Z,{allowPinchZoom:!0,children:(0,r.jsxs)(x.xu,{p:"0px 30px 30px",position:"fixed",w:["100%","60%","40%"],bg:"white",top:0,right:0,bottom:0,borderLeftWidth:"1px",overflowY:"scroll",children:[(0,r.jsxs)(x.kC,{mt:"20px",justifyContent:"space-between",alignItems:"center",zIndex:1,children:[!s&&(0,r.jsx)(u.zx,{onClick:function(){localStorage.setItem(o,"done"),g(o).forEach((function(e){var n;return null===e||void 0===e||null===(n=e.classList)||void 0===n?void 0:n.add("done")})),t()},colorScheme:"green",leftIcon:(0,r.jsx)(v.nQ,{}),size:"xs",iconSpacing:0,children:(0,r.jsx)(x.xv,{as:"span",d:["block","none","none","block"],ml:"10px",children:"Mark as Done"})}),s&&(0,r.jsx)(u.zx,{onClick:function(){localStorage.removeItem(o),g(o).forEach((function(e){var n;return null===e||void 0===e||null===(n=e.classList)||void 0===n?void 0:n.remove("done")})),t()},colorScheme:"red",leftIcon:(0,r.jsx)(v.ny,{}),size:"xs",iconSpacing:0,children:(0,r.jsx)(x.xv,{as:"span",d:["block","none","none","block"],ml:"10px",children:"Mark as Pending"})}),(0,r.jsx)(u.zx,{onClick:t,colorScheme:"yellow",ml:"5px",leftIcon:(0,r.jsx)(v.Tw,{width:"8px"}),iconSpacing:0,size:"xs",children:(0,r.jsx)(x.xv,{as:"span",d:["none","none","none","block"],ml:"10px",children:"Close"})})]}),(0,r.jsx)(f.default,{isOutlet:!0,roadmap:n,group:o})]})})]})}var m=o(28641);function w(e){var n=e.roadmap;return(0,r.jsxs)(x.W2,{bg:"red.600",maxW:"container.md",position:"relative",mt:"50px",p:"20px",rounded:"5px",color:"white",children:[(0,r.jsx)(x.X6,{mb:"4px",size:"md",children:"Oops! There's an error"}),(0,r.jsxs)(x.xv,{children:["Try refreshing or ",(0,r.jsx)(x.rU,{target:"_blank",fontWeight:700,textDecoration:"underline",fontSize:"14px",href:m.url.issue,children:"report a bug"})," and use the ",(0,r.jsx)(x.rU,{fontWeight:700,textDecoration:"underline",href:"/roadmaps/".concat(n.id,".png"),children:"non-interactive version"})]})]})}var k=o(49609);function b(){return(0,r.jsx)(x.W2,{maxW:"container.md",position:"relative",mt:"60px",textAlign:"center",children:(0,r.jsx)(k.$,{thickness:"7px",speed:"0.65s",emptyColor:"gray.200",color:"gray.500",size:"xl"})})}var y=o(41997),S=!0;function z(e){var n=e.roadmap,o=(0,i.ib)(),p=o.loading,l=o.error,a=o.get,c=(0,t.useRef)(null),d=(0,t.useState)(!0),u=d[0],h=d[1],f=(0,t.useState)(null),v=f[0],g=f[1],m=(0,t.useState)(""),k=m[0],y=m[1],S=(0,t.useState)(!1),z=S[0],C=S[1];if((0,t.useEffect)((function(){n.jsonUrl&&a(n.jsonUrl).then((function(e){g(e)})).catch((function(e){console.error(e),C(!0)}))}),[a,n.id,n.jsonUrl]),(0,t.useEffect)((function(){var e=function(e){"escape"===e.key.toLowerCase()&&y("")},n=function(e){var n,o,r=null===(n=null===e||void 0===e?void 0:e.target)||void 0===n?void 0:n.closest("g"),i=null===r||void 0===r||null===(o=r.dataset)||void 0===o?void 0:o.groupId;r&&i&&(i.startsWith("ext_link:")?window.open("https://".concat(i.replace("ext_link:",""))):y(function(e){return(e||"").replace(/^\d+-/,"")}(i)))};return window.addEventListener("keydown",e),window.addEventListener("click",n),function(){window.removeEventListener("keydown",e),window.removeEventListener("click",n)}}),[]),(0,t.useEffect)((function(){v&&(h(!0),(0,s.S)(v).then((function(e){var n=c.current;n&&(n.firstChild&&n.removeChild(n.firstChild),n.appendChild(e))})).catch((function(e){C(!0)})).finally((function(){h(!1)})))}),[v]),!n.jsonUrl)return null;if(l||z)return(0,r.jsx)(w,{roadmap:n});var W=[];return"frontend"===n.id&&(W=["970px","970px","2100px","2800px","2800px"]),"backend"===n.id&&(W=["870px","1130px","1900px","2500px","2520px","2520px"]),"devops"===n.id&&(W=["870px","1920px","2505px","2591px","2591px","2591px"]),"vue"===n.id&&(W=["600px","820px","1340px","1680px","1750px","1750px"]),"react"===n.id&&(W=["400px","865px","1065px","1400px","1400px","1400px"]),"blockchain"===n.id&&(W=["780px","1120px","1770px","2235px","2235px","2235px"]),"golang"===n.id&&(W=["590px","1201px","1201px","1625px","1625px","1625px"]),"javascript"===n.id&&(W=["892px","1835px","1835px","2475px","2475px","2475px"]),"nodejs"===n.id&&(W=["865px","1855px","1855px","2500px","2500px","2500px"]),"qa"===n.id&&(W=["865px","1610px","1610px","2200px","2200px","2200px"]),"design-system"===n.id&&(W=["915px","1760px","1880px","2370px","2370px","2370px"]),"angular"===n.id&&(W=["925px","1365px","1740px","2370px","2370px","2370px"]),"software-architect"===n.id&&(W=["685px","1170px","1470px","1980px","1980px","1980px"]),"software-design-architecture"===n.id&&(W=["515px","1230px","1310px","1765px","1765px","1765px"]),"aspnet-core"===n.id&&(W=["1278px","2105px","2748px","2845px","2845px","2845px"]),"flutter"===n.id&&(W=["830px","1534px","1553px","2093px","2093px","2093px"]),(0,r.jsxs)(x.W2,{maxW:"container.lg",position:"relative",minHeight:W,children:[(p||u)&&(0,r.jsx)(b,{}),(0,r.jsx)(j,{roadmap:n,groupId:k,onClose:function(){return y("")}}),(0,r.jsx)("div",{ref:c})]})}function C(e){var n,o,i=e.roadmap;return(0,r.jsxs)(x.xu,{bg:"white",minH:"100vh",children:[(0,r.jsx)(p.e,{}),(0,r.jsx)(c.Z,{title:(null===i||void 0===i||null===(n=i.seo)||void 0===n?void 0:n.title)||i.title,description:(null===i||void 0===i||null===(o=i.seo)||void 0===o?void 0:o.description)||i.description,keywords:(null===i||void 0===i?void 0:i.seo.keywords)||[]}),(0,r.jsxs)(x.xu,{mb:"60px",children:[(0,r.jsx)(d.h,{roadmap:i}),(0,r.jsx)(z,{roadmap:i})]}),(0,r.jsx)(l.z,{}),(0,r.jsx)(y.i,{}),(0,r.jsx)(a.$,{})]})}}}]);