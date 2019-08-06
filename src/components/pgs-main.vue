<template>
<div id="app">
    <pgs-header></pgs-header>
    <pgs-sidebar></pgs-sidebar>
    <pgs-layout></pgs-layout>
    <pgs-footer></pgs-footer>
</div>
</template>

<script lang="ts">
import '../js/pegasus';
import pgsHeader from './pgs-header.vue';
import pgsSidebar from './pgs-sidebar.vue';
import pgsLayout from './pgs-layout.vue';
import pgsFooter from './pgs-footer.vue';
export default {
    name: 'pgs-main',
    components: { pgsHeader, pgsSidebar, pgsFooter, pgsLayout }
};
</script>

<style lang="css">
@import '../css/pegasus.css';
@import '../css/font-awesome.min.css';
</style>
