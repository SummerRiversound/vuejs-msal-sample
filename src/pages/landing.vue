<template>
  <div></div>
</template>
<script>
export default {
  name: "Landing",
  mounted() {
    try {
      this.$router.push("");
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
</style>