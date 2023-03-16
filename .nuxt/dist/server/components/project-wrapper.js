exports.ids = [27,25];
exports.modules = {

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectItem.vue?vue&type=template&id=74816fd8&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"project-item"},[_c('n-link',{staticClass:"project-img",attrs:{"to":"/project-details"}},[_c('img',{attrs:{"src":_vm.project.imgSrc,"alt":_vm.project.title}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"project-content with-boxshadow\">","</div>",[_vm._ssrNode("<span class=\"sub-title\">"+_vm._ssrEscape(_vm._s(_vm.project.category))+"</span> "),_vm._ssrNode("<h3 class=\"title mb-0\">","</h3>",[_c('n-link',{attrs:{"to":"/project-details"}},[_vm._v(_vm._s(_vm.project.title))])],1),_vm._ssrNode(" <span>"+_vm._ssrEscape("Duration: "+_vm._s(_vm.project.duration))+"</span>")],2)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/ProjectItem.vue?vue&type=template&id=74816fd8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectItem.vue?vue&type=script&lang=js&
/* harmony default export */ var ProjectItemvue_type_script_lang_js_ = ({props:["project"]});
// CONCATENATED MODULE: ./components/ProjectItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProjectItemvue_type_script_lang_js_ = (ProjectItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProjectItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProjectItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ded9836c"
  
)

/* harmony default export */ var ProjectItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectWrapper.vue?vue&type=template&id=48a849aa&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"project-area py-140"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row mtn-30\">","</div>",[_vm._l(_vm.projects,function(project,index){return _vm._ssrNode("<div class=\"col-lg-4 col-sm-6 mt-30\">","</div>",[_c('ProjectItem',{attrs:{"project":project}})],1);}),_vm._ssrNode(" <div class=\"button-wrap button-position-center mt-40\"><button class=\"btn btn-custom btn-primary btn-secondary-hover\">Load more</button></div>")],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/ProjectWrapper.vue?vue&type=template&id=48a849aa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectWrapper.vue?vue&type=script&lang=js&
/* harmony default export */ var ProjectWrappervue_type_script_lang_js_ = ({components:{ProjectItem:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33))},data(){return{projects:[{imgSrc:"/images/project/medium-size/2-1-370x540.jpg",category:"Construction",title:"Calton Bridge",duration:"25 month"},{imgSrc:"/images/project/medium-size/2-2-370x540.jpg",category:"Architecture",title:"Zelixe de Villa",duration:"29 month"},{imgSrc:"/images/project/medium-size/2-3-370x540.jpg",category:"Construction",title:"Midland Highway",duration:"22 month"},{imgSrc:"/images/project/medium-size/2-4-370x540.jpg",category:"Renovation",title:"Duplex House",duration:"18 month"},{imgSrc:"/images/project/medium-size/2-5-370x540.jpg",category:"Construction",title:"Railway Tunnel",duration:"12 month"},{imgSrc:"/images/project/medium-size/2-6-370x540.jpg",category:"Architecture",title:"Pink Garden",duration:"30 month"},{imgSrc:"/images/project/medium-size/2-7-370x540.jpg",category:"Renovation",title:"Parle Palace",duration:"18 month"},{imgSrc:"/images/project/medium-size/2-8-370x540.jpg",category:"Construction",title:"Overpass Road",duration:"12 month"},{imgSrc:"/images/project/medium-size/2-9-370x540.jpg",category:"Architecture",title:"Duplex House",duration:"30 month"}]};}});
// CONCATENATED MODULE: ./components/ProjectWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProjectWrappervue_type_script_lang_js_ = (ProjectWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProjectWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProjectWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0775bb2c"
  
)

/* harmony default export */ var ProjectWrapper = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProjectItem: __webpack_require__(33).default})


/***/ })

};;
//# sourceMappingURL=project-wrapper.js.map