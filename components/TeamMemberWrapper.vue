<template>
    <div class="team-area py-140">
        <div class="container">
            <div class="row mtn-30">
                <div class="col-lg-3 col-sm-6 mt-30" v-for="(member, index) in teamMemberData" :key="index">
                    <TeamMember :member="member" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            TeamMember: () => import("@/components/TeamMember"),
        },

        data() {
            return {
                teamMemberData: [
                    {
                        imgSrc: "/images/team/medium-size/1-1-210x341.jpg",
                        name: "Stephen Fleming",
                        designation: "Chief Engineer",
                        email: "info@example.com",
                        socialLink: [
                            {
                                url: "#",
                                icon: "ion-social-facebook"
                            },
                            {
                                url: "#",
                                icon: "ion-social-twitter"
                            },
                            {
                                url: "#",
                                icon: "ion-social-instagram"
                            },
                        ]
                    },
                    {
                        imgSrc: "/images/team/medium-size/1-2-210x341.jpg",
                        name: "Jonti Rodes",
                        designation: "Chief Plamber",
                        email: "info@example.com",
                        socialLink: [
                            {
                                url: "#",
                                icon: "ion-social-facebook"
                            },
                            {
                                url: "#",
                                icon: "ion-social-twitter"
                            },
                            {
                                url: "#",
                                icon: "ion-social-instagram"
                            },
                        ]
                    },
                    {
                        imgSrc: "/images/team/medium-size/1-3-210x341.jpg",
                        name: "Robarto Carlos",
                        designation: "Chief Architect",
                        email: "info@example.com",
                        socialLink: [
                            {
                                url: "#",
                                icon: "ion-social-facebook"
                            },
                            {
                                url: "#",
                                icon: "ion-social-twitter"
                            },
                            {
                                url: "#",
                                icon: "ion-social-instagram"
                            },
                        ]
                    },
                    {
                        imgSrc: "/images/team/medium-size/1-4-210x341.jpg",
                        name: "Shan Williams",
                        designation: "Juniro Engineer",
                        email: "info@example.com",
                        socialLink: [
                            {
                                url: "#",
                                icon: "ion-social-facebook"
                            },
                            {
                                url: "#",
                                icon: "ion-social-twitter"
                            },
                            {
                                url: "#",
                                icon: "ion-social-instagram"
                            },
                        ]
                    },
                    {
                        imgSrc: "/images/team/medium-size/1-5-210x341.jpg",
                        name: "Michel Stuart",
                        designation: "Head of Architect",
                        email: "info@example.com",
                        socialLink: [
                            {
                                url: "#",
                                icon: "ion-social-facebook"
                            },
                            {
                                url: "#",
                                icon: "ion-social-twitter"
                            },
                            {
                                url: "#",
                                icon: "ion-social-instagram"
                            },
                        ]
                    },
                    {
                        imgSrc: "/images/team/medium-size/1-6-210x341.jpg",
                        name: "Silver Smith",
                        designation: "Chief Architect",
                        email: "info@example.com",
                        socialLink: [
                            {
                                url: "#",
                                icon: "ion-social-facebook"
                            },
                            {
                                url: "#",
                                icon: "ion-social-twitter"
                            },
                            {
                                url: "#",
                                icon: "ion-social-instagram"
                            },
                        ]
                    },
                    {
                        imgSrc: "/images/team/medium-size/1-7-210x341.jpg",
                        name: "Stephen Fleming",
                        designation: "Chief Engineer",
                        email: "info@example.com",
                        socialLink: [
                            {
                                url: "#",
                                icon: "ion-social-facebook"
                            },
                            {
                                url: "#",
                                icon: "ion-social-twitter"
                            },
                            {
                                url: "#",
                                icon: "ion-social-instagram"
                            },
                        ]
                    },
                    {
                        imgSrc: "/images/team/medium-size/1-8-210x341.jpg",
                        name: "Jonti Rodes",
                        designation: "Chief Plamber",
                        email: "info@example.com",
                        socialLink: [
                            {
                                url: "#",
                                icon: "ion-social-facebook"
                            },
                            {
                                url: "#",
                                icon: "ion-social-twitter"
                            },
                            {
                                url: "#",
                                icon: "ion-social-instagram"
                            },
                        ]
                    },
                ]
            }
        },
    };
</script>