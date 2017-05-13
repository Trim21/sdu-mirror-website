webpackJsonp([1,0],[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n(10);var s=n(35),i=r(s),a=n(34),u=r(a),o=n(33),c=r(o),l=n(19),d=r(l),m=n(2),v=r(m);i.default.use(u.default),i.default.use(c.default);var f=new u.default({mode:"history",routes:v.default});new i.default({el:"#app",router:f,template:"<App/>",components:{App:d.default}})},,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(23),i=r(s),a=n(24),u=r(a),o=n(22),c=r(o),l=n(21),d=r(l),m=n(25),v=r(m),f=[{path:"/",name:"index",component:i.default},{path:"/status",name:"status",component:u.default},{path:"/confgen",name:"confgen",component:c.default},{path:"/about",name:"about",component:d.default},{path:"/404",component:v.default},{path:"*",redirect:"/404"}];e.default=f},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(20),i=r(s);e.default={name:"app",components:{Navbar:i.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"navdar",data:function(){return{}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"aboutus",components:{},data:function(){return{}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(18);r.setOptions({renderer:new r.Renderer,gfm:!0,tables:!0,breaks:!0,pedantic:!0,sanitize:!0,smartLists:!0,smartypants:!0}),e.default={name:"confGen",methods:{marked:r,user:function(t){return"npm"===t?"加入#~/.npmrc":"ubuntu"===t||"kali"===t?"替换/etc/apt/sources.list":"aosp"===t?"# AOSP镜像使用帮助\n\n>该镜像上游是[清华大学开源镜像站](https://mirrors.tuna.tsinghua.edu.cn/help/AOSP/)，每天凌晨三点进行代码同步。\n\n###简洁说明\n可以参考官方的使用教程[](https://source.android.com/source/downloading.html)。使用`git://mirror.sdu.edu.cn/` 替换 `https://android.googlesource.com/` 即可。\n\n###具体说明（新开始）\n（参考[https://mirrors.tuna.tsinghua.edu.cn/help/AOSP/](https://mirrors.tuna.tsinghua.edu.cn/help/AOSP/)编写）\n\n1. 下载repo工具\n\n        mkdir ~/bin\n        PATH=~/bin:$PATH\n        curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo #Google\n        curl https://mirrors.tuna.tsinghua.edu.cn/git/git-repo > ~/bin/repo #Tsinghua\n        chmod a+x ~/bin/repo\n\n2. 创建工作目录并进入\n\n        mkdir WORKING_DIRECTORY\n        cd WORKING_DIRECTORY\n3. 初始化仓库\n    >如果提示无法连接到 gerrit.googlesource.com，请参照[清华大学镜像站中git-repo的帮助页面](https://mirrors.tuna.tsinghua.edu.cn/help/git-repo)中的更新一节。\n\n    + 完整初始化：\n    \n            repo init -u git://mirror.sdu.edu.cn/platform/manifest\n    \n    + 同步某个特定的Android版本([列表](https://source.android.com/source/build-numbers#source-code-tags-and-builds)):\n            \n            repo init -u git://mirror.sdu.edu.cn/platform/manifest  -b android-7.1.2_r1\n    \n4. 同步源码\n    \n        repo sync\n        \n###具体说明（替换已有源码的remote）\n1. 修改`.repo/manifest.xml`,将`name`为`aosp`的`remote`中`fetch`的值修改为`..`\n2. 修改`.repo/manifests.git/config`,将`url`修改为`url=git://mirror.sdu.edu.cn/platform/manifest`\n\n":t},getVersionOfDistro:function(t){return"npm"===t?[{key:"npm",name:"npm"}]:"ubuntu"===t?[{key:"artful",name:"artful (17.10)"},{key:"zesty",name:"zesty (17.04)"},{key:"yakkety",name:"yakkety (16.10)"},{key:"xenial",name:"xenial (16.04)"},{key:"wily",name:"wily (15.10)"},{key:"vivid",name:"vivid (15.04)"},{key:"utopic",name:"utopic (14.10)"},{key:"trusty",name:"trusty (14.04)"},{key:"saucy",name:"raring (13.10)"},{key:"raring",name:"raring (13.04)"},{key:"quantal",name:"quantal (12.10)"},{key:"precise",name:"precise (12.04)"}]:"kali"===t?[{key:"kali",name:"kali"}]:"aosp"===t?[{key:"aosp",name:"aosp"}]:null},gen:function(t,e){if(!t||!e)return"233";var n="";return"ubuntu"===this.distro?n="#/etc/apt/sources.list\n\ndeb https://mirror.sdu.edu.cn/ubuntu/ "+e+" main restricted universe multiverse\ndeb https://mirror.sdu.edu.cn/ubuntu/ "+e+"-security main restricted universe multiverse\ndeb https://mirror.sdu.edu.cn/ubuntu/ "+e+"-updates main restricted universe multiverse\n# deb https://mirror.sdu.edu.cn/ubuntu/ "+e+"-proposed main restricted universe multiverse\n# deb https://mirror.sdu.edu.cn/ubuntu/ "+e+"-backports main restricted universe multiverse\ndeb-src https://mirror.sdu.edu.cn/ubuntu/ "+e+" main restricted universe multiverse\ndeb-src https://mirror.sdu.edu.cn/ubuntu/ "+e+"-security main restricted universe multiverse\ndeb-src https://mirror.sdu.edu.cn/ubuntu/ "+e+"-updates main restricted universe multiverse\n# deb-src https://mirror.sdu.edu.cn/ubuntu/ "+e+"-proposed main restricted universe multiverse":"npm"===this.distro?n="#~/.npmrc\n\nregistry=https://mirror.sdu.edu.cn/npm/":"aosp"===this.distro&&(n=""),n}},data:function(){return{distroList:["npm","ubuntu"],distro:"ubuntu",version:"artful"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"card",components:{},data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"mirList",components:{},data:function(){return{msg:"Welcome to Your Vue.js App",mirListDetail:{ubuntu:new Date(2017,1,2),kali:new Date(2018,2,3)}}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"notfound"}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){n(17);var r=n(1)(n(3),n(32),null,null);t.exports=r.exports},function(t,e,n){n(13);var r=n(1)(n(4),n(28),"data-v-1fc064d3",null);t.exports=r.exports},function(t,e,n){n(14);var r=n(1)(n(5),n(29),"data-v-40abb378",null);t.exports=r.exports},function(t,e,n){n(11);var r=n(1)(n(6),n(26),"data-v-136f1d0e",null);t.exports=r.exports},function(t,e,n){n(15);var r=n(1)(n(7),n(30),"data-v-4945f2ff",null);t.exports=r.exports},function(t,e,n){n(12);var r=n(1)(n(8),n(27),"data-v-1f038ffe",null);t.exports=r.exports},function(t,e,n){n(16);var r=n(1)(n(9),n(31),"data-v-6d8b76f2",null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"confGen"},[n("h2",[t._v("配置生成器")]),t._v(" "),n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-3 col-sm-3 col-md-3 col-lg-3"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.distro,expression:"distro"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.distro=e.target.multiple?n:n[0]}}},t._l(t.distroList,function(e){return n("option",[t._v(t._s(e))])}))]),t._v(" "),t.getVersionOfDistro(t.distro).length>1?n("div",{staticClass:"col-xs-3 col-sm-3 col-md-3 col-lg-3"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.version,expression:"version"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.version=e.target.multiple?n:n[0]}}},t._l(t.getVersionOfDistro(t.distro),function(e){return t.getVersionOfDistro(t.distro)?n("option",{domProps:{value:e.key}},[t._v(t._s(e.name))]):t._e()}))]):t._e()])]),t._v(" "),n("br"),t._v(" "),n("pre",[t._v(t._s(t.gen(t.distro,t.version)))]),t._v(" "),n("h2",[t._v("使用说明")]),t._v(" "),n("div"),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.marked(t.user(t.distro)))}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mirList"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},[n("h2",[t._v("镜像源信息")]),t._v(" "),n("ul",{staticClass:"list-group"},t._l(t.mirListDetail,function(e,r){return n("li",{staticClass:"list-group-item"},[t._v("\n          "+t._s(r)+" : "+t._s(e)+"\n        ")])}))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"navdar"}},[n("nav",{staticClass:"navbar navbar-default",attrs:{role:"navigation"}},[n("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),n("div",[n("ul",{staticClass:"nav navbar-nav navbar-left"},[n("li",[n("router-link",{attrs:{to:"/confgen"}},[t._v("配置生成器")])],1),t._v(" "),t._m(1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/about"}},[t._v("about")])],1)])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-header"},[n("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("山东大学开源镜像站")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/ubuntu-releases/"}},[t._v("安装镜像")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"aboutus"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},[n("h1",[t._v("山东大学开源镜像站")]),t._v(" "),n("h3",[t._v("山东大学开源镜像站是在山东大学网络中心的支持下由山东大学网络空间安全俱乐部维护的")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/Trim21/sdu-mirror-website"}},[t._v("github")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"card"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},[n("h1",[t._v("山东大学开源镜像站")]),t._v(" "),n("h2",[t._v(" 山东大学开源镜像站是一个以普及开源软件，方便山东大学内的用户高效访问开源项目的各种资源的非盈利计划。 该镜像站提供了包括 Kali Linux, Ubuntu 等项目源的镜像，以服务于教育和科学研究为目的，提倡自由、平等、协作、共享的精神。")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"notfound"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},[n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("h1",[t._v("404")]),t._v(" "),n("h2",[t._v("Not Found")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},[n("Navbar"),t._v(" "),n("router-view",{attrs:{id:"xxx"}})],1)])])])},staticRenderFns:[]}},,,,function(t,e){}]);
//# sourceMappingURL=app.7132a45e50786c9aeb4a.js.map