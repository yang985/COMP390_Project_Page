(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[640],{8212:function(W,b,a){"use strict";a.d(b,{Z:function(){return C}});var u=a(28991),E=a(67294),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},q=n,B=a(27029),w=function(oe,ee){return E.createElement(B.Z,(0,u.Z)((0,u.Z)({},oe),{},{ref:ee,icon:q}))};w.displayName="EditOutlined";var C=E.forwardRef(w)},70347:function(){},47828:function(){},39144:function(W,b,a){"use strict";a.d(b,{Z:function(){return Ze}});var u=a(96156),E=a(22122),n=a(67294),q=a(94184),B=a.n(q),w=a(98423),C=a(65632),A=function(y,d){var x={};for(var s in y)Object.prototype.hasOwnProperty.call(y,s)&&d.indexOf(s)<0&&(x[s]=y[s]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,s=Object.getOwnPropertySymbols(y);h<s.length;h++)d.indexOf(s[h])<0&&Object.prototype.propertyIsEnumerable.call(y,s[h])&&(x[s[h]]=y[s[h]]);return x},oe=function(d){var x=d.prefixCls,s=d.className,h=d.hoverable,pe=h===void 0?!0:h,se=A(d,["prefixCls","className","hoverable"]);return n.createElement(C.C,null,function(ce){var ne=ce.getPrefixCls,J=ne("card",x),k=B()("".concat(J,"-grid"),s,(0,u.Z)({},"".concat(J,"-grid-hoverable"),pe));return n.createElement("div",(0,E.Z)({},se,{className:k}))})},ee=oe,te=function(y,d){var x={};for(var s in y)Object.prototype.hasOwnProperty.call(y,s)&&d.indexOf(s)<0&&(x[s]=y[s]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,s=Object.getOwnPropertySymbols(y);h<s.length;h++)d.indexOf(s[h])<0&&Object.prototype.propertyIsEnumerable.call(y,s[h])&&(x[s[h]]=y[s[h]]);return x},X=function(d){return n.createElement(C.C,null,function(x){var s=x.getPrefixCls,h=d.prefixCls,pe=d.className,se=d.avatar,ce=d.title,ne=d.description,J=te(d,["prefixCls","className","avatar","title","description"]),k=s("card",h),fe=B()("".concat(k,"-meta"),pe),ve=se?n.createElement("div",{className:"".concat(k,"-meta-avatar")},se):null,de=ce?n.createElement("div",{className:"".concat(k,"-meta-title")},ce):null,ye=ne?n.createElement("div",{className:"".concat(k,"-meta-description")},ne):null,ge=de||ye?n.createElement("div",{className:"".concat(k,"-meta-detail")},de,ye):null;return n.createElement("div",(0,E.Z)({},J,{className:fe}),ve,ge)})},T=X,$=a(51752),Q=a(71230),P=a(15746),ue=a(97647),ze=function(y,d){var x={};for(var s in y)Object.prototype.hasOwnProperty.call(y,s)&&d.indexOf(s)<0&&(x[s]=y[s]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,s=Object.getOwnPropertySymbols(y);h<s.length;h++)d.indexOf(s[h])<0&&Object.prototype.propertyIsEnumerable.call(y,s[h])&&(x[s[h]]=y[s[h]]);return x};function $e(y){var d=y.map(function(x,s){return n.createElement("li",{style:{width:"".concat(100/y.length,"%")},key:"action-".concat(s)},n.createElement("span",null,x))});return d}var Se=function(d){var x,s,h=n.useContext(C.E_),pe=h.getPrefixCls,se=h.direction,ce=n.useContext(ue.Z),ne=function(Pe){var ae;(ae=d.onTabChange)===null||ae===void 0||ae.call(d,Pe)},J=function(){var Pe;return n.Children.forEach(d.children,function(ae){ae&&ae.type&&ae.type===ee&&(Pe=!0)}),Pe},k=d.prefixCls,fe=d.className,ve=d.extra,de=d.headStyle,ye=de===void 0?{}:de,ge=d.bodyStyle,Te=ge===void 0?{}:ge,Ne=d.title,De=d.loading,we=d.bordered,We=we===void 0?!0:we,ke=d.size,Ke=d.type,Ce=d.cover,Le=d.actions,me=d.tabList,He=d.children,D=d.activeTabKey,Re=d.defaultActiveTabKey,Me=d.tabBarExtraContent,Fe=d.hoverable,je=d.tabProps,Be=je===void 0?{}:je,Ge=ze(d,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),N=pe("card",k),Ve=Te.padding===0||Te.padding==="0px"?{padding:24}:void 0,H=n.createElement("div",{className:"".concat(N,"-loading-block")}),Xe=n.createElement("div",{className:"".concat(N,"-loading-content"),style:Ve},n.createElement(Q.Z,{gutter:8},n.createElement(P.Z,{span:22},H)),n.createElement(Q.Z,{gutter:8},n.createElement(P.Z,{span:8},H),n.createElement(P.Z,{span:15},H)),n.createElement(Q.Z,{gutter:8},n.createElement(P.Z,{span:6},H),n.createElement(P.Z,{span:18},H)),n.createElement(Q.Z,{gutter:8},n.createElement(P.Z,{span:13},H),n.createElement(P.Z,{span:9},H)),n.createElement(Q.Z,{gutter:8},n.createElement(P.Z,{span:4},H),n.createElement(P.Z,{span:3},H),n.createElement(P.Z,{span:16},H))),Ue=D!==void 0,xe=(0,E.Z)((0,E.Z)({},Be),(x={},(0,u.Z)(x,Ue?"activeKey":"defaultActiveKey",Ue?D:Re),(0,u.Z)(x,"tabBarExtraContent",Me),x)),Ae,be=me&&me.length?n.createElement($.Z,(0,E.Z)({size:"large"},xe,{className:"".concat(N,"-head-tabs"),onChange:ne}),me.map(function(he){return n.createElement($.Z.TabPane,{tab:he.tab,disabled:he.disabled,key:he.key})})):null;(Ne||ve||be)&&(Ae=n.createElement("div",{className:"".concat(N,"-head"),style:ye},n.createElement("div",{className:"".concat(N,"-head-wrapper")},Ne&&n.createElement("div",{className:"".concat(N,"-head-title")},Ne),ve&&n.createElement("div",{className:"".concat(N,"-extra")},ve)),be));var Oe=Ce?n.createElement("div",{className:"".concat(N,"-cover")},Ce):null,Qe=n.createElement("div",{className:"".concat(N,"-body"),style:Te},De?Xe:He),Je=Le&&Le.length?n.createElement("ul",{className:"".concat(N,"-actions")},$e(Le)):null,Ye=(0,w.Z)(Ge,["onTabChange"]),_e=ke||ce,qe=B()(N,(s={},(0,u.Z)(s,"".concat(N,"-loading"),De),(0,u.Z)(s,"".concat(N,"-bordered"),We),(0,u.Z)(s,"".concat(N,"-hoverable"),Fe),(0,u.Z)(s,"".concat(N,"-contain-grid"),J()),(0,u.Z)(s,"".concat(N,"-contain-tabs"),me&&me.length),(0,u.Z)(s,"".concat(N,"-").concat(_e),_e),(0,u.Z)(s,"".concat(N,"-type-").concat(Ke),!!Ke),(0,u.Z)(s,"".concat(N,"-rtl"),se==="rtl"),s),fe);return n.createElement("div",(0,E.Z)({},Ye,{className:qe}),Ae,Oe,Qe,Je)};Se.Grid=ee,Se.Meta=T;var Ze=Se},58024:function(W,b,a){"use strict";var u=a(65056),E=a.n(u),n=a(70347),q=a.n(n),B=a(18106),w=a(13062),C=a(89032)},15746:function(W,b,a){"use strict";var u=a(21584);b.Z=u.Z},89032:function(W,b,a){"use strict";var u=a(65056),E=a.n(u),n=a(6999)},71230:function(W,b,a){"use strict";var u=a(92820);b.Z=u.Z},13062:function(W,b,a){"use strict";var u=a(65056),E=a.n(u),n=a(6999)},59289:function(W,b,a){"use strict";a.d(b,{Z:function(){return ct}});var u=a(22122),E=a(96156),n=a(67294),q=a(94184),B=a.n(q),w=a(42550),C=a(65632),A=a(21687),oe=function(r,i){var l={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&i.indexOf(e)<0&&(l[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(l[e[t]]=r[e[t]]);return l},ee=function(i,l){var e=i.prefixCls,t=i.component,o=t===void 0?"article":t,c=i.className,f=i["aria-label"],p=i.setContentRef,v=i.children,g=oe(i,["prefixCls","component","className","aria-label","setContentRef","children"]),m=l;return p&&((0,A.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),m=(0,w.sQ)(l,p)),n.createElement(C.C,null,function(S){var R=S.getPrefixCls,F=S.direction,U=o,M=R("typography",e),Y=B()(M,(0,E.Z)({},"".concat(M,"-rtl"),F==="rtl"),c);return n.createElement(U,(0,u.Z)({className:Y,"aria-label":f,ref:m},g),v)})},te=n.forwardRef(ee);te.displayName="Typography";var X=te,T=X,$=a(90484),Q=a(98423),P=a(85061),ue=a(6610),ze=a(5991),$e=a(10379),Se=a(44144),Ze=a(50344),y=a(20640),d=a.n(y),x=a(8212),s=a(79508),h=a(99165),pe=a(48717),se=a(69224),ce=a(42051),ne=a(34952),J=a(32637),k=a(31808),fe=a(69713),ve=a(28481),de=a(15105),ye=a(28991),ge={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},Te=ge,Ne=a(27029),De=function(i,l){return n.createElement(Ne.Z,(0,ye.Z)((0,ye.Z)({},i),{},{ref:l,icon:Te}))};De.displayName="EnterOutlined";var we=n.forwardRef(De),We=a(45839),ke=function(i){var l=i.prefixCls,e=i["aria-label"],t=i.className,o=i.style,c=i.direction,f=i.maxLength,p=i.autoSize,v=p===void 0?!0:p,g=i.value,m=i.onSave,S=i.onCancel,R=i.onEnd,F=n.useRef(),U=n.useRef(!1),M=n.useRef(),Y=n.useState(g),re=(0,ve.Z)(Y,2),_=re[0],Ee=re[1];n.useEffect(function(){Ee(g)},[g]),n.useEffect(function(){if(F.current&&F.current.resizableTextArea){var L=F.current.resizableTextArea.textArea;L.focus();var I=L.value.length;L.setSelectionRange(I,I)}},[]);var O=function(I){var j=I.target;Ee(j.value.replace(/[\n\r]/g,""))},Z=function(){U.current=!0},z=function(){U.current=!1},K=function(I){var j=I.keyCode;U.current||(M.current=j)},G=function(){m(_.trim())},ie=function(I){var j=I.keyCode,et=I.ctrlKey,tt=I.altKey,nt=I.metaKey,at=I.shiftKey;M.current===j&&!U.current&&!et&&!tt&&!nt&&!at&&(j===de.Z.ENTER?(G(),R==null||R()):j===de.Z.ESC&&S())},V=function(){G()},le=B()(l,"".concat(l,"-edit-content"),(0,E.Z)({},"".concat(l,"-rtl"),c==="rtl"),t);return n.createElement("div",{className:le,style:o},n.createElement(We.Z,{ref:F,maxLength:f,value:_,onChange:O,onKeyDown:K,onKeyUp:ie,onCompositionStart:Z,onCompositionEnd:z,onBlur:V,"aria-label":e,autoSize:v}),n.createElement(we,{className:"".concat(l,"-edit-content-confirm")}))},Ke=ke,Ce=a(73935),Le=1,me=3,He=8,D,Re={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function Me(r){if(!r)return 0;var i=r.match(/^\d*(\.\d*)?/);return i?Number(i[0]):0}function Fe(r){var i=Array.prototype.slice.apply(r);return i.map(function(l){return"".concat(l,": ").concat(r.getPropertyValue(l),";")}).join("")}function je(r){var i=[];return r.forEach(function(l){var e=i[i.length-1];typeof l=="string"&&typeof e=="string"?i[i.length-1]+=l:i.push(l)}),i}function Be(r,i){r.setAttribute("aria-hidden","true");var l=window.getComputedStyle(i),e=Fe(l);r.setAttribute("style",e),r.style.position="fixed",r.style.left="0",r.style.height="auto",r.style.minHeight="auto",r.style.maxHeight="auto",r.style.top="-999999px",r.style.zIndex="-1000",r.style.textOverflow="clip",r.style.whiteSpace="normal",r.style.webkitLineClamp="none"}function Ge(r){var i=document.createElement("div");Be(i,r),i.appendChild(document.createTextNode("text")),document.body.appendChild(i);var l=i.offsetHeight,e=Me(window.getComputedStyle(r).lineHeight);return document.body.removeChild(i),l>e?l:e}var N=function(r,i,l,e,t){D||(D=document.createElement("div"),D.setAttribute("aria-hidden","true")),D.parentNode||document.body.appendChild(D);var o=i.rows,c=i.suffix,f=c===void 0?"":c,p=window.getComputedStyle(r),v=Ge(r),g=Math.floor(v)*(o+1)+Me(p.paddingTop)+Me(p.paddingBottom);Be(D,r);var m=je((0,Ze.Z)(l));(0,Ce.render)(n.createElement("div",{style:Re},n.createElement("span",{style:Re},m,f),n.createElement("span",{style:Re},e)),D);function S(){return Math.ceil(D.getBoundingClientRect().height)<g}if(S())return(0,Ce.unmountComponentAtNode)(D),{content:l,text:D.innerHTML,ellipsis:!1};var R=Array.prototype.slice.apply(D.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(O){var Z=O.nodeType;return Z!==He}),F=Array.prototype.slice.apply(D.childNodes[0].childNodes[1].cloneNode(!0).childNodes);(0,Ce.unmountComponentAtNode)(D);var U=[];D.innerHTML="";var M=document.createElement("span");D.appendChild(M);var Y=document.createTextNode(t+f);M.appendChild(Y),F.forEach(function(O){D.appendChild(O)});function re(O){M.insertBefore(O,Y)}function _(O,Z){var z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,K=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Z.length,G=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,ie=Math.floor((z+K)/2),V=Z.slice(0,ie);if(O.textContent=V,z>=K-1)for(var le=K;le>=z;le-=1){var L=Z.slice(0,le);if(O.textContent=L,S()||!L)return le===Z.length?{finished:!1,reactNode:Z}:{finished:!0,reactNode:L}}return S()?_(O,Z,ie,K,ie):_(O,Z,z,ie,G)}function Ee(O,Z){var z=O.nodeType;if(z===Le)return re(O),S()?{finished:!1,reactNode:m[Z]}:(M.removeChild(O),{finished:!0,reactNode:null});if(z===me){var K=O.textContent||"",G=document.createTextNode(K);return re(G),_(G,K)}return{finished:!1,reactNode:null}}return R.some(function(O,Z){var z=Ee(O,Z),K=z.finished,G=z.reactNode;return G&&U.push(G),K}),{content:U,text:D.innerHTML,ellipsis:!0}},Ve=function(r,i){var l={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&i.indexOf(e)<0&&(l[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(l[e[t]]=r[e[t]]);return l},H=(0,k.GL)("webkitLineClamp"),Xe=(0,k.GL)("textOverflow");function Ue(r,i){var l=r.mark,e=r.code,t=r.underline,o=r.delete,c=r.strong,f=r.keyboard,p=r.italic,v=i;function g(m,S){!m||(v=n.createElement(S,{},v))}return g(c,"strong"),g(t,"u"),g(o,"del"),g(e,"code"),g(l,"mark"),g(f,"kbd"),g(p,"i"),v}function xe(r,i,l){return r===!0||r===void 0?i:r||l&&i}var Ae="...",be=function(r){(0,$e.Z)(l,r);var i=(0,Se.Z)(l);function l(){var e;return(0,ue.Z)(this,l),e=i.apply(this,arguments),e.contentRef=n.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls,o=e.context.getPrefixCls;return o("typography",t)},e.onExpandClick=function(t){var o,c=e.getEllipsis(),f=c.onExpand;e.setState({expanded:!0}),(o=f)===null||o===void 0||o(t)},e.onEditClick=function(t){t.preventDefault(),e.triggerEdit(!0)},e.onEditChange=function(t){var o=e.getEditable(),c=o.onChange;c==null||c(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,o;(o=(t=e.getEditable()).onCancel)===null||o===void 0||o.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var o=e.props,c=o.children,f=o.copyable,p=(0,u.Z)({},(0,$.Z)(f)==="object"?f:null);p.text===void 0&&(p.text=String(c)),d()(p.text||""),e.setState({copied:!0},function(){p.onCopy&&p.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var o=e.getEditable(),c=o.onStart;t&&c&&c(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){J.Z.cancel(e.rafId),e.rafId=(0,J.Z)(function(){e.syncEllipsis()})},e}return(0,ze.Z)(l,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(t){var o=this.props.children,c=this.getEllipsis(),f=this.getEllipsis(t);(o!==t.children||c.rows!==f.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),J.Z.cancel(this.rafId)}},{key:"getEditable",value:function(t){var o=this.state.edit,c=t||this.props,f=c.editable;return f?(0,u.Z)({editing:o},(0,$.Z)(f)==="object"?f:null):{editing:o}}},{key:"getEllipsis",value:function(t){var o=t||this.props,c=o.ellipsis;return c?(0,u.Z)({rows:1,expandable:!1},(0,$.Z)(c)==="object"?c:null):{}}},{key:"canUseCSSEllipsis",value:function(){var t=this.state.clientRendered,o=this.props,c=o.editable,f=o.copyable,p=this.getEllipsis(),v=p.rows,g=p.expandable,m=p.suffix,S=p.onEllipsis,R=p.tooltip;return m||R||c||f||g||!t||S?!1:v===1?Xe:H}},{key:"syncEllipsis",value:function(){var t=this.state,o=t.ellipsisText,c=t.isEllipsis,f=t.expanded,p=this.getEllipsis(),v=p.rows,g=p.suffix,m=p.onEllipsis,S=this.props.children;if(!(!v||v<0||!this.contentRef.current||f)&&!this.canUseCSSEllipsis()){(0,A.Z)((0,Ze.Z)(S).every(function(Y){return typeof Y=="string"}),"Typography","`ellipsis` should use string as children only.");var R=N(this.contentRef.current,{rows:v,suffix:g},S,this.renderOperations(!0),Ae),F=R.content,U=R.text,M=R.ellipsis;(o!==U||c!==M)&&(this.setState({ellipsisText:U,ellipsisContent:F,isEllipsis:M}),c!==M&&m&&m(M))}}},{key:"renderExpand",value:function(t){var o=this.getEllipsis(),c=o.expandable,f=o.symbol,p=this.state,v=p.expanded,g=p.isEllipsis;if(!c||!t&&(v||!g))return null;var m;return f?m=f:m=this.expandStr,n.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},m)}},{key:"renderEdit",value:function(){var t=this.props.editable;if(!!t){var o=t.icon,c=t.tooltip,f=(0,Ze.Z)(c)[0]||this.editStr,p=typeof f=="string"?f:"";return n.createElement(fe.Z,{key:"edit",title:c===!1?"":f},n.createElement(ne.Z,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":p},o||n.createElement(x.Z,{role:"button"})))}}},{key:"renderCopy",value:function(){var t=this.state.copied,o=this.props.copyable;if(!!o){var c=this.getPrefixCls(),f=o.tooltips,p=o.icon,v=Array.isArray(f)?f:[f],g=Array.isArray(p)?p:[p],m=t?xe(v[1],this.copiedStr):xe(v[0],this.copyStr),S=t?this.copiedStr:this.copyStr,R=typeof m=="string"?m:S;return n.createElement(fe.Z,{key:"copy",title:m},n.createElement(ne.Z,{className:B()("".concat(c,"-copy"),t&&"".concat(c,"-copy-success")),onClick:this.onCopyClick,"aria-label":R},t?xe(g[1],n.createElement(s.Z,null),!0):xe(g[0],n.createElement(h.Z,null),!0)))}}},{key:"renderEditInput",value:function(){var t=this.props,o=t.children,c=t.className,f=t.style,p=this.context.direction,v=this.getEditable(),g=v.maxLength,m=v.autoSize,S=v.onEnd;return n.createElement(Ke,{value:typeof o=="string"?o:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:S,prefixCls:this.getPrefixCls(),className:c,style:f,direction:p,maxLength:g,autoSize:m})}},{key:"renderOperations",value:function(t){return[this.renderExpand(t),this.renderEdit(),this.renderCopy()].filter(function(o){return o})}},{key:"renderContent",value:function(){var t=this,o=this.state,c=o.ellipsisContent,f=o.isEllipsis,p=o.expanded,v=this.props,g=v.component,m=v.children,S=v.className,R=v.type,F=v.disabled,U=v.style,M=Ve(v,["component","children","className","type","disabled","style"]),Y=this.context.direction,re=this.getEllipsis(),_=re.rows,Ee=re.suffix,O=re.tooltip,Z=this.getPrefixCls(),z=(0,Q.Z)(M,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat((0,P.Z)(se.nf))),K=this.canUseCSSEllipsis(),G=_===1&&K,ie=_&&_>1&&K,V=m;if(_&&f&&!p&&!K){var le=M.title,L=le||"";!le&&(typeof m=="string"||typeof m=="number")&&(L=String(m)),L=L.slice(String(c||"").length),V=n.createElement(n.Fragment,null,c,n.createElement("span",{title:L,"aria-hidden":"true"},Ae),Ee),O&&(V=n.createElement(fe.Z,{title:O===!0?m:O},n.createElement("span",null,V)))}else V=n.createElement(n.Fragment,null,m,Ee);return V=Ue(this.props,V),n.createElement(ce.Z,{componentName:"Text"},function(I){var j,et=I.edit,tt=I.copy,nt=I.copied,at=I.expand;return t.editStr=et,t.copyStr=tt,t.copiedStr=nt,t.expandStr=at,n.createElement(pe.Z,{onResize:t.resizeOnNextFrame,disabled:K},n.createElement(T,(0,u.Z)({className:B()((j={},(0,E.Z)(j,"".concat(Z,"-").concat(R),R),(0,E.Z)(j,"".concat(Z,"-disabled"),F),(0,E.Z)(j,"".concat(Z,"-ellipsis"),_),(0,E.Z)(j,"".concat(Z,"-single-line"),_===1),(0,E.Z)(j,"".concat(Z,"-ellipsis-single-line"),G),(0,E.Z)(j,"".concat(Z,"-ellipsis-multiple-line"),ie),j),S),style:(0,u.Z)((0,u.Z)({},U),{WebkitLineClamp:ie?_:void 0}),component:g,ref:t.contentRef,direction:Y},z),V,t.renderOperations()))})}},{key:"render",value:function(){var t=this.getEditable(),o=t.editing;return o?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(t){var o=t.children,c=t.editable;return(0,A.Z)(!c||typeof o=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),l}(n.Component);be.contextType=C.E_,be.defaultProps={children:""};var Oe=be,Qe=function(r,i){var l={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&i.indexOf(e)<0&&(l[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(l[e[t]]=r[e[t]]);return l},Je=function(i){var l=i.ellipsis,e=Qe(i,["ellipsis"]),t=n.useMemo(function(){return l&&(0,$.Z)(l)==="object"?(0,Q.Z)(l,["expandable","rows"]):l},[l]);return(0,A.Z)((0,$.Z)(l)!=="object"||!l||!("expandable"in l)&&!("rows"in l),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),n.createElement(Oe,(0,u.Z)({},e,{ellipsis:t,component:"span"}))},Ye=Je,_e=function(r,i){var l={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&i.indexOf(e)<0&&(l[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(l[e[t]]=r[e[t]]);return l},qe=function(i,l){var e=i.ellipsis,t=i.rel,o=_e(i,["ellipsis","rel"]);(0,A.Z)((0,$.Z)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var c=n.useRef(null);n.useImperativeHandle(l,function(){var p;return(p=c.current)===null||p===void 0?void 0:p.contentRef.current});var f=(0,u.Z)((0,u.Z)({},o),{rel:t===void 0&&o.target==="_blank"?"noopener noreferrer":t});return delete f.navigate,n.createElement(Oe,(0,u.Z)({},f,{ref:c,ellipsis:!!e,component:"a"}))},he=n.forwardRef(qe),Pe=a(93355),ae=function(r,i){var l={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&i.indexOf(e)<0&&(l[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(l[e[t]]=r[e[t]]);return l},rt=(0,Pe.a)(1,2,3,4,5),it=function(i){var l=i.level,e=l===void 0?1:l,t=ae(i,["level"]),o;return rt.indexOf(e)!==-1?o="h".concat(e):((0,A.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),o="h1"),n.createElement(Oe,(0,u.Z)({},t,{component:o}))},lt=it,ot=function(i){return n.createElement(Oe,(0,u.Z)({},i,{component:"div"}))},st=ot,Ie=T;Ie.Text=Ye,Ie.Link=he,Ie.Title=lt,Ie.Paragraph=st;var ct=Ie},402:function(W,b,a){"use strict";var u=a(65056),E=a.n(u),n=a(47828),q=a.n(n),B=a(22385),w=a(47673)},20640:function(W,b,a){"use strict";var u=a(11742),E={"text/plain":"Text","text/html":"Url",default:"Text"},n="Copy to clipboard: #{key}, Enter";function q(w){var C=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return w.replace(/#{\s*key\s*}/g,C)}function B(w,C){var A,oe,ee,te,X,T,$=!1;C||(C={}),A=C.debug||!1;try{ee=u(),te=document.createRange(),X=document.getSelection(),T=document.createElement("span"),T.textContent=w,T.style.all="unset",T.style.position="fixed",T.style.top=0,T.style.clip="rect(0, 0, 0, 0)",T.style.whiteSpace="pre",T.style.webkitUserSelect="text",T.style.MozUserSelect="text",T.style.msUserSelect="text",T.style.userSelect="text",T.addEventListener("copy",function(P){if(P.stopPropagation(),C.format)if(P.preventDefault(),typeof P.clipboardData=="undefined"){A&&console.warn("unable to use e.clipboardData"),A&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var ue=E[C.format]||E.default;window.clipboardData.setData(ue,w)}else P.clipboardData.clearData(),P.clipboardData.setData(C.format,w);C.onCopy&&(P.preventDefault(),C.onCopy(P.clipboardData))}),document.body.appendChild(T),te.selectNodeContents(T),X.addRange(te);var Q=document.execCommand("copy");if(!Q)throw new Error("copy command was unsuccessful");$=!0}catch(P){A&&console.error("unable to copy using execCommand: ",P),A&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(C.format||"text",w),C.onCopy&&C.onCopy(window.clipboardData),$=!0}catch(ue){A&&console.error("unable to copy using clipboardData: ",ue),A&&console.error("falling back to prompt"),oe=q("message"in C?C.message:n),window.prompt(oe,w)}}finally{X&&(typeof X.removeRange=="function"?X.removeRange(te):X.removeAllRanges()),T&&document.body.removeChild(T),ee()}return $}W.exports=B},11742:function(W){W.exports=function(){var b=document.getSelection();if(!b.rangeCount)return function(){};for(var a=document.activeElement,u=[],E=0;E<b.rangeCount;E++)u.push(b.getRangeAt(E));switch(a.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":a.blur();break;default:a=null;break}return b.removeAllRanges(),function(){b.type==="Caret"&&b.removeAllRanges(),b.rangeCount||u.forEach(function(n){b.addRange(n)}),a&&a.focus()}}}}]);
