<template>
    <div class="blog-area py-140">
        <div class="container">
            <div class="row mtn-30">
                <div class="col-lg-4 col-md-6 mt-30" v-for="(blog, index) in blogData" :key="index">
                    <BlogPostItem :blog="blog" />
                </div>
            </div>
            <div class="row mt-40">
                <div class="col-lg-12 pt-10">
                    <Pagination />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            BlogPostItem: () => import("@/components/BlogPostItem"),
            Pagination: () => import("@/components/Pagination"),
        },

        data() {
            return {
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
                    {
                        imgSrc: "/images/blog/medium-size/1-4-370x260.jpg",
                        title: "Building Technology",
                        author: "smith",
                        date: "29 Sep, 2021",
                        category: "construction",
                        comment: "54",
                        excerpt: "Construction of itself, because it is pain because some proper style design"
                    },
                    {
                        imgSrc: "/images/blog/medium-size/1-5-370x260.jpg",
                        title: "Heavy Weight Technology",
                        author: "devid",
                        date: "23 May, 2021",
                        category: "building",
                        comment: "35",
                        excerpt: "Construction of itself, because it is pain because some proper style design"
                    },
                    {
                        imgSrc: "/images/blog/medium-size/1-6-370x260.jpg",
                        title: "Construction Technology",
                        author: "ethan",
                        date: "25 Feb, 2021",
                        category: "construction",
                        comment: "85",
                        excerpt: "Construction of itself, because it is pain because some proper style design"
                    },
                    {
                        imgSrc: "/images/blog/medium-size/1-7-370x260.jpg",
                        title: "Construction Technology",
                        author: "smith",
                        date: "29 Sep, 2021",
                        category: "construction",
                        comment: "54",
                        excerpt: "Construction of itself, because it is pain because some proper style design"
                    },
                    {
                        imgSrc: "/images/blog/medium-size/1-8-370x260.jpg",
                        title: "Building Technology",
                        author: "devid",
                        date: "23 May, 2021",
                        category: "building",
                        comment: "35",
                        excerpt: "Construction of itself, because it is pain because some proper style design"
                    },
                    {
                        imgSrc: "/images/blog/medium-size/1-9-370x260.jpg",
                        title: "Heavy Weight Technology",
                        author: "ethan",
                        date: "25 Feb, 2021",
                        category: "construction",
                        comment: "85",
                        excerpt: "Construction of itself, because it is pain because some proper style design"
                    },
                ]
            }
        },
    };
</script>