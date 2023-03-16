<template>
    <div class="service-area py-140">
        <div class="container">
            <div class="section-title-area pb-70">
                <div class="section-title with-border pb-5 pb-lg-0">
                    <span>SERVICES</span>
                    <h2 class="mb-0 font-size-50">Provide Unique <br> & Quality Service</h2>
                </div>
                <div class="section-banner text-white align-self-center" :style="{ backgroundImage: `url('/images/service/bg/1-1.png')` }">
                    <h2 class="info mb-0">Do you have projects? <span>021-2263 9805</span></h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="service-slider swiper-arrow with-bg_white">
                        <swiper :options="serviceCarousel">
                            <div class="swiper-slide">
                                <div class="service-item">
                                    <div class="service-img">
                                        <n-link to="/service-details">
                                            <img src="/images/service/medium-size/1-1-371x254.jpg" alt="Service Image">
                                        </n-link>
                                        <div class="add-action text-white">
                                            <h2 class="title mb-0">
                                                <n-link to="/service-details">GEOPHYSICAL SURVEY</n-link>
                                            </h2>
                                            <div class="icon">
                                                <n-link to="/service-details">
                                                    <i class="ion-arrow-right-c"></i>
                                                </n-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="service-item">
                                    <div class="service-img">
                                        <n-link to="/service-details">
                                            <img src="/images/service/medium-size/1-2-371x254.jpg" alt="Service Image">
                                        </n-link>
                                        <div class="add-action text-white">
                                            <h2 class="title mb-0">
                                                <n-link to="/service-details">CABLE ROUTE SURVEY</n-link>
                                            </h2>
                                            <div class="icon">
                                                <n-link to="/service-details">
                                                    <i class="ion-arrow-right-c"></i>
                                                </n-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="service-item">
                                    <div class="service-img">
                                        <n-link to="/service-details">
                                            <img src="/images/service/medium-size/1-3-371x254.jpg" alt="Service Image">
                                        </n-link>
                                        <div class="add-action text-white">
                                            <h2 class="title mb-0">
                                                <n-link to="/service-details">HYDROLOGY SURVEY</n-link>
                                            </h2>
                                            <div class="icon">
                                                <n-link to="/service-details">
                                                    <i class="ion-arrow-right-c"></i>
                                                </n-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper>
                        <div class="swiper-button-next">
                            <i class="ion-ios-arrow-forward"></i>
                        </div>
                        <div class="swiper-button-prev">
                            <i class="ion-ios-arrow-back"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                serviceCarousel: {
                    speed: 1000,
                    loop: true,
                    slidesPerView: 3,
                    spaceBetween: 30,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                    },
                }
            }
        },
    };
</script>
