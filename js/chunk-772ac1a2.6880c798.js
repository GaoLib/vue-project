(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-772ac1a2"],{"10df":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("player-detail",{attrs:{"is-edit":!1}})],1)},n=[],c=a("d4ec"),i=a("262e"),o=a("2caf"),s=a("9ab4"),u=a("1b40"),l=a("4e4b1"),p=function(e){Object(i["a"])(a,e);var t=Object(o["a"])(a);function a(){return Object(c["a"])(this,a),t.apply(this,arguments)}return a}(u["d"]);p=Object(s["b"])([Object(u["a"])({components:{PlayerDetail:l["a"]}})],p);var d=p,m=d,f=a("2877"),b=Object(f["a"])(m,r,n,!1,null,"193ac2c6",null);t["default"]=b.exports},"3d4d":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"e",(function(){return c})),a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"f",(function(){return s})),a.d(t,"c",(function(){return u}));var r=a("b32d"),n={accountname:"",nickname:"",avatar:"",bravepoints:0,exp:0,id:-1,level:0,rank:0,wanttoplay:[],winningstreak:0},c=function(e){return Object(r["a"])({url:"/players",method:"get",params:e})},i=function(e){return Object(r["a"])({url:"/players/"+e,method:"get"})},o=function(e){return Object(r["a"])({url:"/players",method:"post",params:e})},s=function(e,t){return Object(r["a"])({url:"/players/"+e,method:"put",data:t})},u=function(e){return Object(r["a"])({url:"/players/"+e,method:"delete"})}},"4e4b1":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"form",attrs:{model:e.playerForm,rules:e.rules}},[a("el-form-item",{attrs:{prop:"accountname",label:"帐户名"}},[a("el-input",{model:{value:e.playerForm.accountname,callback:function(t){e.$set(e.playerForm,"accountname",t)},expression:"playerForm.accountname"}})],1),a("el-form-item",{attrs:{prop:"nickname",label:"昵称"}},[a("el-input",{model:{value:e.playerForm.nickname,callback:function(t){e.$set(e.playerForm,"nickname",t)},expression:"playerForm.nickname"}})],1),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"before-upload":e.beforeAvatarUpload,"on-success":e.handleAvatarSuccess}},[e.imageUrl?a("img",{staticClass:"avatar",attrs:{src:"imageUrl"}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("提交")])],1)],1)],1)},n=[],c=a("1da1"),i=a("d4ec"),o=a("bee2"),s=a("262e"),u=a("2caf"),l=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("b0c0"),a("96cf"),a("9ab4")),p=a("1b40"),d=a("3d4d"),m=function(e){Object(s["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.playerForm=Object.assign({},d["b"]),e.validateRequire=function(t,a,r){""===a?(e.$message({message:t.field+"必须填写",type:"error"}),r(new Error(t.field+"必须填写"))):r()},e.rules={accountname:[{validator:e.validateRequire}],nickname:[{validator:e.validateRequire}]},e.loading=!1,e.imageUrl="",e}return Object(o["a"])(a,[{key:"created",value:function(){if(this.isEdit){var e=this.$route.params&&this.$route.params.id;this.fetchData(parseInt(e))}}},{key:"fetchData",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d["d"])(t);case 3:a=e.sent,r=a.data,this.playerForm=r.player,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"beforeAvatarUpload",value:function(e){var t=e.size/1024/1024<1;return t||this.$message.error("上传图像大小不能超过1M"),t}},{key:"handleAvatarSuccess",value:function(e,t){this.imageUrl=URL.createObjectURL(t.raw),this.playerForm.avatar=t.name}},{key:"submitForm",value:function(){var e=this;this.form.validate(function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=19;break}if(e.loading=!0,t.prev=2,!e.isEdit){t.next=8;break}return t.next=6,Object(d["f"])(e.playerForm.id,e.playerForm);case 6:t.next=10;break;case 8:return t.next=10,Object(d["a"])(e.playerForm);case 10:e.$notify({title:"操作成功",message:"新增玩家成功",type:"success",duration:2e3}),e.loading=!1,t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](2),console.error(t.t0);case 17:t.next=20;break;case 19:console.error("校验失败，请修改后再试");case 20:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e){return t.apply(this,arguments)}}())}}]),a}(p["d"]);Object(l["b"])([Object(p["b"])({default:!1})],m.prototype,"isEdit",void 0),Object(l["b"])([Object(p["c"])()],m.prototype,"form",void 0),m=Object(l["b"])([p["a"]],m);var f=m,b=f,v=(a("90fc"),a("2877")),h=Object(v["a"])(b,r,n,!1,null,null,null);t["a"]=h.exports},"90fc":function(e,t,a){"use strict";a("c7ed")},c7ed:function(e,t,a){}}]);