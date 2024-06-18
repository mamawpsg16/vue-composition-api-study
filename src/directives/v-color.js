// v-color.js
export default {
    mounted(el, binding) {
      el.style.backgroundColor = binding.value;
    },
    updated(el, binding) {
      el.style.backgroundColor = binding.value;
    }
  }
  