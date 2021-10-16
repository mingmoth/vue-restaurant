(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84cc821a"],{"12b2":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.name,expression:"restaurant.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter name",required:""},domProps:{value:t.restaurant.name},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"categoryId"}},[t._v("Category")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.categoryId,expression:"restaurant.categoryId"}],staticClass:"form-control",attrs:{id:"categoryId",name:"categoryId",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.restaurant,"categoryId",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[t._v(" --請選擇-- ")]),t._l(t.categories,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"tel"}},[t._v("Tel")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.tel,expression:"restaurant.tel"}],staticClass:"form-control",attrs:{id:"tel",type:"text",name:"tel",placeholder:"Enter telephone number"},domProps:{value:t.restaurant.tel},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"tel",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"address"}},[t._v("Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.address,expression:"restaurant.address"}],staticClass:"form-control",attrs:{id:"address",type:"text",placeholder:"Enter address",name:"address"},domProps:{value:t.restaurant.address},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"address",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"opening-hours"}},[t._v("Opening Hours")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.openingHours,expression:"restaurant.openingHours"}],staticClass:"form-control",attrs:{id:"opening-hours",type:"time",name:"opening_hours"},domProps:{value:t.restaurant.openingHours},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"openingHours",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("Description")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.description,expression:"restaurant.description"}],staticClass:"form-control",attrs:{id:"description",rows:"3",name:"description"},domProps:{value:t.restaurant.description},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("Image")]),t.restaurant.image?a("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:t.restaurant.image,width:"200",height:"200",alt:""}}):t._e(),a("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:t.handleFileChange}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" "+t._s(t.isProcessing?"處理中...":"送出")+" ")])])},n=[],s=a("1da1"),i=a("5530"),o=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("b0c0"),a("96cf"),a("be6c")),u=a("2fa3"),c={props:{initialRestaurant:{type:Object,default:function(){return{name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""}}},isProcessing:{type:Boolean,default:!1}},data:function(){return{restaurant:Object(i["a"])({},this.initialRestaurant),categories:[],isLoading:!0}},watch:{initialRestaurant:function(t){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),t)}},created:function(){this.fetchCategories(),this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),this.initialRestaurant)},methods:{fetchCategories:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["a"].categories.get();case 3:if(a=e.sent,r=a.data,"error"!==r.status){e.next=7;break}throw new Error(r.message);case 7:t.categories=r.categories,t.isLoading=!1,e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),t.isLoading=!1,u["a"].fire({icon:"error",title:"無法取得餐廳類別，請稍後再試"});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()},handleFileChange:function(t){var e=t.target.files;if(console.log("files",e),0===e.length)this.restaurant.image="";else{var a=window.URL.createObjectURL(e[0]);this.restaurant.image=a}},handleSubmit:function(t){if(this.restaurant.name)if(this.restaurant.categoryId){var e=t.target,a=new FormData(e);this.$emit("after-submit",a)}else u["a"].fire({icon:"warning",title:"請選擇餐廳類別"});else u["a"].fire({icon:"warning",title:"請填寫餐廳名稱"})}}},l=c,d=a("2877"),m=Object(d["a"])(l,r,n,!1,null,null,null);e["a"]=m.exports},2743:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("AdminRestaurantForm",{attrs:{"is-processing":t.isProcessing},on:{"after-submit":t.handleAfterSubmit}})],1)},n=[],s=a("1da1"),i=(a("96cf"),a("be6c")),o=a("2fa3"),u=a("12b2"),c={components:{AdminRestaurantForm:u["a"]},data:function(){return{isProcessing:!1}},methods:{handleAfterSubmit:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.isProcessing=!0,a.next=4,i["a"].restaurants.create({formData:t});case 4:if(r=a.sent,n=r.data,"success"===n.status){a.next=8;break}throw new Error(n.message);case 8:e.$router.push({name:"admin-restaurants"}),a.next=16;break;case 11:a.prev=11,a.t0=a["catch"](0),e.isProcessing=!1,console.log(a.t0),o["a"].fire({icon:"error",title:"無法建立餐廳資訊，請稍後再試"});case 16:case"end":return a.stop()}}),a,null,[[0,11]])})))()}}},l=c,d=a("2877"),m=Object(d["a"])(l,r,n,!1,null,null,null);e["default"]=m.exports},be6c:function(t,e,a){"use strict";a("b0c0");var r=a("2fa3");e["a"]={categories:{get:function(){return r["b"].get("/admin/categories")},create:function(t){var e=t.name;return r["b"].post("/admin/categories",{name:e})},update:function(t){var e=t.categoryId,a=t.name;return r["b"].put("/admin/categories/".concat(e),{name:a})},delete:function(t){var e=t.categoryId;return r["b"].delete("/admin/categories/".concat(e))}},restaurants:{get:function(){return r["b"].get("/admin/restaurants")},create:function(t){var e=t.formData;return r["b"].post("/admin/restaurants",e)},update:function(t){var e=t.restaurantId,a=t.formData;return r["b"].put("/admin/restaurants/".concat(e),a)},getDetail:function(t){var e=t.restaurantId;return r["b"].get("/admin/restaurants/".concat(e))},delete:function(t){var e=t.restaurantId;return r["b"].delete("/admin/restaurants/".concat(e))}},users:{get:function(){return r["b"].get("/admin/users")},toggle:function(t){var e=t.userId,a=t.isAdmin;return r["b"].put("/admin/users/".concat(e),{isAdmin:a})}}}}}]);
//# sourceMappingURL=chunk-84cc821a.15689de8.js.map