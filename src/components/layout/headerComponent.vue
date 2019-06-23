<template>
    <header>
        <div class="menu">
            <label for="open">Menu</label>
            <input type="checkbox" id="open" style="display:none"/>
            <div id="menu-container" >
                <div><router-link to="/">Home</router-link></div>
                <div><router-link to="/about">About</router-link></div>
                <div><router-link to="/photograph">Photograph</router-link></div>
            </div>
        </div>
    </header>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"headerComponent",
})
</script>
<style lang="scss" scoped>
    #menu-container{
        height:0vh;
    }
    #open{
        &:checked ~ #menu-container{
            height: 100vh;
            animation: menu-open 2s ease 0s 1 alternate none running;
        }
    }
    .menu{
        position: fixed;
        width:200px;
        height: 100vh;
        padding: 2em;
    }
    @media screen  and (max-width:600px) {
        .menu{
            width: 100vw;
            height: 100vh;
        }
    }

    .menu-animation{
        animation: menu-open 2s ease 0s 1 alternate none running;
    }

    @keyframes menu-open {
        0% {
            transform: scale(.0);
        }

        100% {
            transform: scale(1);
        }
    }
</style>
