<template>
    <header class="main-header_area position-relative">
        <div class="header-top py-6 py-lg-3">
            <div class="container">
                <div class="row align-items-center">
                    <div class="offset-xl-2 offset-lg-3 col-xl-4 col-lg-5 col-sm-8 col-6">
                        <div class="header-top-left ml-8">
                            <div class="contact-number">
                                <img src="/images/header/icon/phone.png" alt="Phone Icon">
                                <a href="tel://0123456789">021-22639805</a>
                            </div>
                            <div class="time-schedule d-none d-sm-block">
                                <img src="/images/header/icon/clock.png" alt="Clock Icon">
                                <span>9.00 asm - 11.00 pm</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xl-5 col-lg-4 col-sm-4 col-6">
                        <div class="header-top-right">
                            <n-link to="/login-register">Login / Register</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-header" :class="{'is-sticky': isSticky}">
            <div class="container d-flex align-items-center justify-content-between d-lg-block">
                <div class="header-logo-wrap">
                    <div class="header-fixed-logo">
                        <n-link to="/">
                            <img src="/images/logo/logo.png" alt="Header Logo">
                        </n-link>
                    </div>
                </div>
                <div class="main-header_nav">
                    <div class="main-menu d-none d-lg-block">
                        <nav class="main-nav">
                            <Navigation />
                        </nav>
                    </div>

                    <div class="mobile-menu-toggle d-lg-none">
                        <button class="toggle" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                            <i class="icon-top"></i>
                            <i class="icon-middle"></i>
                            <i class="icon-bottom"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        components: {
            Navigation: () => import("@/components/Navigation"),
        },

        data() {
            return {
                isSticky: false,
            }
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },

        methods: {
            // offcanvas mobile-menu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>