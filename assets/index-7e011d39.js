import{s as w,j as a,X as fe,$ as pe,L as he}from"./@schlomoh/react-cookieconsent-6ef82c7a.js";import{b as ge,R as m,r as f,d as me,e as xe}from"./vendor-8c9868d3.js";import{S as F,Z as ve}from"./swiper-87dc1354.js";import{G as J,I as Q}from"./react-icons-03fef8e1.js";import{c as T}from"./crypto-js-512f2eba.js";import{u as be,a as we}from"./react-use-47805ea1.js";import{m as Se}from"./framer-motion-2bb90e99.js";import{M as ye,a as _e}from"./react-responsive-masonry-68aa4d21.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();var H={},K=ge;H.createRoot=K.createRoot,H.hydrateRoot=K.hydrateRoot;w.div`
  width: 100%;
  height: ${({height:e})=>e||"initial"};
  min-height: inherit;

  display: flex;
  flex-direction: ${({flexDirection:e})=>e||"row"};
  justify-content: ${({justifyContent:e})=>e||"space-between"};
  gap: ${({gap:e})=>e||"2rem"};
  align-items: ${({alignItems:e})=>e||"initial"};

  @media screen and (max-width: ${({breakWidth:e})=>e||720}px) {
    flex-direction: column;
  }
`;function A(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function E(e,n){const r=["__proto__","constructor","prototype"];Object.keys(n).filter(t=>r.indexOf(t)<0).forEach(t=>{typeof e[t]>"u"?e[t]=n[t]:A(n[t])&&A(e[t])&&Object.keys(n[t]).length>0?n[t].__swiper__?e[t]=n[t]:E(e[t],n[t]):e[t]=n[t]})}function Y(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function k(e={}){return e.pagination&&typeof e.pagination.el>"u"}function ee(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function te(e=""){const n=e.split(" ").map(t=>t.trim()).filter(t=>!!t),r=[];return n.forEach(t=>{r.indexOf(t)<0&&r.push(t)}),r.join(" ")}function Ce(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}const ne=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function je(e={},n=!0){const r={on:{}},t={},s={};E(r,F.defaults),E(r,F.extendedDefaults),r._emitClasses=!0,r.init=!1;const o={},d=ne.map(i=>i.replace(/_/,"")),g=Object.assign({},e);return Object.keys(g).forEach(i=>{typeof e[i]>"u"||(d.indexOf(i)>=0?A(e[i])?(r[i]={},s[i]={},E(r[i],e[i]),E(s[i],e[i])):(r[i]=e[i],s[i]=e[i]):i.search(/on[A-Z]/)===0&&typeof e[i]=="function"?n?t[`${i[2].toLowerCase()}${i.substr(3)}`]=e[i]:r.on[`${i[2].toLowerCase()}${i.substr(3)}`]=e[i]:o[i]=e[i])}),["navigation","pagination","scrollbar"].forEach(i=>{r[i]===!0&&(r[i]={}),r[i]===!1&&delete r[i]}),{params:r,passedParams:s,rest:o,events:t}}function Ee({el:e,nextEl:n,prevEl:r,paginationEl:t,scrollbarEl:s,swiper:o},d){Y(d)&&n&&r&&(o.params.navigation.nextEl=n,o.originalParams.navigation.nextEl=n,o.params.navigation.prevEl=r,o.originalParams.navigation.prevEl=r),k(d)&&t&&(o.params.pagination.el=t,o.originalParams.pagination.el=t),ee(d)&&s&&(o.params.scrollbar.el=s,o.originalParams.scrollbar.el=s),o.init(e)}function $e(e,n,r,t,s){const o=[];if(!n)return o;const d=i=>{o.indexOf(i)<0&&o.push(i)};if(r&&t){const i=t.map(s),l=r.map(s);i.join("")!==l.join("")&&d("children"),t.length!==r.length&&d("children")}return ne.filter(i=>i[0]==="_").map(i=>i.replace(/_/,"")).forEach(i=>{if(i in e&&i in n)if(A(e[i])&&A(n[i])){const l=Object.keys(e[i]),p=Object.keys(n[i]);l.length!==p.length?d(i):(l.forEach(h=>{e[i][h]!==n[i][h]&&d(i)}),p.forEach(h=>{e[i][h]!==n[i][h]&&d(i)}))}else e[i]!==n[i]&&d(i)}),o}function re(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function ie(e){const n=[];return m.Children.toArray(e).forEach(r=>{re(r)?n.push(r):r.props&&r.props.children&&ie(r.props.children).forEach(t=>n.push(t))}),n}function Oe(e){const n=[],r={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return m.Children.toArray(e).forEach(t=>{if(re(t))n.push(t);else if(t.props&&t.props.slot&&r[t.props.slot])r[t.props.slot].push(t);else if(t.props&&t.props.children){const s=ie(t.props.children);s.length>0?s.forEach(o=>n.push(o)):r["container-end"].push(t)}else r["container-end"].push(t)}),{slides:n,slots:r}}function Ie({swiper:e,slides:n,passedParams:r,changedParams:t,nextEl:s,prevEl:o,scrollbarEl:d,paginationEl:g}){const i=t.filter(c=>c!=="children"&&c!=="direction"&&c!=="wrapperClass"),{params:l,pagination:p,navigation:h,scrollbar:x,virtual:y,thumbs:$}=e;let O,b,u,_,I,z,C,S;t.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&l.thumbs&&!l.thumbs.swiper&&(O=!0),t.includes("controller")&&r.controller&&r.controller.control&&l.controller&&!l.controller.control&&(b=!0),t.includes("pagination")&&r.pagination&&(r.pagination.el||g)&&(l.pagination||l.pagination===!1)&&p&&!p.el&&(u=!0),t.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||d)&&(l.scrollbar||l.scrollbar===!1)&&x&&!x.el&&(_=!0),t.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||s)&&(l.navigation||l.navigation===!1)&&h&&!h.prevEl&&!h.nextEl&&(I=!0);const P=c=>{e[c]&&(e[c].destroy(),c==="navigation"?(e.isElement&&(e[c].prevEl.remove(),e[c].nextEl.remove()),l[c].prevEl=void 0,l[c].nextEl=void 0,e[c].prevEl=void 0,e[c].nextEl=void 0):(e.isElement&&e[c].el.remove(),l[c].el=void 0,e[c].el=void 0))};t.includes("loop")&&e.isElement&&(l.loop&&!r.loop?z=!0:!l.loop&&r.loop?C=!0:S=!0),i.forEach(c=>{if(A(l[c])&&A(r[c]))E(l[c],r[c]),(c==="navigation"||c==="pagination"||c==="scrollbar")&&"enabled"in r[c]&&!r[c].enabled&&P(c);else{const R=r[c];(R===!0||R===!1)&&(c==="navigation"||c==="pagination"||c==="scrollbar")?R===!1&&P(c):l[c]=r[c]}}),i.includes("controller")&&!b&&e.controller&&e.controller.control&&l.controller&&l.controller.control&&(e.controller.control=l.controller.control),t.includes("children")&&n&&y&&l.virtual.enabled&&(y.slides=n,y.update(!0)),t.includes("children")&&n&&l.loop&&(S=!0),O&&$.init()&&$.update(!0),b&&(e.controller.control=l.controller.control),u&&(e.isElement&&(!g||typeof g=="string")&&(g=document.createElement("div"),g.classList.add("swiper-pagination"),e.el.shadowEl.appendChild(g)),g&&(l.pagination.el=g),p.init(),p.render(),p.update()),_&&(e.isElement&&(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-scrollbar"),e.el.shadowEl.appendChild(d)),d&&(l.scrollbar.el=d),x.init(),x.updateSize(),x.setTranslate()),I&&(e.isElement&&((!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-next"),e.el.shadowEl.appendChild(s)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),e.el.shadowEl.appendChild(o))),s&&(l.navigation.nextEl=s),o&&(l.navigation.prevEl=o),h.init(),h.update()),t.includes("allowSlideNext")&&(e.allowSlideNext=r.allowSlideNext),t.includes("allowSlidePrev")&&(e.allowSlidePrev=r.allowSlidePrev),t.includes("direction")&&e.changeDirection(r.direction,!1),(z||S)&&e.loopDestroy(),(C||S)&&e.loopCreate(),e.update()}function ze(e,n,r){if(!r)return null;const t=p=>{let h=p;return p<0?h=n.length+p:h>=n.length&&(h=h-n.length),h},s=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${r.offset}px`}:{top:`${r.offset}px`},{from:o,to:d}=r,g=e.params.loop?-n.length:0,i=e.params.loop?n.length*2:n.length,l=[];for(let p=g;p<i;p+=1)p>=o&&p<=d&&l.push(n[t(p)]);return l.map((p,h)=>m.cloneElement(p,{swiper:e,style:s,key:`slide-${h}`}))}const Re=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function M(e,n){return typeof window>"u"?f.useEffect(e,n):f.useLayoutEffect(e,n)}const Z=f.createContext(null),Le=f.createContext(null);function V(){return V=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},V.apply(this,arguments)}const oe=f.forwardRef(function(e,n){let{className:r,tag:t="div",wrapperTag:s="div",children:o,onSwiper:d,...g}=e===void 0?{}:e,i=!1;const[l,p]=f.useState("swiper"),[h,x]=f.useState(null),[y,$]=f.useState(!1),O=f.useRef(!1),b=f.useRef(null),u=f.useRef(null),_=f.useRef(null),I=f.useRef(null),z=f.useRef(null),C=f.useRef(null),S=f.useRef(null),P=f.useRef(null),{params:c,passedParams:R,rest:le,events:L}=je(g),{slides:N,slots:B}=Oe(o),W=()=>{$(!y)};Object.assign(c.on,{_containerClasses(v,j){p(j)}});const q=()=>{Object.assign(c.on,L),i=!0;const v={...c};if(delete v.wrapperClass,u.current=new F(v),u.current.virtual&&u.current.params.virtual.enabled){u.current.virtual.slides=N;const j={cache:!1,slides:N,renderExternal:x,renderExternalUpdate:!1};E(u.current.params.virtual,j),E(u.current.originalParams.virtual,j)}};b.current||q(),u.current&&u.current.on("_beforeBreakpoint",W);const ce=()=>{i||!L||!u.current||Object.keys(L).forEach(v=>{u.current.on(v,L[v])})},de=()=>{!L||!u.current||Object.keys(L).forEach(v=>{u.current.off(v,L[v])})};f.useEffect(()=>()=>{u.current&&u.current.off("_beforeBreakpoint",W)}),f.useEffect(()=>{!O.current&&u.current&&(u.current.emitSlidesClasses(),O.current=!0)}),M(()=>{if(n&&(n.current=b.current),!!b.current)return u.current.destroyed&&q(),Ee({el:b.current,nextEl:z.current,prevEl:C.current,paginationEl:S.current,scrollbarEl:P.current,swiper:u.current},c),d&&d(u.current),()=>{u.current&&!u.current.destroyed&&u.current.destroy(!0,!1)}},[]),M(()=>{ce();const v=$e(R,_.current,N,I.current,j=>j.key);return _.current=R,I.current=N,v.length&&u.current&&!u.current.destroyed&&Ie({swiper:u.current,slides:N,passedParams:R,changedParams:v,nextEl:z.current,prevEl:C.current,scrollbarEl:P.current,paginationEl:S.current}),()=>{de()}}),M(()=>{Re(u.current)},[h]);function ue(){return c.virtual?ze(u.current,N,h):N.map((v,j)=>m.cloneElement(v,{swiper:u.current,swiperSlideIndex:j}))}return m.createElement(t,V({ref:b,className:te(`${l}${r?` ${r}`:""}`)},le),m.createElement(Le.Provider,{value:u.current},B["container-start"],m.createElement(s,{className:Ce(c.wrapperClass)},B["wrapper-start"],ue(),B["wrapper-end"]),Y(c)&&m.createElement(m.Fragment,null,m.createElement("div",{ref:C,className:"swiper-button-prev"}),m.createElement("div",{ref:z,className:"swiper-button-next"})),ee(c)&&m.createElement("div",{ref:P,className:"swiper-scrollbar"}),k(c)&&m.createElement("div",{ref:S,className:"swiper-pagination"}),B["container-end"]))});oe.displayName="Swiper";function U(){return U=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},U.apply(this,arguments)}const se=f.forwardRef(function(e,n){let{tag:r="div",children:t,className:s="",swiper:o,zoom:d,lazy:g,virtualIndex:i,swiperSlideIndex:l,...p}=e===void 0?{}:e;const h=f.useRef(null),[x,y]=f.useState("swiper-slide"),[$,O]=f.useState(!1);function b(z,C,S){C===h.current&&y(S)}M(()=>{if(typeof l<"u"&&(h.current.swiperSlideIndex=l),n&&(n.current=h.current),!(!h.current||!o)){if(o.destroyed){x!=="swiper-slide"&&y("swiper-slide");return}return o.on("_slideClass",b),()=>{o&&o.off("_slideClass",b)}}}),M(()=>{o&&h.current&&!o.destroyed&&y(o.getSlideClasses(h.current))},[o]);const u={isActive:x.indexOf("swiper-slide-active")>=0,isVisible:x.indexOf("swiper-slide-visible")>=0,isPrev:x.indexOf("swiper-slide-prev")>=0,isNext:x.indexOf("swiper-slide-next")>=0},_=()=>typeof t=="function"?t(u):t,I=()=>{O(!0)};return m.createElement(r,U({ref:h,className:te(`${x}${s?` ${s}`:""}`),"data-swiper-slide-index":i,onLoad:I},p),d&&m.createElement(Z.Provider,{value:u},m.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof d=="number"?d:void 0},_(),g&&!$&&m.createElement("div",{className:"swiper-lazy-preloader"}))),!d&&m.createElement(Z.Provider,{value:u},_(),g&&!$&&m.createElement("div",{className:"swiper-lazy-preloader"})))});se.displayName="SwiperSlide";function Ne(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"}}]})(e)}const Ae=w.dialog`
  border: none;
  padding: 0;
  height: 100%;
  width: 100%;
  max-width: 100%;
  background-color: transparent;

  user-select: none;
  outline: none;

  .swiper {
    border-radius: 10px;
    height: calc(100% - 1rem - 50px);
  }

  img {
    border-radius: 10px;
  }

  .zoom-container {
    border-radius: 10px;
  }

  ::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
  }

  .button-container {
    svg {
      cursor: pointer;
    }

    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`,Pe=f.forwardRef((e,n)=>{const{toggleModal:r,imageUrl:t}=e;return a.jsxs(Ae,{ref:n,children:[a.jsx(oe,{modules:[ve],zoom:!0,children:a.jsxs(se,{children:[a.jsx(D,{color:"white",style:{width:"100%",textAlign:"center"},children:"Double tap to zoom"}),a.jsx("div",{className:"swiper-zoom-container",children:t?a.jsx("img",{src:t,loading:"lazy",alt:"carousel_img_"+t}):a.jsx(D,{color:"white",children:"Decrypting full image..."})})]},"img_"+t)}),a.jsx("div",{className:"button-container",children:a.jsx(Q.Provider,{value:{size:"50px",color:"white"},children:a.jsx(Ne,{onClick:r})})})]})}),Me=async e=>{const n="1234567890";return T.AES.decrypt(e,n,{mode:T.mode.CBC,padding:T.pad.Pkcs7}).toString(T.enc.Utf8)},De=async e=>{const t=(await(await fetch(e)).text()).replace("data:","").replace(/^.+,/,"");return"data:image/jpeg;base64,"+await Me(t)},ae=(e,n)=>{const[r,t]=f.useState(""),s=async o=>{try{t("");const d=await De(o);t(d)}catch(d){console.error(d)}};return f.useEffect(()=>{n&&s(e)},[e]),r},Be=w.div`
  img {
    width: 100%;
    height: 100%;
  }
`,X=(e,n)=>`${e.split(".")[0]}_w=${n}.jpg`,Te=({src:e,...n})=>{const r=f.useRef(null),t=be(r,{rootMargin:"150px 0px"}),[s,o]=f.useState(!1),d=ae(t!=null&&t.isIntersecting||s?X(e,1080):X(e,10),!0);return f.useEffect(()=>{t!=null&&t.isIntersecting&&o(!0)},[t==null?void 0:t.isIntersecting]),a.jsx(Be,{className:"lazy-image-wrapper",ref:r,children:a.jsx("img",{src:d||"",...n})})};function Fe(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.024 11.536 10 10l-2 3h9l-3.5-5z"}},{tag:"circle",attr:{cx:"9.503",cy:"7.497",r:"1.503"}},{tag:"path",attr:{d:"M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.806.55-.988 1-1h13v12z"}}]})(e)}const He=w.p`
  width: fit-content;
  margin: ${({margin:e})=>e||0};
  padding: ${({padding:e})=>e||0};
  color: ${({color:e,theme:n})=>e?e==="grey"?n.colors.grey.medium:e:n.colors.base.white};
`,D=He;w.h1`
  margin: ${({margin:e})=>e||0};
  padding: ${({padding:e})=>e||0};
  color: ${({color:e,theme:n})=>e||n.colors.base.white};

  @media screen and (max-width: 1000px) {
    font-size: ${1.618*2}rem;
  }
  @media screen and (max-width: 550px) {
    font-size: ${1.618*1.5}rem;
  }
`;const Ve=w.nav`
  // position
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  overflow: hidden;

  // size
  width: 100%;
  height: ${({theme:e})=>e.misc.navBar.height};

  // color
  background-color: ${({theme:e})=>e.colors.accent.primary};
  /* background-color: transparent; */
  box-shadow: ${({theme:e})=>e.misc.boxShadow};

  transition: background-color 0.3s, box-shadow 0.3s;

  display: flex;
  flex-direction: column;
  justify-content: center;
`,Ue=w.div`
  height: inherit;
  margin: 0 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`,Ge=w.span`
  a {
    margin-left: 1rem;
    color: ${({theme:e})=>e.colors.base.white};
  }
`,We=()=>a.jsx(Ge,{}),qe=w.div`
  width: 100%;
  height: ${({theme:e})=>e.misc.navBar.height};
`,Ke=()=>{const{colors:e}=fe();return a.jsxs(a.Fragment,{children:[a.jsx(Ve,{children:a.jsxs(Ue,{children:[a.jsx(Q.Provider,{value:{size:"3rem",color:e.base.white},children:a.jsx(Fe,{})}),a.jsx("div",{style:{flexGrow:1}}),a.jsx(We,{}),a.jsx(D,{children:a.jsx("strong",{children:"Flashback"})})]})}),a.jsx(qe,{})]})},G=f.createContext({}),Ze=()=>{const[e,n]=f.useState(!1);return{isAuthenticated:e,setIsAuthenticated:n}},Xe=({children:e})=>{const n=Ze();return a.jsx(G.Provider,{value:n,children:e})},Je=w.div`
  height: calc(100svh - 4rem);

  form {
    position: relative;
    translate: -50% -50%;
    left: 50%;
    top: 50%;

    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  input {
    box-sizing: border-box;
    border: none;
    width: 100%;
    padding: 0.5rem;

    background-color: ${({theme:e})=>e.colors.grey.light};
    color: ${({theme:e})=>e.colors.base.black};
    border-radius: 10px;
    text-align: center;
  }

  button {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 10px;
    background-color: ${({theme:e})=>e.colors.accent.primary};
    color: ${({theme:e})=>e.colors.base.white};
  }
`,Qe=()=>{const[e,n]=f.useState(""),{setIsAuthenticated:r}=f.useContext(G),t=o=>{n(o.target.value)},s=o=>{o.preventDefault(),e==="1234567890"&&r(!0)};return a.jsx(Je,{children:a.jsxs("form",{onSubmit:s,children:[a.jsx("label",{htmlFor:"password",children:a.jsx(D,{color:"grey",children:"Enter the password"})}),a.jsx("input",{required:!0,id:"password",type:"password",onChange:t,value:e}),a.jsx("button",{type:"submit",children:"Open"})]})})},Ye=({children:e})=>{const{isAuthenticated:n}=f.useContext(G);return n?e:a.jsx(Qe,{})};w.section`
  position: relative;
  padding: ${({padding:e})=>e||"6rem 2rem"};
  background-color: ${({theme:e})=>e.colors.base.white};
`;w(Se.div)`
  height: ${({height:e})=>e||"100px"};
  width: ${({width:e})=>e||"100px"};
  svg {
    width: inherit;
    height: inherit;
    color: ${({color:e,theme:n})=>e||n.colors.base.white};
    fill: ${({color:e,theme:n})=>e||n.colors.base.white};
    transition: color 0.3s, fill 0.3s;
  }
`;const ke={colors:{base:{white:"#fcf4f4",black:"#121420"},grey:{light:"#c4c4c5",medium:"#898a8e",dark:"#4d4f57"},accent:{primary:"#ff7f11",yellow:"#edf060"}},misc:{boxShadow:"0 .5rem 1.5rem rgba(0,0,0,0.15)",navBar:{height:"4rem"}}},et="/hl_birthday_card/assets/Oswald-Medium-030f86f1.ttf",tt="/hl_birthday_card/assets/Poppins-Regular-707fdc5c.ttf",nt=pe`
  @font-face {
      font-family: 'Oswald';
      src: local('Oswald'), url(${et}) format('woff');
  }
 
  @font-face {
      font-family: 'Poppins';
      src: local('Poppins'), url(${tt}) format('woff');
  }

  body, html {
    margin: 0;
    padding: 0;
    background-color: ${({theme:e})=>e.colors.base.white};
  }

  * {
    font-family: Poppins, sans-serif;
  }
  
  h1 {
    font-size: calc(1.618rem * 3);
    font-family: Oswald, sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  h2 {
    margin:  0 0 3rem 0;

    ::after {
      content: "";
      display: block;
      position: relative;

      height: 0.5rem;
      width: 4rem;
      border-radius: 0.25rem;
      background-color: ${({theme:e})=>e.colors.accent.yellow};
    }

  }
  
  h3 {
    margin-top: 2rem;
  }

  button, a {
    cursor: pointer;
  }
`,rt=({children:e})=>a.jsxs(he,{theme:ke,children:[a.jsx(nt,{}),e]}),it=async()=>(await(await fetch("image_list.json",{cache:"no-cache"})).json()).files,ot=()=>{var i;const{loading:e,value:n}=we(it,[]),[r,t]=f.useState(0),s=f.useRef(null),o=()=>{var l,p;(l=s.current)!=null&&l.open?s.current.close():(p=s.current)==null||p.showModal()},d=l=>{t(l),o()},g=ae(n?n[r]:"",(i=s.current)==null?void 0:i.open);return a.jsxs("main",{style:{position:"relative",zIndex:2,height:"100%"},children:[a.jsx(Pe,{ref:s,imageUrl:g,toggleModal:o}),a.jsx(ye,{children:a.jsx(_e,{gutter:"10px",style:{padding:"1rem"},children:e?a.jsx(a.Fragment,{}):n==null?void 0:n.map((l,p)=>a.jsx(Te,{onClick:()=>d(p),src:l,alt:"img_"+p,style:{borderRadius:"10px"},loading:"lazy"},"img_"+p))})}),a.jsx(D,{color:"grey",style:{padding:"2rem 1rem",textAlign:"center"},children:"Ihr könnt mir auch gerne bilder schicken die ich dann noch hinzufüge :)"})]})};function st(){const n=me([{path:"/",element:a.jsx(Ye,{children:a.jsx(ot,{})})}],{basename:"/hl_birthday_card",window});return a.jsx(Xe,{children:a.jsxs(rt,{children:[a.jsx(Ke,{}),a.jsx(xe,{router:n})]})})}H.createRoot(document.getElementById("root")).render(a.jsx(st,{}));
//# sourceMappingURL=index-7e011d39.js.map
