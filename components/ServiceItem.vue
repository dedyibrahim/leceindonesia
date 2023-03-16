<template>
    <div class="service-item">
        <div class="service-img">
            <n-link to="/service-details">
                <img :src="service.imgSrc" :alt="service.title">
            </n-link>
        </div>
        <div class="add-action text-white">
            <h2 class="title mb-0">
                <n-link to="/service-details">{{ service.title }}</n-link>
            </h2>
            <div class="icon">
                <n-link to="/service-details">
                    <i class="ion-arrow-right-c"></i>
                </n-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['service']
    };
</script>