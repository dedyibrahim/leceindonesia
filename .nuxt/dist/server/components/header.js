exports.ids = [16,20];
exports.modules = {

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=c125e502&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('header',{staticClass:"main-header_area position-relative"},[_vm._ssrNode("<div class=\"header-top py-6 py-lg-3\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row align-items-center\">","</div>",[_vm._ssrNode("<div class=\"offset-xl-2 offset-lg-3 col-xl-4 col-lg-5 col-sm-8 col-6\"><div class=\"header-top-left ml-8\"><div class=\"contact-number\"><img src=\"/images/header/icon/phone.png\" alt=\"Phone Icon\"> <a href=\"tel://0123456789\">021-22639805</a></div> <div class=\"time-schedule d-none d-sm-block\"><img src=\"/images/header/icon/clock.png\" alt=\"Clock Icon\"> <span>9.00 asm - 11.00 pm</span></div></div></div> "),_vm._ssrNode("<div class=\"col-xl-6 col-xl-5 col-lg-4 col-sm-4 col-6\">","</div>",[_vm._ssrNode("<div class=\"header-top-right\">","</div>",[_c('n-link',{attrs:{"to":"/login-register"}},[_vm._v("Login / Register")])],1)])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div"+_vm._ssrClass("main-header",{'is-sticky':_vm.isSticky})+">","</div>",[_vm._ssrNode("<div class=\"container d-flex align-items-center justify-content-between d-lg-block\">","</div>",[_vm._ssrNode("<div class=\"header-logo-wrap\">","</div>",[_vm._ssrNode("<div class=\"header-fixed-logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/images/logo/logo.png","alt":"Header Logo"}})])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"main-header_nav\">","</div>",[_vm._ssrNode("<div class=\"main-menu d-none d-lg-block\">","</div>",[_vm._ssrNode("<nav class=\"main-nav\">","</nav>",[_c('Navigation')],1)]),_vm._ssrNode(" <div class=\"mobile-menu-toggle d-lg-none\"><button class=\"toggle\"><i class=\"icon-top\"></i> <i class=\"icon-middle\"></i> <i class=\"icon-bottom\"></i></button></div>")],2)],2)])],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=c125e502&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
/* harmony default export */ var Headervue_type_script_lang_js_ = ({components:{Navigation:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 27))},data(){return{isSticky:false};},mounted(){window.addEventListener('scroll',()=>{let scrollPos=window.scrollY;if(scrollPos>=200){this.isSticky=true;}else{this.isSticky=false;}});},methods:{// offcanvas mobile-menu
mobiletoggleClass(addRemoveClass,className){const el=document.querySelector('#offcanvas-menu');if(addRemoveClass==='addClass'){el.classList.add(className);}else{el.classList.remove(className);}}}});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0dc4e2ff"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(27).default,Header: __webpack_require__(23).default})


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=0f15e6b4&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('ul',[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("About")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/service"}},[_vm._v("Service")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/service"}},[_vm._v("Service")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/service-details"}},[_vm._v("Service Details")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/project"}},[_vm._v("Project")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/project"}},[_vm._v("Project")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/project-details"}},[_vm._v("Project Details")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Pages")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/our-team"}},[_vm._v("Our Team")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/our-clients"}},[_vm._v("Our Clients")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/our-working-process"}},[_vm._v("Our Working Process")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog"}},[_vm._v("Blog")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog"}},[_vm._v("Blog")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog-left-sidebar"}},[_vm._v("Blog Left Sidebar")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog-right-sidebar"}},[_vm._v("Blog Right Sidebar")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v("Blog Details")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact"}},[_vm._v("Contact")])],1)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=0f15e6b4&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navigation.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "38019bf4"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=header.js.map