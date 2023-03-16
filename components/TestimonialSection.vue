<template>
    <div class="testimonial-area">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-6 mb-30 mb-lg-0">
                    <div class="section-title-wrap-2">
                        <div class="section-title border-0">
                            <span>TESTIMONIALS</span>
                            <h2 class="mb-2 mb-sm-4">Reviews from happy client</h2>
                        </div>
                        <div class="section-desc pb-3">
                            <p class="font-size-20 mb-0">Construction of itself, because it is pain some <br> some proper style design occur in toil and pain we have expert team some master</p>
                        </div>
                        <div class="button-wrap pb-4 pb-md-0">
                            <a class="btn btn-link with-underline text-secondary font-size-25 p-0" href="#">view more</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-7 col-lg-6">
                    <div class="testimonial-slider">
                        <swiper :options="testimonialCarousel">
                            <div class="swiper-slide">
                                <div class="testimonial-item">
                                    <div class="testimonial-content">
                                        <p class="short-desc mb-3">Publishing packages and web page now use Lorem Ipsum as their mel text, and a search for lorem more than one articel a is very important which can be help us for building a beauiful construction design...</p>
                                        <div class="user-info">
                                            <div class="user-img">
                                                <img src="/images/testimonial/avatar/1-1-46x46.png" alt="Avatar">
                                            </div>
                                            <div class="user-content">
                                                <h5 class="user-name mb-0">Christoper Luis</h5>
                                                <span class="user-occupation">CEO, Octafact Group</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="testimonial-item">
                                    <div class="testimonial-content">
                                        <p class="short-desc mb-3">Publishing packages and web page now use Lorem Ipsum as their mel text, and a search for lorem more than one articel a is very important which can be help us for building a beauiful construction design...</p>
                                        <div class="user-info">
                                            <div class="user-img">
                                                <img src="/images/testimonial/avatar/1-2-46x46.png" alt="Avatar">
                                            </div>
                                            <div class="user-content">
                                                <h5 class="user-name mb-0">Rehana Williams</h5>
                                                <span class="user-occupation">CEO, Xerox LTd.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper>
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
                testimonialCarousel: {
                    speed: 1000,
                    loop: true,
                    spaceBetween: 40,
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 1,
                        },
                        1200: {
                            slidesPerView: 2,
                        },
                    },
                }
            }
        },
    };
</script>