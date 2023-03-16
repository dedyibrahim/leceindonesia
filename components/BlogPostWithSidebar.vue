<template>
    <div class="blog-area py-140">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="blog-wrap row mtn-30">
                        <div class="col-md-6 mt-30" v-for="(blog, index) in blogData" :key="index">
                            <BlogPostItem :blog="blog" />
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-12">
                            <Pagination />
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 mt-80 mt-md-0" :class="directionClass">
                    <div class="sidebar-area">
                        <WidgetSearch />
                        <WidgetCategories />
                        <WidgetPopularPost />
                        <WidgetArchive />
                        <WidgetTags />
                    </div>
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
            WidgetSearch: () => import("@/components/WidgetSearch"),
            WidgetCategories: () => import("@/components/WidgetCategories"),
            WidgetPopularPost: () => import("@/components/WidgetPopularPost"),
            WidgetArchive: () => import("@/components/WidgetArchive"),
            WidgetTags: () => import("@/components/WidgetTags"),
        },

        props: ["directionClass"],

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
                ]
            }
        },
    };
</script>