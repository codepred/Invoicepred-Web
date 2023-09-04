<script setup lang="ts">

defineProps({
  msg: {
    type: String,
    required: true
  }
})

</script>

<template>

<div class="wrap-text">
    {{  msg }}
</div>

</template>

<style>

.wrap-text {
  overflow: hidden;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-word;
}

</style>