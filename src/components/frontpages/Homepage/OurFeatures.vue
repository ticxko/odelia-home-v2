<script setup lang="ts">
import { Features } from '@/_mockApis/front-pages/PagesData';
import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="pt-96 pb-14 bg-background">
        <v-container class="max-width-1218">
            <v-row>
                <v-col cols="12" lg="7" class="pt-lg-0 pt-4">
                    <v-row>
                        <v-col cols="12" sm="6" v-for="item in Features" :key="item.icon">
                            <v-sheet class="px-lg-6 pb-6">
                                <div :class="'round-48 rounded-lg d-flex justify-center align-center bg-' + item.bgcolor">
                                    <Icon :icon="item.icon" height="22" :class="'text-' + item.color" />
                                </div>
                                <h4 class="text-22 textPrimary font-weight-bold py-5">{{ item.title }}</h4>
                                <p class="text-grey100 text-15">{{ item.subtitle }}</p>
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row> 
        </v-container>
    </div>
</template>


<style scoped>
h1 {
    font-family: 'Fraunces', serif;
    color: rgb(35, 35, 35);
    text-align: left;
    font-weight: 800;
    font-size: 48px;
}
h2 {
    font-family: 'Fraunces', serif;
    color: rgb(35, 35, 35);
    text-align: left;
    font-weight: 800;
    font-size: 35px;
}

h3 {
    font-family: 'Roboto', sans-serif;
    color: rgb(55, 55, 55);
    text-align: left;
    font-weight: 800;
    font-size: 20px;
}

@font-face {
  font-family: 'Fraunces';
  src: url('@/assets/fonts/Fraunces_72pt_Soft-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto';
  src: url('@/assets/fonts/Roboto-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Outfit';
  src: url('@/assets/fonts/Outfit-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}


</style>
