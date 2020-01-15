<template>
  <v-app>
    <v-card>
      <v-toolbar flat color="primary" dark>
        <v-toolbar-title>Dashboard</v-toolbar-title>
      </v-toolbar>
      <v-tabs vertical>
        <v-tab>
          <v-icon left>mdi-account</v-icon>PH
        </v-tab>
        <v-tab>
          <v-icon left>mdi-account</v-icon>VN
        </v-tab>
        <v-tab>
          <v-icon left>mdi-account</v-icon>GB
        </v-tab>

        <v-tab router :to="{name: 'test'}" exact> 
          <v-icon left>>mdi-account</v-icon>TEST
        </v-tab>

        <v-tab-item>
          <linkCard></linkCard>
        </v-tab-item>
        <v-tab-item>
          <linkCard></linkCard>
        </v-tab-item>
        <v-tab-item>
          <linkCard></linkCard>
        </v-tab-item>
        <v-tab-item>
           <router-view></router-view>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import linkCard from "./components/dashboard/linkCard";
import test from "./components/dashboard/test";
import axios from "axios";

export default {
  name: "App",
  components: {
    HelloWorld,
    linkCard,
    test
  },
  data: () => ({
    //
  }),
  methods: {
    //
    async created() {
      const response = await axios.get("/good-beers");
      this.beers = await response.data;
    }
  }
};


</script>
