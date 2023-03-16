<template>
    <div class="project-item">
        <n-link to="/project-details" class="project-img">
            <img :src="project.imgSrc" :alt="project.title">
        </n-link>
        <div class="project-content with-boxshadow">
            <span class="sub-title">{{ project.category }}</span>
            <h3 class="title mb-0">
                <n-link to="/project-details">{{ project.title }}</n-link>
            </h3>
            <span>Duration: {{ project.duration }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["project"]
    };
</script>