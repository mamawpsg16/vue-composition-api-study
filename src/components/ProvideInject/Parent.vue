<!-- ParentComponent.vue -->
<template>
    <div>
        <h1>Parent Component</h1>
        <input type="text" v-model="providedValue">
        {{ location }}
        <slot></slot>
    </div>
</template>

<script setup>
import { provide, ref, readonly  } from 'vue';

const count = ref(0)
const providedValue = ref('Hello from Parent!');
const location = ref('North Pole')
// READ ONLY 
provide('read-only-count', readonly(count))

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location,
  updateLocation
})
provide('providedValue', providedValue);
</script>