(()=>{var e,t={214:(e,t,l)=>{"use strict";const n=window.wp.blocks,r=window.wp.element,o=window.wp.primitives,i=(0,r.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(o.Path,{d:"M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM6 17.5c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h3v10H6zm13.5-.5c0 .3-.2.5-.5.5h-3v-10h3c.3 0 .5.2.5.5v9z"}));var s=l(184),a=l.n(s);const c=window.wp.blockEditor,u=window.wp.components,p=window.wp.data,d=window.wp.i18n,m=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"lyn/column","title":"Lyntouch Column","category":"text","parent":["lyn/columns"],"description":"A single column within a columns block.","textdomain":"default","attributes":{"verticalAlignment":{"type":"string"},"width":{"type":"string"},"allowedBlocks":{"type":"array"},"templateLock":{"type":["string","boolean"],"enum":["all","insert",false]}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","supports":{"anchor":true,"reusable":false,"html":false,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"blockGap":true,"padding":true,"__experimentalDefaultControls":{"padding":true}},"__experimentalBorder":{"color":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"style":true,"width":true}},"__experimentalLayout":true}}'),{name:h}=m,v={icon:i,edit:function(e){let{attributes:{verticalAlignment:t,gap:l,width:n,templateLock:o=!1,allowedBlocks:i},setAttributes:s,clientId:m}=e;const h=a()("block-core-columns",{[`is-vertically-aligned-${t}`]:t}),v=(0,u.__experimentalUseCustomUnits)({availableUnits:(0,c.useSetting)("spacing.units")||["%","px","em","rem","vw"]}),{columnsIds:g,hasChildBlocks:f,rootClientId:w}=(0,p.useSelect)((e=>{const{getBlockOrder:t,getBlockRootClientId:l}=e(c.store),n=l(m);return{hasChildBlocks:t(m).length>0,rootClientId:n,columnsIds:t(n)}}),[m]),{updateBlockAttributes:b}=(0,p.useDispatch)(c.store),k=Number.isFinite(n)?n+"%":n,y=(0,c.useBlockProps)({className:h,style:k?{flexBasis:k}:void 0}),x=g.length,_=g.indexOf(m)+1,B=(0,d.sprintf)(
/* translators: 1: Block label (i.e. "Block: Column"), 2: Position of the selected block, 3: Total number of sibling blocks of the same type */
(0,d.__)("%1$s (%2$d of %3$d)"),y["aria-label"],_,x),C=(0,c.useInnerBlocksProps)({...y,"aria-label":B},{templateLock:o,allowedBlocks:i,renderAppender:f?void 0:c.InnerBlocks.ButtonBlockAppender});return C.className=C.className.replace(/wp-container-\d./g,"").replace("wp-block",""),(0,r.createElement)(r.Fragment,null,(0,r.createElement)(c.BlockControls,null,(0,r.createElement)(c.BlockVerticalAlignmentToolbar,{onChange:e=>{console.log({value:e}),"center"===e&&s({verticalAlignment:e}),b(w,{verticalAlignment:null})},value:t})),(0,r.createElement)(c.InspectorControls,null,(0,r.createElement)(u.PanelBody,{title:(0,d.__)("Column settings")},(0,r.createElement)(u.__experimentalUnitControl,{label:(0,d.__)("Width"),labelPosition:"edge",__unstableInputWidth:"80px",value:n||"",onChange:e=>{e=0>parseFloat(e)?"0":e,s({width:e})},units:v}))),(0,r.createElement)("div",C))},save:function(e){let{attributes:t}=e;const{verticalAlignment:l,width:n}=t,o=a()({[`is-vertically-aligned-${l}`]:l});let i;if(n&&/\d/.test(n)){let e=Number.isFinite(n)?n+"%":n;if(!Number.isFinite(n)&&null!=n&&n.endsWith("%")){const t=1e12;e=Math.round(Number.parseFloat(n)*t)/t+"%"}i={flexBasis:e}}const s=c.useBlockProps.save({className:o,style:i}),u=c.useInnerBlocksProps.save(s);return(0,r.createElement)("div",u)}};(0,n.registerBlockType)(h,v)},184:(e,t)=>{var l;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var o=typeof l;if("string"===o||"number"===o)e.push(l);else if(Array.isArray(l)){if(l.length){var i=r.apply(null,l);i&&e.push(i)}}else if("object"===o)if(l.toString===Object.prototype.toString)for(var s in l)n.call(l,s)&&l[s]&&e.push(s);else e.push(l.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(l=function(){return r}.apply(t,[]))||(e.exports=l)}()}},l={};function n(e){var r=l[e];if(void 0!==r)return r.exports;var o=l[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,l,r,o)=>{if(!l){var i=1/0;for(u=0;u<e.length;u++){for(var[l,r,o]=e[u],s=!0,a=0;a<l.length;a++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](l[a])))?l.splice(a--,1):(s=!1,o<i&&(i=o));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[l,r,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={228:0,273:0};n.O.j=t=>0===e[t];var t=(t,l)=>{var r,o,[i,s,a]=l,c=0;if(i.some((t=>0!==e[t]))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(a)var u=a(n)}for(t&&t(l);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},l=globalThis.webpackChunklyntouch_blocks=globalThis.webpackChunklyntouch_blocks||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var r=n.O(void 0,[273],(()=>n(214)));r=n.O(r)})();