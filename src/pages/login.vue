<template>
  <v-card tile class="login-card elevation-4 text-center">
    <h5 class="mb-10">MSAL 권한 인증 API를 테스트 해보기위해 작성되었습니다</h5>
    <h6 class="mb-10" v-if="isAuthenticated">로그인 되어있습니다</h6>
    <v-btn color="secondary" tile depressed @click="tryMsalLogin()"
      >Microsoft Login</v-btn
    >
    <v-btn
      :disabled="!isAuthenticated"
      color="info"
      tile
      depressed
      @click="$router.push('/me')"
      >My Infomation</v-btn
    >
  </v-card>
</template>

<script>
export default {
  created() {
    console.log(this.$msal);
  },
  computed: {
    isAuthenticated() {
      return this.$msal.isAuthenticated();
    },
  },
  methods: {
    tryMsalLogin() {
      if (this.isAuthenticated) {
        this.$toast.info("이미 로그인 되어있습니다!");
        return;
      }
      this.$msal.signIn();
    },
    getMe() {
      this.$msal
        .msGraph(["/me"])
        .then((resp) => {
          console.log(resp);
        })
        .catch((error) => {
          console.log(error);
        });
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

  .__header {
    align-content: middle;
  }
}
</style>