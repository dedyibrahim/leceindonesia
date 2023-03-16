<template>
    <div class="banner-style-2 position-relative bg-cover" :style="{ backgroundImage: `url('/images/banner/bg/2-1.png')` }">
        <div class="container-fluid p-0 overflow-hidden">
            <div class="row gx-0">
                <div class="col-lg-6">
                    <div class="banner-img">
                        <img src="/images/banner/medium-size/2-1-939x666.jpg" alt="Banner">
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="banner-with-sticker">
                        <div class="banner-content text-white">
                            <span>EXPLORE</span>
                            <h2 class="title mb-6">Full Project <br> management</h2>
                            <p class="desc font-size-20 mb-8">Survey of itself, because it is pain, but because
                                some proper style design occur in toil and pain pleasure we have expert team some master plan fo the </p>
                            <div class="button-wrap">
                                <n-link to="/project" class="btn btn-custom btn-primary btn-white-hover">Learn more</n-link>
                            </div>
                        </div>
                        <div class="banner-sticker" v-show="sticker">
                            <img src="/images/banner/sticker/1.png" alt="Banner Sticker">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["sticker"]
    };
</script>