<template>
    <div class="team-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Professional" subTitle="Our Team" desc="Construction of itself, because it is pain some proper style design occur are pleasure" />

        <TeamMemberWrapper />

        <CounterUp class="pt-0 pb-140" />

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
            TeamMemberWrapper: () => import('@/components/TeamMemberWrapper'),
            CounterUp: () => import('@/components/CounterUp'),
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


