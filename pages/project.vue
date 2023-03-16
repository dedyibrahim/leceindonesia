<template>
    <div class="project-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Projects" subTitle="Our Project" desc="Construction of itself, because it is pain some proper style design occur are pleasure" />

        <ProjectWrapper />

        <ProjectManagementBanner />

        <Newsletter />

        <Footer />

        <ScrollTop />

    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            ProjectWrapper: () => import('@/components/ProjectWrapper'),
            ProjectManagementBanner: () => import('@/components/ProjectManagementBanner'),
            Newsletter: () => import('@/components/Newsletter'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Projects'
            }
        },
    };
</script>


