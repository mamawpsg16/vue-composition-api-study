// mouse.js
import { ref } from 'vue'
import { useEventListener } from './event.js'
// by convention, composable function names start with "use"
export function useMouse() {
  // state encapsulated and managed by the composable
  const xAxis = ref(0)
  const yAxis = ref(0)

  // a composable can update its managed state over time.
  function update(event) {
    xAxis.value = event.pageX
    yAxis.value = event.pageY
  }
  useEventListener(window, 'mousemove', (event) => {
    xAxis.value = event.pageX
    yAxis.value = event.pageY
  })

  // expose managed state as return value
  return { xAxis, yAxis }
}