(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{18:function(e,t,n){}}]),function(e){function t(t){for(var o,a,l=t[0],i=t[1],u=t[2],b=0,d=[];b<l.length;b++)a=l[b],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(s&&s(t);d.length;)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={1:0},c=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=i;c.push([14,2]),n()}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(8),r=n.n(o),c=n(0),a=n(3),l=function(e){var t=e.onClick,n=e.options,o=e.initialChecked,l=e.showIcons,i=e.label;return Object(c.createElement)(a.ButtonGroup,r()({mode:"radio"},!l&&{onClick:function(e){return t(e)}}),i&&Object(c.createElement)("p",null,Object(c.createElement)("strong",null,i)),n.map((function(e,n){return Object(c.createElement)(a.Button,r()({},l&&{onClick:function(e){return t(e)}},{className:o===e&&"is-primary",key:n,checked:o,value:e}),l?Object(c.createElement)(a.Dashicon,{icon:e}):e)})))}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t,n){var o=n(5);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){!function(){e.exports=this.wp.hooks}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t,n){var o=n(15),r=n(16),c=n(7),a=n(17);e.exports=function(e,t){return o(e)||r(e,t)||c(e,t)||a()}},function(e,t){!function(){e.exports=this.wp.data}()},,function(e,t,n){n(23),n(25),n(18),e.exports=n(19)},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,c=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,c=e}finally{try{o||null==l.return||l.return()}finally{if(r)throw c}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"name",(function(){return p})),n.d(o,"settings",(function(){return m}));var r={};n.r(r),n.d(r,"name",(function(){return h})),n.d(r,"settings",(function(){return j}));var c=n(10),a=n(1),l=n(2),i=n(11),u=n.n(i),s=n(0),b=n(3),d=n(4);var p="accordion",m={title:Object(a.__)("Accordion","accordion"),description:Object(a.__)("Accordion block","blocks"),category:"noor-collection",icon:"list-view",supports:{html:!1},attributes:{anchorContent:{type:"string",default:""},titleContent:{type:"string",default:"Example title..."},titleTag:{type:"string",default:"h4"},initialState:{type:"boolean",default:!1},titleColor:{type:"string"},titleBackground:{type:"string"},contentBackground:{type:"string"},expandIcon:{type:"string",default:"arrow-down-alt2"},collapseIcon:{type:"string",default:"arrow-up-alt2"},iconAlignment:{type:"string",default:"right"}},edit:Object(l.withColors)({titleColor:"color",titleBackground:"background-color",contentBackground:"background-color"})((function(e){var t=e.titleColor,n=e.setTitleColor,o=e.titleBackground,r=e.setTitleBackground,c=e.contentBackground,i=e.setContentBackground,p=e.attributes,m=e.setAttributes,g=Object(s.useState)(!1),f=u()(g,2),O=f[0],h=f[1],j=null!=t?t.class:"",_=null!=o?o.class:"",k=null!=c?c.class:"",C={expand:["arrow-down","arrow-right","arrow-down-alt2","arrow-right-alt2","arrow-down-alt","arrow-right-alt","plus"],collapse:["arrow-up","arrow-up-alt2","minus","arrow-up-alt","no-alt"]};return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(l.InspectorControls,null,Object(s.createElement)(b.PanelBody,{title:Object(a.__)("Base Settings"),initialOpen:!0},Object(s.createElement)("label",{className:"block-base-control__label"},Object(s.createElement)("strong",null,Object(a.__)("Anchor title"))),Object(s.createElement)(b.__experimentalInputControl,{value:p.anchorContent,onChange:function(e){return m({anchorContent:e})}}),Object(s.createElement)("label",{className:"block-base-control__label"},Object(s.createElement)("strong",null,Object(a.__)("Initial state"))),Object(s.createElement)(b.ToggleControl,{label:p.initialState?"Expanded by default":"Collapsed by default",checked:p.initialState,onChange:function(){return m({initialState:!p.initialState})}}),Object(s.createElement)(d.a,{label:Object(a.__)("Title size"),onClick:function(e){return m({titleTag:e.target.value})},options:["h1","h2","h3","h4","h5","h6"],initialChecked:p.titleTag})),Object(s.createElement)(b.PanelBody,{title:Object(a.__)("Icon settings"),initialOpen:!1},Object(s.createElement)(d.a,{label:Object(a.__)("Expand Icon"),onClick:function(e){return e.preventDefault(),m({expandIcon:e.currentTarget.value})},options:C.expand,initialChecked:p.expandIcon,showIcons:!0}),Object(s.createElement)(d.a,{label:Object(a.__)("Collapse Icon"),onClick:function(e){return e.preventDefault(),m({collapseIcon:e.currentTarget.value})},options:C.collapse,initialChecked:p.collapseIcon,showIcons:!0})),Object(s.createElement)(l.PanelColorSettings,{title:Object(a.__)("Color settings"),initialOpen:!1,colorSettings:[{value:t.color,onChange:n,label:Object(a.__)("Title text color")},{value:o.color,onChange:r,label:Object(a.__)("Title background color")},{value:c.color,onChange:i,label:Object(a.__)("Content background color")}]})),Object(s.createElement)("div",{id:"#".concat(p.anchorContent),className:"noor-block-accordion ".concat(_),onClick:function(){return h(!O)},"aria-expanded":"".concat(p.initialState||O)},Object(s.createElement)(l.RichText,{className:"noor-block-accordion__title ".concat(j),tagName:p.titleTag,value:p.titleContent,formattingControls:["bold","italic","align"],onChange:function(e){return m({titleContent:e})}}),Object(s.createElement)(b.Dashicon,{icon:O?p.collapseIcon:p.expandIcon,className:"noor-block-accordion__icon ".concat(j)})),Object(s.createElement)("div",{className:"noor-block-accordion__content ".concat(k)},Object(s.createElement)(l.InnerBlocks,{allowedBlocks:["core/paragraph","core/list","core/button"],template:[["core/paragraph",{}]]})))})),save:function(e){var t=e.attributes,n=t.titleColor,o=t.titleBackground,r=t.contentBackground,c=null!=n?Object(l.getColorClassName)("color",n):"",a=null!=o?Object(l.getColorClassName)("background-color",o):"",i=null!=r?Object(l.getColorClassName)("background-color",r):"";return Object(s.createElement)(s.Fragment,null,Object(s.createElement)("div",{id:"#".concat(t.anchorContent),className:"noor-block-accordion ".concat(a),"aria-expanded":t.initialState},Object(s.createElement)(l.RichText.Content,{className:"noor-block-accordion__title ".concat(c),tagName:t.titleTag,value:t.titleContent}),Object(s.createElement)("span",{className:"noor-block-accordion__icon dashicons dashicons-".concat(t.expandIcon," ").concat(c),"aria-hidden":"true","data-state":!t.initialState}),Object(s.createElement)("span",{className:"noor-block-accordion__icon dashicons dashicons-".concat(t.collapseIcon," ").concat(c),"aria-hidden":"true","data-state":t.initialState})),Object(s.createElement)("div",{className:"noor-block-accordion__content ".concat(i)},Object(s.createElement)(l.InnerBlocks.Content,null)))}},g=n(6),f=n(12);var O=Object(g.compose)(Object(l.withColors)({color:"color",backgroundColor:"background-color"}),Object(f.withSelect)((function(e,t){return{media:t.attributes.mediaId?e("core").getMedia(t.attributes.mediaId):void 0}})))((function(e){var t=e.color,n=e.setColor,o=e.backgroundColor,r=e.setBackgroundColor,c=e.attributes,i=e.setAttributes,u=(e.className,c.align),d=c.mediaId,p=null!=t?t.class:"",m=null!=o?o.class:"";return""!=c.mediaUrl&&c.mediaUrl,Object(s.createElement)(s.Fragment,null,Object(s.createElement)(l.InspectorControls,null,Object(s.createElement)(b.PanelBody,{title:Object(a.__)("Content settings"),initialOpen:!1},Object(s.createElement)(b.ToggleControl,{label:c.useMedia?"Set text content":"Set background image",checked:c.useMedia,onChange:function(){return i({useMedia:!c.useMedia})}}),c.useMedia?Object(s.createElement)("div",{className:"editor-post-featured-image"},Object(s.createElement)(l.MediaUploadCheck,null,Object(s.createElement)(l.MediaUpload,{onSelect:function(t){e.setAttributes({mediaId:t.id,mediaUrl:t.url})},value:d,allowedTypes:["image"],render:function(t){var n=t.open;return Object(s.createElement)(b.Button,{className:0==d?"editor-post-featured-image__toggle":"editor-post-featured-image__preview",onClick:n},0==d&&Object(a.__)("Choose an image"),null!=e.media&&Object(s.createElement)(b.ResponsiveWrapper,{naturalWidth:e.media.media_details.width,naturalHeight:e.media.media_details.height},Object(s.createElement)("img",{src:e.media.source_url})))}}))):Object(s.createElement)(b.__experimentalInputControl,{value:c.mediaInput,onChange:function(e){return i({mediaInput:e})}})),Object(s.createElement)(l.PanelColorSettings,{title:Object(a.__)("Colot settings"),initialOpen:!0,colorSettings:[{value:t.color,onChange:n,label:Object(a.__)("Text color")},{value:o.color,onChange:r,label:Object(a.__)("Background color")}]})),Object(s.createElement)(l.BlockControls,null,Object(s.createElement)(l.BlockAlignmentToolbar,{value:u,onChange:function(e){i({align:e})},controls:["left","right","center"]})),Object(s.createElement)("div",{className:"noor-block-bullet-point has-align-".concat(u)},Object(s.createElement)("div",{className:"noor-block-bullet-point__point ".concat(m)},c.useMedia&&0!=c.mediaId?Object(s.createElement)("img",{src:c.mediaUrl}):Object(s.createElement)("h3",{className:"noor-block-bullet-point__text-content ".concat(p)},c.mediaInput))))})),h="bullet-point",j={title:Object(a.__)("Bullet point","accordion"),description:Object(a.__)("Bullet point block","blocks"),category:"noor-collection",icon:"marker",supports:{html:!1},attributes:{color:{type:"string"},backgroundColor:{type:"string"},align:{type:"string",default:"center"},useMedia:{type:"boolean",default:!1},mediaInput:{type:"string",default:""},mediaId:{type:"number",default:0},mediaUrl:{type:"string",default:""}},edit:function(e){return Object(s.createElement)(O,e)},save:function(e){var t=e.attributes,n=t.color,o=t.backgroundColor,r=t.align,c=null!=n?Object(l.getColorClassName)("color",n):"",a=null!=o?Object(l.getColorClassName)("background-color",o):"";return Object(s.createElement)("div",{class:"noor-block-bullet-point has-align-".concat(r)},Object(s.createElement)("div",{className:"noor-block-bullet-point__point ".concat(a)},t.useMedia&&0!=t.mediaId?Object(s.createElement)("img",{src:t.mediaUrl}):Object(s.createElement)("h3",{className:"noor-block-bullet-point__text-content ".concat(c)},t.mediaInput)))}};[o,r].forEach((function(e){return function(e){var t=e.name,n=e.settings;Object(c.registerBlockType)("noor/"+t,n)}(e)}))},,function(e,t,n){"use strict";n.r(t);var o=n(9),r=n(0),c=n(1),a=n(6),l=n(2),i=n(3),u=n(4),s=["arrow-right-alt","arrow-left-alt","arrow-right-alt2","arrow-left-alt2","clock"],b=Object(a.createHigherOrderComponent)((function(e){return function(t){if("core/button"!==t.name)return Object(r.createElement)(e,t);t.attributes;var n=t.setAttributes,o=t.attributes,a=o.useIcon,b=o.alignIcon,d=o.icon,p=function(e,t){var o,r;t&&t.preventDefault(),n({icon:e}),o=b?"has-left-icon":"has-right-icon",r=a&&""!==d?"has-icon-".concat(d):void 0,n({className:o+" "+r})};return p(d),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(e,t),Object(r.createElement)(l.InspectorControls,null,Object(r.createElement)(i.PanelBody,{title:Object(c.__)("Inline Icon Control"),initialOpen:!0},Object(r.createElement)(i.ToggleControl,{label:Object(c.__)("Use inline icon"),checked:a,onChange:function(e){n({useIcon:e}),e||p("")}}),Object(r.createElement)(i.ToggleControl,{label:b?Object(c.__)("Icon before"):Object(c.__)("Icon after"),checked:b,onChange:function(){return n({alignIcon:!b})}}),a&&Object(r.createElement)(u.a,{label:Object(c.__)("Inline Icon"),onClick:function(e){e.preventDefault(),n({icon:e.currentTarget.value,event:e})},options:s,initialChecked:t.attributes.icon,showIcons:!0}))))}}),"withIcon");Object(o.addFilter)("blocks.registerBlockType","noor/gutenberg-blocks/custom-attributes",(function(e,t){return"core/button"!==t||Object.assign(e.attributes,{useIcon:{type:"boolean",default:!0},alignIcon:{type:"boolean",default:!1},icon:{type:"string",default:"arrow-right-alt"}}),e})),Object(o.addFilter)("editor.BlockEdit","noor/gutenberg-blocks/custom-control",b)}]);