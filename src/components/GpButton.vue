<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
});
</script>

<template>
    <button>{{ label }}</button>
</template>


<style lang="scss" scoped>
@import '@/assets/main.scss';
    button {
        color: $dark;
        border: none;
        font-weight: bold;
        padding: 16px 8px;
        border-radius: 8px;
        background-color: $green;
    }
</style>