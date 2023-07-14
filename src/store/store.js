import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            todoItems:[],
        }
    },
    mutations:{
        mutateTodoItems(state,todoText){
            state.todoItems = [...state.todoItems,todoText+" check"]
        },
    },
    actions:{},
    getters:{
        todoItems(state){
            return state.todoItems;
        }
    },
})

export default store;