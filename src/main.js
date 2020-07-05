import Vue from 'vue';
import ParentBlockComponent from './parentBlockComponent.vue';
import SliderParent from './sliderParent.vue';


let blockComponent = new Vue({
  el: '#parentBlockComponent',
  render: h => h(ParentBlockComponent)
});

let sliderComponent = new Vue({
  el: '#sliderParent',
  render: h => h(SliderParent)
});
