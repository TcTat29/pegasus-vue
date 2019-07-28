<template>
<div id="app">
    <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <header class="pgs-header pgs-layout-with-complete-sidebar">
        <div class="pgs-nav-container">
            <!-- <div class="pgs-tab tab-active">
                <a href="#">
                    <i class="fa fa-refresh"></i><span class="pgs-tab-text">Function-A</span>
                    <span class="pgs-tab-close"><i class="fa fa-remove"></i></span>
                </a>
            </div>
            <div class="pgs-tab">
                <a href="#">
                    <i class="fa fa-refresh"></i><span class="pgs-tab-text">Function-B</span>
                    <span class="pgs-tab-close"><i class="fa fa-remove"></i></span>
                </a>
            </div> -->
        </div>
    </header>
    <div class="pgs-sidebar pgs-sidebar-complete">
        <div class="pgs-logo-container">
            <div class="pgs-logo-image">
                <img src="../fonts/pgs.png" alt="pgs_logo" width="40" height="40">
            </div>
            <div class="pgs-logo-title pgs-logo-title-with-complete-sidebar">
                <span style="color: rgb(255, 255, 255); font-size: 16px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"><b>PEGASUS</b>
                    vue</span>
            </div>
        </div>
        <div class="pgs-menu-container">
            <ul class="pgs-menu pgs-menu-with-complete-sidebar">
                <li class="pgs-menu-header">

                </li>
                <li class="pgs-menu-item">
                    <a href="#"><i class="fa fa-desktop"></i><span class="pgs-menu-item-text">HomePage</span></a>
                </li>
                <li class="pgs-menu-item">
                    <a href="#"><i class="fa fa-th"></i><span class="pgs-menu-item-text">Elements</span></a>
                    <ul class="pgs-child-menu pgs-child-menu-with-complete-sidebar">
                        <li class="pgs-child-menu-item">
                            <a href="#/viewa"><i class="fa fa-circle-o"></i><span>Function-A</span></a>
                        </li>
                        <li class="pgs-child-menu-item">
                            <a href="#/viewb"><i class="fa fa-circle-o"></i><span>Function-B</span></a>
                        </li>
                        <li class="pgs-child-menu-item">
                            <a href="#/viewc"><i class="fa fa-circle-o"></i><span>Function-C</span></a>
                        </li>
                    </ul>
                </li>
                <li class="pgs-menu-item">
                    <a href="#"><i class="fa fa-cube"></i><span class="pgs-menu-item-text">Widgets</span></a>
                    <ul class="pgs-child-menu pgs-child-menu-with-complete-sidebar">
                        <li class="pgs-child-menu-item">
                            <a href="#"><i class="fa fa-circle-o"></i><span>Function-A</span></a>
                        </li>
                        <li class="pgs-child-menu-item">
                            <a href="#"><i class="fa fa-circle-o"></i><span>Function-B</span></a>
                        </li>
                    </ul>
                </li>
                <li class="pgs-menu-item">
                    <a href="#"><i class="fa fa-calendar"></i><span class="pgs-menu-item-text">Calendar</span></a>
                </li>
                <li class="pgs-menu-item">
                    <a href="#"><i class="fa fa-envelope-o"></i><span class="pgs-menu-item-text">Contact</span></a>
                </li>
            </ul>
        </div>
        <div class="pgs-toggle-sidebar-container">
            <a class="pgs-toggle-sidebar pgs-no-text-decoration"><i class="fa fa-bars"></i></a>
        </div>
    </div>
    <div class="pgs-layout pgs-layout-with-complete-sidebar">
        <div class="pgs-content-wrapper">
            <!-- <div style="width: 100%; height:2500px; background-color:rgb(255, 255, 255)">

            </div> -->
            <router-view />
        </div>
    </div>
    <footer class="pgs-footer pgs-layout-with-complete-sidebar">
        <div class="pgs-copyright">
            <span style="color: rgb(100, 100, 100)">© 2019 Pegasus Studio. Powered by <b>Vue</b></span>
        </div>
        <div class="pgs-version">
            <span><b>UI Version:&nbsp;</b>0.0.2</span>
        </div>
    </footer>
</div>
</template>

<script lang="ts">
import '../js/pegasus';
export default {
    name: 'pgsmain'
};
</script>

<style lang="css">
@import '../css/pegasus.css';
@import '../css/font-awesome.min.css';
</style>
