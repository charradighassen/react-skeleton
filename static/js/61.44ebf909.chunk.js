"use strict";(self.webpackChunkreact_skeleton=self.webpackChunkreact_skeleton||[]).push([[61],{1061:function(r,t,e){e.r(t),e.d(t,{default:function(){return R}});var n=e(7462),a=e(3366),o=e(2791);function i(r){var t,e,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r)if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(e=i(r[t]))&&(n&&(n+=" "),n+=e);else for(t in r)r[t]&&(n&&(n+=" "),n+=t);return n}var c=function(){for(var r,t,e=0,n="";e<arguments.length;)(r=arguments[e++])&&(t=i(r))&&(n&&(n+=" "),n+=t);return n},s=e(2421),u=e(104),p=e(3433),l=e(2466),h=e(114),f=["sx"];function g(r){var t,e=r.sx,o=function(r){var t={systemProps:{},otherProps:{}};return Object.keys(r).forEach((function(e){h.Gc[e]?t.systemProps[e]=r[e]:t.otherProps[e]=r[e]})),t}((0,a.Z)(r,f)),i=o.systemProps,c=o.otherProps;return t=Array.isArray(e)?[i].concat((0,p.Z)(e)):"function"===typeof e?function(){var r=e.apply(void 0,arguments);return(0,l.P)(r)?(0,n.Z)({},i,r):i}:(0,n.Z)({},i,e),(0,n.Z)({},c,{sx:t})}var d=e(3459),v=e(184),m=["className","component"];var y=function(r){return r},x=function(){var r=y;return{configure:function(t){r=t},generate:function(t){return r(t)},reset:function(){r=y}}}(),b=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.defaultTheme,e=r.defaultClassName,i=void 0===e?"MuiBox-root":e,p=r.generateClassName,l=r.styleFunctionSx,h=void 0===l?u.Z:l,f=(0,s.ZP)("div",{shouldForwardProp:function(r){return"theme"!==r&&"sx"!==r&&"as"!==r}})(h),y=o.forwardRef((function(r,e){var o=(0,d.Z)(t),s=g(r),u=s.className,l=s.component,h=void 0===l?"div":l,y=(0,a.Z)(s,m);return(0,v.jsx)(f,(0,n.Z)({as:h,ref:e,className:c(u,p?p(i):i),theme:o},y))}));return y}({defaultTheme:(0,e(8031).Z)(),defaultClassName:"MuiBox-root",generateClassName:x.generate}),Z=b;var B=e(6863),w=e(8929),M=e(7312).Z,N={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function P(r,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui",n=N[t];return n?"".concat(e,"-").concat(n):"".concat(x.generate(r),"-").concat(t)}function k(r){return P("MuiTypography",r)}!function(r,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui",n={};t.forEach((function(t){n[t]=P(r,t,e)}))}("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var j=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],W=function(r){var t=r.align,e=r.gutterBottom,n=r.noWrap,a=r.paragraph,o=r.variant,i=r.classes;return function(r,t,e){var n={};return Object.keys(r).forEach((function(a){n[a]=r[a].reduce((function(r,n){return n&&(r.push(t(n)),e&&e[n]&&r.push(e[n])),r}),[]).join(" ")})),n}({root:["root",o,"inherit"!==r.align&&"align".concat(M(t)),e&&"gutterBottom",n&&"noWrap",a&&"paragraph"]},k,i)},C=(0,B.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(r,t){var e=r.ownerState;return[t.root,e.variant&&t[e.variant],"inherit"!==e.align&&t["align".concat(M(e.align))],e.noWrap&&t.noWrap,e.gutterBottom&&t.gutterBottom,e.paragraph&&t.paragraph]}})((function(r){var t=r.theme,e=r.ownerState;return(0,n.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})})),S={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},T={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},A=o.forwardRef((function(r,t){var e=(0,w.Z)({props:r,name:"MuiTypography"}),o=function(r){return T[r]||r}(e.color),i=g((0,n.Z)({},e,{color:o})),s=i.align,u=void 0===s?"inherit":s,p=i.className,l=i.component,h=i.gutterBottom,f=void 0!==h&&h,d=i.noWrap,m=void 0!==d&&d,y=i.paragraph,x=void 0!==y&&y,b=i.variant,Z=void 0===b?"body1":b,B=i.variantMapping,M=void 0===B?S:B,N=(0,a.Z)(i,j),P=(0,n.Z)({},i,{align:u,color:o,className:p,component:l,gutterBottom:f,noWrap:m,paragraph:x,variant:Z,variantMapping:M}),k=l||(x?"p":M[Z]||S[Z])||"span",A=W(P);return(0,v.jsx)(C,(0,n.Z)({as:k,ref:t,ownerState:P,className:c(A.root,p)},N))}));var R=function(){return(0,v.jsx)(Z,{display:"flex",alignItems:"center",sx:{height:"100vh"},children:(0,v.jsxs)(A,{align:"center",fontStyle:"italic",variant:"h3",children:["Hello, ",(0,v.jsx)("br",{}),"Let's start coding..."]})})}}}]);
//# sourceMappingURL=61.44ebf909.chunk.js.map