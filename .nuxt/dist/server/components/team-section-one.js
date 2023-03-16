exports.ids = [35,33];
exports.modules = {

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamMember.vue?vue&type=template&id=6bded27a&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"team-item"},[_vm._ssrNode("<div class=\"team-img\"><img"+_vm._ssrAttr("src",_vm.member.imgSrc)+_vm._ssrAttr("alt",_vm.member.name)+" class=\"img-full\"> <ul class=\"add-action text-white\"><li class=\"team-social-link-wrap\"><a href=\"javascript:void(0)\"><i class=\"ion-android-share-alt\"></i></a> <ul class=\"social-link\">"+_vm._ssrList(_vm.member.socialLink,function(social,index){return"<li><a"+_vm._ssrAttr("href",social.url)+"><i"+_vm._ssrClass(null,social.icon)+"></i></a></li>";})+"</ul></li> <li class=\"mail-wrap\"><a"+_vm._ssrAttr("href",`mailto:${_vm.member.email}`)+"><i class=\"ion-ios-plus-empty\"></i></a></li></ul></div> <div class=\"team-content\"><h3 class=\"title mb-1\">"+_vm._ssrEscape(_vm._s(_vm.member.name))+"</h3> <span class=\"occupation\">"+_vm._ssrEscape(_vm._s(_vm.member.designation))+"</span></div>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/TeamMember.vue?vue&type=template&id=6bded27a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamMember.vue?vue&type=script&lang=js&
/* harmony default export */ var TeamMembervue_type_script_lang_js_ = ({props:["member"]});
// CONCATENATED MODULE: ./components/TeamMember.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TeamMembervue_type_script_lang_js_ = (TeamMembervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TeamMember.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TeamMembervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7ae2e46e"
  
)

/* harmony default export */ var TeamMember = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamSectionOne.vue?vue&type=template&id=b349ea38&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"team-area py-140"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"section-title-area pb-70\"><div class=\"section-title-wrap style-01\"><div class=\"section-title with-border text-start text-lg-end\"><span>Team</span> <h2 class=\"mb-0\">Our Talented Team Members</h2></div> <div class=\"section-desc\"><p class=\"font-size-20 mb-0\">Construction of itself, because it is pain, but <br> because some proper style design occur in toil and pain pleasure we have expert team</p></div></div></div> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div class=\"team-member-slider swiper-arrow with-bg_white\">","</div>",[_c('swiper',{attrs:{"options":_vm.teamMemberCarousel}},_vm._l(_vm.teamMemberData,function(member,index){return _c('div',{key:index,staticClass:"swiper-slide"},[_c('TeamMember',{attrs:{"member":member}})],1);}),0),_vm._ssrNode(" <div class=\"team-button-next swiper-button-next\"><i class=\"ion-ios-arrow-forward\"></i></div> <div class=\"team-button-prev swiper-button-prev\"><i class=\"ion-ios-arrow-back\"></i></div>")],2)])])],2)]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/TeamSectionOne.vue?vue&type=template&id=b349ea38&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamSectionOne.vue?vue&type=script&lang=js&
/* harmony default export */ var TeamSectionOnevue_type_script_lang_js_ = ({data(){return{teamMemberCarousel:{speed:1000,loop:true,slidesPerView:4,spaceBetween:30,navigation:{nextEl:'.team-button-next',prevEl:'.team-button-prev'},breakpoints:{320:{slidesPerView:1},480:{slidesPerView:2},992:{slidesPerView:3},1200:{slidesPerView:4}}},teamMemberData:[{imgSrc:"/images/team/medium-size/1-1-210x341.jpg",name:"Stephen Fleming",designation:"Chief Engineer",email:"info@example.com",socialLink:[{url:"#",icon:"ion-social-facebook"},{url:"#",icon:"ion-social-twitter"},{url:"#",icon:"ion-social-instagram"}]},{imgSrc:"/images/team/medium-size/1-2-210x341.jpg",name:"Jonti Rodes",designation:"Chief Plamber",email:"info@example.com",socialLink:[{url:"#",icon:"ion-social-facebook"},{url:"#",icon:"ion-social-twitter"},{url:"#",icon:"ion-social-instagram"}]},{imgSrc:"/images/team/medium-size/1-3-210x341.jpg",name:"Robarto Carlos",designation:"Chief Architect",email:"info@example.com",socialLink:[{url:"#",icon:"ion-social-facebook"},{url:"#",icon:"ion-social-twitter"},{url:"#",icon:"ion-social-instagram"}]},{imgSrc:"/images/team/medium-size/1-4-210x341.jpg",name:"Shan Williams",designation:"Juniro Engineer",email:"info@example.com",socialLink:[{url:"#",icon:"ion-social-facebook"},{url:"#",icon:"ion-social-twitter"},{url:"#",icon:"ion-social-instagram"}]},{imgSrc:"/images/team/medium-size/1-5-210x341.jpg",name:"Michel Stuart",designation:"Head of Architect",email:"info@example.com",socialLink:[{url:"#",icon:"ion-social-facebook"},{url:"#",icon:"ion-social-twitter"},{url:"#",icon:"ion-social-instagram"}]}]};}});
// CONCATENATED MODULE: ./components/TeamSectionOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TeamSectionOnevue_type_script_lang_js_ = (TeamSectionOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TeamSectionOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TeamSectionOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "019cc570"
  
)

/* harmony default export */ var TeamSectionOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TeamMember: __webpack_require__(34).default})


/***/ })

};;
//# sourceMappingURL=team-section-one.js.map