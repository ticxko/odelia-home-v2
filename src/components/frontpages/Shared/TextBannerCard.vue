<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ChevronRightIcon } from 'vue-tabler-icons';

const props = defineProps({
    caption: String,
    title: String
});
</script>
<template>
    <div class="overflow-hidden bg-background pb-sm-14 pb-7 pt-sm-8">
        <v-container class="max-width-1218">
            <div class="d-flex flex-wrap justify-sm-space-between justify-center align-center">
                <h2 class="text-44 font-weight-bold textPrimary text-align-start">{{ title }}</h2>
                
            </div>
        </v-container>
    </div>
</template>
