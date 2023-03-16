<template>
    <div class="breadcrumb-area breadcrumb-height bg-cover" :style="{ backgroundImage: `url('/images/breadcrumb/bg/1.jpg')` }">
        <div class="container">
            <div class="breadcrumb-content">
                <span class="breadcrumb-sub-title">{{ subTitle }}</span>
                <h1 class="breadcrumb-title mb-1">{{ title }}</h1>
                <p class="breadcrumb-desc font-size-20">{{ desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["title", "subTitle", "desc"]
    };
</script>