<script setup>
    import TheNavbar from '../components/TheNavbar.vue';
    import TheContact from '../components/TheContact.vue';
    import TheFooter from '../components/TheFooter.vue'
</script>

<template>
    <TheNavbar />
    <div class="container pt-5 mt-5" style="height: 750px;">
        <TheContact />
    </div>
    <TheFooter />
</template>