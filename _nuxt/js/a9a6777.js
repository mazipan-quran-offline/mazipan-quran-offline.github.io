(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{245:function(t,e,r){var content=r(257);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("74dc4092",content,!0,{sourceMap:!1})},256:function(t,e,r){"use strict";r(245)},257:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,'.surah_nav[data-v-1f9d6978]{position:fixed;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;bottom:0;left:auto;z-index:10;margin:0;height:60px;text-align:center;width:100%;max-width:500px;background:var(--bg-card-color)}.surah_nav[data-v-1f9d6978],.surah_nav_item[data-v-1f9d6978]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--text-color)}.surah_nav_title[data-v-1f9d6978]{font-size:2rem}.surah_nav_next[data-v-1f9d6978],.surah_nav_prev[data-v-1f9d6978]{text-decoration:none}.text-nav[data-v-1f9d6978]{padding:0 .25em;font-size:2rem}.select[data-v-1f9d6978]{-webkit-appearance:none;padding:.5em 1.5rem .5em .5rem;outline:none;border:none;font-size:1rem;border-radius:4px;margin-left:.5em;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAYAAAARx7TFAAAAAXNSR0IArs4c6QAAAJ1JREFUCB1jzMnJCWdkZBSdPHnyFAYk0NDQwPbmzZuVTExMk5iA4p7//v2bDFScC1OzatUqZqCC5f////cHyikwiYiIJAFNWgIUmARSCKQZDx48OAdIBwJNSZ8yZcp8RpBuoNFMQJ0LgRIxQO4hILYFKsgEOmEmSJ4ZRBw4cOC/l5fXxu/fvysDub5Ak3OAJswAyWEAkIm5ublu6BIADTRHW7YWzxEAAAAASUVORK5CYII=");background-position:right 7px center;background-repeat:no-repeat;color:var(--bg-color);background-color:var(--text-color);border:1px solid var(--bg-color)}@media screen and (max-width:480px){.text-nav[data-v-1f9d6978]{display:none}}',""]),t.exports=n},260:function(t,e,r){"use strict";r(38),r(25);var n=r(13),c=r(19),o=r(16),d=r(17),l=r(7),h=(r(53),r(42),r(26),r(34),r(44),r(45),r(20),r(46),r(241),r(2)),v=r(6),m=r(112),f=r.n(m),_=r(246),y=r.n(_);function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var x=function(t){Object(o.a)(r,t);var e=A(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"isAMP",get:function(){return Boolean(this.$route.name.includes("amp"))}},{key:"isHavePrev",get:function(){return this.verseId>1}},{key:"isHaveNext",get:function(){return this.verseId<this.verseCount}},{key:"arrayAyah",get:function(){return Array.from({length:this.verseCount},(function(t,e){return e+1}))}}]),r}(v.Vue);Object(h.a)([Object(v.Prop)({type:Number,default:1})],x.prototype,"surahId",void 0),Object(h.a)([Object(v.Prop)({type:Number,default:1})],x.prototype,"verseId",void 0),Object(h.a)([Object(v.Prop)({type:Number,default:0})],x.prototype,"verseCount",void 0),Object(h.a)([Object(v.Prop)({type:Function,default:function(){}})],x.prototype,"onChangeVerse",void 0);var j=x=Object(h.a)([Object(v.Component)({components:{MdArrowBackIcon:f.a,MdArrowForwardIcon:y.a}})],x),S=(r(256),r(5)),component=Object(S.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"surah_nav"},[r("nuxt-link",{staticClass:"surah_nav_item surah_nav_prev",attrs:{to:"/"+(t.isAMP?"amp/":"")+t.surahId+"/"+(t.verseId-1)+"/"}},[t.isHavePrev?r("MdArrowBackIcon",{attrs:{w:"30px",h:"30px"}}):t._e(),t._v(" "),t.isHavePrev?r("span",{staticClass:"text-nav"},[t._v("\n      "+t._s(t.verseId-1)+"\n    ")]):t._e()],1),t._v(" "),t.isAMP?t._e():r("div",{staticClass:"surah_nav_item surah_nav_center"},[r("select",{staticClass:"select",attrs:{name:"verse-select"},domProps:{value:t.verseId},on:{change:t.onChangeVerse}},t._l(t.arrayAyah,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v("\n        "+t._s(e)+"\n      ")])})),0)]),t._v(" "),t.isAMP?r("div",{staticClass:"surah_nav_item surah_nav_center"},[r("span",{staticClass:"text-nav"},[t._v(t._s(t.verseId))])]):t._e(),t._v(" "),r("nuxt-link",{staticClass:"surah_nav_item surah_nav_next",attrs:{to:"/"+(t.isAMP?"amp/":"")+t.surahId+"/"+(t.verseId+1)+"/"}},[t.isHaveNext?r("span",{staticClass:"text-nav"},[t._v("\n      "+t._s(t.verseId+1)+"\n    ")]):t._e(),t._v(" "),t.isHaveNext?r("MdArrowForwardIcon",{attrs:{w:"30px",h:"30px"}}):t._e()],1)],1)}),[],!1,null,"1f9d6978",null);e.a=component.exports},286:function(t,e,r){var content=r(462);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("05fafdd9",content,!0,{sourceMap:!1})},461:function(t,e,r){"use strict";r(286)},462:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,".detail__content[data-v-51b126d3]{width:90%;margin:0 auto;padding-bottom:2em}",""]),t.exports=n},612:function(t,e,r){"use strict";r.r(e);r(38),r(25);var n=r(9),c=r(13),o=r(19),d=r(16),l=r(17),h=r(7),v=(r(41),r(26),r(241),r(2)),m=r(6),f=r(8),_=r(248),y=r(249),A=r(250),x=r(260),j=r(238),S=r(247),O=r(52);function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(h.a)(t);if(e){var c=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var w=function(t){Object(d.a)(r,t);var e=I(r);function r(){var t;return Object(c.a)(this,r),(t=e.apply(this,arguments)).loading=!0,t}return Object(o.a)(r,[{key:"metaHead",get:function(){return{title:this.metaTitle,meta:[{hid:"description",name:"description",content:this.metaDesc},{hid:"og:title",property:"og:title",content:this.metaTitle},{hid:"og:description",property:"og:title",content:this.metaDesc},{hid:"twitter:title",name:"twitter:title",content:this.metaTitle},{hid:"twitter:description",name:"twitter:title",content:this.metaDesc},{hid:"twitter:label1",name:"twitter:label1",content:"Surat"},{hid:"twitter:label2",name:"twitter:label2",content:this.currentSurah.name_latin},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor},{hid:"article:tag",name:"article:tag",content:this.currentSurah.name_latin}],link:[{rel:"canonical",href:"".concat(O.a.PATH).concat(this.surahId,"/").concat(this.verseId,"/")}],script:[{id:"ld-breadcrumb",innerHTML:JSON.stringify(this.jsonldBreadcrumb),type:"application/ld+json",body:!0},{id:"ld-article",innerHTML:JSON.stringify(this.jsonLdArticle),type:"application/ld+json",body:!0}],__dangerouslyDisableSanitizers:["script"]}}},{key:"isValidSurah",get:function(){return this.surahId>0&&this.surahId<=114}},{key:"onChangeVerse",value:function(t){var e=t.target.value;this.$router.push("/".concat(this.surahId,"/").concat(e,"/"))}},{key:"head",value:function(){return this.metaHead}},{key:"beforeMount",value:function(){this.setHeaderTitle("".concat(this.surahId,":").concat(this.verseId," ").concat(this.currentSurah.name_latin)),this.setPage("verse-detail")}}]),r}(m.Vue);Object(v.a)([f.State],w.prototype,"settingActiveTheme",void 0),Object(v.a)([f.Mutation],w.prototype,"setHeaderTitle",void 0),Object(v.a)([f.Mutation],w.prototype,"setPage",void 0);var k=w=Object(v.a)([Object(m.Component)({components:{Breadcrumb:_.a,SingleVerse:y.a,SurahHeader:A.a,VerseNavigation:x.a,SeoText:j.a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var n,c,title,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,e.next=3,r(244)("./".concat(n.surahid,".json"));case 3:return c=e.sent,title=Object(O.p)("".concat(n.verseid),"".concat(c[n.surahid].name_latin," (").concat(c[n.surahid].translations.id.name,")")),o=Object(O.e)("".concat(n.verseid),"".concat(c[n.surahid].name_latin," (").concat(c[n.surahid].translations.id.name,")")),e.abrupt("return",{metaTitle:title,metaDesc:o,verseId:Number(n.verseid)||1,surahId:Number(n.surahid)||1,currentSurah:c[n.surahid],jsonldBreadcrumb:Object(S.b)({categoryTitle:"QS ".concat(n.surahid),categorySlug:"".concat(n.surahid),title:"QS ".concat(n.surahid,":").concat(n.verseid),slug:"".concat(n.surahid,"/").concat(n.verseid)}),jsonLdArticle:Object(S.a)({desc:"".concat(o),cover:"meta-image.png",title:"".concat(title),slug:"".concat(n.surahid,"/").concat(n.verseid)})});case 7:case"end":return e.stop()}}),e)})))()}})],w),C=(r(461),r(5)),component=Object(C.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("div",{staticClass:"detail"},[r("Breadcrumb",{attrs:{"surah-name":t.currentSurah.name_latin,"surah-link":String(t.currentSurah.number),"verse-name":String(t.verseId)}}),t._v(" "),r("SurahHeader",{attrs:{"surah-number":Number(t.currentSurah.number),"surah-name":t.currentSurah.name,"surah-latin":t.currentSurah.name_latin,"surah-translation":t.currentSurah.translations.id.name,source:"amp-verse","show-settings":!1}}),t._v(" "),r("div",{staticClass:"detail__content"},[r("SingleVerse",{attrs:{verse:t.currentSurah.text[String(t.verseId)],"verse-index":String(t.verseId),"surah-id":t.surahId,translations:t.currentSurah.translations,tafsir:t.currentSurah.tafsir,source:"amp-verse","show-settings":!1}}),t._v(" "),r("SeoText",{attrs:{paragraph:"Baca Quran Surat "+t.currentSurah.name_latin+" Ayat "+String(t.verseId)+" beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya."}})],1),t._v(" "),r("VerseNavigation",{attrs:{"surah-id":t.surahId,"verse-id":t.verseId,"verse-count":Number(t.currentSurah.number_of_ayah),"on-change-verse":t.onChangeVerse}})],1)])}),[],!1,null,"51b126d3",null);e.default=component.exports}}]);