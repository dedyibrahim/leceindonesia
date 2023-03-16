exports.ids = [9,7,22];
exports.modules = {

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogPostItem.vue?vue&type=template&id=91a4b1ae&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"blog-item"},[_c('n-link',{staticClass:"blog-img",attrs:{"to":"/blog-details"}},[_c('img',{staticClass:"img-full",attrs:{"src":_vm.blog.imgSrc,"alt":_vm.blog.title}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"blog-content\">","</div>",[_vm._ssrNode("<span class=\"blog-meta\">"+_vm._ssrEscape(_vm._s(_vm.blog.author)+" - "+_vm._s(_vm.blog.date)+" - "+_vm._s(_vm.blog.category))+"</span> "),_vm._ssrNode("<h3 class=\"title mb-2\">","</h3>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v(_vm._s(_vm.blog.title))])],1),_vm._ssrNode(" <p class=\"mb-4\">"+_vm._ssrEscape(_vm._s(_vm.blog.excerpt))+"</p> "),_vm._ssrNode("<ul class=\"blog-button-wrap\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{staticClass:"btn btn-link p-0",attrs:{"to":"/blog-details"}},[_vm._v("Read more")])],1),_vm._ssrNode(" <li><button class=\"comment\">"+_vm._ssrEscape(_vm._s(_vm.blog.comment)+" Comments")+"</button></li>")],2)],2)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/BlogPostItem.vue?vue&type=template&id=91a4b1ae&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogPostItem.vue?vue&type=script&lang=js&
/* harmony default export */ var BlogPostItemvue_type_script_lang_js_ = ({props:["blog"]});
// CONCATENATED MODULE: ./components/BlogPostItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogPostItemvue_type_script_lang_js_ = (BlogPostItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogPostItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogPostItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2de31a87"
  
)

/* harmony default export */ var BlogPostItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=template&id=0638d03a&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"pagination-wrap"},[_vm._ssrNode("<nav aria-label=\"Page navigation\"><ul class=\"pagination pagination-custom justify-content-center\"><li class=\"page-item\"><a href=\"#\" aria-disabled=\"true\" class=\"page-link\"><i class=\"ion-ios-arrow-back\"></i></a></li> <li class=\"page-item active\"><a href=\"#\" class=\"page-link\">1</a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">2</a></li> <li class=\"page-item d-none d-sm-block\"><a href=\"#\" class=\"page-link\">3</a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\"><i class=\"ion-ios-arrow-forward\"></i></a></li></ul></nav>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=template&id=0638d03a&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Pagination.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3b57a6e8"
  
)

/* harmony default export */ var Pagination = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogPostWrapper.vue?vue&type=template&id=a3afd572&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"blog-area py-140"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row mtn-30\">","</div>",_vm._l(_vm.blogData,function(blog,index){return _vm._ssrNode("<div class=\"col-lg-4 col-md-6 mt-30\">","</div>",[_c('BlogPostItem',{attrs:{"blog":blog}})],1);}),0),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row mt-40\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12 pt-10\">","</div>",[_c('Pagination')],1)])],2)]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/BlogPostWrapper.vue?vue&type=template&id=a3afd572&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogPostWrapper.vue?vue&type=script&lang=js&
/* harmony default export */ var BlogPostWrappervue_type_script_lang_js_ = ({components:{BlogPostItem:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 36)),Pagination:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 37))},data(){return{blogData:[{imgSrc:"/images/blog/medium-size/1-1-370x260.jpg",title:"Construction Technology",author:"smith",date:"25 Aug, 2021",category:"construction",comment:"35",excerpt:"Construction of itself, because it is pain because some proper style design"},{imgSrc:"/images/blog/medium-size/1-2-370x260.jpg",title:"Building Technology",author:"devid",date:"18 Jun, 2021",category:"building",comment:"46",excerpt:"Construction of itself, because it is pain because some proper style design"},{imgSrc:"/images/blog/medium-size/1-3-370x260.jpg",title:"Heavy Weight Technology",author:"ethan",date:"25 Mar, 2021",category:"construction",comment:"54",excerpt:"Construction of itself, because it is pain because some proper style design"},{imgSrc:"/images/blog/medium-size/1-4-370x260.jpg",title:"Building Technology",author:"smith",date:"29 Sep, 2021",category:"construction",comment:"54",excerpt:"Construction of itself, because it is pain because some proper style design"},{imgSrc:"/images/blog/medium-size/1-5-370x260.jpg",title:"Heavy Weight Technology",author:"devid",date:"23 May, 2021",category:"building",comment:"35",excerpt:"Construction of itself, because it is pain because some proper style design"},{imgSrc:"/images/blog/medium-size/1-6-370x260.jpg",title:"Construction Technology",author:"ethan",date:"25 Feb, 2021",category:"construction",comment:"85",excerpt:"Construction of itself, because it is pain because some proper style design"},{imgSrc:"/images/blog/medium-size/1-7-370x260.jpg",title:"Construction Technology",author:"smith",date:"29 Sep, 2021",category:"construction",comment:"54",excerpt:"Construction of itself, because it is pain because some proper style design"},{imgSrc:"/images/blog/medium-size/1-8-370x260.jpg",title:"Building Technology",author:"devid",date:"23 May, 2021",category:"building",comment:"35",excerpt:"Construction of itself, because it is pain because some proper style design"},{imgSrc:"/images/blog/medium-size/1-9-370x260.jpg",title:"Heavy Weight Technology",author:"ethan",date:"25 Feb, 2021",category:"construction",comment:"85",excerpt:"Construction of itself, because it is pain because some proper style design"}]};}});
// CONCATENATED MODULE: ./components/BlogPostWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogPostWrappervue_type_script_lang_js_ = (BlogPostWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogPostWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogPostWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d037cc62"
  
)

/* harmony default export */ var BlogPostWrapper = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BlogPostItem: __webpack_require__(36).default,Pagination: __webpack_require__(37).default})


/***/ })

};;
//# sourceMappingURL=blog-post-wrapper.js.map