<template>
    <div class="blog-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Blog Post" subTitle="Our Blog" desc="Construction of itself, because it is pain some proper style design occur are pleasure" />

        <BlogPostWithSidebar />

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
            BlogPostWithSidebar: () => import('@/components/BlogPostWithSidebar'),
            Newsletter: () => import('@/components/Newsletter'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Blog Right Sidebar'
            }
        },
    };
</script>


