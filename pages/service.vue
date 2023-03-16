<template>
    <div class="service-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Our Services" subTitle="What we do" desc="Construction of itself, because it is pain some proper style design occur are pleasure" />

        <AboutThree />

        <ServiceTwo />

        <ProjectManagementBanner :sticker=true />

        <BrandLogoCarousel />

        <WorkingProcess />

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
            AboutThree: () => import('@/components/AboutThree'),
            ServiceTwo: () => import('@/components/ServiceTwo'),
            ProjectManagementBanner: () => import('@/components/ProjectManagementBanner'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            WorkingProcess: () => import('@/components/WorkingProcess'),
            TestimonialSection: () => import('@/components/TestimonialSection'),
            Newsletter: () => import('@/components/Newsletter'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Services'
            }
        },
    };
</script>


