<template>
  <v-app>
    <v-main>
      <v-container fill-height>
        <router-view />
      </v-container>
    </v-main>
    <loading-indicator />
    <toast />
  </v-app>
</template>

<script>
import LoadingIndicator from "./components/loading-indicator";
import Toast from "./components/toast";

export default {
  name: "App",

  components: {
    LoadingIndicator,
    Toast,
  },
};
</script>
