import{$ as E,c as S,_ as $,S as N,a as D,M as O,E as y,r as x,o as B,b as P,d as p,w as g,e as _}from"./index.528c5192.js";function V(v){let{swiper:a,extendParams:d,on:s,emit:o}=v;d({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function f(e){let n;return e&&(n=E(e),a.params.uniqueNavElements&&typeof e=="string"&&n.length>1&&a.$el.find(e).length===1&&(n=a.$el.find(e))),n}function l(e,n){const i=a.params.navigation;e&&e.length>0&&(e[n?"addClass":"removeClass"](i.disabledClass),e[0]&&e[0].tagName==="BUTTON"&&(e[0].disabled=n),a.params.watchOverflow&&a.enabled&&e[a.isLocked?"addClass":"removeClass"](i.lockClass))}function t(){if(a.params.loop)return;const{$nextEl:e,$prevEl:n}=a.navigation;l(n,a.isBeginning&&!a.params.rewind),l(e,a.isEnd&&!a.params.rewind)}function h(e){e.preventDefault(),!(a.isBeginning&&!a.params.loop&&!a.params.rewind)&&(a.slidePrev(),o("navigationPrev"))}function w(e){e.preventDefault(),!(a.isEnd&&!a.params.loop&&!a.params.rewind)&&(a.slideNext(),o("navigationNext"))}function m(){const e=a.params.navigation;if(a.params.navigation=S(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(e.nextEl||e.prevEl))return;const n=f(e.nextEl),i=f(e.prevEl);n&&n.length>0&&n.on("click",w),i&&i.length>0&&i.on("click",h),Object.assign(a.navigation,{$nextEl:n,nextEl:n&&n[0],$prevEl:i,prevEl:i&&i[0]}),a.enabled||(n&&n.addClass(e.lockClass),i&&i.addClass(e.lockClass))}function u(){const{$nextEl:e,$prevEl:n}=a.navigation;e&&e.length&&(e.off("click",w),e.removeClass(a.params.navigation.disabledClass)),n&&n.length&&(n.off("click",h),n.removeClass(a.params.navigation.disabledClass))}s("init",()=>{a.params.navigation.enabled===!1?b():(m(),t())}),s("toEdge fromEdge lock unlock",()=>{t()}),s("destroy",()=>{u()}),s("enable disable",()=>{const{$nextEl:e,$prevEl:n}=a.navigation;e&&e[a.enabled?"removeClass":"addClass"](a.params.navigation.lockClass),n&&n[a.enabled?"removeClass":"addClass"](a.params.navigation.lockClass)}),s("click",(e,n)=>{const{$nextEl:i,$prevEl:r}=a.navigation,c=n.target;if(a.params.navigation.hideOnClick&&!E(c).is(r)&&!E(c).is(i)){if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===c||a.pagination.el.contains(c)))return;let C;i?C=i.hasClass(a.params.navigation.hiddenClass):r&&(C=r.hasClass(a.params.navigation.hiddenClass)),o(C===!0?"navigationShow":"navigationHide"),i&&i.toggleClass(a.params.navigation.hiddenClass),r&&r.toggleClass(a.params.navigation.hiddenClass)}});const k=()=>{a.$el.removeClass(a.params.navigation.navigationDisabledClass),m(),t()},b=()=>{a.$el.addClass(a.params.navigation.navigationDisabledClass),u()};Object.assign(a.navigation,{enable:k,disable:b,update:t,init:m,destroy:u})}const T={components:{Swiper:N,SwiperSlide:D},setup(){return{onSwiper:d=>{console.log(d)},onSlideChange:()=>{console.log("slide change")},modules:[O,V,y]}}},j={class:"about"},A=_("Slide 1"),H=_("Slide 2"),M=_("Slide 3");function q(v,a,d,s,o,f){const l=x("swiper-slide"),t=x("swiper");return B(),P("div",j,[p(t,{direction:"vertical","slides-per-view":1,modules:s.modules,navigation:!0,mousewheel:!0,onSwiper:s.onSwiper,onSlideChange:s.onSlideChange,class:"swiper"},{default:g(()=>[p(l,null,{default:g(()=>[A]),_:1}),p(l,null,{default:g(()=>[H]),_:1}),p(l,null,{default:g(()=>[M]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"])])}const I=$(T,[["render",q]]);export{I as default};
