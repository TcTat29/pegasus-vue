<template>
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
                    <a href="javascript:void(0)"><i class="fa fa-desktop"></i><span class="pgs-menu-item-text">HomePage</span></a>
                </li>
                <li class="pgs-menu-item">
                    <a href="javascript:void(0)"><i class="fa fa-th"></i><span class="pgs-menu-item-text">Elements</span></a>
                    <ul class="pgs-child-menu pgs-child-menu-with-complete-sidebar">
                        <li class="pgs-child-menu-item">
                            <router-link tag="a" to="/viewa"><i class="fa fa-circle-o"></i><span>Function-A</span></router-link>
                        </li>
                        <li class="pgs-child-menu-item">
                            <router-link tag="a" to="/viewb"><i class="fa fa-circle-o"></i><span>Function-B</span></router-link>
                        </li>
                        <li class="pgs-child-menu-item">
                            <router-link tag="a" to="/viewc"><i class="fa fa-circle-o"></i><span>Function-C</span></router-link>
                        </li>
                    </ul>
                </li>
                <li class="pgs-menu-item">
                    <a href="javascript:void(0)"><i class="fa fa-cube"></i><span class="pgs-menu-item-text">Widgets</span></a>
                    <ul class="pgs-child-menu pgs-child-menu-with-complete-sidebar">
                        <li class="pgs-child-menu-item">
                            <router-link tag="a" to="/"><i class="fa fa-circle-o"></i><span>Function-D</span></router-link>
                        </li>
                        <li class="pgs-child-menu-item">
                            <router-link tag="a" to="/"><i class="fa fa-circle-o"></i><span>Function-E</span></router-link>
                        </li>
                    </ul>
                </li>
                <li class="pgs-menu-item">
                    <a href="javascript:void(0)"><i class="fa fa-calendar"></i><span class="pgs-menu-item-text">Calendar</span></a>
                </li>
                <li class="pgs-menu-item">
                    <a href="javascript:void(0)"><i class="fa fa-envelope-o"></i><span class="pgs-menu-item-text">Contact</span></a>
                </li>
            </ul>
        </div>
        <div class="pgs-toggle-sidebar-container">
            <a class="pgs-toggle-sidebar pgs-no-text-decoration"><i class="fa fa-bars"></i></a>
        </div>
    </div>
</template>

<script lang="ts">
import '../js/pegasus';
export default {
    name: 'pgs-sidebar'
};
</script>

<style lang="css">
@import '../css/pegasus.css';
@import '../css/font-awesome.min.css';
</style>