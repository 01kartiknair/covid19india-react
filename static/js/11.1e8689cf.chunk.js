(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[11,28,33],{102:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f}));var a=Array.prototype.slice,r=function(e){return e};function c(e){return"translate("+(e+.5)+",0)"}function i(e){return"translate(0,"+(e+.5)+")"}function o(e){return function(t){return+e(t)}}function l(e){var t=Math.max(0,e.bandwidth()-1)/2;return e.round()&&(t=Math.round(t)),function(n){return+e(n)+t}}function s(){return!this.__axis}function u(e,t){var n=[],u=null,d=null,f=6,m=6,v=3,b=1===e||4===e?-1:1,p=4===e||2===e?"x":"y",h=1===e||3===e?c:i;function j(a){var c=null==u?t.ticks?t.ticks.apply(t,n):t.domain():u,i=null==d?t.tickFormat?t.tickFormat.apply(t,n):r:d,j=Math.max(f,0)+v,O=t.range(),y=+O[0]+.5,g=+O[O.length-1]+.5,E=(t.bandwidth?l:o)(t.copy()),w=a.selection?a.selection():a,M=w.selectAll(".domain").data([null]),k=w.selectAll(".tick").data(c,t).order(),x=k.exit(),N=k.enter().append("g").attr("class","tick"),C=k.select("line"),S=k.select("text");M=M.merge(M.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),k=k.merge(N),C=C.merge(N.append("line").attr("stroke","currentColor").attr(p+"2",b*f)),S=S.merge(N.append("text").attr("fill","currentColor").attr(p,b*j).attr("dy",1===e?"0em":3===e?"0.71em":"0.32em")),a!==w&&(M=M.transition(a),k=k.transition(a),C=C.transition(a),S=S.transition(a),x=x.transition(a).attr("opacity",1e-6).attr("transform",(function(e){return isFinite(e=E(e))?h(e):this.getAttribute("transform")})),N.attr("opacity",1e-6).attr("transform",(function(e){var t=this.parentNode.__axis;return h(t&&isFinite(t=t(e))?t:E(e))}))),x.remove(),M.attr("d",4===e||2==e?m?"M"+b*m+","+y+"H0.5V"+g+"H"+b*m:"M0.5,"+y+"V"+g:m?"M"+y+","+b*m+"V0.5H"+g+"V"+b*m:"M"+y+",0.5H"+g),k.attr("opacity",1).attr("transform",(function(e){return h(E(e))})),C.attr(p+"2",b*f),S.attr(p,b*j).text(i),w.filter(s).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===e?"start":4===e?"end":"middle"),w.each((function(){this.__axis=E}))}return j.scale=function(e){return arguments.length?(t=e,j):t},j.ticks=function(){return n=a.call(arguments),j},j.tickArguments=function(e){return arguments.length?(n=null==e?[]:a.call(e),j):n.slice()},j.tickValues=function(e){return arguments.length?(u=null==e?null:a.call(e),j):u&&u.slice()},j.tickFormat=function(e){return arguments.length?(d=e,j):d},j.tickSize=function(e){return arguments.length?(f=m=+e,j):f},j.tickSizeInner=function(e){return arguments.length?(f=+e,j):f},j.tickSizeOuter=function(e){return arguments.length?(m=+e,j):m},j.tickPadding=function(e){return arguments.length?(v=+e,j):v},j}function d(e){return u(2,e)}function f(e){return u(3,e)}},104:function(e,t,n){"use strict";var a=n(78),r=n(96),c=n(0),i=n.n(c),o=n(81);t.a=function(e){var t=e.data,n=e.children,l=Object(c.useState)(!1),s=Object(a.a)(l,2),u=s[0],d=s[1],f=Object(o.f)(u,null,{from:r.j,enter:r.i,leave:r.j,config:{mass:1,tension:210,friction:20}});return i.a.createElement("span",{className:"Tooltip",style:{position:"relative"},onMouseEnter:d.bind(void 0,!0),onMouseLeave:d.bind(void 0,!1)},n,f.map((function(e){var n=e.item,a=e.key,r=e.props;return n?i.a.createElement(o.a.div,{key:a,style:r},i.a.createElement("div",{className:"message"},i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br/>")}}))):i.a.createElement(o.a.div,{key:a})})))}},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(94),r=n(87),c=Symbol("implicit");function i(){var e=new Map,t=[],n=[],o=c;function l(a){var r=a+"",i=e.get(r);if(!i){if(o!==c)return o;e.set(r,i=t.push(a))}return n[(i-1)%n.length]}return l.domain=function(n){if(!arguments.length)return t.slice();t=[],e=new Map;var r,c=Object(a.a)(n);try{for(c.s();!(r=c.n()).done;){var i=r.value,o=i+"";e.has(o)||e.set(o,t.push(i))}}catch(s){c.e(s)}finally{c.f()}return l},l.range=function(e){return arguments.length?(n=Array.from(e),l):n.slice()},l.unknown=function(e){return arguments.length?(o=e,l):o},l.copy=function(){return i(t,n).unknown(o)},r.b.apply(l,arguments),l}},131:function(e,t,n){"use strict";n.r(t);var a=n(23),r=n(30),c=n(88),i=n(79),o=n.n(i),l=n(82),s=n.n(l),u=n(0),d=n.n(u),f=n(256),m=n(81);var v=d.a.memo((function(e){var t=e.statistic,n=e.total,a=e.delta,i=Object(f.a)().t,o=Object(m.c)({total:n,delta:a,from:{total:n,delta:a}},m.b.stiff);return d.a.createElement(d.a.Fragment,null,d.a.createElement("h5",null,i(Object(r.a)(t))),d.a.createElement(m.a.h4,null,"active"!==t?a>0?o.delta.interpolate((function(e){return"+".concat(Object(r.f)(Math.floor(e)))})):d.a.createElement(c.g,{size:9,verticalAlign:2}):"\xa0"),d.a.createElement(m.a.h1,null,o.total.interpolate((function(e){return Object(r.f)(Math.floor(e))}))))}));t.default=d.a.memo((function(e){var t=e.data,n=Object(u.useMemo)((function(){var e=[];return a.m.map((function(t,n){return e.push({animationDelay:"".concat(750+250*n,"ms")}),null})),e}),[]);return d.a.createElement("div",{className:"Level"},a.m.map((function(e,a){return d.a.createElement(m.a.div,{key:a,className:o()("level-item","is-".concat(e),"fadeInUp"),style:n[a]},d.a.createElement(v,Object.assign({statistic:e},{total:Object(r.j)(t,"total",e),delta:Object(r.j)(t,"delta",e)})))})))}),(function(e,t){return!!s()(Object(r.j)(e.data,"total","active"),Object(r.j)(t.data,"total","active"))}))},132:function(e,t,n){"use strict";n.r(t);var a=n(36),r=n(78),c=n(23),i=n(79),o=n.n(i),l=n(0),s=n.n(l),u=n(42),d=n.n(u),f=n(81),m=n(144);t.default=s.a.memo((function(e){var t=e.mapStatistic,n=e.setMapStatistic,i=Object(m.a)(),u=Object(r.a)(i,2),v=u[0],b=u[1].width,p=Object(l.useState)(!1),h=Object(r.a)(p,2),j=h[0],O=h[1],y=Object(l.useState)(0),g=Object(r.a)(y,2),E=g[0],w=g[1],M=Object(f.c)((function(){return{opacity:0,background:"".concat(c.b[t],"20"),transform:"translateX(".concat(b*c.m.indexOf(t)*.25,"px)"),config:f.b.gentle}})),k=Object(r.a)(M,2),x=k[0],N=k[1];Object(l.useEffect)((function(){b>0&&d.a.unstable_batchedUpdates((function(){N({transform:"translateX(".concat(b*c.m.indexOf(t)*.25,"px)"),opacity:1,background:"".concat(c.b[t],"20"),delay:0===E?1500:0,onStart:O.bind(void 0,!0),onRest:O.bind(void 0,!1)})}))}),[E,t,N,b]);var C=Object(l.useCallback)((function(e){w((function(e){return e+1})),n(e)}),[n]);return s.a.createElement("div",{className:"MapSwitcher",ref:v},s.a.createElement(f.a.div,{className:"highlight",style:x}),c.m.map((function(e,t){return s.a.createElement("div",{key:t,className:o()("clickable",Object(a.a)({},"is-".concat(e),!j)),onClick:C.bind(void 0,e)})})))}),(function(e,t){return e.mapStatistic===t.mapStatistic}))},133:function(e,t,n){"use strict";var a=n(0),r=n(85),c=["mousedown","touchstart"];t.a=function(e,t,n){void 0===n&&(n=c);var i=Object(a.useRef)(t);Object(a.useEffect)((function(){i.current=t}),[t]),Object(a.useEffect)((function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&i.current(t)},a=0,c=n;a<c.length;a++){var o=c[a];Object(r.c)(document,o,t)}return function(){for(var e=0,a=n;e<a.length;e++){var c=a[e];Object(r.b)(document,c,t)}}}),[n,e])}},143:function(e,t,n){"use strict";n.r(t);var a=n(78),r=n(23),c=n(0),i=n.n(c),o=n(256),l=n(5),s=n(81),u=n(133),d=function(e){var t=e.stateCode,n=e.trail,d=Object(c.useState)(!1),f=Object(a.a)(d,2),m=f[0],v=f[1],b=Object(c.useRef)(),p=Object(l.g)(),h=Object(o.a)().t;Object(u.a)(b,(function(){v(!1)}));var j=Object(s.f)(m,null,{from:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},enter:{opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999},leave:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},config:{mass:1,tension:210,friction:20}}),O=Object(c.useCallback)((function(e){v(!1),p.push("/state/".concat(e))}),[p]);return i.a.createElement("div",{className:"StateDropdown",ref:b},i.a.createElement(s.a.h1,{className:"state-name fadeInUp",style:n,onClick:v.bind(void 0,!m)},h(r.p[t])),j.map((function(e){var n=e.item,a=e.key,c=e.props;return n?i.a.createElement(s.a.div,{className:"dropdown",style:c,key:a},Object.keys(r.h).filter((function(e){return"TT"!==e&&e!==t})).sort().map((function(e){return i.a.createElement("h1",{key:e,className:"item",onClick:O.bind(void 0,e)},h(r.p[e]))}))):i.a.createElement(s.a.div,{key:t,style:c})})),m&&i.a.createElement("div",{className:"backdrop"}))},f=n(30);t.default=i.a.memo((function(e){var t,n,a,r,l,u=e.data,m=e.stateCode,v=Object(o.a)().t,b=Object(c.useMemo)((function(){var e=[];return[0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(250*n,"ms")}),null})),e}),[]),p=Object(s.c)({total:Object(f.j)(u,"total","tested"),config:s.b.gentle});return i.a.createElement("div",{className:"StateHeader"},i.a.createElement("div",{className:"header-left"},i.a.createElement(d,Object.assign({stateCode:m},{hyperlink:!1,trail:b[0]})),(null===u||void 0===u||null===(t=u.meta)||void 0===t?void 0:t.last_updated)&&i.a.createElement("h5",{className:"fadeInUp",style:b[1]},"Last Updated on ".concat(Object(f.d)(u.meta.last_updated,"dd MMM, p")," IST"))),i.a.createElement("div",{className:"header-right fadeInUp",style:b[2]},i.a.createElement("h5",null,v("Tested")),i.a.createElement(s.a.h2,null,p.total.interpolate((function(e){return Object(f.f)(Math.floor(e))}))),(null===u||void 0===u||null===(n=u.meta)||void 0===n||null===(a=n.tested)||void 0===a?void 0:a.last_updated)&&i.a.createElement("h5",{className:"timestamp"},"As of ".concat(Object(f.d)(u.meta.tested.last_updated,"dd MMMM"))),(null===u||void 0===u||null===(r=u.meta)||void 0===r||null===(l=r.tested)||void 0===l?void 0:l.source)&&i.a.createElement("h5",null,"per ",i.a.createElement("a",{href:u.meta.tested.source,target:"_noblank"},"source"))))}))},144:function(e,t,n){"use strict";var a=n(0),r="undefined"!==typeof window?a.useLayoutEffect:a.useEffect,c=n(85),i={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};t.a=c.a&&window.ResizeObserver?function(){var e=Object(a.useState)(null),t=e[0],n=e[1],c=Object(a.useState)(i),o=c[0],l=c[1],s=Object(a.useMemo)((function(){return new window.ResizeObserver((function(e){if(e[0]){var t=e[0].contentRect,n=t.x,a=t.y,r=t.width,c=t.height,i=t.top,o=t.left,s=t.bottom,u=t.right;l({x:n,y:a,width:r,height:c,top:i,left:o,bottom:s,right:u})}}))}),[]);return r((function(){if(t)return s.observe(t),function(){s.disconnect()}}),[t]),[n,o]}:function(){return[function(){},i]}},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(78),r=n(165),c=n(87),i=n(112);function o(){var e,t,n=Object(i.a)().unknown(void 0),l=n.domain,s=n.range,u=0,d=1,f=!1,m=0,v=0,b=.5;function p(){var n=l().length,a=d<u,c=a?d:u,i=a?u:d;e=(i-c)/Math.max(1,n-m+2*v),f&&(e=Math.floor(e)),c+=(i-c-e*(n-m))*b,t=e*(1-m),f&&(c=Math.round(c),t=Math.round(t));var o=Object(r.a)(n).map((function(t){return c+e*t}));return s(a?o.reverse():o)}return delete n.unknown,n.domain=function(e){return arguments.length?(l(e),p()):l()},n.range=function(e){var t,n;return arguments.length?(t=e,n=Object(a.a)(t,2),u=n[0],d=n[1],u=+u,d=+d,p()):[u,d]},n.rangeRound=function(e){var t,n;return t=e,n=Object(a.a)(t,2),u=n[0],d=n[1],u=+u,d=+d,f=!0,p()},n.bandwidth=function(){return t},n.step=function(){return e},n.round=function(e){return arguments.length?(f=!!e,p()):f},n.padding=function(e){return arguments.length?(m=Math.min(1,v=+e),p()):m},n.paddingInner=function(e){return arguments.length?(m=Math.min(1,e),p()):m},n.paddingOuter=function(e){return arguments.length?(v=+e,p()):v},n.align=function(e){return arguments.length?(b=Math.max(0,Math.min(1,e)),p()):b},n.copy=function(){return o(l(),[u,d]).round(f).paddingInner(m).paddingOuter(v).align(b)},c.b.apply(p(),arguments)}},165:function(e,t,n){"use strict";t.a=function(e,t,n){e=+e,t=+t,n=(r=arguments.length)<2?(t=e,e=0,1):r<3?1:+n;for(var a=-1,r=0|Math.max(0,Math.ceil((t-e)/n)),c=new Array(r);++a<r;)c[a]=e+a*n;return c}},170:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(18),i=n.n(c);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,c=e.size,i=void 0===c?24:c,s=l(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))}));s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="Info",t.a=s},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(60),r=n(4),c=n(2),i=n(1);function o(e,t){Object(i.a)(2,arguments);var n=Object(c.a)(e),a=Object(r.a)(t);if(isNaN(a))return new Date(NaN);if(!a)return n;var o=n.getDate(),l=new Date(n.getTime());l.setMonth(n.getMonth()+a+1,0);var s=l.getDate();return o>=s?l:(n.setFullYear(l.getFullYear(),l.getMonth(),o),n)}function l(e,t){Object(i.a)(2,arguments);var n=Object(r.a)(t);return o(e,-n)}function s(e,t){if(Object(i.a)(2,arguments),!t||"object"!==typeof t)return new Date(NaN);var n="years"in t?Object(r.a)(t.years):0,o="months"in t?Object(r.a)(t.months):0,s="weeks"in t?Object(r.a)(t.weeks):0,u="days"in t?Object(r.a)(t.days):0,d="hours"in t?Object(r.a)(t.hours):0,f="minutes"in t?Object(r.a)(t.minutes):0,m="seconds"in t?Object(r.a)(t.seconds):0,v=l(Object(c.a)(e),o+12*n),b=Object(a.a)(v,u+7*s),p=f+60*d,h=m+60*p,j=1e3*h,O=new Date(b.getTime()-j);return O}},241:function(e,t,n){"use strict";n.r(t);var a=n(124),r=n(78),c=n(23),i=n(30),o=n(168),l=n(169),s=n(102),u=n(164),d=n(118),f=n(219),m=(n(101),n(82)),v=n.n(m),b=n(0),p=n.n(b),h=n(144),j=function(e,t){return Object(i.j)(e,"delta",t)},O=50,y=0,g=50,E=0;var w=p.a.memo((function(e){var t=e.timeseries,n=e.statistic,a=e.lookback,m=Object(b.useRef)(),v=Object(h.a)(),w=Object(r.a)(v,2),k=w[0],x=w[1],N=x.width,C=x.height,S=Object.keys(t||{}).filter((function(e){return e<=Object(i.i)()})).slice(-a);return Object(b.useEffect)((function(){if(N){var e=Object(f.a)(m.current),a=N-y,r=C-g,v=Object(u.a)().domain(S).range([E,a]).paddingInner(N/1e3),b=Object(d.a)().domain([Math.min(0,Object(o.a)(S,(function(e){return j(null===t||void 0===t?void 0:t[e],n)}))),Math.max(1,Object(l.a)(S,(function(e){return j(null===t||void 0===t?void 0:t[e],n)})))]).range([r,O]),p=Object(s.a)(v).tickSize(0).tickFormat((function(e){return Object(i.d)(e,"dd MMM")})),h=e.transition().duration(c.c);e.select(".x-axis").transition(h).style("transform","translateY(".concat(b(0),"px)")).call(p).on("start",(function(){return e.select(".domain").remove()})).selectAll("text").attr("y",0).attr("dy",(function(e,a){return j(null===t||void 0===t?void 0:t[e],n)<0?"-1em":"1.5em"})).style("text-anchor","middle").attr("fill",c.b[n]),e.selectAll(".bar").data(S).join((function(e){return e.append("path").attr("class","bar").attr("d",(function(e){return M(v(e),b(0),v.bandwidth(),0,5)}))})).transition(h).attr("d",(function(e){return M(v(e),b(0),v.bandwidth(),b(0)-b(j(null===t||void 0===t?void 0:t[e],n)),5)})).attr("fill",(function(e,t){return t<S.length-1?c.b[n]+"90":c.b[n]}));var w=e.selectAll(".label").data(S).join("text").attr("class","label").attr("x",(function(e){return v(e)+v.bandwidth()/2})).text((function(e){return Object(i.f)(j(null===t||void 0===t?void 0:t[e],n))}));w.transition(h).attr("fill",c.b[n]).attr("y",(function(e){var a=j(null===t||void 0===t?void 0:t[e],n);return b(a)+(a<0?15:-6)})),w.append("tspan").attr("dy",(function(e){return"".concat(j(null===t||void 0===t?void 0:t[e],n)<0?1.2:-1.2,"em")})).attr("x",(function(e){return v(e)+v.bandwidth()/2})).text((function(e,a){if(0===a)return"";var r=j(null===t||void 0===t?void 0:t[S[a-1]],n);if(!r)return"";var c=j(null===t||void 0===t?void 0:t[e],n)-r;return"".concat(c>0?"+":"").concat(Object(i.f)(100*c/Math.abs(r)),"%")})).transition(h).attr("fill",c.b[n]+"90")}}),[S,C,n,t,N]),p.a.createElement("div",{className:"DeltaBarGraph",ref:k},p.a.createElement("svg",{ref:m,width:N,height:250,viewBox:"0 0 ".concat(N," ").concat(C),preserveAspectRatio:"xMidYMid meet"},p.a.createElement("g",{className:"x-axis"}),p.a.createElement("g",{className:"y-axis"})))}),(function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!v()(e.stateCode,t.stateCode)&&(!!v()(e.lookback,t.lookback)&&!!v()(e.statistic,t.statistic))))}));function M(e,t,n,a,r){return r=Math.sign(a)*Math.min(Math.abs(a),r),["M ".concat(e," ").concat(t),"v ".concat(-a+r),"q 0 ".concat(-r," ").concat(Math.abs(r)," ").concat(-r),"h ".concat(n-2*Math.abs(r)),"q ".concat(Math.abs(r)," 0 ").concat(Math.abs(r)," ").concat(r),"v ".concat(a-r),"Z"].join(" ")}var k=n(131),x=n(132),N=n(143),C=n(104),S=n(170);var I=function(e){var t=e.title,n=e.statistic,a=e.total,r=e.formula,c=e.date,i=e.description,o=e.className;return p.a.createElement("div",{className:"meta-item ".concat(o)},p.a.createElement("div",{className:"meta-item-top"},p.a.createElement("h3",null,t),p.a.createElement(C.a,{data:r},p.a.createElement(S.a,null))),p.a.createElement("h1",null,n),p.a.createElement("h5",null,c),a&&p.a.createElement("h5",null,"India has ".concat(a," CPM")),p.a.createElement("p",null,i))},R=n(72),z=n(200),_=n(18),T=n.n(_);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var F=Object(b.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,r=e.size,c=void 0===r?24:r,i=D(e,["color","size"]);return p.a.createElement("svg",P({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),p.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),p.a.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}))}));F.propTypes={color:T.a.string,size:T.a.oneOfType([T.a.string,T.a.number])},F.displayName="Compass";var A=F;var U=p.a.memo((function(e){var t,n,a,r,o,l=e.stateCode,s=e.data,u=e.timeseries,d=Object(i.j)(s[l],"total","confirmed"),f=Object(i.j)(s[l],"total","active"),m=Object(i.j)(s[l],"total","deceased"),v=Object(i.j)(s[l],"total","recovered"),b=Object(i.j)(s[l],"total","tested"),h=Object(R.a)(Object(i.g)(),"yyyy-MM-dd"),j=Object(R.a)(Object(z.a)(Object(i.g)(),{weeks:1}),"yyyy-MM-dd"),O=Object(i.j)(null===u||void 0===u?void 0:u[j],"total","confirmed"),y=Object(i.j)(s[l],"total","confirmed",!0),g=Object(i.j)(s[l],"total","tested",!0),E=Object(i.j)(s.TT,"total","confirmed",!0),w=v/d*100,M=f/d*100,k=m/d*100,x=(d-O)/O*100;return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"StateMeta population"},p.a.createElement("div",{className:"meta-item population"},p.a.createElement("h3",null,"Population"),p.a.createElement("h1",null,Object(i.f)(null===(t=s[l])||void 0===t||null===(n=t.meta)||void 0===n?void 0:n.population))),p.a.createElement("div",{className:"alert"},p.a.createElement(A,null),p.a.createElement("div",{className:"alert-right"},"Based on 2019 population projection by NCP"," ",p.a.createElement("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank"},"report")))),p.a.createElement("div",{className:"StateMeta"},p.a.createElement(I,{className:"confirmed",title:"Confirmed Per Million",statistic:Object(i.f)(y),total:Object(i.f)(E),formula:"(confirmed / state population) * 1 Million",description:"\n            ".concat(Object(i.f)(Math.round(y))," out of every 1 million people in ").concat(c.p[l]," have tested positive for the virus.\n            ")}),p.a.createElement(I,{className:"active",title:"Active",statistic:"".concat(Object(i.f)(M),"%"),formula:"(active / confirmed) * 100",description:M>0?"For every 100 confirmed cases, ".concat(Object(i.f)(Math.round(M))," are currently infected."):"Currently, there are no active cases in this state."}),p.a.createElement(I,{className:"recovery",title:"Recovery Rate",statistic:"".concat(Object(i.f)(w),"%"),formula:"(recovered / confirmed) * 100",description:w>0?"For every 100 confirmed cases, ".concat(Object(i.f)(Math.round(w))," have recovered from the virus."):"Unfortunately, there are no recoveries in this state yet."}),p.a.createElement(I,{className:"mortality",title:"Mortality Rate",statistic:"".concat(Object(i.f)(k),"%"),formula:"(deceased / confirmed) * 100",description:k>0?"For every 100 confirmed cases, ".concat(Object(i.f)(Math.round(k))," have unfortunately passed away from the virus."):"Fortunately, no one has passed away from the virus in this state."}),p.a.createElement(I,{className:"gr",title:"Avg. Growth Rate",statistic:x>0?"".concat(Object(i.f)(Math.round(x/7)),"%"):"-",formula:"(((previousDayData - sevenDayBeforeData) / sevenDayBeforeData) * 100)/7",date:"".concat(Object(i.d)(j,"dd MMM")," - ").concat(Object(i.d)(h,"dd MMM")),description:x>0?"In the last one week, the number of new infections has\n              grown by an average of ".concat(Object(i.f)(Math.round(x/7)),"%\n              every day."):"There has been no growth in the number of infections in last one week."}),p.a.createElement(I,{className:"tpm",title:"Tests Per Million",statistic:"\u2248 ".concat(Object(i.f)(Math.round(g))),formula:"(total tests in state / total population of state) * 1 Million",date:b?"As of ".concat(Object(i.e)(null===(a=s[l])||void 0===a||null===(r=a.meta)||void 0===r||null===(o=r.tested)||void 0===o?void 0:o.last_updated)," ago"):"",description:g>0?"For every 1 million people in ".concat(c.p[l],",\n                ").concat(Object(i.f)(Math.round(g))," people were tested."):"No tests have been conducted in this state yet."})))}),(function(e,t){return!(t.timeseries&&!e.timeseries)&&e.stateCode===t.stateCode})),L=n(97),H=n(79),B=n.n(H);function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Y=Object(b.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,r=e.size,c=void 0===r?24:r,i=W(e,["color","size"]);return p.a.createElement("svg",V({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),p.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),p.a.createElement("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),p.a.createElement("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),p.a.createElement("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"}))}));Y.propTypes={color:T.a.string,size:T.a.oneOfType([T.a.string,T.a.number])},Y.displayName="Smile";var q=Y,G=n(110),J=n(256),X=n(5),Z=n(217),K=n(106),Q=Object(b.lazy)((function(){return n.e(24).then(n.bind(null,201))})),$=Object(b.lazy)((function(){return n.e(21).then(n.bind(null,202))})),ee=Object(b.lazy)((function(){return Promise.all([n.e(2),n.e(34)]).then(n.bind(null,173))}));t.default=p.a.memo((function(e){var t,n,o,l,s,u,d=Object(J.a)().t,f=Object(X.i)().stateCode.toUpperCase(),m=Object(Z.a)("mapStatistic","active"),v=Object(r.a)(m,2),h=v[0],j=v[1],O=Object(b.useState)(!1),y=Object(r.a)(O,2),g=y[0],E=y[1],M=Object(b.useState)({stateCode:f,districtName:null}),C=Object(r.a)(M,2),S=C[0],I=C[1];Object(b.useEffect)((function(){S.stateCode!==f&&(I({stateCode:f,districtName:null}),E(!1))}),[S.stateCode,f]);var R=Object(K.a)("".concat(c.a,"/timeseries-").concat(f,".min.json"),i.c,{revalidateOnMount:!0,refreshInterval:1e5}),z=R.data,_=R.error,T=Object(K.a)("".concat(c.a,"/data.min.json"),i.c,{revalidateOnMount:!0,refreshInterval:1e5}).data,P=Object(b.useMemo)((function(){var e;if(T){var t=window.innerWidth>=540?3:2,n=(null===(e=T[f])||void 0===e?void 0:e.districts)?Object.keys(T[f].districts).filter((function(e){return"Unknown"!==e})).length:0;return Math.ceil(n/t)}}),[T,f]),D=Object(b.useRef)(),F=Object(L.a)(D,{once:!0}),A=Object(b.useMemo)((function(){var e=[];return[0,0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(250*n,"ms")}),null})),e}),[]),H=g?10:6;return p.a.createElement(p.a.Fragment,null,p.a.createElement(G.a,null,p.a.createElement("title",null,"Coronavirus Outbreak in ",c.p[f]," - covid19india.org"),p.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in ".concat(c.p[f],": Latest Map and Case Count")})),p.a.createElement("div",{className:"State"},p.a.createElement("div",{className:"state-left"},p.a.createElement(N.default,{data:null===T||void 0===T?void 0:T[f],stateCode:f}),p.a.createElement("div",{style:{position:"relative"}},p.a.createElement(x.default,{mapStatistic:h,setMapStatistic:j}),p.a.createElement(k.default,{data:null===T||void 0===T?void 0:T[f]}),p.a.createElement(ee,Object.assign({timeseries:null===z||void 0===z||null===(t=z[f])||void 0===t?void 0:t.dates},{stateCode:f},{forceRender:!!_}))),T&&p.a.createElement(b.Suspense,{fallback:p.a.createElement("div",{style:{minHeight:"50rem"}})},p.a.createElement($,{stateCode:f,data:T,regionHighlighted:S,setRegionHighlighted:I,mapStatistic:h,setMapStatistic:j})),p.a.createElement("span",{ref:D}),T&&F&&p.a.createElement(U,Object.assign({stateCode:f,data:T},{timeseries:null===z||void 0===z||null===(n=z[f])||void 0===n?void 0:n.dates}))),p.a.createElement("div",{className:"state-right"},p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"district-bar",style:g?{}:{display:"flex"}},p.a.createElement("div",{className:"district-bar-top"},p.a.createElement("div",{className:"district-bar-left"},p.a.createElement("h2",{className:B()(h,"fadeInUp"),style:A[0]},"Top districts"),p.a.createElement("div",{className:"districts fadeInUp ".concat(g?"is-grid":""),style:g?Object(a.a)({gridTemplateRows:"repeat(".concat(P,", 2rem)")},A[1]):A[1]},Object.keys((null===T||void 0===T||null===(o=T[f])||void 0===o?void 0:o.districts)||{}).filter((function(e){return"Unknown"!==e})).sort((function(e,t){return function(e,t){var n=T[f].districts[e],a=T[f].districts[t];return Object(i.j)(a,"total",h)-Object(i.j)(n,"total",h)}(e,t)})).slice(0,g?void 0:5).map((function(e){var t=Object(i.j)(T[f].districts[e],"total",h),n=Object(i.j)(T[f].districts[e],"delta",h);return p.a.createElement("div",{key:e,className:"district"},p.a.createElement("h2",null,Object(i.f)(t)),p.a.createElement("h5",null,d(e)),"active"!==h&&p.a.createElement("div",{className:"delta"},p.a.createElement("h6",{className:h},n>0?"\u2191"+Object(i.f)(n):"")))})))),p.a.createElement("div",{className:"district-bar-right fadeInUp",style:A[2]},z&&("confirmed"===h||"deceased"===h)&&p.a.createElement("div",{className:"happy-sign"},Object.keys((null===(l=z[f])||void 0===l?void 0:l.dates)||{}).slice(-H).every((function(e){return 0===Object(i.j)(z[f].dates[e],"delta",h)}))&&p.a.createElement("div",{className:"alert ".concat("confirmed"===h?"is-green":"")},p.a.createElement(q,null),p.a.createElement("div",{className:"alert-right"},"No new ",h," cases in the past five days"))),p.a.createElement(w,Object.assign({timeseries:null===z||void 0===z||null===(s=z[f])||void 0===s?void 0:s.dates,statistic:h},{stateCode:f,lookback:H},{forceRender:!!_})))),p.a.createElement("div",{className:"district-bar-bottom"},Object.keys((null===T||void 0===T||null===(u=T[f])||void 0===u?void 0:u.districts)||{}).length>5?p.a.createElement("button",{className:"button fadeInUp",onClick:function(){E(!g)},style:A[3]},p.a.createElement("span",null,g?"View less":"View all")):p.a.createElement("div",{style:{height:"3.75rem",flexBasis:"15%"}}))),p.a.createElement(b.Suspense,{fallback:p.a.createElement("div",null)},p.a.createElement(Q,Object.assign({stateCode:f,timeseries:z,regionHighlighted:S,setRegionHighlighted:I},{forceRender:!!_})))))))}))},97:function(e,t,n){"use strict";var a=n(78),r=n(0),c={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};t.a=function(e){var t=Object(r.useState)(!1),n=Object(a.a)(t,2),i=n[0],o=n[1];return Object(r.useEffect)((function(){void 0!==e.current&&new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&window.requestIdleCallback((function(){o(!0),n.unobserve(e.current)}))}))}),c).observe(e.current)}),[e]),i}}}]);
//# sourceMappingURL=11.1e8689cf.chunk.js.map