<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import Logo from '@/layouts/full/logo/Logo.vue';

const route = useRoute(); // Get current route

const navigation = ref([
    {
        menu: 'Beranda',
        href: '/front-page/homepage',
        badge: false
    },
    {
        menu: 'Profil',
        href: '/front-page/services',
        badge: false
    },
    {
        menu: 'Berita',
        href: '/front-page/blog/posts',
        badge: false
    },
    {
        menu: 'Portfolio',
        href: '/front-page/portfolio',
        badge: true
    },
    {
        menu: 'Dashboard',
        href: '/dashboard1',
        badge: false
    },
    {
        menu: 'Pricing',
        href: '/front-page/pricing',
        badge: false
    },
    {
        menu: 'Kontak',
        href: '/front-page/contact-us',
        badge: false
    }
]);

// Function to check if the menu is active
const isActive = (href: string) => route.path === href;
</script>

<template>

    <div class="d-flex flex-lg-row flex-column align-lg-center justify-space-between w-100 ga-lg-6 ga-4 pa-lg-0 pa-6">
        <div class="d-lg-none d-block mb-4">
            <Logo />
        </div>

        <div v-for="(item, i) in navigation" :key="i">
            <div class="d-flex align-center">
                <RouterLink
                    :to="item.href"
                    :class="[
                        'text-15 font-weight-semibold text-decoration-none text-head-nav-odelia d-flex align-center ga-2 px-3 py-lg-1 py-2 lg-w-auto w-100',
                        isActive(item.href) ? 'text-primary selected-menu rounded-pill' : ''
                    ]"
                >
                    {{ item.menu }}
                    <v-chip v-if="item.badge" class="font-weight-semibold h-23" color="primary" size="small" rounded="pill" label> New </v-chip>
                </RouterLink>
               
            </div>
        </div>

        <v-btn class="d-md-none d-flex w-full text-white h-43 px-5 transform-none" color="primary"  href="/auth/login" target="_blank">
            <span class="text-white">Log in</span>
        </v-btn>
    </div>

</template>

<style scoped>
.selected-menu {
  background-color: #fff;
  padding: 0;
  width: 100%;
}
</style>