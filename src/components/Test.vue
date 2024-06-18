<template>
    <div>
        <button @click="someEvent">Click Me</button>
        <h5>TEST GLOBAL COMPONENT</h5>
        <p>{{ group }}</p>
        <p>{{ text }}</p>
        <p>{{ isGroupActive }}</p>
    </div>
</template>

<script setup>
import { computed } from 'vue';
const emits = defineEmits({
    someEvent: (payload) => typeof payload == 'string' 
})
const props = defineProps({
    text:{
        type:[String, null],
    },
    isActive:{
        type:[Boolean, String],
        validator(value, props) {
            // The value must match one of these strings
            return typeof value !== 'string'; 
        }
    },
    group:String,
})

const someEvent = () => {
    const isValid = emits('someEvent', 2)
    if (isValid) {
        console.log('Event emitted successfully');
    } else {
        console.log('Event emission failed validation');
    }
}
const isGroupActive = computed(() => {
    return `The Group is ${props.isActive ? 'Active' : 'Inactive' }`;
});
</script>

<style lang="scss" scoped>

</style>