import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'RenderFunctionComponent',
  data(){
    return{
      items:['A','B','C','D'],
    }
  },
  render() {
    return h('div', { class: 'container' }, [
      h('h1', 'Hello, Render Functions!'),
      h('p', 'This is a paragraph created using a render function.'),
      h('div', { class: 'bar', innerHTML: '<span class="text-danger">hello</span>' }),
      h('div', { '.name': 'some-name', '^width': '100' }, 'AYO'),
      h('button', { onClick: () => console.log('SHEESH') },'Click Me'),
      h(
        'section', // type
        { id: 'section-id', class: 'section-class', style:{color:'red'},  '^sheesh': '100', /** innerHTML:'SECTION'*/}, // props
        [
          h('ul',{ class: [this.foo, this.bar],  /** innerHTML: 'UL'*/},  this.items.map(item => h('li', { innerHTML: item })))
        ]
      )
    ]);
  }
});
