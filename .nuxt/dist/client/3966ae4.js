(window.webpackJsonp=window.webpackJsonp||[]).push([[51,1,12,13,14,16,17,20,21,22,29],{310:function(t,e,l){t.exports={}},311:function(t,e,l){"use strict";l.r(e);l(1),l(48),l(52);var n={components:{Navigation:function(){return Promise.resolve().then(l.bind(null,315))}},data:function(){return{isSticky:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobiletoggleClass:function(t,e){var l=document.querySelector("#offcanvas-menu");"addClass"===t?l.classList.add(e):l.classList.remove(e)}}},o=l(55),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"main-header_area position-relative"},[e("div",{staticClass:"header-top py-6 py-lg-3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),e("div",{staticClass:"col-xl-6 col-xl-5 col-lg-4 col-sm-4 col-6"},[e("div",{staticClass:"header-top-right"},[e("n-link",{attrs:{to:"/login-register"}},[t._v("Login / Register")])],1)])])])]),t._v(" "),e("div",{staticClass:"main-header",class:{"is-sticky":t.isSticky}},[e("div",{staticClass:"container d-flex align-items-center justify-content-between d-lg-block"},[e("div",{staticClass:"header-logo-wrap"},[e("div",{staticClass:"header-fixed-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/images/logo/logo.png",alt:"Header Logo"}})])],1)]),t._v(" "),e("div",{staticClass:"main-header_nav"},[e("div",{staticClass:"main-menu d-none d-lg-block"},[e("nav",{staticClass:"main-nav"},[e("Navigation")],1)]),t._v(" "),e("div",{staticClass:"mobile-menu-toggle d-lg-none"},[e("button",{staticClass:"toggle",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[e("i",{staticClass:"icon-top"}),t._v(" "),e("i",{staticClass:"icon-middle"}),t._v(" "),e("i",{staticClass:"icon-bottom"})])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"offset-xl-2 offset-lg-3 col-xl-4 col-lg-5 col-sm-8 col-6"},[e("div",{staticClass:"header-top-left ml-8"},[e("div",{staticClass:"contact-number"},[e("img",{attrs:{src:"/images/header/icon/phone.png",alt:"Phone Icon"}}),t._v(" "),e("a",{attrs:{href:"tel://0123456789"}},[t._v("021-22639805")])]),t._v(" "),e("div",{staticClass:"time-schedule d-none d-sm-block"},[e("img",{attrs:{src:"/images/header/icon/clock.png",alt:"Clock Icon"}}),t._v(" "),e("span",[t._v("9.00 asm - 11.00 pm")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:l(315).default,Header:l(311).default})},312:function(t,e,l){"use strict";l.r(e);var n={},o=l(55),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer-area"},[e("div",{staticClass:"footer-top pt-100 pb-80",style:{backgroundImage:"url('/images/footer/bg/1-1-1920x454.png')"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row mtn-40"},[e("div",{staticClass:"col-xl-3 col-lg-3 mt-40"},[e("div",{staticClass:"widget-item text-hawkes-blue"},[e("div",{staticClass:"footer-logo pb-4"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/images/logo/logo-light.png",alt:"Logo"}})])],1),t._v(" "),e("p",{staticClass:"short-desc font-size-16 mb-3"},[t._v("survey services and analysis varies\nfrom topography survey, bathymetry, hydro-oceanography, geophysical and\ngeotechnical survey, to navigation and positioning survey for construction \nsupport")]),t._m(0)])]),t._v(" "),e("div",{staticClass:"col-xl-3 col-lg-2 col-sm-6 pl-xl-80 mt-40"},[e("div",{staticClass:"widget-item"},[e("h3",{staticClass:"heading text-white"},[t._v("Information")]),t._v(" "),e("ul",{staticClass:"widget-list-item text-hawkes-blue"},[e("li",[e("n-link",{attrs:{to:"/about"}},[t._v("About us")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/service"}},[t._v("Our Services")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/project"}},[t._v("Recent Projects")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/our-team"}},[t._v("Our Team")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact us")])],1)])])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])]),t._v(" "),e("div",{staticClass:"footer-bottom py-3 text-hawkes-blue",style:{backgroundColor:"#00225a"}},[t._m(3)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"inquiry"},[e("h5",{staticClass:"text-primary"},[t._v("For inquiry")]),t._v(" "),e("a",{attrs:{href:"tel://0123456789"}},[t._v("021-22639805")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-xl-3 col-lg-3 col-sm-6 ps-lg-10 mt-40"},[e("div",{staticClass:"widget-item"},[e("h3",{staticClass:"heading text-white"},[t._v("Quick Links")]),t._v(" "),e("ul",{staticClass:"widget-list-item text-hawkes-blue"},[e("li",[e("a",{attrs:{href:"#"}},[t._v("Support Center")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Offers & Promotion")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Terms & Conditions")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Payment Method")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Clients & Reviews")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-xl-3 col-lg-4 mt-40"},[e("div",{staticClass:"widget-item"},[e("h3",{staticClass:"heading text-white"},[t._v("Contact Info")]),t._v(" "),e("div",{staticClass:"widget-list-item text-hawkes-blue"},[e("div",{staticClass:"widget-address pb-4"},[e("p",{staticClass:"mb-1"},[t._v("\nGambir Jakarta Pusat\n                                        "),e("span",{staticClass:"text-primary"},[t._v("DKI Jakarta, Indonesia")])]),t._v(" "),e("span",[t._v("021-22639805")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-sm-4"},[e("div",{staticClass:"social-link"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"ion-social-facebook"})]),t._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"ion-social-twitter"})]),t._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"ion-social-pinterest"})]),t._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"ion-social-instagram"})])])]),t._v(" "),e("div",{staticClass:"col-md-6 col-sm-8 align-self-center"},[e("div",{staticClass:"copyright"},[e("span",{staticClass:"copyright-text"},[t._v("© 2023 PT Lece Indonesia ")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:l(312).default})},313:function(t,e,l){"use strict";l(310)},314:function(t,e,l){"use strict";l.r(e);var n={mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),l=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var n=t.querySelectorAll(".menu-expand"),o=n.length,r=0;r<o;r++)n[r].addEventListener("click",(function(t){v(t)}));for(var c=0;c<l.length;c++)l[c].addEventListener("click",(function(){d()}));var v=function(t){t.currentTarget.parentElement.classList.toggle("active")},d=function(){var t=document.querySelector("#offcanvas-mobile-menu");null==t||t.classList.remove("active")}}},o=(l(313),l(55)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mobile-navigation"},[e("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[e("ul",[e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/service"}},[t._v("Service")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/service"}},[t._v("Service")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/service-details"}},[t._v("Service Details")])],1)])],1),t._v(" "),e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:""}},[t._v("Pages")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/our-team"}},[t._v("Our Team")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/our-clients"}},[t._v("Our Clients")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/our-working-process"}},[t._v("Our Working Process")])],1)])],1),t._v(" "),e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog-left-sidebar"}},[t._v("Blog Left Sidebar")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog-right-sidebar"}},[t._v("Blog Right Sidebar")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},315:function(t,e,l){"use strict";l.r(e);var n=l(55),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/service"}},[t._v("Service")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/service"}},[t._v("Service")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/service-details"}},[t._v("Service Details")])],1)])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:""}},[t._v("Pages")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/our-team"}},[t._v("Our Team")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/our-clients"}},[t._v("Our Clients")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/our-working-process"}},[t._v("Our Working Process")])],1)])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog-left-sidebar"}},[t._v("Blog Left Sidebar")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog-right-sidebar"}},[t._v("Blog Right Sidebar")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])}),[],!1,null,null,null);e.default=component.exports},316:function(t,e,l){"use strict";l.r(e);l(1),l(48),l(52);var n={components:{MobileNavigation:function(){return Promise.resolve().then(l.bind(null,314))}},methods:{mobiletoggleClass:function(t,e){var l=document.querySelector("#offcanvas-menu");"addClass"===t?l.classList.add(e):l.classList.remove(e)}}},o=l(55),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"offcanvas-mobile-menu",attrs:{id:"offcanvas-menu"}},[e("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),e("div",{staticClass:"inner"},[e("div",{staticClass:"mobile-header"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/images/logo/logo-light.png",alt:"brand logo"}})])],1),t._v(" "),e("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),e("div",{staticClass:"menu-content"},[e("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:l(314).default})},317:function(t,e,l){"use strict";l.r(e);var n=l(55),component=Object(n.a)({},(function(){var t=this._self._c;return t("client-only",[t("back-to-top",{staticClass:"scroll-top",attrs:{bottom:"30px"}},[t("i",{staticClass:"ion-arrow-up-c"})])],1)}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,l){"use strict";l.r(e);var n={props:["title","subTitle","desc"]},o=l(55),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb-area breadcrumb-height bg-cover",style:{backgroundImage:"url('/images/breadcrumb/bg/1.jpg')"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"breadcrumb-content"},[e("span",{staticClass:"breadcrumb-sub-title"},[t._v(t._s(t.subTitle))]),t._v(" "),e("h1",{staticClass:"breadcrumb-title mb-1"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"breadcrumb-desc font-size-20"},[t._v(t._s(t.desc))])])])])}),[],!1,null,null,null);e.default=component.exports},319:function(t,e,l){"use strict";l.r(e);var n={},o=l(55),component=Object(o.a)(n,(function(){return(0,this._self._c)("div",{staticClass:"newsletter-area pt-9 pb-8",style:{backgroundImage:"url('/images/newsletter/bg/1-1-1920x198.png')"}},[this._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"newsletter-item text-white"},[e("div",{staticClass:"newsletter-content"},[e("h2",{staticClass:"title text-lg-end text-center mb-0"},[t._v("Subscribe our newsletter")])]),t._v(" "),e("div",{staticClass:"newsletter-form_wrap align-self-center"},[e("form",{staticClass:"newsletter-form"},[e("div",{staticClass:"form-field"},[e("input",{staticClass:"input-field",attrs:{type:"email",placeholder:"To get update, enter your email"}})]),t._v(" "),e("div",{staticClass:"form-btn_wrap"},[e("button",{staticClass:"btn btn-secondary btn-secondary-hover btn-lg rounded-0"},[t._v("Subscribe Now")])])])])])])])])}],!1,null,null,null);e.default=component.exports},342:function(t,e,l){"use strict";l.r(e);var n={},o=l(55),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-area pt-140"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"contact-img-wrap"},[e("div",{staticClass:"contact-img"},[e("img",{attrs:{src:"/images/contact/1-1-510x587.jpg",alt:"Contact Image"}})]),t._v(" "),e("div",{staticClass:"contact-pattern"},[e("img",{attrs:{src:"/images/contact/pattern.png",alt:"Pattern"}})])])]),t._v(" "),e("div",{staticClass:"col-lg-6 ps-lg-10 pt-5 pt-lg-0"},[e("div",{staticClass:"contact-content"},[e("span",{staticClass:"sub-title mb-2"},[t._v("Do you have a project? let’s start")]),t._v(" "),e("h2",{staticClass:"title mb-3"},[t._v("Contact with us")]),t._v(" "),e("p",{staticClass:"short-desc mb-0"},[t._v("Construction of itself, because it is pain, but because some are proper style design occur in toil and pain pleasure we have a expert team some of the main features..")]),t._v(" "),e("div",{staticClass:"contact-info pt-4"},[e("h3",{staticClass:"title mb-3"},[t._v("Office Address")]),t._v(" "),e("p",{staticClass:"short-desc with-border mb-0"},[t._v("Melbourne’s GPO 434 Bourke St. VIC 3074, Australia")])]),t._v(" "),e("div",{staticClass:"contact-info pt-4"},[e("h3",{staticClass:"title mb-3"},[t._v("Contact Info")]),t._v(" "),e("ul",[e("li",[t._v("\n                                Phone:\n                                "),e("a",{attrs:{href:"tel://0123456789"}},[t._v("0123456789")])]),t._v(" "),e("li",[t._v("\n                                Fax:\n                                "),e("a",{attrs:{href:"tel://0123456789"}},[t._v("0123456789")])]),t._v(" "),e("li",[t._v("\n                                Email:\n                                "),e("a",{staticClass:"text-lowercase",attrs:{href:"mailto://info@example.com"}},[t._v("info@example.com")])]),t._v(" "),e("li",[t._v("\n                                Web:\n                                "),e("a",{staticClass:"text-lowercase",attrs:{href:"mailto://www.example.com"}},[t._v("www.example.com")])])])])])])])])])}],!1,null,null,null);e.default=component.exports},354:function(t,e,l){"use strict";l.r(e);var n=l(55),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-form-area pt-100 pb-140"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("h2",{staticClass:"contact-form-title mb-3"},[t._v("Leave a Message")]),t._v(" "),e("p",{staticClass:"contact-form-desc mb-0"},[t._v("Top rated construction packages we pleasure\n                    ationally obtain simple and easy")]),t._v(" "),e("form",{staticClass:"contact-form mt-4 mt-lg-5"},[e("div",{staticClass:"row mtn-30"},[e("div",{staticClass:"col-lg-6 mt-30"},[e("input",{staticClass:"input-field",attrs:{type:"text",placeholder:"Your Name*"}})]),t._v(" "),e("div",{staticClass:"col-lg-6 mt-30"},[e("input",{staticClass:"input-field",attrs:{type:"text",placeholder:"Your Email*"}})]),t._v(" "),e("div",{staticClass:"col-12 mt-30"},[e("textarea",{staticClass:"textarea-field",attrs:{id:"con_message",placeholder:"Message"}})])]),t._v(" "),e("div",{staticClass:"row mt-30"},[e("div",{staticClass:"col-12"},[e("button",{staticClass:"btn btn-custom btn-secondary btn-primary-hover",attrs:{type:"submit"}},[t._v("Submit")])])])])]),t._v(" "),e("div",{staticClass:"col-lg-6 ps-lg-5"},[e("div",{staticClass:"map-with-pattern pt-5"},[e("iframe",{staticClass:"map-size",attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.693667617067!2d144.946279515845!3d-37.82064364221098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4cee0cec83%3A0xd019c5f69915a4a0!2sCollins%20St%2C%20West%20Melbourne%20VIC%203003%2C%20Australia!5e0!3m2!1sen!2sbd!4v1607512676761!5m2!1sen!2sbd"}}),t._v(" "),e("div",{staticClass:"contact-pattern"},[e("img",{attrs:{src:"/images/contact/pattern.png",alt:"Pattern"}})])])])])])])}],!1,null,null,null);e.default=component.exports},360:function(t,e,l){"use strict";l.r(e);l(1),l(48),l(52);var n={components:{Header:function(){return Promise.resolve().then(l.bind(null,311))},OffCanvasMobileMenu:function(){return Promise.resolve().then(l.bind(null,316))},Breadcrumb:function(){return Promise.resolve().then(l.bind(null,318))},ContactWrapper:function(){return Promise.resolve().then(l.bind(null,342))},ContactForm:function(){return Promise.resolve().then(l.bind(null,354))},Newsletter:function(){return Promise.resolve().then(l.bind(null,319))},Footer:function(){return Promise.resolve().then(l.bind(null,312))},ScrollTop:function(){return Promise.resolve().then(l.bind(null,317))}},head:function(){return{title:"Contact"}}},o=l(55),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-page-wrapper"},[e("Header"),t._v(" "),e("OffCanvasMobileMenu"),t._v(" "),e("Breadcrumb",{attrs:{title:"Get in Touch",subTitle:"Contact us",desc:"Construction of itself, because it is pain some proper style design occur are pleasure"}}),t._v(" "),e("ContactWrapper"),t._v(" "),e("ContactForm"),t._v(" "),e("Newsletter"),t._v(" "),e("Footer"),t._v(" "),e("ScrollTop")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:l(311).default,OffCanvasMobileMenu:l(316).default,Breadcrumb:l(318).default,ContactWrapper:l(342).default,ContactForm:l(354).default,Newsletter:l(319).default,Footer:l(312).default,ScrollTop:l(317).default})}}]);