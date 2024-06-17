<template>
  <div class="">
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

import { ref, nextTick, reactive, shallowReactive, isReactive, computed  } from 'vue'
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
</style>