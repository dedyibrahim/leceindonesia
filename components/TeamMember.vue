<template>
    <div class="team-item">
        <div class="team-img">
            <img :src="member.imgSrc" :alt="member.name" class="img-full">
            <ul class="add-action text-white">
                <li class="team-social-link-wrap">
                    <a href="javascript:void(0)">
                        <i class="ion-android-share-alt"></i>
                    </a>
                    <ul class="social-link">
                        <li v-for="(social, index) in member.socialLink" :key="index">
                            <a :href="social.url">
                                <i :class="social.icon"></i>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="mail-wrap">
                    <a :href="`mailto:${member.email}`">
                        <i class="ion-ios-plus-empty"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="team-content">
            <h3 class="title mb-1">{{ member.name }}</h3>
            <span class="occupation">{{ member.designation }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["member"]
    };
</script>