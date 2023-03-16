<template>
    <div class="project-area ">
        <div class="project-inner" :style="{ backgroundImage: `url('/images/project/bg/1-1.png')` }">
            <div class="button-wrap text-end">
                <n-link to="/project" class="btn btn-project"><span>view more</span></n-link>
            </div>
            <div class="container-fluid p-0">
                <div class="project-with-title">
                    <div class="section-title-area text-white h-100">
                        <div class="title-with-arrow">
                            <div class="section-title-wrap style-02">
                                <div class="section-title">
                                    <span>PROJECTS</span>
                                    <h2 class="mb-0">Our Recent <br> Projects</h2>
                                </div>
                            </div>
                            <!-- Add Arrows -->
                            <div class="project-button-wrap">
                                <div class="project-button-prev">
                                    <i class="ion-chevron-left"></i>
                                </div>
                                <div class="project-button-next">
                                    <i class="ion-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project-slider">
                        <swiper :options="projectSlider">
                            <div class="swiper-slide" v-for="(project, index) in projects" :key="index">
                                <ProjectItem :project="project" />
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
        components: {
            ProjectItem: () => import("@/components/ProjectItem"),
        },

        data() {
            return {
                projectSlider: {
                    loop: true,
                    slidesPerView: 4,
                    navigation: {
                        prevEl: '.project-button-prev',
                        nextEl: '.project-button-next',
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
                        1200: {
                            slidesPerView: 4,
                        },
                    },
                },

                projects: [
                    {
                        imgSrc: "/images/project/medium-size/2-1-370x540.jpg",
                        category: "Cambodia",
                        title: "Project",
                        duration: "25 month"
                    },
                    {
                        imgSrc: "/images/project/medium-size/2-2-370x540.jpg",
                        category: "Guniea",
                        title: "Project",
                        duration: "29 month"
                    },
                    {
                        imgSrc: "/images/project/medium-size/2-3-370x540.jpg",
                        category: "Lampung",
                        title: "Project",
                        duration: "22 month"
                    },
                    {
                        imgSrc: "/images/project/medium-size/2-4-370x540.jpg",
                        category: "Morowali",
                        title: "Project",
                        duration: "18 month"
                    },
                    {
                        imgSrc: "/images/project/medium-size/2-5-370x540.jpg",
                        category: "Construction",
                        title: "Railway Tunnel",
                        duration: "12 month"
                    },
                    {
                        imgSrc: "/images/project/medium-size/2-6-370x540.jpg",
                        category: "Architecture",
                        title: "Pink Garden",
                        duration: "30 month"
                    },
                    {
                        imgSrc: "/images/project/medium-size/2-7-370x540.jpg",
                        category: "Renovation",
                        title: "Parle Palace",
                        duration: "18 month"
                    },
                    {
                        imgSrc: "/images/project/medium-size/2-8-370x540.jpg",
                        category: "Construction",
                        title: "Overpass Road",
                        duration: "12 month"
                    },
                    {
                        imgSrc: "/images/project/medium-size/2-9-370x540.jpg",
                        category: "Architecture",
                        title: "Duplex House",
                        duration: "30 month"
                    },
                ]
            }
        },
    };
</script>