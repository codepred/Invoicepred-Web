<script setup lang="ts">
import CreatorPanel from '../components/CreatorPanel.vue'

import { ref } from 'vue'

const globalCurrency = ref<string>(window?.PICKED_CURRENCY)

</script>

<template>
    <div style="padding-bottom: 100px; max-width: 1200px">
        <div style="display: flex; justify-content: center; flex-direction: column; gap: 20px;">
            <CreatorPanel :currency="globalCurrency"/>
        </div>
    </div>
</template>