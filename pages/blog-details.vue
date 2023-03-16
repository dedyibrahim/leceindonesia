<template>
    <div class="blog-details-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Blog Details" subTitle="Our Blog" desc="Construction of itself, because it is pain some proper style design occur are pleasure" />

        <BlogDetailsWrapper />

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
            BlogDetailsWrapper: () => import('@/components/BlogDetailsWrapper'),
            Newsletter: () => import('@/components/Newsletter'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Blog Details'
            }
        },
    };
</script>


