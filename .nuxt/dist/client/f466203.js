(window.webpackJsonp=window.webpackJsonp||[]).push([[35,34],{322:function(e,n,o){"use strict";o.r(n);o(23);var t={props:["member"]},l=o(55),component=Object(l.a)(t,(function(){var e=this,n=e._self._c;return n("div",{staticClass:"team-item"},[n("div",{staticClass:"team-img"},[n("img",{staticClass:"img-full",attrs:{src:e.member.imgSrc,alt:e.member.name}}),e._v(" "),n("ul",{staticClass:"add-action text-white"},[n("li",{staticClass:"team-social-link-wrap"},[e._m(0),e._v(" "),n("ul",{staticClass:"social-link"},e._l(e.member.socialLink,(function(e,o){return n("li",{key:o},[n("a",{attrs:{href:e.url}},[n("i",{class:e.icon})])])})),0)]),e._v(" "),n("li",{staticClass:"mail-wrap"},[n("a",{attrs:{href:"mailto:".concat(e.member.email)}},[n("i",{staticClass:"ion-ios-plus-empty"})])])])]),e._v(" "),n("div",{staticClass:"team-content"},[n("h3",{staticClass:"title mb-1"},[e._v(e._s(e.member.name))]),e._v(" "),n("span",{staticClass:"occupation"},[e._v(e._s(e.member.designation))])])])}),[function(){var e=this._self._c;return e("a",{attrs:{href:"javascript:void(0)"}},[e("i",{staticClass:"ion-android-share-alt"})])}],!1,null,null,null);n.default=component.exports},344:function(e,n,o){"use strict";o.r(n);o(1),o(48),o(52);var t={components:{TeamMember:function(){return Promise.resolve().then(o.bind(null,322))}},data:function(){return{teamMemberData:[{imgSrc:"/images/team/medium-size/1-1-210x341.jpg",name:"Stephen Fleming",designation:"Chief Engineer",email:"info@example.com",socialLink:[{url:"#",icon:"ion-social-facebook"},{url:"#",icon:"ion-social-twitter"},{url:"#",icon:"ion-social-instagram"}]},{imgSrc:"/images/team/medium-size/1-2-210x341.jpg",name:"Jonti Rodes",designation:"Chief Plamber",email:"info@example.com",socialLink:[{url:"#",icon:"ion-social-facebook"},{url:"#",icon:"ion-social-twitter"},{url:"#",icon:"ion-social-instagram"}]},{imgSrc:"/images/team/medium-size/1-3-210x341.jpg",name:"Robarto Carlos",designation:"Chief Architect",email:"info@example.com",socialLink:[{url:"#",icon:"ion-social-facebook"},{url:"#",icon:"ion-social-twitter"},{url:"#",icon:"ion-social-instagram"}]},{imgSrc:"/images/team/medium-size/1-4-210x341.jpg",name:"Shan Williams",designation:"Juniro Engineer",email:"info@example.com",socialLink:[{url:"#",icon:"ion-social-facebook"},{url:"#",icon:"ion-social-twitter"},{url:"#",icon:"ion-social-instagram"}]},{imgSrc:"/images/team/medium-size/1-5-210x341.jpg",name:"Michel Stuart",designation:"Head of Architect",email:"info@example.com",socialLink:[{url:"#",icon:"ion-social-facebook"},{url:"#",icon:"ion-social-twitter"},{url:"#",icon:"ion-social-instagram"}]},{imgSrc:"/images/team/medium-size/1-6-210x341.jpg",name:"Silver Smith",designation:"Chief Architect",email:"info@example.com",socialLink:[{url:"#",icon:"ion-social-facebook"},{url:"#",icon:"ion-social-twitter"},{url:"#",icon:"ion-social-instagram"}]},{imgSrc:"/images/team/medium-size/1-7-210x341.jpg",name:"Stephen Fleming",designation:"Chief Engineer",email:"info@example.com",socialLink:[{url:"#",icon:"ion-social-facebook"},{url:"#",icon:"ion-social-twitter"},{url:"#",icon:"ion-social-instagram"}]},{imgSrc:"/images/team/medium-size/1-8-210x341.jpg",name:"Jonti Rodes",designation:"Chief Plamber",email:"info@example.com",socialLink:[{url:"#",icon:"ion-social-facebook"},{url:"#",icon:"ion-social-twitter"},{url:"#",icon:"ion-social-instagram"}]}]}}},l=o(55),component=Object(l.a)(t,(function(){var e=this,n=e._self._c;return n("div",{staticClass:"team-area py-140"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row mtn-30"},e._l(e.teamMemberData,(function(e,o){return n("div",{key:o,staticClass:"col-lg-3 col-sm-6 mt-30"},[n("TeamMember",{attrs:{member:e}})],1)})),0)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{TeamMember:o(322).default})}}]);