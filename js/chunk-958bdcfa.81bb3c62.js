(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-958bdcfa"],{6135:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("AdminNav"),r("table",{staticClass:"table"},[t._m(0),t._l(t.users,(function(e){return r("tbody",{key:e.id},[r("tr",[r("th",{attrs:{scope:"row"}},[t._v(" "+t._s(e.id)+" ")]),r("td",[t._v(t._s(e.email))]),e.isAdmin?r("td",[t._v("admin")]):r("td",[t._v("user")]),e.isAdmin?r("td",[r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.toggleUser(e.id)}}},[t._v(" set as user ")])]):r("td",[r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.toggleUser(e.id)}}},[t._v(" set as Admin ")])])])])}))],2)],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"thead-dark"},[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("#")]),r("th",{attrs:{scope:"col"}},[t._v("Email")]),r("th",{attrs:{scope:"col"}},[t._v("Role")]),r("th",{attrs:{scope:"col",width:"140"}},[t._v("Action")])])])}],s=r("1da1"),c=r("5530"),i=(r("96cf"),r("d81d"),r("d3b7"),r("25f0"),r("be6c")),u=r("2fa3"),o=r("2f62"),d=r("e04c"),l={name:"AdminUsers",components:{AdminNav:d["a"]},data:function(){return{users:[]}},computed:Object(c["a"])({},Object(o["b"])(["currentUser"])),created:function(){this.fetchUsers()},methods:{fetchUsers:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i["a"].users.get();case 3:if(r=e.sent,n=r.data,"error"!==n.status){e.next=7;break}throw new Error(n.message);case 7:t.users=n.users.map((function(t){return Object(c["a"])({},t)})),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0),u["a"].fire({icon:"error",title:"無法取得使用者資訊，請稍後再試"});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()},toggleUser:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.userId,a=t.isAdmin,r.prev=1,r.next=4,i["a"].users.toggle({userId:n,isAdmin:(!a).toString()});case 4:if(s=r.sent,o=s.data,"error"!==o.status){r.next=8;break}throw new Error(o.message);case 8:e.users=e.users.map((function(t){return t.id===n?Object(c["a"])(Object(c["a"])({},t),{},{isAdmin:!t.isAdmin}):t})),r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](1),console.log(r.t0),u["a"].fire({icon:"error",title:"無法變更使用者權限，請稍後再試"});case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()}}},m=l,f=r("2877"),v=Object(f["a"])(m,n,a,!1,null,null,null);e["default"]=v.exports},be6c:function(t,e,r){"use strict";r("b0c0");var n=r("2fa3");e["a"]={categories:{get:function(){return n["b"].get("/admin/categories")},create:function(t){var e=t.name;return n["b"].post("/admin/categories",{name:e})},update:function(t){var e=t.categoryId,r=t.name;return n["b"].put("/admin/categories/".concat(e),{name:r})},delete:function(t){var e=t.categoryId;return n["b"].delete("/admin/categories/".concat(e))}},restaurants:{get:function(){return n["b"].get("/admin/restaurants")},create:function(t){var e=t.formData;return n["b"].post("/admin/restaurants",e)},update:function(t){var e=t.restaurantId,r=t.formData;return n["b"].put("/admin/restaurants/".concat(e),r)},getDetail:function(t){var e=t.restaurantId;return n["b"].get("/admin/restaurants/".concat(e))},delete:function(t){var e=t.restaurantId;return n["b"].delete("/admin/restaurants/".concat(e))}},users:{get:function(){return n["b"].get("/admin/users")},toggle:function(t){var e=t.userId,r=t.isAdmin;return n["b"].put("/admin/users/".concat(e),{isAdmin:r})}}}},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,s=r("1dde"),c=s("map");n({target:"Array",proto:!0,forced:!c},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},e04c:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-3"},[r("h1",[t._v("餐廳後台")]),r("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),r("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),r("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},a=[],s=r("2877"),c={},i=Object(s["a"])(c,n,a,!1,null,null,null);e["a"]=i.exports}}]);
//# sourceMappingURL=chunk-958bdcfa.81bb3c62.js.map