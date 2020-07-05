<template>
  <div class="slideBar__container">
    <VueSlideBar
      v-model="slider.value"
      :data="slider.data"
      :range="slider.range"
      :processStyle="{ backgroundColor: '#d8d8d8' }"
      @callbackRange="callbackRange">
      <template slot="tooltip" slot-scope="tooltip" class="sliderBlock">
        <div class="sliderWindow"><span>{{ rangeValue.label }}</span></div>
        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="10" height="20" rx="5" fill="#0093E6"/>
        </svg>
      </template>
    </VueSlideBar>
  </div>
</template>

<script>
import VueSlideBar from 'vue-slide-bar'

export default {
  data () {
    return {
      rangeValue: {},
      slider: {
        value: 60,
        data: [
          15,
          30,
          45,
          60,
          75,
          90,
          120
        ],
        range: [
          {
            label: '500 грн.'
          },
          {
            label: '1500 грн.',
          },
          {
            label: '2500 грн.'
          },
          {
            label: '3500 грн.'
          },
          {
            label: '4500 грн.'
          },
          {
            label: '5500 грн.'
          },
          {
            label: '6500 грн.'
          }
        ]
      }
    }
  },
  methods: {
    callbackRange (val) {
      this.rangeValue = val
    }
  },
  components: {
    VueSlideBar
  }
}
</script>

<style lang="scss" scoped>
    .slideBar__container{
        max-width: 750px;
        margin: 0 auto;
    }
    .sliderWindow{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -25px;
        margin-bottom: 10px;
        margin-left: 5px;
        width: 100px;
        height: 36px;
        background: #FFFFFF;
        border: 2px solid #0093E6;
        box-sizing: border-box;
        border-radius: 20px;
    }
    /deep/ .vue-slide-bar-separate[data-v-d3e7b39a]{
        width: 4px;
        height: 10px;
        background: #B4B4B4;
        border-radius: 20px;
        margin-top: -12.5px;
        z-index: 1;
    }
    /deep/ .vue-slide-bar-separate-text{
        font-family: Roboto;
        font-size: 16px;
        line-height: 100%;
        text-align: center;
        color: #B4B4B4;
        margin-top: 15px;
    }
    /deep/ .vue-slide-bar{
        height: 4px !important;
        background: #B4B4B4;
        border-radius: 20px;
    }
    .sliderWindow + svg{
        margin-left: 47px;
    }
</style>