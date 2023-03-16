<template>
    <div class="working-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Happy Clients" subTitle="Our Clients" desc="Construction of itself, because it is pain some proper style design occur are pleasure" />

        <WorkingProcess class="pb-140" />

        <ProjectManagementBanner :sticker=true />

        <TestimonialSection class="py-140" />

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
            WorkingProcess: () => import('@/components/WorkingProcess'),
            ProjectManagementBanner: () => import('@/components/ProjectManagementBanner'),
            TestimonialSection: () => import('@/components/TestimonialSection'),
            Newsletter: () => import('@/components/Newsletter'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Our Working Process'
            }
        },
    };
</script>


