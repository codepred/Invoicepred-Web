<script setup lang="ts">
import IconCheckboxTick from '../icons/IconCheckboxTick.vue';
import { getCurrentInstance, ref } from 'vue';

const instance = getCurrentInstance()

const props = defineProps({
    msg: {
        type: String,
        required: true
    }
})

const localBooleanVariable = ref<boolean>(false)

const changePassedValue = () => {
    localBooleanVariable.value = !localBooleanVariable.value
    instance?.emit('update:booleanVariable', localBooleanVariable.value)
}


</script>

<template>
    <div style="display: flex; align-items: center; gap: 7px">
        <div class="checkbox" style="cursor: pointer; margin-bottom: 2px;"
            @click="changePassedValue()">
            <span class="icon" v-if="localBooleanVariable" style="top: -15px; left: 2px;">
                <IconCheckboxTick />
            </span>
        </div>
        <span @click="changePassedValue()" style="cursor: pointer;">
            {{ props.msg }}
        </span>
    </div>
</template>

<style>

.checkbox {
  box-sizing: border-box;
  border: 1px solid #B9B9D1;
  border-radius: 2px;
  width: 16px;
  height: 16px;
  position: relative;
  cursor: pointer;
}

.checkbox.checked .tick {
  display: block;
}

.tick {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background-color: #011348;
  display: none;
}

.checkbox:before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-color: white;
}


</style>