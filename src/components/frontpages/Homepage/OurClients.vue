<script setup lang="ts">
import { Features } from '@/_mockApis/front-pages/PagesData';
import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="pt-96 pb-14 bg-surface">
        <v-container class="max-width-1218">
            <v-row>
                <v-col cols="12" lg="5">
                    <img src="@\assets\images\landingpage\frontpages\odelia-services.png" alt="bidan-delima" class="w-100" />
                     
                </v-col>
                <v-col cols="12" lg="7">
                    <v-row>
                        <v-col cols="12">
                            <h2 class="display-1 textPrimary font-weight-bold">Lebih dari 8,000 Bidan telah terdaftar dalam Odelia dan terintegrasi dengan Satu Sehat</h2>
                            <div class="d-sm-flex text-left justify-md-start justify-center pt-5 gap-3 pb-5">
                                <div class="d-sm-flex text-muted">
                                <h3 class="font-weight-medium ml-2">Beragam layanan yang kami sediakan untuk membantu bidan dalam meningkatkan kualitas pelayanan kesehatan ibu dan anak.</h3>
                                </div>
                            </div>
                    <v-row>
                        <v-col cols="12" lg="6" class="pt-15">
                            <div class="d-sm-flex text-muted"><img src="@\assets\images\logos\ibi-logo.png" /><h3 class="font-weight-medium ml-2">Ikatan Bidan Indonesia</h3></div>
                        </v-col>
                        <v-col cols="12" lg="6" class="pt-15">
                            <div class="d-sm-flex text-muted"><img src="@\assets\images\logos\satusehat-logo.png" /></div>
                        </v-col>                  
                    </v-row>
                    
                    
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
           <!--  <v-row>
                <v-col cols="12" lg="7" class="pt-lg-0 pt-8">
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
            </v-row> -->
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
