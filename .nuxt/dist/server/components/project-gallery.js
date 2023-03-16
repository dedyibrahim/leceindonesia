exports.ids = [24,25];
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

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectGallery.vue?vue&type=template&id=07bc1ea0&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"project-area"},[_vm._ssrNode("<div class=\"project-inner\""+_vm._ssrStyle(null,{backgroundImage:`url('/images/project/bg/1-1.png')`},null)+">","</div>",[_vm._ssrNode("<div class=\"button-wrap text-end\">","</div>",[_c('n-link',{staticClass:"btn btn-project",attrs:{"to":"/project"}},[_c('span',[_vm._v("view more")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid p-0\">","</div>",[_vm._ssrNode("<div class=\"project-with-title\">","</div>",[_vm._ssrNode("<div class=\"section-title-area text-white h-100\"><div class=\"title-with-arrow\"><div class=\"section-title-wrap style-02\"><div class=\"section-title\"><span>PROJECTS</span> <h2 class=\"mb-0\">Our Recent <br> Projects</h2></div></div> <div class=\"project-button-wrap\"><div class=\"project-button-prev\"><i class=\"ion-chevron-left\"></i></div> <div class=\"project-button-next\"><i class=\"ion-chevron-right\"></i></div></div></div></div> "),_vm._ssrNode("<div class=\"project-slider\">","</div>",[_c('swiper',{attrs:{"options":_vm.projectSlider}},_vm._l(_vm.projects,function(project,index){return _c('div',{key:index,staticClass:"swiper-slide"},[_c('ProjectItem',{attrs:{"project":project}})],1);}),0)],1)],2)])],2)]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/ProjectGallery.vue?vue&type=template&id=07bc1ea0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectGallery.vue?vue&type=script&lang=js&
/* harmony default export */ var ProjectGalleryvue_type_script_lang_js_ = ({components:{ProjectItem:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33))},data(){return{projectSlider:{loop:true,slidesPerView:4,navigation:{prevEl:'.project-button-prev',nextEl:'.project-button-next'},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},992:{slidesPerView:3},1200:{slidesPerView:4}}},projects:[{imgSrc:"/images/project/medium-size/2-1-370x540.jpg",category:"Cambodia",title:"Project",duration:"25 month"},{imgSrc:"/images/project/medium-size/2-2-370x540.jpg",category:"Guniea",title:"Project",duration:"29 month"},{imgSrc:"/images/project/medium-size/2-3-370x540.jpg",category:"Lampung",title:"Project",duration:"22 month"},{imgSrc:"/images/project/medium-size/2-4-370x540.jpg",category:"Morowali",title:"Project",duration:"18 month"},{imgSrc:"/images/project/medium-size/2-5-370x540.jpg",category:"Construction",title:"Railway Tunnel",duration:"12 month"},{imgSrc:"/images/project/medium-size/2-6-370x540.jpg",category:"Architecture",title:"Pink Garden",duration:"30 month"},{imgSrc:"/images/project/medium-size/2-7-370x540.jpg",category:"Renovation",title:"Parle Palace",duration:"18 month"},{imgSrc:"/images/project/medium-size/2-8-370x540.jpg",category:"Construction",title:"Overpass Road",duration:"12 month"},{imgSrc:"/images/project/medium-size/2-9-370x540.jpg",category:"Architecture",title:"Duplex House",duration:"30 month"}]};}});
// CONCATENATED MODULE: ./components/ProjectGallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProjectGalleryvue_type_script_lang_js_ = (ProjectGalleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProjectGallery.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProjectGalleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1063366b"
  
)

/* harmony default export */ var ProjectGallery = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProjectItem: __webpack_require__(33).default})


/***/ })

};;
//# sourceMappingURL=project-gallery.js.map