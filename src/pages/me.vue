<template>
  <v-card tile class="login-card elevation-4 text-center">
    <h5 class="mb-10">로그인 데이터</h5>
    <v-list>
      <v-list-item>
        <v-list-item-subtitle>{{ accessToken }}</v-list-item-subtitle>
      </v-list-item>
      <v-list-item>
        <v-list-item-subtitle>{{ myName }}</v-list-item-subtitle>
      </v-list-item>
      <v-list-item>
        <v-list-item-subtitle>{{ myAccount }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
    <v-btn color="warning" tile depressed @click="logout">logout</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "MyInfomation",
  created() {
    try {
      if (!this.$msal.isAuthenticated()) {
        this.$router.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  },
  computed: {
    accessToken() {
      return this.$msal.data.accessToken;
    },
    myAccount() {
      return this.$msal.data.user.userName;
    },
    myName() {
      return this.$msal.data.user.name;
    },
  },
  methods: {
    logout() {
      this.$msal.signOut();
    },
  },
};
</script>

<style lang="scss" scoped>
.login-card {
  padding: 48px;
  width: 500px;
  left: 50%;
  transform: translate(-50%, 0%);
}
</style>