webpackJsonp([4],{547:function(t,e,i){function n(t){i(581)}var s=i(8)(i(565),i(593),n,null,null);t.exports=s.exports},557:function(t,e,i){"use strict";function n(){var t=a()({},l.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:"0",platform:"yqq",needNewCode:"0",g_tk:5381});return i.i(o.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,l.c)}function s(t){var e=a()({},l.b,{g_tk:5381,hostUin:0,platform:"yqq",needNewCode:0,singermid:t,order:"listen",begin:0,num:30,songstatus:1});return i.i(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",e,l.c)}e.b=n,e.a=s;var r=i(83),a=i.n(r),o=i(185),l=i(62)},558:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(63),s=i.n(n),r=i(186),a=i.n(r),o=i(122);e.default={data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},created:function(){this.touch={},this.listenScroll=!0,this.listHeight=[],this.probeType=3,this.fixedTop=0},props:{data:{type:Array,default:null}},computed:{shortcutList:function(){return this.data.map(function(t){return t.title})},fixedTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},components:{Scroll:s.a,Loading:a.a},methods:{onShortcutTouchStart:function(t){var e=parseInt(i.i(o.b)(t.target,"index")),n=t.touches[0];this.touch.y1=n.pageY,this.touch.anchorIndex=e,(e||0===e)&&(this.currentIndex=e,this.scrollToIndex(e))},onShortcutTouchMove:function(t){var e=t.touches[0];this.touch.y2=e.pageY;var i=(this.touch.y2-this.touch.y1)/18|0,n=this.touch.anchorIndex+i;n<0?n=0:n>this.listHeight.length-2&&(n=this.listHeight.length-2),this.currentIndex=n,this.scrollToIndex(n)},refresh:function(){this.$refs.listview.refresh()},scrollToIndex:function(t){this.$refs.listview.scrollToElement(this.$refs.listgroup[t],0)},onScroll:function(t){this.scrollY=t.y},_calculateHeight:function(){this.listHeight=[];var t=this.$refs.listgroup,e=0;this.listHeight.push(e);for(var i=0;i<t.length;i++){e+=t[i].clientHeight,this.listHeight.push(e)}},selectItem:function(t){this.$emit("select",t)}},watch:{data:function(){var t=this;setTimeout(function(){t._calculateHeight()},20)},scrollY:function(t){var e=this.listHeight;if(t>0)return void(this.currentIndex=0);for(var i=0;i<e.length-1;i++){var n=e[i],s=e[i+1];if(!s||-t>=n&&-t<s)return this.currentIndex=i,void(this.diff=s+t);this.currentIndex=e.length-2}},diff:function(t){var e=t>0&&t<30?t-30:0;this.fixedTop!==e&&(this.fixedTop=e,this.$refs.fixed.style.transform="translate3d(0,"+e+"px,0)")}}}},565:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(54),s=i.n(n),r=i(588),a=i.n(r),o=i(557),l=i(190),A=i(62),c=i(35),u=i(82);e.default={mixins:[u.a],data:function(){return{singers:[]}},components:{ListView:a.a},created:function(){this._getSingerList()},methods:s()({handlePlayList:function(t){var e=t.length>0?"60px":"";this.$refs.singer.style.bottom=e,this.$refs.singerView.refresh()},_getSingerList:function(){var t=this;i.i(o.b)().then(function(e){e.code===A.a&&(t.singers=t._normalizeSinger(e.data.list))})},_normalizeSinger:function(t){var e={hot:{title:"热",items:[]}};t.forEach(function(t,i){i<10&&e.hot.items.push(new l.a({id:t.Fsinger_mid,name:t.Fsinger_name}));var n=t.Findex;e[n]||(e[n]={title:n,items:[]}),e[n].items.push(new l.a({id:t.Fsinger_mid,name:t.Fsinger_name}))});var i=[],n=[];for(var s in e){var r=e[s];r.title.match(/[a-zA-Z]/)?n.push(r):"热"===r.title&&i.push(r)}return n.sort(function(t,e){return t.title.charCodeAt(0)-e.title.charCodeAt(0)}),i.concat(n)},selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)}},i.i(c.d)({setSinger:"SET_SINGER"}))}},570:function(t,e,i){e=t.exports=i(540)(!0),e.push([t.i,".listview[data-v-36e82cfb]{position:relative;width:100%;height:100%;overflow:hidden;background:#222}.listview .list-group[data-v-36e82cfb]{padding-bottom:30px}.listview .list-group .list-group-title[data-v-36e82cfb]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .list-group .list-group-item[data-v-36e82cfb]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:20px 0 0 30px}.listview .list-group .list-group-item .avatar[data-v-36e82cfb]{width:50px;height:50px;border-radius:50%}.listview .list-group .list-group-item .name[data-v-36e82cfb]{margin-left:20px;color:hsla(0,0%,100%,.5);font-size:14px}.listview .list-shortcut[data-v-36e82cfb]{position:absolute;z-index:30;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:20px;padding:20px 0;border-radius:10px;text-align:center;background:rgba(0,0,0,.3);font-family:Helvetica}.listview .list-shortcut .item[data-v-36e82cfb]{padding:3px;line-height:1;color:hsla(0,0%,100%,.5);font-size:12px}.listview .list-shortcut .item.current[data-v-36e82cfb]{color:#ffcd32}.listview .list-fixed[data-v-36e82cfb]{position:absolute;top:0;left:0;width:100%}.listview .list-fixed .fixed-title[data-v-36e82cfb]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .loading-container[data-v-36e82cfb]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["E:/nodeJS/vue移动音乐app/vue-music/src/base/listview/listview.vue"],names:[],mappings:"AACA,2BACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,eAAiB,CAClB,AACD,uCACE,mBAAqB,CACtB,AACD,yDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,eAAiB,CAClB,AACD,wDACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,qBAAuB,CACxB,AACD,gEACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,8DACE,iBAAkB,AAClB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,0CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,QAAS,AACT,mCAAoC,AAC5B,2BAA4B,AACpC,WAAY,AACZ,eAAgB,AAChB,mBAAoB,AACpB,kBAAmB,AACnB,0BAA4B,AAC5B,qBAAuB,CACxB,AACD,gDACE,YAAa,AACb,cAAe,AACf,yBAA6B,AAC7B,cAAgB,CACjB,AACD,wDACE,aAAe,CAChB,AACD,uCACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,UAAY,CACb,AACD,oDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,eAAiB,CAClB,AACD,8CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"listview.vue",sourcesContent:["\n.listview[data-v-36e82cfb] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #222;\n}\n.listview .list-group[data-v-36e82cfb] {\n  padding-bottom: 30px;\n}\n.listview .list-group .list-group-title[data-v-36e82cfb] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .list-group .list-group-item[data-v-36e82cfb] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px 0 0 30px;\n}\n.listview .list-group .list-group-item .avatar[data-v-36e82cfb] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.listview .list-group .list-group-item .name[data-v-36e82cfb] {\n  margin-left: 20px;\n  color: rgba(255,255,255,0.5);\n  font-size: 14px;\n}\n.listview .list-shortcut[data-v-36e82cfb] {\n  position: absolute;\n  z-index: 30;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 20px;\n  padding: 20px 0;\n  border-radius: 10px;\n  text-align: center;\n  background: rgba(0,0,0,0.3);\n  font-family: Helvetica;\n}\n.listview .list-shortcut .item[data-v-36e82cfb] {\n  padding: 3px;\n  line-height: 1;\n  color: rgba(255,255,255,0.5);\n  font-size: 12px;\n}\n.listview .list-shortcut .item.current[data-v-36e82cfb] {\n  color: #ffcd32;\n}\n.listview .list-fixed[data-v-36e82cfb] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.listview .list-fixed .fixed-title[data-v-36e82cfb] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .loading-container[data-v-36e82cfb] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},571:function(t,e,i){e=t.exports=i(540)(!0),e.push([t.i,".singer{position:fixed;top:88px;bottom:0;width:100%}","",{version:3,sources:["E:/nodeJS/vue移动音乐app/vue-music/src/components/singer/singer.vue"],names:[],mappings:"AACA,QACE,eAAgB,AAChB,SAAU,AACV,SAAY,AACZ,UAAY,CACb",file:"singer.vue",sourcesContent:["\n.singer {\n  position: fixed;\n  top: 88px;\n  bottom: 0px;\n  width: 100%;\n}"],sourceRoot:""}])},580:function(t,e,i){var n=i(570);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(541)("f743abba",n,!0)},581:function(t,e,i){var n=i(571);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(541)("1e275f86",n,!0)},588:function(t,e,i){function n(t){i(580)}var s=i(8)(i(558),i(592),n,"data-v-36e82cfb",null);t.exports=s.exports},592:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll",{ref:"listview",staticClass:"listview",attrs:{data:t.data,listenScroll:t.listenScroll,probeType:t.probeType},on:{scroll:t.onScroll}},[i("ul",t._l(t.data,function(e){return i("li",{ref:"listgroup",refInFor:!0,staticClass:"list-group"},[i("h2",{staticClass:"list-group-title"},[t._v(t._s(e.title))]),t._v(" "),i("ul",t._l(e.items,function(e){return i("li",{staticClass:"list-group-item",on:{click:function(i){t.selectItem(e)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"item.avatar"}],staticClass:"avatar"}),t._v(" "),i("span",{staticClass:"name"},[t._v(t._s(e.name))])])}))])})),t._v(" "),i("div",{staticClass:"list-shortcut",on:{touchstart:t.onShortcutTouchStart,touchmove:function(e){e.stopPropagation(),e.preventDefault(),t.onShortcutTouchMove(e)}}},[i("ul",t._l(t.shortcutList,function(e,n){return i("li",{staticClass:"item",class:{current:t.currentIndex===n},attrs:{"data-index":n}},[t._v("\n        "+t._s(e)+"\n      ")])}))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixed",staticClass:"list-fixed"},[i("h1",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-container"},[i("loading")],1)])},staticRenderFns:[]}},593:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"singer",staticClass:"singer"},[i("list-view",{ref:"singerView",attrs:{data:t.singers},on:{select:t.selectSinger}}),t._v(" "),i("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=4.544113aef77689f54e0b.js.map