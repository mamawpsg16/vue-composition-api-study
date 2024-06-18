<template>
  <div class="">
    <input type="text" id="texttext" ref="textInput">
    <div v-click-outside="handleClickOutside">
      Click outside of this box to trigger an event.
    </div>
    <h1 v-color="'lightblue'">This background color is light blue.</h1>
    <input v-color="inputColor" v-model="inputColor" placeholder="Enter a color" />
    <p>Mouse position is at: {{ xAxis }}, {{ yAxis }}</p>
    <!-- <MouseTracker/> -->
    <!-- /** PROJECT INJECT */ -->
    <Parent>
      <Intermediate>
        <Child/>
      </Intermediate>
    </Parent>
    <ScopedSlot :rows="rows" :headers="headers">
      <template #default="{ obj, value, key, index }">
        {{ value }}
      </template>
    </ScopedSlot>
    <ConditionalSlot>
      <template #header>
        <h1>Conditional Header Slot</h1>
      </template>

      <template #default>
        <p>Conditional Default Slot</p>
      </template>

      <template #footer>
        <p>Conditional Footer Slot</p>
      </template>
    </ConditionalSlot>
    <NamedSlot>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>

      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </NamedSlot>
    <Slot>
      SLOT 
    </Slot>
    <br>
    NEW WAY USING COMPONENT DATA BINDING 
    <CompositionInput v-model.capitalize="newway"/>
    <br>
    OLD WAY USING COMPONENT DATA BINDING 
    <Input v-model="oldway"/>
    <p>Emit Value {{ emitValue }}</p>
    <Test v-bind="propsPassed" @some-event="(payload) => emitValue += payload"/>
    <div  :style="{fontSize: postFontSize  + 'em'}">
      <BlogPost @enlarge-text="postFontSize += 0.1" title="Hello World" />
    </div>
    <ul>
      <li v-for="item in list" ref="itemRefs">
        {{ item }}
      </li>
    </ul>
    <input ref="input" />
    <input type="text" v-model.number="objv1.count">
    <input type="text" v-model.number="x">
    <input type="text" v-model.number="y">
    <p>
      Ask a yes/no question:
      <input v-model="question" :disabled="loading" />
    </p>
    <p>{{ answer }}</p>
    <input v-model.lazy="msg" />
    {{ msg }}
    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
    <p>{{ toggle }}</p>
    <select v-model="selected">
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>

    <div>Selected: {{ selected }}</div>
    <!-- <div>Selected: {{ selected }}</div> -->

    <!-- <select v-model="selected"> -->
    <!-- <select v-model="selected" multiple>
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select> -->
    <div>Picked: {{ picked }}</div>

    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>

    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <div>Checked names: {{ checkedNames }}</div>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <div :class="classObject">classObject</div>
    <div>
      <p v-for="(item, index) in items">
        {{ item.message }}
      </p>
    </div>
    <input :value="text" @input="event => text = event.target.value">
    VS
    <input v-model="text">
    {{ text }}
    <textarea v-model="text" class="form-control"></textarea>
    <input type="checkbox" class="form-check-input" v-model="isChecked">
    <span>Message: {{ message }}</span>
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <button @click="increment" :disabled="isDisabled" :class="{'bg bg-secondadary' : isDisabled}">Count is: {{ count }}</button>
    <button @click="toggleDisable" v-bind="objectOfAttrs">Toggle Disable Button</button>
    <div :id="count">ID {{count}}</div>
    <div :id="`list-${count}`">LIST ID {{count}}</div>
    <button @click="incrementDouble" >Double Count is: {{ countDouble }}</button>
    <button @click="updateMessage">Update Message</button>
    <p ref="messageElement">{{ message }}</p>
    <button @click="state.count++">
      {{ state.count }}
    </button>
    <form @submit.prevent="updateCity">
      <input type="text" v-model="city">
      <button type="submit">
        UPDATE STATE
      </button>
    </form>
    <pre>{{ newState }}</pre>
    <pre>{{ newState.foo }}</pre>
    {{ countv1 + 1 }}
    {{ objectv1.id + 1 }}
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
  </div>
</template>

<script setup>
import { useMouse } from '@/composable/mouse.js'
import MouseTracker from '@/components/MouseTracker.vue'
import Parent from './components/ProvideInject/Parent.vue';
import Intermediate from './components/ProvideInject/Intermediate.vue';
import Child from './components/ProvideInject/Child.vue';
import ScopedSlot from '@/components/ScopedSlot.vue';
import ConditionalSlot from '@/components/ConditionalSlot.vue';
import NamedSlot from '@/components/NamedSlot.vue';
import Slot from '@/components/Slot.vue';
import CompositionInput from '@/components/CompositionInput.vue';
import Input from '@/components/Input.vue';
import BlogPost from './views/BlogPost.vue';
import { ref, nextTick, reactive, shallowReactive, isReactive, computed, watch, watchEffect, onMounted   } from 'vue'
const textInput = ref(null);
onMounted(() => console.log(textInput, 'texttext'));
const handleClickOutside = (a = null) => {
      alert('Clicked outside!');
  };
const inputColor = ref('lightgreen');
const { xAxis, yAxis } = useMouse()
const headers = reactive(["ID","Name","Age"]);
const rows = reactive([
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  { id: 3, name: 'Emily Johnson', age: 35 }
]);
 

const newway = ref(null);
const oldway = ref(null);
const emitValue = ref(0);
const propsPassed = reactive({
  text:"Hello this is a prop",
  isActive:true,
  group:"Hallelujah",
})
const postFontSize = ref(1)
function increaseFontSize() {
  postFontSize.value += 0.1;
}
const list = ref([
  "A","B","C","D"
])
const itemRefs = ref([])
onMounted(() => console.log(itemRefs.value))
const input = ref(null)
// onMounted(() => {
//   input.value.focus()
// })
watchEffect(() => {
  if (input.value) {
    input.value.focus()
  } else {
    // not mounted yet, or the element was unmounted (e.g. by v-if)
  }
})
const todoId = ref(null)
const data = ref(null)
watch(
  todoId,
  async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
    )
    data.value = await response.json()
  },
  { immediate: true }
)
// TO :
watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  data.value = await response.json()
})
const objv1 = reactive({ count: 0 })
watch(
  () => objv1.count,
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
    // Note: `newValue` will be equal to `oldValue` here
    // *unless* state.someObject has been replaced
  },
  { deep: true } //OPTIONAL FOR REACTIVE NESTED PROPERTY
)
const obj = reactive({ count: 0 })
const x = ref(0)
const y = ref(0)

// single ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

// getter
watch( () => x.value + y.value, (sum) => {
    console.log(`sum of x + y is: ${sum}`)
  }
)
// instead, use a getter:
watch(
  () => obj.count,
  (count) => {
    console.log(`Count is: ${count}`)
  }
)

// array of multiple sources
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})
const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    } finally {
      loading.value = false
    }
  }
})

const msg = ref(null)
const toggle = ref(null)
const selected = ref('A')

const options = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' }
])
// const selected = ref("");
const picked = ref(null);
const checkedNames = ref([]);
const isChecked = ref(false);
const count = ref(0)
const city = ref(null)
const state = reactive({ count: 0 })
const countDouble = ref(0)
const messageElement = ref(null);
const text = ref(null);
const isDisabled = ref(false)
const message = ref("This is a message")
const rawHtml = ref("<p class='fw-bold'>Raw HTML</p>")
const newState = ref({
  foo:1,
  user: {
    profile: {
      name: 'Alice',
      details: {
        age: 25,
        address: {
          city: 'Wonderland'
        }
      }
    }
  }
});
const countv1 = ref(0)
const objectv1 = ref({ id:1 })
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
const classObject = reactive({
  active: true,
  'text-danger': false
})
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
// const { id } = objectv1
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
}
let increment = () => count.value ++;
let toggleDisable = () => isDisabled.value = !isDisabled.value;

function updateCity() {
  newState.value.foo++
  console.log(isReactive(newState.value.foo));
  console.log('CLICKED');
  newState.value.user.profile.details.address.city = city.value;
}

const updateMessage = async () => {
  message.value = 'Hello, Vue 3!';
  
  await nextTick();
  // Now you can safely manipulate the DOM or perform operations dependent on the updated DOM
  console.log(messageElement.value.textContent); // 'Hello, Vue 3!'
};

async function incrementDouble() {
  countDouble.value++
  await nextTick()
  console.log('UPDATED');
  // Now the DOM is updated
}

const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
</script>


<style scoped>
button {
  font-weight: bold;
}
</style>@/composable/mouse.js