<template>
    <div class="contact-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Get in Touch" subTitle="Contact us" desc="Construction of itself, because it is pain some proper style design occur are pleasure" />

        <ContactWrapper />

        <ContactForm />

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
            ContactWrapper: () => import('@/components/ContactWrapper'),
            ContactForm: () => import('@/components/ContactForm'),
            Newsletter: () => import('@/components/Newsletter'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Contact'
            }
        },
    };
</script>


