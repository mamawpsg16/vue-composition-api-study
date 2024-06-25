<template>
    <ul>
     <li v-for="data in list">
        <span>{{ data.name }}</span>
        <tree-content :list="data.children"/>
     </li>
    </ul>
</template>
   
   <script>
       export default {
        name: 'tree-content',
        props:{
            list:{
                type:Array,
                default:[],
                required:true
            }
        },
       }
   </script>
   
   <style lang="scss" scoped>
   
   </style>