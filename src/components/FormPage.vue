<template>
    <div class="containers">
        <form action="">
            <input type="text" placeholder="Enter Text" v-model="todoValue">
            <button @click="handleSubmit($event)">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name:"FormPage",
    data() {
        return {
            todoValue:"",
        }
    },
    methods: {
        handleSubmit($event){
            $event.preventDefault();
            console.log(this.todoValue);
            this.$store.commit('mutateTodoItems',this.todoValue)
            // this.$emit('todoValueCall',this.todoValue)
            this.todoValue = "";
        }
    },
}
</script>

<style scoped>

</style>