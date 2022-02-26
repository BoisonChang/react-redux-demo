import { DELETE_TODO,  ADD_TODO } from "../actionTypes";


let todoId = 0;

const initialState = {
    todos: []
}


export default function todosReducer(state = initialState, action) {
    console.log('received action', action)
    switch (action.type){
        case ADD_TODO: {
        return {
            ...state,
            todos: [...state.todos, {
                id: todoId ++,
                name: action.payload.name
            }]
        }
    }
        case DELETE_TODO: {
        return {
            ...state, 
            todos: state.todos.filter(todo => todo.id !== action.payload.id)
        }}
        default: {
            return  state
        }
    }
}
