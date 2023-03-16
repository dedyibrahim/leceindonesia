<template>
    <div class="service-area py-140">
        <div class="container">
            <div class="section-title-area pb-70">
                <div class="section-title with-border pb-5 pb-lg-0">
                    <span>SERVICES</span>
                    <h2 class="mb-0 font-size-50">Provide Unique <br> & Quality Service</h2>
                </div>
                <div class="section-banner text-white align-self-center" :style="{ backgroundImage: `url('/images/service/bg/1-1.png')` }">
                    <h2 class="info mb-0">Do you have projects? <a href="tel:0123456789">+0123456789</a></h2>
                </div>
            </div>
            <div class="row mtn-30">
                <div class="col-lg-4 col-md-6 mt-30" v-for="(service, index) in services" :key="index">
                    <ServiceItem :service="service" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ServiceItem: () => import('@/components/ServiceItem'),
        },
        
        data() {
            return {
               services: [
                   {
                       title: "Construction",
                       imgSrc: "/images/service/medium-size/1-1-371x254.jpg"
                   },
                   {
                       title: "Renovation",
                       imgSrc: "/images/service/medium-size/1-2-371x254.jpg"
                   },
                   {
                       title: "Architecture",
                       imgSrc: "/images/service/medium-size/1-3-371x254.jpg"
                   },
                   {
                       title: "Concrete Supply",
                       imgSrc: "/images/service/medium-size/1-4-370x254.jpg"
                   },
                   {
                       title: "Laminate Flooring",
                       imgSrc: "/images/service/medium-size/1-5-370x254.jpg"
                   },
                   {
                       title: "Project Planning",
                       imgSrc: "/images/service/medium-size/1-6-370x254.jpg"
                   },
               ] 
            }
        },
    };
</script>
