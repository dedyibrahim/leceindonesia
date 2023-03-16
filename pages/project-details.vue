<template>
    <div class="project-details-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Zelixe de Villa" subTitle="Project Details" desc="Construction of itself, because it is pain some proper style design occur are pleasure" />

        <ProjectDetailsWrapper />

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
            ProjectDetailsWrapper: () => import('@/components/ProjectDetailsWrapper'),
            ProjectManagementBanner: () => import('@/components/ProjectManagementBanner'),
            Newsletter: () => import('@/components/Newsletter'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Projects Details'
            }
        },
    };
</script>


