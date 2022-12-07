import { createReducer } from "@reduxjs/toolkit";

export const initialState = {
    todos: [],
}

const todoReducer = createReducer(initialState, (builder) => {
    builder
    .addCase('addTodo', (state, action) => {
        state.todos.push({text: action.payload, completed: false})
    })
    .addCase('deleteTodo', (state, action) => {
        state.todos = state.todos.filter((el, index) => {
            if (index === action.payload) {
                return false
            }
            return true
        })
    })
    .addCase('checkTodo', (state, action) => {
        state.todos.map((el, index) => {
            if (index === action.payload) {
            el.completed = !el.completed
            }
            return true
        })
    })
})

export default todoReducer