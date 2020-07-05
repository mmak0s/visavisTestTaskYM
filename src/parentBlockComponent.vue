<template>
  <section class="mainFirstComponent">
    <div id="parentBlockComponent" class="container">
      <div class="mainFirstComponent__list">
        <app-block 
                    v-for="(block, index) in blockList"
                    :key="index"
                    :block="block"
        >
        </app-block>
      </div>
    </div>
  </section>
</template>

<script>
import AppBlock from "./components/block"

export default {
  components:{
    AppBlock
  },
  name: 'parentBlockComponent',
  data () {
    return {
      blockList:[
        {
          additionClasses: "active-item",
          title: "Lorem Ipsum is simply dummy text",
          content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          list: ["Lorem Ipsum has been the industry's", "Standard dummy text ever since", "But also the leap into electronic typesetting"]
        },
        {
          additionClasses: "",
          title: "Lorem Ipsum is simply dummy text",
          content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          list: ["Lorem Ipsum has been the industry's", "Standard dummy text ever since", "But also the leap into electronic typesetting", "It was popularised in the 1960s"]
        },
        {
          additionClasses: "",
          title: "Lorem Ipsum is simply dummy text",
          content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          list: ["Lorem Ipsum has been the industry's", "Standard dummy text ever since"]
        },
        {
          additionClasses: "",
          title: "Lorem Ipsum is simply dummy text",
          content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          list: ["Lorem Ipsum has been the industry's", "Standard dummy text ever since", "But also the leap into electronic typesetting"]
        },
        {
          additionClasses: "",
          title: "Lorem Ipsum is simply dummy text",
          content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          list: ["Lorem Ipsum has been the industry's", "Standard dummy text ever since", "But also the leap into electronic typesetting"]
        }
      ]
    }
  },
  created(){
    this.blockList.sort(function(){
      return Math.random() - 0.5;
    });
  }
}
</script>