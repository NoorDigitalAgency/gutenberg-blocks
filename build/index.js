(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{18:function(e,t,n){}}]),function(e){function t(t){for(var o,a,l=t[0],i=t[1],u=t[2],b=0,d=[];b<l.length;b++)a=l[b],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(s&&s(t);d.length;)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={1:0},c=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=i;c.push([14,2]),n()}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t){!function(){e.exports=this.wp.hooks}()},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},function(e,t,n){var o=n(15),r=n(16),c=n(8),a=n(17);e.exports=function(e,t){return o(e)||r(e,t)||c(e,t)||a()}},function(e,t,n){var o=n(6);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},,function(e,t,n){n(23),n(18),e.exports=n(19)},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,c=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,c=e}finally{try{o||null==l.return||l.return()}finally{if(r)throw c}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"name",(function(){return O})),n.d(o,"settings",(function(){return f}));var r={};n.r(r),n.d(r,"name",(function(){return _})),n.d(r,"settings",(function(){return C}));var c={};n.r(c),n.d(c,"name",(function(){return w})),n.d(c,"settings",(function(){return I}));var a=n(10),l=n(1),i=n(2),u=n(7),s=n.n(u),b=n(0),d=n(3),m=n(9),p=n.n(m),g=function(e){var t=e.onClick,n=e.options,o=e.initialChecked,r=e.showIcons,c=e.label;return Object(b.createElement)(d.ButtonGroup,p()({mode:"radio"},!r&&{onClick:function(e){return t(e)}}),c&&Object(b.createElement)("p",null,Object(b.createElement)("strong",null,c)),n.map((function(e,n){return Object(b.createElement)(d.Button,p()({},r&&{onClick:function(e){return t(e)}},{className:o===e&&"is-primary",key:n,checked:o,value:e}),r?Object(b.createElement)(d.Dashicon,{icon:e}):e)})))};var O="accordion",f={title:Object(l.__)("Accordion","accordion"),description:Object(l.__)("Accordion block","blocks"),category:"noor-collection",icon:"list-view",supports:{html:!1},attributes:{anchorContent:{type:"string",default:""},titleContent:{type:"string",default:"Example title..."},titleTag:{type:"string",default:"h4"},initialState:{type:"boolean",default:!1},titleColor:{type:"string"},titleBackground:{type:"string"},contentBackground:{type:"string"},expandIcon:{type:"string",default:"arrow-down-alt2"},collapseIcon:{type:"string",default:"arrow-up-alt2"},iconAlignment:{type:"string",default:"right"}},edit:Object(i.withColors)({titleColor:"color",titleBackground:"background-color",contentBackground:"background-color"})((function(e){var t=e.titleColor,n=e.setTitleColor,o=e.titleBackground,r=e.setTitleBackground,c=e.contentBackground,a=e.setContentBackground,u=e.attributes,m=e.setAttributes,p=Object(b.useState)(!1),O=s()(p,2),f=O[0],j=O[1],h=null!=t.class?t.class:"",_=null!=o.class?o.class:"",C=null!=c.class?c.class:"",k={expand:["arrow-down","arrow-right","arrow-down-alt2","arrow-right-alt2","arrow-down-alt","arrow-right-alt","plus"],collapse:["arrow-up","arrow-up-alt2","minus","arrow-up-alt","no-alt"]};return Object(b.createElement)(b.Fragment,null,Object(b.createElement)(i.InspectorControls,null,Object(b.createElement)(d.PanelBody,{title:Object(l.__)("Base Settings"),initialOpen:!0},Object(b.createElement)("label",{className:"block-base-control__label"},Object(b.createElement)("strong",null,Object(l.__)("Anchor title"))),Object(b.createElement)(d.__experimentalInputControl,{value:u.anchorContent,onChange:function(e){return m({anchorContent:e})}}),Object(b.createElement)("label",{className:"block-base-control__label"},Object(b.createElement)("strong",null,Object(l.__)("Initial state"))),Object(b.createElement)(d.ToggleControl,{label:u.initialState?"Expanded by default":"Collapsed by default",checked:u.initialState,onChange:function(){return m({initialState:!u.initialState})}}),Object(b.createElement)(g,{label:Object(l.__)("Title size"),onClick:function(e){return m({titleTag:e.target.value})},options:["h1","h2","h3","h4","h5","h6"],initialChecked:u.titleTag})),Object(b.createElement)(d.PanelBody,{title:Object(l.__)("Icon settings"),initialOpen:!1},Object(b.createElement)(g,{label:Object(l.__)("Expand Icon"),onClick:function(e){return e.preventDefault(),m({expandIcon:e.currentTarget.value})},options:k.expand,initialChecked:u.expandIcon,showIcons:!0}),Object(b.createElement)(g,{label:Object(l.__)("Collapse Icon"),onClick:function(e){return e.preventDefault(),m({collapseIcon:e.currentTarget.value})},options:k.collapse,initialChecked:u.collapseIcon,showIcons:!0})),Object(b.createElement)(i.PanelColorSettings,{title:Object(l.__)("Color settings"),initialOpen:!1,colorSettings:[{value:t.color,onChange:n,label:Object(l.__)("Title text color")},{value:o.color,onChange:r,label:Object(l.__)("Title background color")},{value:c.color,onChange:a,label:Object(l.__)("Content background color")}]})),Object(b.createElement)("div",{id:"#".concat(u.anchorContent),className:"noor-block-accordion ".concat(_),onClick:function(){return j(!f)},"aria-expanded":"".concat(u.initialState||f)},Object(b.createElement)(i.RichText,{className:"noor-block-accordion__title ".concat(h),tagName:u.titleTag,value:u.titleContent,formattingControls:["bold","italic","align"],onChange:function(e){return m({titleContent:e})}}),Object(b.createElement)(d.Dashicon,{icon:f?u.collapseIcon:u.expandIcon,className:"noor-block-accordion__icon ".concat(h)})),Object(b.createElement)("div",{className:"noor-block-accordion__content ".concat(C)},Object(b.createElement)(i.InnerBlocks,{allowedBlocks:["core/paragraph","core/list","core/button"],template:[["core/paragraph",{}]]})))})),save:function(e){var t=e.attributes,n=t.titleColor,o=t.titleBackground,r=t.contentBackground,c=null!=n?Object(i.getColorClassName)("color",n):"",a=null!=o?Object(i.getColorClassName)("background-color",o):"",l=null!=r?Object(i.getColorClassName)("background-color",r):"";return Object(b.createElement)(b.Fragment,null,Object(b.createElement)("div",{id:"#".concat(t.anchorContent),className:"noor-block-accordion ".concat(a),"aria-expanded":t.initialState},Object(b.createElement)(i.RichText.Content,{className:"noor-block-accordion__title ".concat(c),tagName:t.titleTag,value:t.titleContent}),Object(b.createElement)("span",{className:"noor-block-accordion__icon dashicons dashicons-".concat(t.expandIcon," ").concat(c),"aria-hidden":"true","data-state":!t.initialState}),Object(b.createElement)("span",{className:"noor-block-accordion__icon dashicons dashicons-".concat(t.collapseIcon," ").concat(c),"aria-hidden":"true","data-state":t.initialState})),Object(b.createElement)("div",{className:"noor-block-accordion__content ".concat(l)},Object(b.createElement)(i.InnerBlocks.Content,null)))}},j=n(4),h=n(11);var _="bullet-point",C={title:Object(l.__)("Bullet point","accordion"),description:Object(l.__)("Bullet point block","blocks"),category:"noor-collection",icon:"marker",supports:{html:!1},attributes:{color:{type:"string"},backgroundColor:{type:"string"},align:{type:"string",default:"center"},useMedia:{type:"boolean",default:!1},mediaInput:{type:"string",default:""},mediaId:{type:"number",default:0},mediaUrl:{type:"string",default:""}},edit:Object(j.compose)(Object(i.withColors)({color:"color",backgroundColor:"background-color"}),Object(h.withSelect)((function(e,t){return{media:t.attributes.mediaId?e("core").getMedia(t.attributes.mediaId):void 0}})))((function(e){var t=e.color,n=e.setColor,o=e.backgroundColor,r=e.setBackgroundColor,c=e.attributes,a=e.setAttributes,u=(e.className,c.align),s=c.mediaId,m=null!=t.class?t.class:"",p=null!=o.class?o.class:"";return""!=c.mediaUrl&&c.mediaUrl,Object(b.createElement)(b.Fragment,null,Object(b.createElement)(i.InspectorControls,null,Object(b.createElement)(d.PanelBody,{title:Object(l.__)("Content settings"),initialOpen:!1},Object(b.createElement)(d.ToggleControl,{label:c.useMedia?"Set text content":"Set background image",checked:c.useMedia,onChange:function(){return a({useMedia:!c.useMedia})}}),c.useMedia?Object(b.createElement)("div",{className:"editor-post-featured-image"},Object(b.createElement)(i.MediaUploadCheck,null,Object(b.createElement)(i.MediaUpload,{onSelect:function(t){e.setAttributes({mediaId:t.id,mediaUrl:t.url})},value:s,allowedTypes:["image"],render:function(t){var n=t.open;return Object(b.createElement)(d.Button,{className:0==s?"editor-post-featured-image__toggle":"editor-post-featured-image__preview",onClick:n},0==s&&Object(l.__)("Choose an image"),null!=e.media&&Object(b.createElement)(d.ResponsiveWrapper,{naturalWidth:e.media.media_details.width,naturalHeight:e.media.media_details.height},Object(b.createElement)("img",{src:e.media.source_url})))}}))):Object(b.createElement)(d.__experimentalInputControl,{value:c.mediaInput,onChange:function(e){return a({mediaInput:e})}})),Object(b.createElement)(i.PanelColorSettings,{title:Object(l.__)("Colot settings"),initialOpen:!0,colorSettings:[{value:t.color,onChange:n,label:Object(l.__)("Text color")},{value:o.color,onChange:r,label:Object(l.__)("Background color")}]})),Object(b.createElement)(i.BlockControls,null,Object(b.createElement)(i.BlockAlignmentToolbar,{value:u,onChange:function(e){a({align:e})},controls:["left","right","center"]})),Object(b.createElement)("div",{className:"noor-block-bullet-point has-align-".concat(u)},Object(b.createElement)("div",{className:"noor-block-bullet-point__point ".concat(p)},c.useMedia&&0!=c.mediaId?Object(b.createElement)("img",{src:c.mediaUrl}):Object(b.createElement)("h3",{className:"noor-block-bullet-point__text-content ".concat(m)},c.mediaInput))))})),save:function(e){var t=e.attributes,n=t.color,o=t.backgroundColor,r=t.align,c=null!=n?Object(i.getColorClassName)("color",n):"",a=null!=o?Object(i.getColorClassName)("background-color",o):"";return Object(b.createElement)("div",{class:"noor-block-bullet-point has-align-".concat(r)},Object(b.createElement)("div",{className:"noor-block-bullet-point__point ".concat(a)},t.useMedia&&0!=t.mediaId?Object(b.createElement)("img",{src:t.mediaUrl}):Object(b.createElement)("h3",{className:"noor-block-bullet-point__text-content ".concat(c)},t.mediaInput)))}},k=n(12),y=n.n(k);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w="google-map",I={title:Object(l.__)("Google map","noorblocks"),description:Object(l.__)("Embeds an google maps iframe","noorblocks"),category:"noor-collection",icon:"location-alt",supports:{html:!1,align:!0},attributes:{zoom:{type:"number",default:20},width:{type:"number",default:361},height:{type:"number",default:160},address:{type:"object",default:{street:"",zip:"",city:"",country:"sweden"}},src:{type:"string"}},edit:function(e){var t,n,o=options.map_secret_key,r=e.attributes,c=e.setAttributes,a=r.width,u=r.height,m=r.zoom,p=r.address,g=Object(b.useState)(E({},p)),O=s()(g,2),f=O[0],j=O[1],h=(t=Object.values(f).filter((function(e){return""!=e})),c({address:t}),t).reduce((function(e,t){return e+encodeURI(t)}),""),_={width:a+"%",paddingBottom:u+"%"};return Object(b.createElement)(b.Fragment,null,Object(b.createElement)(i.InspectorControls,null,Object(b.createElement)(d.PanelBody,{title:Object(l.__)("Map Controls"),initialOpen:!0},Object(b.createElement)(d.RangeControl,{label:Object(l.__)("Frame Width"),value:a,onChange:function(e){return c({width:e})},min:0,max:100}),Object(b.createElement)(d.RangeControl,{label:Object(l.__)("Frame Height"),value:u,onChange:function(e){return c({height:e})},min:0,max:100}),Object(b.createElement)(d.RangeControl,{label:Object(l.__)("Frame Zoom"),value:m,onChange:function(e){return c({zoom:e})},min:0,max:100})),Object(b.createElement)(d.PanelBody,{title:Object(l.__)("Map Location"),initialOpen:!0},Object(b.createElement)("label",{className:"block-base-control__label"},Object(b.createElement)("strong",null,Object(l.__)("Street Address"))),Object(b.createElement)(d.__experimentalInputControl,{value:f.street,onChange:function(e){return j(E(E({},f),{},{street:e}))}}),Object(b.createElement)("label",{className:"block-base-control__label"},Object(b.createElement)("strong",null,Object(l.__)("Postal Code/Zip"))),Object(b.createElement)(d.__experimentalInputControl,{value:f.zip,onChange:function(e){return j(E(E({},f),{},{zip:e}))}}),Object(b.createElement)("label",{className:"block-base-control__label"},Object(b.createElement)("strong",null,Object(l.__)("City"))),Object(b.createElement)(d.__experimentalInputControl,{value:f.city,onChange:function(e){return j(E(E({},f),{},{city:e}))}}),Object(b.createElement)("label",{className:"block-base-control__label"},Object(b.createElement)("strong",null,Object(l.__)("Country"))),Object(b.createElement)(d.__experimentalInputControl,{value:f.country,onChange:function(e){return j(E(E({},f),{},{country:e}))}}))),Object(b.createElement)("div",{className:"noor-block-google-map",style:_},""!=o?Object(b.createElement)("iframe",{width:"361",height:"160",src:(n="".concat("https://www.google.com/maps/embed/v1/place?key="+o,"&q=").concat(h,"&zoom=").concat(m),c({src:n}),n),frameBorder:"0",allowFullScreen:!0}):Object(b.createElement)("p",null,Object(l.__)("Please provide API key in settings"))))},save:function(e){var t=e.attributes,n=t.width,o=t.height,r=t.src;return Object(b.createElement)("div",{className:"noor-block-google-map",style:{width:"".concat(n,"%"),height:"".concat(o,"%")}},Object(b.createElement)("iframe",{width:"361",height:"160",frameBorder:"0",src:r,allowFullScreen:!0}))}},x=n(5),B=["arrow-right-alt","arrow-left-alt","arrow-right-alt2","arrow-left-alt2","clock"],S=Object(j.createHigherOrderComponent)((function(e){return function(t){if("core/button"!==t.name)return Object(b.createElement)(e,t);t.attributes;var n=t.setAttributes,o=t.attributes,r=o.useIcon,c=o.alignIcon,a=o.icon,u=function(e,t){var o,l;t&&t.preventDefault(),n({icon:e}),o=c?"has-left-icon":"has-right-icon",l=r&&""!==a?"has-icon-".concat(a):void 0,n({className:o+" "+l})};return u(a),Object(b.createElement)(b.Fragment,null,Object(b.createElement)(e,t),Object(b.createElement)(i.InspectorControls,null,Object(b.createElement)(d.PanelBody,{title:Object(l.__)("Inline Icon Control"),initialOpen:!0},Object(b.createElement)(d.ToggleControl,{label:Object(l.__)("Use inline icon"),checked:r,onChange:function(e){n({useIcon:e}),e||u("")}}),Object(b.createElement)(d.ToggleControl,{label:c?Object(l.__)("Icon before"):Object(l.__)("Icon after"),checked:c,onChange:function(){return n({alignIcon:!c})}}),r&&Object(b.createElement)(g,{label:Object(l.__)("Inline Icon"),onClick:function(e){e.preventDefault(),n({icon:e.currentTarget.value,event:e})},options:B,initialChecked:t.attributes.icon,showIcons:!0}))))}}),"withIcon"),N=Object(j.compose)(Object(i.withColors)({backgroundColor:"background-color"}),Object(j.createHigherOrderComponent)((function(e){return function(t){if("core/column"!=t.name)return Object(b.createElement)(e,t);var n=t.backgroundColor,o=t.setBackgroundColor;return t.setAttributes({className:null!=n.class?n.class+" has-background":""}),Object(b.createElement)(b.Fragment,null,Object(b.createElement)(e,t),Object(b.createElement)(i.InspectorControls,null,Object(b.createElement)(i.PanelColorSettings,{title:Object(l.__)("Color settings"),initialOpen:!1,colorSettings:[{value:n.color,onChange:o,label:Object(l.__)("Column background color")}]})))}}),"withBackgroundColor"));[o,r,c].forEach((function(e){return function(e){var t=e.name,n=e.settings;Object(a.registerBlockType)("noor/"+t,n)}(e)})),Object(x.addFilter)("blocks.registerBlockType","noor/gutenberg-blocks/custom-attributes",(function(e,t){return"core/button"!==t||Object.assign(e.attributes,{useIcon:{type:"boolean",default:!0},alignIcon:{type:"boolean",default:!1},icon:{type:"string",default:"arrow-right-alt"}}),e})),Object(x.addFilter)("editor.BlockEdit","noor/gutenberg-blocks/custom-control",S),Object(x.addFilter)("blocks.registerBlockType","noor/gutenberg-blocks/custom-attributes",(function(e,t){return"core/column"!=t||Object.assign(e.attributes,{backgroundColor:{type:"string"}}),e})),Object(x.addFilter)("editor.BlockEdit","noor/gutenberg-blocks/custom-control",N)}]);