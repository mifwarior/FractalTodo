import { actions } from "../constants";

export default function TodoReducer(state = [] , action) {
  
  switch(action.type){
    case actions.TODO_ADD:
      return AddReducer(state, action);
    case actions.TODO_DONE:
      return  DoneReducer(state, action);
    case actions.TODO_REMOVE:
      return RemoveReducer(state, action);
  }
  return state;
}

function AddReducer(state = [], action){
  const before = state[state.length - 1];
  const id = (before?before.id:0) + 1;
  const {name, text, parentId} = action.payload;

  if(parentId){
    const parent = state.find((todo)=>{
      return todo.id === parentId;
    })
    if(parent) {
      parent.childs.push(id);
    }
  }
  return [
    ...state,
    {
      id,
      done:false,
      name,
      text,
      childs:[]
    }
  ];
}

function DoneReducer(state = [], action){
  const { id } = action.payload;
  const todo = state.find((todo)=>{
    return todo.id === id;
  })
  const complete = [...todo.childs, id];

  return state.map((todo)=>{
    if( complete.indexOf(todo.id) !== -1 ){
      return {...todo, done: true}
    }
    return todo;
  });
}

function RemoveReducer(state = [], action) {

  const { id, parentId } = action.payload;
  
  return state.filter((todo) => {

    return todo.id !== id;

  }).map((todo) => {

    if (todo.id === parentId) {

      return {
        ...todo,
        childs: todo.childs.filter((childId) => {
          return childId !== id;
        })
      }

    }
    return todo;
  })

}