<template>
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
</template>

<script setup>
    const props = defineProps({
        title:{
            type:[String]
        }
    });
    const emits = defineEmits(['enlarge-text']);
    console.log(props, 'props');
</script>
