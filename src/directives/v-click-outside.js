export default {
  beforeMount(el, binding) {
    // Define the clickOutsideEvent function and attach it to the element
    el.clickOutsideEvent = event => {
      // Check if the click happened outside the element
      if (!(el === event.target || el.contains(event.target))) {
        // Call the provided function with the event and element
        binding.value(event, el);
      }
    };
    // Add the event listener to the document body
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    // Remove the event listener from the document body when the element is unmounted
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
}
