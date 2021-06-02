function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId +1
}


const initialState = {
    todos: [
        {id:0, text:"Learn Reat",completed:true,},
        {id:1, text:"Learn Redux",completed:false,color:"purple"},
        {id:2, text:"Build something fun",completed:false,color:"blue"}
    ], 
    filters : {
        status : 'All', 
        colors:[]
    }
}

export default function appReducer (state = initialState, action) {
   
    switch(action.type) {
       case 'todos/todoAdded' : {
           return {
               ...state,
               todos : [
                   ...state.todos,
                   {
                       id:nextTodoId(state.todos),
                       text: action.payload,
                       completed: false
                   }
               ]
           }
       }
       default :
        return state
   } 
}