<template>
    <div class="service-details-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Renovation" subTitle="Service Details" desc="Construction of itself, because it is pain some proper style design occur are pleasure" />

        <ServiceDetailsWrapper />

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
            ServiceDetailsWrapper: () => import('@/components/ServiceDetailsWrapper'),
            Newsletter: () => import('@/components/Newsletter'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Services Details'
            }
        },
    };
</script>


