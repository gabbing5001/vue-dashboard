<template>
  <div class="home">
    <h1>Beer List</h1>
    <div v-for="beer in beers" :key="beer">
      {{ beer.name }}
      <h1>뭐ㅓ야ㅑㅑㅑ</h1>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
 
/* export interface Beer {
  id: string;
  name: string;
  giphyUrl: string;
}
 */
/* @Component */
export default{
data() {
    return {
      beer: []
    };
  },
  mounted() {
    //
  }
};
</script>