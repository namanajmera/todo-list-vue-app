<template>
  <router-link to="/">Home Page</router-link>
  <router-link to="/about">About Page</router-link>
  <div class="container">
    <form-page @todoValueCall="todoValueCall"/>
    <to-do-list-page :todoItems="todoItems"/>
  </div>
  <router-view/>
</template>

<script>
import ToDoListPage from './components/ToDoListPage.vue';
import FormPage from './components/FormPage.vue';

export default {
  name: 'App',
  components: {
    FormPage,
    ToDoListPage
  },
  data() {
    return {
      todoItems: [],
    }
  },
  methods: {
    todoValueCall(value){
      console.log(value);
      this.todoItems.push(value);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  display: flex;
  flex-direction: column;
  border: 2px solid red;
  height: 500px;
  margin-top: 50px;
}
</style>
