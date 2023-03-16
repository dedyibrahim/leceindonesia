<template>
    <div class="client-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Happy Clients" subTitle="Our Clients" desc="Construction of itself, because it is pain some proper style design occur are pleasure" />

        <BrandLogoCarousel class="pb-140" />

        <ProjectManagementBanner />

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
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            ProjectManagementBanner: () => import('@/components/ProjectManagementBanner'),
            TestimonialSection: () => import('@/components/TestimonialSection'),
            Newsletter: () => import('@/components/Newsletter'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Our Team'
            }
        },
    };
</script>


