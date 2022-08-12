(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[402],{3321:function(j,d,a){"use strict";a.d(d,{Z:function(){return D}});var k=a(3366),l=a(7462),c=a(7294),m=a(6010),n=a(7925),o=a(4780),p=a(1796),b=a(1496),q=a(7623),e=a(6886),r=a(8216),s=a(4867),f=a(1588);function t(a){return(0,s.Z)("MuiButton",a)}let g=(0,f.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var u=g;let h=c.createContext({});var v=h,w=a(5893);let x=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=e=>{let{color:c,disableElevation:f,fullWidth:g,size:a,variant:b,classes:d}=e,h={root:["root",b,`${b}${(0,r.Z)(c)}`,`size${(0,r.Z)(a)}`,`${b}Size${(0,r.Z)(a)}`,"inherit"===c&&"colorInherit",f&&"disableElevation",g&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,r.Z)(a)}`],endIcon:["endIcon",`iconSize${(0,r.Z)(a)}`]},i=(0,o.Z)(h,t,d);return(0,l.Z)({},d,i)},z=a=>(0,l.Z)({},"small"===a.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===a.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===a.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),A=(0,b.ZP)(e.Z,{shouldForwardProp:a=>(0,b.FO)(a)||"classes"===a,name:"MuiButton",slot:"Root",overridesResolver(c,b){let{ownerState:a}=c;return[b.root,b[a.variant],b[`${a.variant}${(0,r.Z)(a.color)}`],b[`size${(0,r.Z)(a.size)}`],b[`${a.variant}Size${(0,r.Z)(a.size)}`],"inherit"===a.color&&b.colorInherit,a.disableElevation&&b.disableElevation,a.fullWidth&&b.fullWidth]}})(({theme:a,ownerState:b})=>{var c,d;return(0,l.Z)({},a.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(a.vars||a).shape.borderRadius,transition:a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short}),"&:hover":(0,l.Z)({textDecoration:"none",backgroundColor:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})`:(0,p.Fq)(a.palette.text.primary,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===b.variant&&"inherit"!==b.color&&{backgroundColor:a.vars?`rgba(${a.vars.palette[b.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:(0,p.Fq)(a.palette[b.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===b.variant&&"inherit"!==b.color&&{border:`1px solid ${(a.vars||a).palette[b.color].main}`,backgroundColor:a.vars?`rgba(${a.vars.palette[b.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:(0,p.Fq)(a.palette[b.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===b.variant&&{backgroundColor:(a.vars||a).palette.grey.A100,boxShadow:(a.vars||a).shadows[4],"@media (hover: none)":{boxShadow:(a.vars||a).shadows[2],backgroundColor:(a.vars||a).palette.grey[300]}},"contained"===b.variant&&"inherit"!==b.color&&{backgroundColor:(a.vars||a).palette[b.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[b.color].main}}),"&:active":(0,l.Z)({},"contained"===b.variant&&{boxShadow:(a.vars||a).shadows[8]}),[`&.${u.focusVisible}`]:(0,l.Z)({},"contained"===b.variant&&{boxShadow:(a.vars||a).shadows[6]}),[`&.${u.disabled}`]:(0,l.Z)({color:(a.vars||a).palette.action.disabled},"outlined"===b.variant&&{border:`1px solid ${(a.vars||a).palette.action.disabledBackground}`},"outlined"===b.variant&&"secondary"===b.color&&{border:`1px solid ${(a.vars||a).palette.action.disabled}`},"contained"===b.variant&&{color:(a.vars||a).palette.action.disabled,boxShadow:(a.vars||a).shadows[0],backgroundColor:(a.vars||a).palette.action.disabledBackground})},"text"===b.variant&&{padding:"6px 8px"},"text"===b.variant&&"inherit"!==b.color&&{color:(a.vars||a).palette[b.color].main},"outlined"===b.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===b.variant&&"inherit"!==b.color&&{color:(a.vars||a).palette[b.color].main,border:a.vars?`1px solid rgba(${a.vars.palette[b.color].mainChannel} / 0.5)`:`1px solid ${(0,p.Fq)(a.palette[b.color].main,.5)}`},"contained"===b.variant&&{color:a.vars?a.vars.palette.text.primary:null==(c=(d=a.palette).getContrastText)?void 0:c.call(d,a.palette.grey[300]),backgroundColor:(a.vars||a).palette.grey[300],boxShadow:(a.vars||a).shadows[2]},"contained"===b.variant&&"inherit"!==b.color&&{color:(a.vars||a).palette[b.color].contrastText,backgroundColor:(a.vars||a).palette[b.color].main},"inherit"===b.color&&{color:"inherit",borderColor:"currentColor"},"small"===b.size&&"text"===b.variant&&{padding:"4px 5px",fontSize:a.typography.pxToRem(13)},"large"===b.size&&"text"===b.variant&&{padding:"8px 11px",fontSize:a.typography.pxToRem(15)},"small"===b.size&&"outlined"===b.variant&&{padding:"3px 9px",fontSize:a.typography.pxToRem(13)},"large"===b.size&&"outlined"===b.variant&&{padding:"7px 21px",fontSize:a.typography.pxToRem(15)},"small"===b.size&&"contained"===b.variant&&{padding:"4px 10px",fontSize:a.typography.pxToRem(13)},"large"===b.size&&"contained"===b.variant&&{padding:"8px 22px",fontSize:a.typography.pxToRem(15)},b.fullWidth&&{width:"100%"})},({ownerState:a})=>a.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${u.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${u.disabled}`]:{boxShadow:"none"}}),B=(0,b.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver(b,a){let{ownerState:c}=b;return[a.startIcon,a[`iconSize${(0,r.Z)(c.size)}`]]}})(({ownerState:a})=>(0,l.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===a.size&&{marginLeft:-2},z(a))),C=(0,b.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver(b,a){let{ownerState:c}=b;return[a.endIcon,a[`iconSize${(0,r.Z)(c.size)}`]]}})(({ownerState:a})=>(0,l.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===a.size&&{marginRight:-2},z(a))),i=c.forwardRef(function(p,r){let e=c.useContext(v),s=(0,n.Z)(e,p),d=(0,q.Z)({props:s,name:"MuiButton"}),{children:t,color:u="primary",component:f="button",className:z,disabled:g=!1,disableElevation:D=!1,disableFocusRipple:h=!1,endIcon:i,focusVisibleClassName:E,fullWidth:F=!1,size:G="medium",startIcon:j,type:o,variant:H="text"}=d,I=(0,k.Z)(d,x),a=(0,l.Z)({},d,{color:u,component:f,disabled:g,disableElevation:D,disableFocusRipple:h,fullWidth:F,size:G,type:o,variant:H}),b=y(a),J=j&&(0,w.jsx)(B,{className:b.startIcon,ownerState:a,children:j}),K=i&&(0,w.jsx)(C,{className:b.endIcon,ownerState:a,children:i});return(0,w.jsxs)(A,(0,l.Z)({ownerState:a,className:(0,m.Z)(z,e.className),component:f,disabled:g,focusRipple:!h,focusVisibleClassName:(0,m.Z)(b.focusVisible,E),ref:r,type:o},I,{classes:b,children:[J,t,K]}))});var D=i},69:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/result/[id]",function(){return c(5318)}])},5318:function(i,b,a){"use strict";a.r(b),a.d(b,{default:function(){return B}});var j=a(5893),d=a(1163),k=a.n(d),e=a(7294),l=a(3366),m=a(7462),n=a(6010),o=a(4780),p=a(1796),c=a(1496),q=a(7623),r=a(4867),f=a(1588);function s(a){return(0,r.Z)("MuiDivider",a)}(0,f.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);let t=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],u=d=>{let{absolute:e,children:b,classes:f,flexItem:g,light:h,orientation:a,textAlign:c,variant:i}=d;return(0,o.Z)({root:["root",e&&"absolute",i,h&&"light","vertical"===a&&"vertical",g&&"flexItem",b&&"withChildren",b&&"vertical"===a&&"withChildrenVertical","right"===c&&"vertical"!==a&&"textAlignRight","left"===c&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]},s,f)},v=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver(c,b){let{ownerState:a}=c;return[b.root,a.absolute&&b.absolute,b[a.variant],a.light&&b.light,"vertical"===a.orientation&&b.vertical,a.flexItem&&b.flexItem,a.children&&b.withChildren,a.children&&"vertical"===a.orientation&&b.withChildrenVertical,"right"===a.textAlign&&"vertical"!==a.orientation&&b.textAlignRight,"left"===a.textAlign&&"vertical"!==a.orientation&&b.textAlignLeft]}})(({theme:a,ownerState:b})=>(0,m.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(a.vars||a).palette.divider,borderBottomWidth:"thin"},b.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},b.light&&{borderColor:a.vars?`rgba(${a.vars.palette.dividerChannel} / 0.08)`:(0,p.Fq)(a.palette.divider,.08)},"inset"===b.variant&&{marginLeft:72},"middle"===b.variant&&"horizontal"===b.orientation&&{marginLeft:a.spacing(2),marginRight:a.spacing(2)},"middle"===b.variant&&"vertical"===b.orientation&&{marginTop:a.spacing(1),marginBottom:a.spacing(1)},"vertical"===b.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},b.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:a,ownerState:b})=>(0,m.Z)({},b.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(a.vars||a).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:a,ownerState:b})=>(0,m.Z)({},b.children&&"vertical"===b.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(a.vars||a).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:a})=>(0,m.Z)({},"right"===a.textAlign&&"vertical"!==a.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===a.textAlign&&"vertical"!==a.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),w=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver(b,a){let{ownerState:c}=b;return[a.wrapper,"vertical"===c.orientation&&a.wrapperVertical]}})(({theme:a,ownerState:b})=>(0,m.Z)({display:"inline-block",paddingLeft:`calc(${a.spacing(1)} * 1.2)`,paddingRight:`calc(${a.spacing(1)} * 1.2)`},"vertical"===b.orientation&&{paddingTop:`calc(${a.spacing(1)} * 1.2)`,paddingBottom:`calc(${a.spacing(1)} * 1.2)`})),g=e.forwardRef(function(g,h){let a=(0,q.Z)({props:g,name:"MuiDivider"}),{absolute:i=!1,children:b,className:k,component:c=b?"div":"hr",flexItem:o=!1,light:p=!1,orientation:r="horizontal",role:e="hr"!==c?"separator":void 0,textAlign:s="center",variant:x="fullWidth"}=a,y=(0,l.Z)(a,t),d=(0,m.Z)({},a,{absolute:i,component:c,flexItem:o,light:p,orientation:r,role:e,textAlign:s,variant:x}),f=u(d);return(0,j.jsx)(v,(0,m.Z)({as:c,className:(0,n.Z)(f.root,k),role:e,ref:h,ownerState:d},y,{children:b?(0,j.jsx)(w,{className:f.wrapper,ownerState:d,children:b}):null}))});var x=g,y=a(5333),z=a(3321),h=a(1248),A=a.n(h),B=function(){var b=(0,d.useRouter)(),c=e.useRef();return(0,j.jsxs)(y.Z,{sx:{width:"100%",height:"calc(100vh - 4rem)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",color:"rgb(100, 100, 100)"},children:[(0,j.jsx)(function(){return(0,e.useEffect)(function(){A().loadAnimation({container:c.current,renderer:"svg",loop:!1,autoplay:!0,animationData:a(523)})},[]),(0,j.jsx)(y.Z,{sx:{width:"35%",height:"35%"},ref:c})},{}),"Create Download Link Done!",(0,j.jsxs)(y.Z,{sx:{width:"100%",height:"200px",display:"flex",justifyContent:"center",padding:"30px 0"},children:[(0,j.jsx)(y.Z,{sx:{margin:"auto 0"},children:(0,j.jsx)(z.Z,{sx:{},variant:"contained",onClick:function(){k().push("/download/".concat(b.query.id))},children:"Download File"})}),(0,j.jsx)(x,{sx:{padding:"0 20px"},orientation:"vertical",flexItem:!0,children:"OR"}),(0,j.jsxs)(y.Z,{sx:{display:"flex",alignItems:"center",flexDirection:"column",margin:"auto 0"},children:[(0,j.jsx)(y.Z,{children:"Type ID from Another Device"}),(0,j.jsx)(y.Z,{sx:{padding:"10px 0 0 0",fontWeight:"bold"},children:" ID: ".concat(String(b.query.id).slice(0,3),"-").concat(String(b.query.id).slice(3,6),"-").concat(String(b.query.id).slice(6,9))})]})]})]})}},523:function(a){"use strict";a.exports=JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 1.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":130,"w":512,"h":512,"nm":"HDFC Success","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"check","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[256,256,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-82.5,4.5],[-31,55],[73,-52.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[1],"y":[0.076]},"t":60,"s":[0]},{"t":85,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[256,257.86,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.833],"y":[0.98,0.98,-66.114]},"o":{"x":[0.656,0.656,0.167],"y":[0.872,0.872,67.114]},"t":20,"s":[0,0,100]},{"t":60,"s":[150,150,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[236,236],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.172549019608,0.854901960784,0.580392156863,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,-3],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.626],"y":[0.729]},"o":{"x":[0.912],"y":[0.073]},"t":76,"s":[100]},{"t":119,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[256,257.86,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[0.999,0.999,1]},"o":{"x":[0.477,0.477,0.333],"y":[0.587,0.587,0]},"t":10,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":50,"s":[150,150,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":76,"s":[150,150,100]},{"t":123,"s":[210,210,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[236,236],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.783504889993,0.945098039216,0.880089314779,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,-3],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"BG","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[256,256,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[554,556],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-1,6],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0}],"markers":[]}')}},function(a){a.O(0,[296,774,888,179],function(){var b;return a(a.s=69)}),_N_E=a.O()}])