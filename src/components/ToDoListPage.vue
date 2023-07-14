<template>
    <div>
        <ul>
            <li v-for="(item,index) in todoItems" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"ToDoListPage",
    props:{
        todoItems: Array,
    }
}
</script>

<style>

</style>