<template>
    <div class="about-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="About Us" subTitle="What we do" desc="Construction of itself, because it is pain some proper style design occur are pleasure" />

        <AboutTwo />

        <TopFeaturesTwo />

        <CounterUp class="py-140" />

        <ProjectGallery />

        <TeamSectionOne />

        <TestimonialSection class="pb-140" />

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
            AboutTwo: () => import('@/components/AboutTwo'),
            Newsletter: () => import('@/components/Newsletter'),
            TopFeaturesTwo: () => import('@/components/TopFeaturesTwo'),
            CounterUp: () => import('@/components/CounterUp'),
            ProjectGallery: () => import('@/components/ProjectGallery'),
            TeamSectionOne: () => import('@/components/TeamSectionOne'),
            TestimonialSection: () => import('@/components/TestimonialSection'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'About'
            }
        },
    };
</script>


