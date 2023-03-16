<template>
    <div class="blog-area py-140">
        <div class="container">
            <div class="section-title-area style-01 pb-70">
                <div class="section-title-wrap">
                    <div class="section-title with-border different-width text-start text-lg-end">
                        <span>OUR BLOG</span>
                        <h2 class="mb-0">Latest Post Form Blog</h2>
                    </div>
                    <div class="section-desc">
                        <p class="font-size-20 mb-0">Construction of itself, because it is pain, but because some proper
                            style design occur in toil and pain pleasure we have expert team</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="blog-slider">
                        <swiper :options="blogCarousel">
                            <div class="swiper-slide" v-for="(blog, index) in blogData" :key="index">
                                <div class="blog-item">
                                    <n-link to="/blog-details" class="blog-img">
                                        <img class="img-full" :src="blog.imgSrc" :alt="blog.title">
                                    </n-link>
                                    <div class="blog-content">
                                        <span class="blog-meta">{{ blog.author }} - {{ blog.date }} - {{ blog.category }}</span>
                                        <h3 class="title mb-2">
                                            <n-link to="/blog-details">{{ blog.title }}</n-link>
                                        </h3>
                                        <p class="mb-4">{{ blog.excerpt }}</p>
                                        <ul class="blog-button-wrap">
                                            <li>
                                                <n-link to="/blog-details" class="btn btn-link p-0">Read more</n-link>
                                            </li>
                                            <li>
                                                <button class="comment">{{ blog.comment }} Comments</button>
                                            </li>
                                        </ul>
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
                blogCarousel: {
                    speed: 1000,
                    loop: true,
                    slidesPerView: 3,
                    spaceBetween: 30,
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    },
                },

                blogData: [
                    {
                        imgSrc: "/images/blog/medium-size/1-1-370x260.jpg",
                        title: "Construction Technology",
                        author: "smith",
                        date: "25 Aug, 2021",
                        category: "construction",
                        comment: "35",
                        excerpt: "Construction of itself, because it is pain because some proper style design"
                    },
                    {
                        imgSrc: "/images/blog/medium-size/1-2-370x260.jpg",
                        title: "Building Technology",
                        author: "devid",
                        date: "18 Jun, 2021",
                        category: "building",
                        comment: "46",
                        excerpt: "Construction of itself, because it is pain because some proper style design"
                    },
                    {
                        imgSrc: "/images/blog/medium-size/1-3-370x260.jpg",
                        title: "Heavy Weight Technology",
                        author: "ethan",
                        date: "25 Mar, 2021",
                        category: "construction",
                        comment: "54",
                        excerpt: "Construction of itself, because it is pain because some proper style design"
                    },
                ]
            }
        },
    };
</script>
