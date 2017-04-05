//Countdown JS
!function(a){"use strict";a.fn.appear=function(b,c){var d=a.extend({data:void 0,one:!0,accX:0,accY:0},c);return this.each(function(){var c=a(this);if(c.appeared=!1,!b)return void c.trigger("appear",d.data);var e=a(window),f=function(){if(!c.is(":visible"))return void(c.appeared=!1);var a=e.scrollLeft(),b=e.scrollTop(),f=c.offset(),g=f.left,h=f.top,i=d.accX,j=d.accY,k=c.height(),l=e.height(),m=c.width(),n=e.width();h+k+j>=b&&h<=b+l+j&&g+m+i>=a&&g<=a+n+i?c.appeared||c.trigger("appear",d.data):c.appeared=!1},g=function(){if(c.appeared=!0,d.one){e.unbind("scroll",f);var g=a.inArray(f,a.fn.appear.checks);g>=0&&a.fn.appear.checks.splice(g,1)}b.apply(this,arguments)};d.one?c.one("appear",d.data,g):c.bind("appear",d.data,g),e.scroll(f),a.fn.appear.checks.push(f),f()})},a.extend(a.fn.appear,{checks:[],timeout:null,checkAll:function(){a.fn.appear.checks.length},run:function(){a.fn.appear.timeout&&clearTimeout(a.fn.appear.timeout),a.fn.appear.timeout=setTimeout(a.fn.appear.checkAll,20)}}),a.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(b,c){var d=a.fn[c];d&&(a.fn[c]=function(){var b=d.apply(this,arguments);return a.fn.appear.run(),b})})}(jQuery),function(a){function G(){"use strict";var b=a(".pieChartWithAnimation");b.length&&b.each(function(){a(this).find(".easyPieChart").easyPieChart({scaleColor:!1,barColor:a(this).attr("data-barColor"),lineWidth:12,trackColor:"rgba(233,230,230,0.3)",lineCap:"butt",easing:"easeInQuart",animate:{duration:3e3,enabled:!0},size:145})})}function I(){"use strict";var b=a(".counterWithAnimation");b.length&&b.each(function(){var b=a(this).attr("data-countNmber");a(this).find(".counterBoxNumber").countTo({from:0,to:b,speed:1250,refreshInterval:100})})}function J(){"use strict";a(window).width()>1024&&a(".imgWithAnimation").add(".textWithAnimation").add(".iconWithAnimation").add(".teamWithAnimation").add(".counterWithAnimation").add(".pieChartWithAnimation").each(function(){var b=a(this).attr("data-delay");a(this).appear(function(){if("fade-in-left"==a(this).attr("data-animation")){var c=this;setTimeout(function(){a(c).animate({avoidTransforms:!0,useTranslate3d:!0,opacity:1,left:"-80px",right:"0px"},{complete:function(){a(this).css({right:"0px",left:"0px"}),a(this).addClass("notransitionleft")},easing:"easeOutSine",duration:800})},b),a(c).hasClass("counterBox")&&I(),a(c).hasClass("pieChartBox")&&G()}else if("fade-in-right"==a(this).attr("data-animation")){var c=this;setTimeout(function(){a(c).animate({opacity:1,right:"-80px"},{complete:function(){a(this).css({left:"0px"})},easing:"easeOutSine",duration:800})},b),a(c).hasClass("counterBox")&&I(),a(c).hasClass("pieChartBox")&&G()}else if("fade-in-bottom"==a(this).attr("data-animation")){var c=this;setTimeout(function(){a(c).animate({opacity:1,left:"0px"},800,"easeOutSine"),a(c).animate({opacity:1,bottom:"-70px"},{complete:function(){a(this).css({top:"0px"}),a(this).addClass("notransition")},easing:"easeOutSine",duration:800})},b),a(this).hasClass("counterBox")&&I(),a(this).hasClass("pieChartBox")&&G()}else if("fade-in-top"==a(this).attr("data-animation")){var c=this;setTimeout(function(){a(c).animate({opacity:1,top:"0px"},800,"easeOutSine"),a(c).hasClass("counterBox")&&I(),a(c).hasClass("pieChartBox")&&G()},b)}else if("fade-in"==a(this).attr("data-animation")){var c=this;setTimeout(function(){a(c).animate({opacity:1},800,"easeOutSine")},b),a(c).hasClass("counterBox")&&I(),a(c).hasClass("pieChartBox")&&G()}else if("grow-in"==a(this).attr("data-animation")){var d=a(this);setTimeout(function(){d.transition({scale:1,opacity:1},900,"cubic-bezier(0.15, 0.84, 0.35, 1.25)")},b),a(this).hasClass("counterBox")&&I(),a(this).hasClass("pieChartBox")}},{accX:0,accY:-100},"easeInCubic"),a(this).appear(function(){if("fade-in-top"==a(this).attr("data-animation")){var c=this;setTimeout(function(){a(c).animate({opacity:1,top:"0px"},800,"easeOutSine"),a(c).hasClass("counterBox")&&I(),a(c).hasClass("pieChartBox")&&G()},b)}},{accX:0,accY:100},"easeInCubic")})}var s=(a(window),a(window).height(),a(document).height(),a(window).width(),a("#wpadminbar").height(),a("body").height(),a("#pxHeader").attr("data-fixed"),a("#portfolioDetailAjax"),a("#isotopePortfolio"),"portfolio-detail"),x=(a(".portfolioSection #loader"),a("#pDError"),a(".navCloseWrap"),a(window.location).attr("hash"),"#!"+s+"/");x.length,a("html, body"),"ontouchstart"in window||"onmsgesturechange"in window;a(function(){!function(a){function d(a){if(a in b.style)return a;var c=["Moz","Webkit","O","ms"],d=a.charAt(0).toUpperCase()+a.substr(1);if(a in b.style)return a;for(var e=0;e<c.length;++e){var f=c[e]+d;if(f in b.style)return f}}function e(){return b.style[c.transform]="",b.style[c.transform]="rotateY(90deg)",""!==b.style[c.transform]}function j(a){return"string"==typeof a&&this.parse(a),this}function k(a,b,c){b===!0?a.queue(c):b?a.queue(b,c):c()}function l(b){var c=[];return a.each(b,function(b){b=a.camelCase(b),b=a.transit.propertyMap[b]||a.cssProps[b]||b,b=o(b),a.inArray(b,c)===-1&&c.push(b)}),c}function m(b,c,d,e){var f=l(b);a.cssEase[d]&&(d=a.cssEase[d]);var g=""+q(c)+" "+d;parseInt(e,10)>0&&(g+=" "+q(e));var h=[];return a.each(f,function(a,b){h.push(b+" "+g)}),h.join(", ")}function n(b,d){d||(a.cssNumber[b]=!0),a.transit.propertyMap[b]=c.transform,a.cssHooks[b]={get:function(c){var d=a(c).css("transit:transform");return d.get(b)},set:function(c,d){var e=a(c).css("transit:transform");e.setFromString(b,d),a(c).css({"transit:transform":e})}}}function o(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function p(a,b){return"string"!=typeof a||a.match(/^[\-0-9\.]+$/)?""+a+b:a}function q(b){var c=b;return a.fx.speeds[c]&&(c=a.fx.speeds[c]),p(c,"ms")}a.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var b=document.createElement("div"),c={},f=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;c.transition=d("transition"),c.transitionDelay=d("transitionDelay"),c.transform=d("transform"),c.transformOrigin=d("transformOrigin"),c.transform3d=e();var g={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"},h=c.transitionEnd=g[c.transition]||null;for(var i in c)c.hasOwnProperty(i)&&"undefined"==typeof a.support[i]&&(a.support[i]=c[i]);b=null,a.cssEase={_default:"ease",in:"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"},a.cssHooks["transit:transform"]={get:function(b){return a(b).data("transform")||new j},set:function(b,d){var e=d;e instanceof j||(e=new j(e)),"WebkitTransform"!==c.transform||f?b.style[c.transform]=e.toString():b.style[c.transform]=e.toString(!0),a(b).data("transform",e)}},a.cssHooks.transform={set:a.cssHooks["transit:transform"].set},a.fn.jquery<"1.8"&&(a.cssHooks.transformOrigin={get:function(a){return a.style[c.transformOrigin]},set:function(a,b){a.style[c.transformOrigin]=b}},a.cssHooks.transition={get:function(a){return a.style[c.transition]},set:function(a,b){a.style[c.transition]=b}}),n("scale"),n("translate"),n("rotate"),n("rotateX"),n("rotateY"),n("rotate3d"),n("perspective"),n("skewX"),n("skewY"),n("x",!0),n("y",!0),j.prototype={setFromString:function(a,b){var c="string"==typeof b?b.split(","):b.constructor===Array?b:[b];c.unshift(a),j.prototype.set.apply(this,c)},set:function(a){var b=Array.prototype.slice.apply(arguments,[1]);this.setter[a]?this.setter[a].apply(this,b):this[a]=b.join(",")},get:function(a){return this.getter[a]?this.getter[a].apply(this):this[a]||0},setter:{rotate:function(a){this.rotate=p(a,"deg")},rotateX:function(a){this.rotateX=p(a,"deg")},rotateY:function(a){this.rotateY=p(a,"deg")},scale:function(a,b){void 0===b&&(b=a),this.scale=a+","+b},skewX:function(a){this.skewX=p(a,"deg")},skewY:function(a){this.skewY=p(a,"deg")},perspective:function(a){this.perspective=p(a,"px")},x:function(a){this.set("translate",a,null)},y:function(a){this.set("translate",null,a)},translate:function(a,b){void 0===this._translateX&&(this._translateX=0),void 0===this._translateY&&(this._translateY=0),null!==a&&void 0!==a&&(this._translateX=p(a,"px")),null!==b&&void 0!==b&&(this._translateY=p(b,"px")),this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var a=(this.scale||"1,1").split(",");return a[0]&&(a[0]=parseFloat(a[0])),a[1]&&(a[1]=parseFloat(a[1])),a[0]===a[1]?a[0]:a},rotate3d:function(){for(var a=(this.rotate3d||"0,0,0,0deg").split(","),b=0;b<=3;++b)a[b]&&(a[b]=parseFloat(a[b]));return a[3]&&(a[3]=p(a[3],"deg")),a}},parse:function(a){var b=this;a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(a,c,d){b.setFromString(c,d)})},toString:function(a){var b=[];for(var d in this)if(this.hasOwnProperty(d)){if(!c.transform3d&&("rotateX"===d||"rotateY"===d||"perspective"===d||"transformOrigin"===d))continue;"_"!==d[0]&&(a&&"scale"===d?b.push(d+"3d("+this[d]+",1)"):a&&"translate"===d?b.push(d+"3d("+this[d]+",0)"):b.push(d+"("+this[d]+")"))}return b.join(" ")}},a.fn.transition=a.fn.transit=function(b,d,e,f){var g=this,i=0,j=!0;"function"==typeof d&&(f=d,d=void 0),"function"==typeof e&&(f=e,e=void 0),"undefined"!=typeof b.easing&&(e=b.easing,delete b.easing),"undefined"!=typeof b.duration&&(d=b.duration,delete b.duration),"undefined"!=typeof b.complete&&(f=b.complete,delete b.complete),"undefined"!=typeof b.queue&&(j=b.queue,delete b.queue),"undefined"!=typeof b.delay&&(i=b.delay,delete b.delay),"undefined"==typeof d&&(d=a.fx.speeds._default),"undefined"==typeof e&&(e=a.cssEase._default),d=q(d);var l=m(b,d,e,i),n=a.transit.enabled&&c.transition,o=n?parseInt(d,10)+parseInt(i,10):0;if(0===o){var p=function(a){g.css(b),f&&f.apply(g),a&&a()};return k(g,j,p),g}var r={},s=function(d){var e=!1,i=function(){e&&g.unbind(h,i),o>0&&g.each(function(){this.style[c.transition]=r[this]||null}),"function"==typeof f&&f.apply(g),"function"==typeof d&&d()};o>0&&h&&a.transit.useTransitionEnd?(e=!0,g.bind(h,i)):window.setTimeout(i,o),g.each(function(){o>0&&(this.style[c.transition]=l),a(this).css(b)})},t=function(a){this.offsetWidth,s(a)};return k(g,j,t),this},a.transit.getTransitionValue=m}(jQuery)}),a(window).load(function(){a("#startLoader").fadeOut(850),J()}),a(window).scroll(function(){})}(jQuery),function(a){function b(a,b){return a.toFixed(b.decimals)}a.fn.countTo=function(b){return b=b||{},a(this).each(function(){function k(){i+=e,h++,l(i),"function"==typeof c.onUpdate&&c.onUpdate.call(f,i),h>=d&&(g.removeData("countTo"),clearInterval(j.interval),i=c.to,"function"==typeof c.onComplete&&c.onComplete.call(f,i))}function l(a){var b=c.formatter.call(f,a,c);g.text(b)}var c=a.extend({},a.fn.countTo.defaults,{from:a(this).data("from"),to:a(this).data("to"),speed:a(this).data("speed"),refreshInterval:a(this).data("refresh-interval"),decimals:a(this).data("decimals")},b),d=Math.ceil(c.speed/c.refreshInterval),e=(c.to-c.from)/d,f=this,g=a(this),h=0,i=c.from,j=g.data("countTo")||{};g.data("countTo",j),j.interval&&clearInterval(j.interval),j.interval=setInterval(k,c.refreshInterval),l(i)})},a.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:b,onUpdate:null,onComplete:null}}(jQuery);;
