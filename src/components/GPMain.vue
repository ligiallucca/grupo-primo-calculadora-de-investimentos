<script setup lang="ts">
import GPForm from './GPForm.vue'
import GPResults from './GPResults.vue'
</script>
<template>
  <main>
    <GPForm></GPForm>
    <GPResults></GPResults>
  </main>
</template>
<style lang="scss" scoped>
main {
  padding: 96px 120px;
  display: flex;
  margin: 0 auto;
  width: 100%;
  gap: 140px;
}
</style>
