<template>
    <div class="project-area py-140">
        <div class="container">
            <div class="row mtn-30">
                <div class="col-lg-4 col-sm-6 mt-30" v-for="(project, index) in projects" :key="index">
                    <ProjectItem :project="project" />
                </div>
                <div class="button-wrap button-position-center mt-40">
                    <button class="btn btn-custom btn-primary btn-secondary-hover">Load more</button>
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
                projects: [
                    {
                        imgSrc: "/images/project/medium-size/2-1-370x540.jpg",
                        category: "Construction",
                        title: "Calton Bridge",
                        duration: "25 month"
                    },
                    {
                        imgSrc: "/images/project/medium-size/2-2-370x540.jpg",
                        category: "Architecture",
                        title: "Zelixe de Villa",
                        duration: "29 month"
                    },
                    {
                        imgSrc: "/images/project/medium-size/2-3-370x540.jpg",
                        category: "Construction",
                        title: "Midland Highway",
                        duration: "22 month"
                    },
                    {
                        imgSrc: "/images/project/medium-size/2-4-370x540.jpg",
                        category: "Renovation",
                        title: "Duplex House",
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
