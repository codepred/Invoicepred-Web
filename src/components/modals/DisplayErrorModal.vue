<script setup lang="ts">

const props = defineProps({
    msg: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="error-div">
        {{ props?.msg }}        
    </div>
</template>

<style>
.error-div {
    color: #DA3B38;
}

</style>