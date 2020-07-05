<template>
    <div class="list-item" :class="block.additionClasses">
        <img src="img/rotatingSvg.svg" alt="Icon" class="animatedCircle" v-if="block.additionClasses">
        <div class="item__figure"></div>
        <h2 class="item__header">
            {{block.title}}
        </h2>
        <div class="item__content">
            {{ block.content }}
        </div>
        <div class="item__list">
            <ul>
                <li 
                    v-for="(listItem, index) in block.list"
                    :key="index"
                >
                {{listItem}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        block: Object
    },
    data(){
        return {

        }
    },
    computed:{
        
    },
    methods: {
        
    }   
}
</script>