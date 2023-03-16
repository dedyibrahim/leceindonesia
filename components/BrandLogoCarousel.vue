<template>
    <div class="brand-area pt-140">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brand-logo-carousel">
                        <swiper :options="brandLogoCarousel">
                            <div class="swiper-slide" v-for="(brand, index) in brandItems" :key="index">
                                <n-link :to="brand.url" class="brand-item">
                                    <img :src="brand.imgSrc" :alt="brand.alt">
                                </n-link>
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
                brandLogoCarousel: {
                    loop: false,
                    speed: 1000,
                    breakpoints: {
                        320: {
                            slidesPerView: 2,
                            slidesPerColumn: 1,
                            slidesPerColumnFill: 'column',
                            spaceBetween: 50,
                        },
                        768: {
                            slidesPerView: 4,
                            slidesPerColumn: 2,
                            slidesPerColumnFill: 'row',
                            spaceBetween: 100,
                        },
                        992: {
                            slidesPerView: 5,
                            slidesPerColumn: 2,
                            slidesPerColumnFill: 'row',
                            spaceBetween: 100,
                        },
                    },
                },

                brandItems: [
                    {
                        imgSrc: "/images/brand/1.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand/2.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand/3.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand/4.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand/5.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand/6.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand/7.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand/8.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand/9.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand/10.png",
                        url: "#",
                        alt: "brand name"
                    },
                ]
            }
        },
    };
</script>