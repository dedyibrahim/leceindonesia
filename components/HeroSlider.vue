<template>
    <div class="slider-area">
        <!-- Main Slider -->
        <div class="main-slider swiper-arrow with-bg_white">
            <swiper :options="heroSlider">
                <div class="swiper-slide animation-style-01">
                    <div class="slide-inner bg-height" :style="{ backgroundImage: `url('/images/slider/bg/1-1.jpg')` }">
                        <div class="container">
                            <div class="slide-content">
                                <span class="sub-title mb-1">Lece Indonesia</span>
                                <h2 class="title mb-3">Solution for<br> your survey <span>Needs</span></h2>
                                <p class="short-desc-2 font-size-20 mb-35">We commit to work under the principles of good corporate
governance, suported by experienced team of management and skilled
manpower.</p>
                                <div class="button-wrap">
                                    <n-link to="/project" class="btn btn-custom btn-secondary btn-white-hover me-3">Learn more</n-link>
                                    <n-link to="/contact" class="btn btn-custom btn-primary btn-white-hover">Contact us</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide animation-style-01">
                    <div class="slide-inner bg-height" :style="{ backgroundImage: `url('/images/slider/bg/1-2.jpg')` }">
                        <div class="container">
                            <div class="slide-content text-white">
                                <span class="sub-title mb-1">Since 2009</span>
                                <h2 class="title white-stroke mb-3">National & International <br> Survey <span>Company</span></h2>
                                <p class="short-desc-2 font-size-20 mb-35">survey services and analysis varies
from topography survey, bathymetry, hydro-oceanography, geophysical and
geotechnical survey, to navigation and positioning survey for construction 
support</p>
                                <div class="button-wrap">
                                    <n-link to="/project" class="btn btn-custom btn-secondary btn-white-hover me-3">Learn more</n-link>
                                    <n-link to="/contact" class="btn btn-custom btn-primary btn-white-hover">Contact us</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper>
            <!-- Add Pagination -->
            <div class="swiper-pagination with-bg d-md-none"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next">
                <i class="ion-ios-arrow-forward"></i>
            </div>
            <div class="swiper-button-prev">
                <i class="ion-ios-arrow-back"></i>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                heroSlider: {
                    loop: true,
                    speed: 750,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        type: 'bullets',
                    },
                }
            }
        },
    };
</script>