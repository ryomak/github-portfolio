<template>
  <div class="about">
    <photo-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import photoList from '@/components/photograph/photoList.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'photograph',
  components: {
      photoList
  },
});
</script>