<template>
    <div class="blog-item">
        <n-link to="/blog-details" class="blog-img">
            <img class="img-full" :src="blog.imgSrc" :alt="blog.title">
        </n-link>
        <div class="blog-content">
            <span class="blog-meta">{{ blog.author }} - {{ blog.date }} - {{ blog.category }}</span>
            <h3 class="title mb-2">
                <n-link to="/blog-details">{{ blog.title }}</n-link>
            </h3>
            <p class="mb-4">{{ blog.excerpt }}</p>
            <ul class="blog-button-wrap">
                <li>
                    <n-link to="/blog-details" class="btn btn-link p-0">Read more</n-link>
                </li>
                <li>
                    <button class="comment">{{ blog.comment }} Comments</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["blog"]
    };
</script>