(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75f64913"],{"31cc":function(e,t,a){"use strict";var n=a("f4b7"),o=a.n(n);o.a},5473:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"device smart"},[a("base-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],attrs:{height:e.tableHeight,tableData:e.tableData,columns:e.columns,stripe:"",border:"",pageTotal:e.total,pageSize:e.search.pageSize},on:{"on-current-page-change":e.onCurrentChange,"on-page-size-change":e.onSizeChange}},[e._t("default",[a("template",{slot:"caption"},[a("el-input",{staticClass:"caption-item",attrs:{placeholder:"序列号"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch(t)}},model:{value:e.search.obox_serial_id,callback:function(t){e.$set(e.search,"obox_serial_id",t)},expression:"search.obox_serial_id"}}),a("el-input",{staticClass:"caption-item",attrs:{placeholder:"名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch(t)}},model:{value:e.search.obox_name,callback:function(t){e.$set(e.search,"obox_name",t)},expression:"search.obox_name"}}),a("el-select",{staticClass:"caption-item",attrs:{clearable:"",placeholder:"全部"},model:{value:e.search.obox_status,callback:function(t){e.$set(e.search,"obox_status",t)},expression:"search.obox_status"}},[a("el-option",{attrs:{label:"全部",value:""}}),a("el-option",{attrs:{label:"在线",value:1}}),a("el-option",{attrs:{label:"不在线",value:0}})],1),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleSearch}},[e._v("查询")])],1)])],2)],1)},o=[],i=(a("386d"),a("29d7")),r=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),s=a("cb4b");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach(function(t){Object(r["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var u={getOboxList:function(e){var t=e.pageNo,a=e.pageSize;return delete e.pageNo,delete e.pageSize,s["a"].get("/consumer/common",l({CMD:"query_obox",start:t,count:a},e))}},b=u,h=a("9a36"),p=a("0feb"),g={data:function(){return{tableLoading:!0,tableHeight:0,search:{serialId:"",obox_name:"",obox_status:"",pageNo:h["a"],pageSize:h["b"]},tableData:[],columns:[]}},components:{BaseTable:i["a"]},created:function(){this.columns=this.getColumns(),this.getOboxList()},computed:{total:function(){return this.tableData.length||0}},mounted:function(){p["a"].windowOnResize(this,this.fixLayout)},methods:{fixLayout:function(){this.tableHeight=p["a"].calculateTableHeight()},getColumns:function(){return[{label:"序列号",prop:"obox_serial_id",align:"center"},{label:"OBOX名称",prop:"obox_name",align:"center"},{label:"OBOX版本",prop:"obox_version",align:"center"},{label:"OBOX状态",prop:"obox_status",align:"center",formatter:function(e){return e?"在线":"不在线"}},{label:"操作",align:"center",minWidth:"180px",renderBody:this.getToolboxRender}]},getToolboxRender:function(e,t){var a=this;return[e("el-button",{attrs:{size:"tiny",icon:"iconfont icon-shengji",title:"升级"},on:{click:function(){return a.handleUpgrade(t)}}})]},getOboxList:function(){var e=this;this.tableLoading=!0,b.getOboxList(this.search).then(function(t){200===t.status?e.tableData=t.data.oboxs:e.$message({message:t.message||"场景获取失败"}),e.tableLoading=!1}).catch(function(t){e.$message({title:"失败",message:t.message||"服务出错",type:"error"}),e.tableLoading=!1})},onCurrentChange:function(e){this.search.pageNo=e,this.getOboxList()},onSizeChange:function(e){this.search.pageSize=e,this.getOboxList()},handleSearch:function(){this.search.pageNo=h["a"],this.getOboxList()},handleUpgrade:function(e){var t=this;console.log("upgrade ",e),this.$confirm("即将进行升级，请再次确认","确认提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then(function(){t.doUpgrade()}).catch(function(){console.log("取消删除")})},doUpgrade:function(){var e=this.$loading({lock:!0,text:"obox升级中..."});setTimeout(function(){e.close()},1500),console.log("升级操作")}}},d=g,f=(a("31cc"),a("2877")),m=Object(f["a"])(d,n,o,!1,null,"880b71a8",null);t["default"]=m.exports},f4b7:function(e,t,a){}}]);
//# sourceMappingURL=chunk-75f64913.d55b358a.js.map