<script setup lang="ts">
import { RouterLink } from 'vue-router';
import logo from '@/assets/images/logos/reir-small-logo-01-50px.png';
</script>
<template>
    <div class="logo">
        <RouterLink to="/">
            <img :src="logo" alt="home" />
        </RouterLink>
    </div>
</template>
