<template>
    <div class="home-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <HeroSlider />

        <TopFeatures />

        <AboutOne />

        <ProjectGallery />

        <BrandLogoCarousel />

        <ServiceOne />

        <ProjectManagementBanner :sticker=true />

        <CounterUp />

        <TeamSectionOne />

        <TestimonialSection />

    
       
        <Footer />

        <ScrollTop />

    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroSlider: () => import('@/components/HeroSlider'),
            TopFeatures: () => import('@/components/TopFeatures'),
            AboutOne: () => import('@/components/AboutOne'),
            ProjectGallery: () => import('@/components/ProjectGallery'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            ServiceOne: () => import('@/components/ServiceOne'),
            ProjectManagementBanner: () => import('@/components/ProjectManagementBanner'),
            CounterUp: () => import('@/components/CounterUp'),
            TeamSectionOne: () => import('@/components/TeamSectionOne'),
            TestimonialSection: () => import('@/components/TestimonialSection'),
            BlogSection: () => import('@/components/BlogSection'),
            Newsletter: () => import('@/components/Newsletter'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Home'
            }
        },
    };
</script>


