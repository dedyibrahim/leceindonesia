<template>
    <div class="login-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="User Info!" subTitle="Login & Register" desc="Construction of itself, because it is pain some proper style design occur are pleasure" />

        <LoginRegisterWrapper />

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
            LoginRegisterWrapper: () => import('@/components/LoginRegisterWrapper'),
            Newsletter: () => import('@/components/Newsletter'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Login & Register'
            }
        },
    };
</script>


