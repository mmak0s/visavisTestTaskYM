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




<style lang="scss" scoped>
@keyframes rotatingElement{
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
}
.list-item{
    position: relative;
    max-width: 360px;
    max-height: 400px;
    .animatedCircle{
        position: absolute;
        top: -5px;
        left: -30px;
        animation: rotatingElement 1s linear;
        animation-iteration-count:infinite;
    }
    .item__figure{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #C4C4C4;
        margin-bottom: 30px;
    }
    .item__header{
        font-weight: bold;
        font-size: 28px;
        line-height: 120%;
        margin-bottom: 20px;
    }
    .item__content{
        font-weight: 300;
        font-size: 18px;
        line-height: 140%;
        margin-bottom: 20px;
    }
    .item__list{
        ul{
            padding: 0;
            li{
                position: relative;
                list-style: none;
                box-sizing: border-box;
                padding-left: 20px;
                font-weight: 300;
                font-size: 18px;
                line-height: 160%;
                margin-bottom: 8px;
                &:before{
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 10px;
                    width: 8px;
                    height: 8px;
                    background: #0093E6;
                    border-radius: 50%;
                }
            }
        }
    }
}
.list-item.active-item{
    .item__figure{
        width: 70px;
        height: 70px;
        margin-bottom: 45px;
        margin-top: 25px;
    }
}
</style>