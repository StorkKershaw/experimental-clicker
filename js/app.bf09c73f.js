(function(e){function t(t){for(var r,i,u=t[0],s=t[1],c=t[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("game")},o=[],i=n("a6f4"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"border game-div"},[n("b-button",{directives:[{name:"show",rawName:"v-show",value:e.game.showPlay,expression:"game.showPlay"}],staticClass:"play-button",attrs:{variant:"outline-primary"},on:{click:e.playGame}},[n("b-icon-play"),e._v(" Play Game (音が鳴ります) ")],1),n("b-table",{directives:[{name:"show",rawName:"v-show",value:e.game.showResult,expression:"game.showResult"}],staticClass:"text-center result-table",attrs:{small:"",fields:e.results.fields,items:e.results.items},scopedSlots:e._u([{key:"cell(index)",fn:function(t){return[e._v(" "+e._s(t.index+1)+" ")]}},{key:"cell(reaction)",fn:function(t){return[e._v(" "+e._s(t.item.clicked-t.item.shown||"")+" ")]}}])}),n("b-button",{directives:[{name:"show",rawName:"v-show",value:e.game.showTarget,expression:"game.showTarget"}],staticClass:"target-button",style:e.game.targetStyle,attrs:{variant:"outline-primary",size:"lg"},on:{click:e.handleClick}},[n("b-icon-music-note-beamed")],1)],1)},s=[],c=n("5530"),l=n("1da1"),f=n("668b"),p=(n("96cf"),[{duration:3e3},{top:"20%",left:"38%",duration:1151},{top:"35%",left:"40%",duration:789},{top:"56%",left:"68%",duration:984},{top:"28%",left:"42%",duration:879},{top:"68%",left:"56%",duration:1265},{top:"36%",left:"22%",duration:1104},{top:"41%",left:"53%",duration:705},{top:"60%",left:"75%",duration:1007},{top:"76%",left:"64%",duration:874},{top:"58%",left:"38%",duration:984}]);n("d3b7");function d(e){return new Promise((function(t){return setTimeout(t,Math.max(0,e))}))}var m=n("1947"),b=n("7386"),h=n("29a1"),v=Object(i["b"])({components:{BButton:m["a"],BIconPlay:b["b"],BIconMusicNoteBeamed:b["a"],BTable:h["a"]},setup:function(){var e=Object(i["c"])({showPlay:!0,showResult:!0,showTarget:!1,targetStyle:{}}),t=Object(i["c"])({items:[{}],fields:[{key:"index",label:"#"},{key:"reaction",label:"Reaction Time [ms]"},{key:"duration",label:"Time Limit [ms]"}]}),n=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a(),e.next=3,u();case 3:o();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(n){var r=t.items.length;t.items[r-1].clicked=Date.now(),e.showTarget=!1},a=function(){e.showPlay=!1,e.showResult=!1,t.items=[]},o=function(){e.showPlay=!0,e.showResult=!0,e.showTarget=!1,e.targetStyle={}},u=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,o,i,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=!0,n=!1,e.prev=2,a=Object(f["a"])(p);case 4:return e.next=6,a.next();case 6:return o=e.sent,t=o.done,e.next=10,o.value;case 10:if(i=e.sent,t){e.next=18;break}return u=i,e.next=15,s(u);case 15:t=!0,e.next=4;break;case 18:e.next=24;break;case 20:e.prev=20,e.t0=e["catch"](2),n=!0,r=e.t0;case 24:if(e.prev=24,e.prev=25,t||null==a.return){e.next=29;break}return e.next=29,a.return();case 29:if(e.prev=29,!n){e.next=32;break}throw r;case 32:return e.finish(29);case 33:return e.finish(24);case 34:case"end":return e.stop()}}),e,null,[[2,20,24,34],[25,,29,33]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var n=Object(l["a"])(regeneratorRuntime.mark((function n(r){var a,o,i,u,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=r.top,o=r.left,i=r.duration,a&&o&&(u=e.targetStyle,s=Object(c["a"])(Object(c["a"])({},u),{},{top:a,left:o}),t.items.push({shown:Date.now(),clicked:NaN,duration:i}),e.showTarget=!0,e.targetStyle=s),n.next=4,d(i);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return{game:e,results:t,playGame:n,handleClick:r}}}),w=v,y=(n("9dc5"),n("2877")),g=Object(y["a"])(w,u,s,!1,null,"a971c942",null),x=g.exports,k=Object(i["b"])({components:{Game:x}}),O=k,j=(n("034f"),Object(y["a"])(O,a,o,!1,null,null,null)),_=j.exports;n("f9e3"),n("2dd8");r["default"].use(i["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(_)}}).$mount("#app")},"575b":function(e,t,n){},"85ec":function(e,t,n){},"9dc5":function(e,t,n){"use strict";n("575b")}});
//# sourceMappingURL=app.bf09c73f.js.map