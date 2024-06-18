<!-- ChildComponent.vue -->
<template>
    <div>
        <h3>Child Component</h3>
        <p>{{ injectedValue }}</p>
        <button @click="updateLocation">{{ location }}</button>
    </div>
</template>

<script setup>
import { inject } from 'vue';

const injectedValue = inject('providedValue', 'default value');
const { location, updateLocation } = inject('location')
</script>