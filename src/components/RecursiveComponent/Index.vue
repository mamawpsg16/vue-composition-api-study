<template>
    <treetContent v-if="list.length" :list="list"/>
</template>

<script>
import treetContent from './Content.vue';
    export default {
        name:'tree-folder',
        components:{
            treetContent
        },
        data(){
            return{
                list:[
                    {
                        name:'tree 1',
                        children:[
                            {
                                name:'tree 1 child',
                                children:[
                                   {
                                    name:'tree 1 child child'
                                   }
                                ]
                            }
                        ],
                    },
                    {
                        name:'tree 2',
                        children:[
                            {
                                name:'tree 2 child',
                                children:[]
                            }
                        ],
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>