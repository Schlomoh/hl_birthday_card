import{s as b,X as he,j as c,$ as ge,L as me}from"./@schlomoh/react-cookieconsent-6ef82c7a.js";import{b as ve,R as m,r as u,d as xe,e as we}from"./vendor-8c9868d3.js";import{G as Y,I as k}from"./react-icons-03fef8e1.js";import{m as be}from"./framer-motion-2bb90e99.js";import{M as Se,a as _e}from"./react-responsive-masonry-68aa4d21.js";import{S as H,Z as ye}from"./swiper-87dc1354.js";import{c as D}from"./crypto-js-512f2eba.js";import{u as Ce,a as Ee}from"./react-use-47805ea1.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();var U={},Z=ve;U.createRoot=Z.createRoot,U.hydrateRoot=Z.hydrateRoot;b.div`
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
`;function je(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.024 11.536 10 10l-2 3h9l-3.5-5z"}},{tag:"circle",attr:{cx:"9.503",cy:"7.497",r:"1.503"}},{tag:"path",attr:{d:"M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.806.55-.988 1-1h13v12z"}}]})(e)}const Oe=b.nav`
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
`,$e=b.div`
  height: inherit;
  margin: 0 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`,Ie=b.span`
  a {
    margin-left: 1rem;
    color: ${({theme:e})=>e.colors.base.white};
  }
`,Re=()=>c.jsx(Ie,{}),ze=b.div`
  width: 100%;
  height: ${({theme:e})=>e.misc.navBar.height};
`,Le=()=>{const{colors:e}=he();return c.jsxs(c.Fragment,{children:[c.jsx(Oe,{children:c.jsxs($e,{children:[c.jsx(k.Provider,{value:{size:"3rem",color:e.base.white},children:c.jsx(je,{})}),c.jsx("div",{style:{flexGrow:1}}),c.jsx(Re,{})]})}),c.jsx(ze,{})]})};b.section`
  position: relative;
  padding: ${({padding:e})=>e||"6rem 2rem"};
  background-color: ${({theme:e})=>e.colors.base.white};
`;b(be.div)`
  height: ${({height:e})=>e||"100px"};
  width: ${({width:e})=>e||"100px"};
  svg {
    width: inherit;
    height: inherit;
    color: ${({color:e,theme:n})=>e||n.colors.base.white};
    fill: ${({color:e,theme:n})=>e||n.colors.base.white};
    transition: color 0.3s, fill 0.3s;
  }
`;const Ne={colors:{base:{white:"#fcf4f4",black:"#121420"},grey:{light:"#c4c4c5",medium:"#898a8e",dark:"#4d4f57"},accent:{primary:"#ff7f11",yellow:"#edf060"}},misc:{boxShadow:"0 .5rem 1.5rem rgba(0,0,0,0.15)",navBar:{height:"4rem"}}},Ae="/hl_birthday_card/assets/Oswald-Medium-030f86f1.ttf",Pe="/hl_birthday_card/assets/Poppins-Regular-707fdc5c.ttf",Me=ge`
  @font-face {
      font-family: 'Oswald';
      src: local('Oswald'), url(${Ae}) format('woff');
  }
 
  @font-face {
      font-family: 'Poppins';
      src: local('Poppins'), url(${Pe}) format('woff');
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
`,Be=({children:e})=>c.jsxs(me,{theme:Ne,children:[c.jsx(Me,{}),e]}),T=b.p`
  width: fit-content;
  margin: ${({margin:e})=>e||0};
  padding: ${({padding:e})=>e||0};
  color: ${({color:e,theme:n})=>e?e==="grey"?n.colors.grey.medium:e:n.colors.base.white};
`;b.h1`
  margin: ${({margin:e})=>e||0};
  padding: ${({padding:e})=>e||0};
  color: ${({color:e,theme:n})=>e||n.colors.base.white};

  @media screen and (max-width: 1000px) {
    font-size: ${1.618*2}rem;
  }
  @media screen and (max-width: 550px) {
    font-size: ${1.618*1.5}rem;
  }
`;function A(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function j(e,n){const r=["__proto__","constructor","prototype"];Object.keys(n).filter(t=>r.indexOf(t)<0).forEach(t=>{typeof e[t]>"u"?e[t]=n[t]:A(n[t])&&A(e[t])&&Object.keys(n[t]).length>0?n[t].__swiper__?e[t]=n[t]:j(e[t],n[t]):e[t]=n[t]})}function ee(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function te(e={}){return e.pagination&&typeof e.pagination.el>"u"}function ne(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function re(e=""){const n=e.split(" ").map(t=>t.trim()).filter(t=>!!t),r=[];return n.forEach(t=>{r.indexOf(t)<0&&r.push(t)}),r.join(" ")}function De(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}const ie=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Te(e={},n=!0){const r={on:{}},t={},s={};j(r,H.defaults),j(r,H.extendedDefaults),r._emitClasses=!0,r.init=!1;const o={},d=ie.map(i=>i.replace(/_/,"")),g=Object.assign({},e);return Object.keys(g).forEach(i=>{typeof e[i]>"u"||(d.indexOf(i)>=0?A(e[i])?(r[i]={},s[i]={},j(r[i],e[i]),j(s[i],e[i])):(r[i]=e[i],s[i]=e[i]):i.search(/on[A-Z]/)===0&&typeof e[i]=="function"?n?t[`${i[2].toLowerCase()}${i.substr(3)}`]=e[i]:r.on[`${i[2].toLowerCase()}${i.substr(3)}`]=e[i]:o[i]=e[i])}),["navigation","pagination","scrollbar"].forEach(i=>{r[i]===!0&&(r[i]={}),r[i]===!1&&delete r[i]}),{params:r,passedParams:s,rest:o,events:t}}function He({el:e,nextEl:n,prevEl:r,paginationEl:t,scrollbarEl:s,swiper:o},d){ee(d)&&n&&r&&(o.params.navigation.nextEl=n,o.originalParams.navigation.nextEl=n,o.params.navigation.prevEl=r,o.originalParams.navigation.prevEl=r),te(d)&&t&&(o.params.pagination.el=t,o.originalParams.pagination.el=t),ne(d)&&s&&(o.params.scrollbar.el=s,o.originalParams.scrollbar.el=s),o.init(e)}function Ue(e,n,r,t,s){const o=[];if(!n)return o;const d=i=>{o.indexOf(i)<0&&o.push(i)};if(r&&t){const i=t.map(s),a=r.map(s);i.join("")!==a.join("")&&d("children"),t.length!==r.length&&d("children")}return ie.filter(i=>i[0]==="_").map(i=>i.replace(/_/,"")).forEach(i=>{if(i in e&&i in n)if(A(e[i])&&A(n[i])){const a=Object.keys(e[i]),p=Object.keys(n[i]);a.length!==p.length?d(i):(a.forEach(h=>{e[i][h]!==n[i][h]&&d(i)}),p.forEach(h=>{e[i][h]!==n[i][h]&&d(i)}))}else e[i]!==n[i]&&d(i)}),o}function oe(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function se(e){const n=[];return m.Children.toArray(e).forEach(r=>{oe(r)?n.push(r):r.props&&r.props.children&&se(r.props.children).forEach(t=>n.push(t))}),n}function Fe(e){const n=[],r={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return m.Children.toArray(e).forEach(t=>{if(oe(t))n.push(t);else if(t.props&&t.props.slot&&r[t.props.slot])r[t.props.slot].push(t);else if(t.props&&t.props.children){const s=se(t.props.children);s.length>0?s.forEach(o=>n.push(o)):r["container-end"].push(t)}else r["container-end"].push(t)}),{slides:n,slots:r}}function Ve({swiper:e,slides:n,passedParams:r,changedParams:t,nextEl:s,prevEl:o,scrollbarEl:d,paginationEl:g}){const i=t.filter(l=>l!=="children"&&l!=="direction"&&l!=="wrapperClass"),{params:a,pagination:p,navigation:h,scrollbar:v,virtual:_,thumbs:O}=e;let $,w,f,y,I,R,C,S;t.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&a.thumbs&&!a.thumbs.swiper&&($=!0),t.includes("controller")&&r.controller&&r.controller.control&&a.controller&&!a.controller.control&&(w=!0),t.includes("pagination")&&r.pagination&&(r.pagination.el||g)&&(a.pagination||a.pagination===!1)&&p&&!p.el&&(f=!0),t.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||d)&&(a.scrollbar||a.scrollbar===!1)&&v&&!v.el&&(y=!0),t.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||s)&&(a.navigation||a.navigation===!1)&&h&&!h.prevEl&&!h.nextEl&&(I=!0);const P=l=>{e[l]&&(e[l].destroy(),l==="navigation"?(e.isElement&&(e[l].prevEl.remove(),e[l].nextEl.remove()),a[l].prevEl=void 0,a[l].nextEl=void 0,e[l].prevEl=void 0,e[l].nextEl=void 0):(e.isElement&&e[l].el.remove(),a[l].el=void 0,e[l].el=void 0))};t.includes("loop")&&e.isElement&&(a.loop&&!r.loop?R=!0:!a.loop&&r.loop?C=!0:S=!0),i.forEach(l=>{if(A(a[l])&&A(r[l]))j(a[l],r[l]),(l==="navigation"||l==="pagination"||l==="scrollbar")&&"enabled"in r[l]&&!r[l].enabled&&P(l);else{const z=r[l];(z===!0||z===!1)&&(l==="navigation"||l==="pagination"||l==="scrollbar")?z===!1&&P(l):a[l]=r[l]}}),i.includes("controller")&&!w&&e.controller&&e.controller.control&&a.controller&&a.controller.control&&(e.controller.control=a.controller.control),t.includes("children")&&n&&_&&a.virtual.enabled&&(_.slides=n,_.update(!0)),t.includes("children")&&n&&a.loop&&(S=!0),$&&O.init()&&O.update(!0),w&&(e.controller.control=a.controller.control),f&&(e.isElement&&(!g||typeof g=="string")&&(g=document.createElement("div"),g.classList.add("swiper-pagination"),e.el.shadowEl.appendChild(g)),g&&(a.pagination.el=g),p.init(),p.render(),p.update()),y&&(e.isElement&&(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-scrollbar"),e.el.shadowEl.appendChild(d)),d&&(a.scrollbar.el=d),v.init(),v.updateSize(),v.setTranslate()),I&&(e.isElement&&((!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-next"),e.el.shadowEl.appendChild(s)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),e.el.shadowEl.appendChild(o))),s&&(a.navigation.nextEl=s),o&&(a.navigation.prevEl=o),h.init(),h.update()),t.includes("allowSlideNext")&&(e.allowSlideNext=r.allowSlideNext),t.includes("allowSlidePrev")&&(e.allowSlidePrev=r.allowSlidePrev),t.includes("direction")&&e.changeDirection(r.direction,!1),(R||S)&&e.loopDestroy(),(C||S)&&e.loopCreate(),e.update()}function Ge(e,n,r){if(!r)return null;const t=p=>{let h=p;return p<0?h=n.length+p:h>=n.length&&(h=h-n.length),h},s=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${r.offset}px`}:{top:`${r.offset}px`},{from:o,to:d}=r,g=e.params.loop?-n.length:0,i=e.params.loop?n.length*2:n.length,a=[];for(let p=g;p<i;p+=1)p>=o&&p<=d&&a.push(n[t(p)]);return a.map((p,h)=>m.cloneElement(p,{swiper:e,style:s,key:`slide-${h}`}))}const We=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function M(e,n){return typeof window>"u"?u.useEffect(e,n):u.useLayoutEffect(e,n)}const X=u.createContext(null),qe=u.createContext(null);function F(){return F=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},F.apply(this,arguments)}const ae=u.forwardRef(function(e,n){let{className:r,tag:t="div",wrapperTag:s="div",children:o,onSwiper:d,...g}=e===void 0?{}:e,i=!1;const[a,p]=u.useState("swiper"),[h,v]=u.useState(null),[_,O]=u.useState(!1),$=u.useRef(!1),w=u.useRef(null),f=u.useRef(null),y=u.useRef(null),I=u.useRef(null),R=u.useRef(null),C=u.useRef(null),S=u.useRef(null),P=u.useRef(null),{params:l,passedParams:z,rest:de,events:L}=Te(g),{slides:N,slots:B}=Fe(o),q=()=>{O(!_)};Object.assign(l.on,{_containerClasses(x,E){p(E)}});const K=()=>{Object.assign(l.on,L),i=!0;const x={...l};if(delete x.wrapperClass,f.current=new H(x),f.current.virtual&&f.current.params.virtual.enabled){f.current.virtual.slides=N;const E={cache:!1,slides:N,renderExternal:v,renderExternalUpdate:!1};j(f.current.params.virtual,E),j(f.current.originalParams.virtual,E)}};w.current||K(),f.current&&f.current.on("_beforeBreakpoint",q);const ue=()=>{i||!L||!f.current||Object.keys(L).forEach(x=>{f.current.on(x,L[x])})},fe=()=>{!L||!f.current||Object.keys(L).forEach(x=>{f.current.off(x,L[x])})};u.useEffect(()=>()=>{f.current&&f.current.off("_beforeBreakpoint",q)}),u.useEffect(()=>{!$.current&&f.current&&(f.current.emitSlidesClasses(),$.current=!0)}),M(()=>{if(n&&(n.current=w.current),!!w.current)return f.current.destroyed&&K(),He({el:w.current,nextEl:R.current,prevEl:C.current,paginationEl:S.current,scrollbarEl:P.current,swiper:f.current},l),d&&d(f.current),()=>{f.current&&!f.current.destroyed&&f.current.destroy(!0,!1)}},[]),M(()=>{ue();const x=Ue(z,y.current,N,I.current,E=>E.key);return y.current=z,I.current=N,x.length&&f.current&&!f.current.destroyed&&Ve({swiper:f.current,slides:N,passedParams:z,changedParams:x,nextEl:R.current,prevEl:C.current,scrollbarEl:P.current,paginationEl:S.current}),()=>{fe()}}),M(()=>{We(f.current)},[h]);function pe(){return l.virtual?Ge(f.current,N,h):N.map((x,E)=>m.cloneElement(x,{swiper:f.current,swiperSlideIndex:E}))}return m.createElement(t,F({ref:w,className:re(`${a}${r?` ${r}`:""}`)},de),m.createElement(qe.Provider,{value:f.current},B["container-start"],m.createElement(s,{className:De(l.wrapperClass)},B["wrapper-start"],pe(),B["wrapper-end"]),ee(l)&&m.createElement(m.Fragment,null,m.createElement("div",{ref:C,className:"swiper-button-prev"}),m.createElement("div",{ref:R,className:"swiper-button-next"})),ne(l)&&m.createElement("div",{ref:P,className:"swiper-scrollbar"}),te(l)&&m.createElement("div",{ref:S,className:"swiper-pagination"}),B["container-end"]))});ae.displayName="Swiper";function V(){return V=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},V.apply(this,arguments)}const le=u.forwardRef(function(e,n){let{tag:r="div",children:t,className:s="",swiper:o,zoom:d,lazy:g,virtualIndex:i,swiperSlideIndex:a,...p}=e===void 0?{}:e;const h=u.useRef(null),[v,_]=u.useState("swiper-slide"),[O,$]=u.useState(!1);function w(R,C,S){C===h.current&&_(S)}M(()=>{if(typeof a<"u"&&(h.current.swiperSlideIndex=a),n&&(n.current=h.current),!(!h.current||!o)){if(o.destroyed){v!=="swiper-slide"&&_("swiper-slide");return}return o.on("_slideClass",w),()=>{o&&o.off("_slideClass",w)}}}),M(()=>{o&&h.current&&!o.destroyed&&_(o.getSlideClasses(h.current))},[o]);const f={isActive:v.indexOf("swiper-slide-active")>=0,isVisible:v.indexOf("swiper-slide-visible")>=0,isPrev:v.indexOf("swiper-slide-prev")>=0,isNext:v.indexOf("swiper-slide-next")>=0},y=()=>typeof t=="function"?t(f):t,I=()=>{$(!0)};return m.createElement(r,V({ref:h,className:re(`${v}${s?` ${s}`:""}`),"data-swiper-slide-index":i,onLoad:I},p),d&&m.createElement(X.Provider,{value:f},m.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof d=="number"?d:void 0},y(),g&&!O&&m.createElement("div",{className:"swiper-lazy-preloader"}))),!d&&m.createElement(X.Provider,{value:f},y(),g&&!O&&m.createElement("div",{className:"swiper-lazy-preloader"})))});le.displayName="SwiperSlide";function Ke(e){return Y({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"}}]})(e)}const Ze=async e=>{const n="1234567890";return D.AES.decrypt(e,n,{mode:D.mode.CBC,padding:D.pad.Pkcs7}).toString(D.enc.Utf8)},Xe=async e=>{const t=(await(await fetch(e)).text()).replace("data:","").replace(/^.+,/,"");return"data:image/jpeg;base64,"+await Ze(t)},ce=(e,n)=>{const[r,t]=u.useState(""),s=async o=>{try{t("");const d=await Xe(o);t(d)}catch(d){console.error(d)}};return u.useEffect(()=>{n&&s(e)},[e]),r},Je=b.div`
  img {
    width: 100%;
    height: 100%;
  }
`,J=(e,n)=>`${e.split(".")[0]}_w=${n}.jpg`,Qe=({src:e,...n})=>{const r=u.useRef(null),t=Ce(r,{rootMargin:" 150px 0px "}),[s,o]=u.useState(!1),d=ce(t!=null&&t.isIntersecting||s?J(e,1080):J(e,10),!0);return u.useEffect(()=>{t!=null&&t.isIntersecting&&o(!0)},[t==null?void 0:t.isIntersecting]),c.jsx(Je,{className:"lazy-image-wrapper",ref:r,children:c.jsx("img",{src:d||"",...n})})},Q="hl_birthday_card",G=e=>new URL(e,import.meta.url.split(Q)[0]+Q).href,Ye=async()=>(await(await fetch(G("/metadata.json"))).json()).files,ke=b.dialog`
  border: none;
  padding: 0;
  height: 100%;
  width: 100%;
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

  ::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
  }

  .button-container {
    svg {
      cursor: pointer;
    }

    padding: 1rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`,et=u.forwardRef((e,n)=>{const{toggleModal:r,imageUrl:t}=e;return c.jsxs(ke,{ref:n,children:[c.jsx(ae,{modules:[ye],zoom:!0,children:c.jsxs(le,{children:[c.jsx(T,{color:"white",style:{width:"100%",textAlign:"center"},children:"Double tap to zoom"}),c.jsx("div",{className:"swiper-zoom-container",children:t?c.jsx("img",{src:t,loading:"lazy",alt:"carousel_img_"+t}):c.jsx(T,{color:"grey",children:"Loading..."})})]},"img_"+t)}),c.jsx("div",{className:"button-container",children:c.jsx(k.Provider,{value:{size:"50px",color:"white"},children:c.jsx(Ke,{onClick:r})})})]})}),tt=()=>{var i;const{loading:e,value:n}=Ee(Ye,[]),[r,t]=u.useState(0),s=u.useRef(null),o=()=>{var a,p;(a=s.current)!=null&&a.open?s.current.close():(p=s.current)==null||p.showModal()},d=a=>{t(a),o()},g=ce(n?n[r]:"",(i=s.current)==null?void 0:i.open);return c.jsxs("main",{style:{position:"relative",zIndex:2,height:"100%"},children:[c.jsx(et,{ref:s,imageUrl:G(g),toggleModal:o}),c.jsx(Se,{children:c.jsx(_e,{gutter:"10px",style:{padding:"1rem"},children:e?c.jsx(c.Fragment,{}):n==null?void 0:n.map((a,p)=>c.jsx(Qe,{onClick:()=>d(p),src:G(a),alt:"img_"+p,style:{borderRadius:"10px"}},"img_"+p))})}),c.jsx(T,{color:"grey",style:{padding:"2rem 1rem",textAlign:"center",width:"100%"},children:"Ihr könnt mir auch gerne bilder schicken die ich dann noch hinzufüge :)"})]})},W=u.createContext({}),nt=()=>{const[e,n]=u.useState(!1);return{isAuthenticated:e,setIsAuthenticated:n}},rt=({children:e})=>{const n=nt();return c.jsx(W.Provider,{value:n,children:e})},it=b.div`
  height: calc(100svh - 4rem);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ot=()=>{const[e,n]=u.useState(""),{setIsAuthenticated:r}=u.useContext(W),t=s=>{n(s.target.value)};return u.useEffect(()=>{e==="1234567890"&&r(!0)},[e]),c.jsxs(it,{children:[c.jsx(T,{color:"grey",children:"Enter the password"}),c.jsx("input",{type:"password",onChange:t,value:e})]})},st=({children:e})=>{const{isAuthenticated:n}=u.useContext(W);return n?e:c.jsx(ot,{})};function at(){const n=xe([{path:"/",element:c.jsx(st,{children:c.jsx(tt,{})})}],{basename:"/hl_birthday_card",window});return c.jsx(rt,{children:c.jsxs(Be,{children:[c.jsx(Le,{}),c.jsx(we,{router:n})]})})}U.createRoot(document.getElementById("root")).render(c.jsx(at,{}));
