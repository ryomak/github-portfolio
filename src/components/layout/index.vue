<template>
    <div>
        <header-component />
        <slot></slot>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import HeaderComponent from './headerComponent.vue';
export default Vue.extend({
    components:{
        HeaderComponent,
    }
    
})
</script>

