<template>
  <div id="app">
    <Parent :message="message" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import Parent from "@/components/Parent.vue";

export default defineComponent({
  components: { Parent },
  setup() {
    return reactive({
      message: "hello ts"
    });
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
