<template>
  <v-container fluid :grid-list-md="!$vuetify.breakpoint.xs">
    <v-layout wrap row>
       <v-flex xs12 sm6 md3 class="pb-2">
        <smallCard
          title="최근 게시물"
          number="343"
          tIcon="list"
          tIconColor="success"
          bIcon="update"
          bIconColor="primary"
          bText="3시간 전"
        ><smallCard>
      </v-flex>
      <v-flex xs12 sm6 md3 class="pb-2">
        <smallCard
          title="전체 사용자"
          number="12"
          tIcon="person"
          tIconColor="primary"
          bIcon="group"
          bIconColor="success"
          bText="2명 접속중"
        ></smallCard>
      </v-flex>

      <v-flex xs12 sm6 md3 class="pb-2">
        <smallCard
          title="전체 조회수"
          number="431"
          tIcon="visibility"
          tIconColor="info"
          bIcon="trending_down"
          bIconColor="error"
          bText="43 감소"
        ></smallCard>
      </v-flex>

      <v-flex xs12 sm6 md3 class="pb-2">
        <smallCard
          title="전체 게시물"
          number="334234"
          tIcon="view_module"
          tIconColor="warning"
          bIcon="trending_up"
          bIconColor="success"
          bText="256 증가"
        ></smallCard>
      </v-flex>

       <v-flex xs12 sm4 class="pb-2">
        <tendCard
          title="주간 게시물 현황"
          :data="[4, 7, 9, 5, 6, 4, 5]"
          :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        ></tendCard>
      </v-flex>
      <v-flex xs12 sm4 class="pb-2">
        <tendCard
          title="주간 사용자 현황"
          :data="[3, 1, 2, 1, 0, 4, 2]"
          :gradient="['red', 'orange', 'yellow']"
        ></tendCard>
      </v-flex>
      <v-flex xs12 sm4 class="pb-2">
        <tendCard
          title="주간 조회수 현황"
          :data="[33, 22, 2, 43, 33, 1, 55]"
          :gradient="['blue', 'green', 'sky']"
        ></tendCard>
      </v-flex>


     <v-flex xs12 sm6 class="pb-2">
        <boardCard></boardCard>
      </v-flex>
      <v-flex xs12 sm6 class="pb-2">
        <boardCard></boardCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import smallCard from './smallCard'
import tendCard from './trendCard'
import boardCard from './boardCard'

export default {
  data() {
    return {
       //
    };
  },
  components: {
    smallCard,
    tendCard,
    boardCard
  },
  mounted() {
    //
  },
  methods: {
    //
  }
};
</script>