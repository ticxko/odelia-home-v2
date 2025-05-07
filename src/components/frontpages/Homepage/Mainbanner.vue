<script setup lang="ts">
import { ref } from 'vue';
import icon1 from '@/assets/images/front-pages/technology/Vuejs.svg';
import icon2 from '@/assets/images/front-pages/technology/Vuetify.svg';
import icon3 from '@/assets/images/front-pages/technology/Vite.svg';
import icon4 from '@/assets/images/front-pages/technology/Typescript.svg';
import icon5 from '@/assets/images/front-pages/technology/Pinia.svg';
import icon6 from '@/assets/images/front-pages/technology/Apexchart.svg';

const technology = ref([
    {
        img: icon1,
        name: 'Vue.js'
    },
    {
        img: icon2,
        name: 'Vuetify'
    },
    {
        img: icon3,
        name: 'Vite'
    },
    {
        img: icon4,
        name: 'Typescript'
    },
    {
        img: icon5,
        name: 'Pinia'
    },
    {
        img: icon6,
        name: 'ApexChart'
    }
]);
</script>
<template>
    <div class="overflow-hidden bg-background">
        <v-container class="max-width-1218 pt-md-10 pt-6 pb-xl-0 pb-10">
            <v-row class="d-flex justify-center align-center">
                <v-col cols="12" lg="6" class="text-align-start">
                    <h1 class="text-56 textPrimary font-weight-medium">
                        <b>Digital Craftsmanship for Your Modern Business.</b>
                    </h1>
                    <div class="d-sm-flex text-left justify-md-start justify-center pt-5 gap-3">
                        <div class="d-sm-flex text-muted">
                            <h2 class="font-weight-medium ml-2">We help businesses grow with end-to-end application development crafted for performance, usability, and scale.</h2>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap  ga-sm-6 ga-3 pt-9 pb-7 justify-md-start justify-center align-center technology">
                   <!--     <div v-for="(item, i) in technology" :key="i">
                            <div class="d-flex justify-center align-center round-56 rounded-xl bg-surface elevation-1">
                                <img :src="item.img" alt="technology" height="30" />
                            </div>
                            <v-tooltip activator="parent" location="bottom">{{ item.name }}</v-tooltip>
                        </div> -->
                    </div> 
                    <div class="d-flex justify-md-start justify-center">
                        <v-btn color="primary" rounded="pill" class="px-8 transform-none m-btn-full" size="large"  href="/auth/login" target="_blank"
                            >Contact us now</v-btn
                        >
                    </div>
                </v-col>
                <v-col cols="12" lg="6">
                    <div class="main-banner d-lg-block d-none">
                        <img src="@/assets/images/front-pages/background/hero-x1.png" alt="banner-right-image" class="rtlImg" />
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
