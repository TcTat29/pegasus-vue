<template>
    <div class="pgs-layout pgs-layout-with-complete-sidebar">
        <div class="pgs-content-wrapper">
            <!-- <div style="width: 100%; height:2500px; background-color:rgb(255, 255, 255)">

            </div> -->
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import '../js/pegasus';
export default {
    name: 'pgs-layout'
};
</script>

<style lang="css">
@import '../css/pegasus.css';
@import '../css/font-awesome.min.css';
</style>