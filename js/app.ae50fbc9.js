(function(e){function t(t){for(var a,i,l=t[0],u=t[1],c=t[2],f=0,d=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);s&&s(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var u=n[l];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="deploy-test/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2503:function(e,t,n){"use strict";var a=n("6901"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-container",[n("v-row",[n("Form")],1),n("RecognitionList")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",[n("v-flex",[n("v-card",[n("v-form",{ref:"upload",staticClass:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-file-input",{attrs:{accept:"image/*",label:"Upload image"},on:{change:e.onFileChange}}),e.notChanged?n("v-text-field",{attrs:{label:"Image name","prepend-icon":"mdi-file-image"},model:{value:e.imageName,callback:function(t){e.imageName=t},expression:"imageName"}}):e._e(),e.notChanged?n("v-text-field",{attrs:{label:"Image url","prepend-icon":"mdi-file-image"},model:{value:e.imageUrl,callback:function(t){e.imageUrl=t},expression:"imageUrl"}}):e._e(),n("v-btn",{on:{click:e.onSubmitAttached}},[e._v("Upload")])],1)],1)],1)],1)],1)},l=[],u=n("bc3a"),c=n.n(u),s={data:function(){return{valid:!0,formData:new FormData,notChanged:!0,imageName:"",imageUrl:""}},methods:{onFileChange:function(e){this.notChanged=!1,this.formData.append("file",e)},onSubmitAttached:function(){this.imageUrl&&this.imageName&&(this.formData.append("url",this.imageUrl),this.formData.append("name",this.imageName)),c()({method:"POST",url:"http://561f5e1f.ngrok.io/img",data:this.formData,headers:{"content-type":"multipart/form-data"}}).then(function(){window.location.reload()})}}},f=s,d=n("2877"),p=Object(d["a"])(f,i,l,!1,null,null,null),m=p.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{"no-gutters":""}},e._l(e.results,function(t){return n("v-card",{key:t._id,staticClass:"card"},[n("div",{staticClass:"name"},[e._v(e._s(t.name))]),t.url?n("v-flex",[n("img",{staticClass:"img",attrs:{src:t.url}})]):e._e(),t.url?e._e():n("v-flex",[n("img",{staticClass:"img",attrs:{src:e.serverUrl+t.path}})]),n("v-flex",[e._v(e._s(t.tags))])],1)}),1)},g=[],h={data:function(){return{results:[],serverUrl:"http://561f5e1f.ngrok.io/"}},methods:{},mounted:function(){var e=this;c.a.get("http://561f5e1f.ngrok.io/img").then(function(t){e.results=t.data,e.results.reverse()})}},b=h,y=(n("2503"),Object(d["a"])(b,v,g,!1,null,"bb784daa",null)),_=y.exports,w={name:"App",components:{Form:m,RecognitionList:_},data:function(){return{}}},x=w,O=Object(d["a"])(x,r,o,!1,null,null,null),C=O.exports,F=n("ce5b"),j=n.n(F);n("bf40");a["default"].use(j.a);var k=new j.a({theme:{themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"mdi"}});n("d5e8"),n("5363");a["default"].config.productionTip=!1,new a["default"]({vuetify:k,render:function(e){return e(C)}}).$mount("#app")},6901:function(e,t,n){}});
//# sourceMappingURL=app.ae50fbc9.js.map