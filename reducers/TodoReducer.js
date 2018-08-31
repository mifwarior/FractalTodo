import { actions } from "../constants";

export default function TodoReducer(state = [], action) {

  switch (action.type) {
    case actions.TODO_ADD:
      return AddReducer(state, action);
    case actions.TODO_DONE:
      return DoneReducer(state, action);
    case actions.TODO_REMOVE:
      return RemoveReducer(state, action);
    case actions.TODO_EDIT:
      return EditReducer(state, action);
  }
  return state;
}

function AddReducer(state = [], action) {
  const before = state[state.length - 1];
  const id = (before ? before.id : 0) + 1;
  const { name, text, parentId } = action.payload;

  if (parentId) {
    const parent = state.find((todo) => {
      return todo.id === parentId;
    })
    if (parent) {
      parent.childs.push(id);
    }
  }
  return [
    ...state,
    {
      id,
      done: false,
      name,
      text,
      childs: []
    }
  ];
}


function GetChildIds(id, todos){
  const todo = todos.find((todo)=>{
    return todo.id === id;
  });
  if(todo){
    let result = [...todo.childs];
    todo.childs.forEach((id)=>{
      result = [...result, ...GetChildIds(id, todos)];
    })
    return result;
  }
  return [];
}
function DoneReducer(state = [], action) {
  const { id, done } = action.payload;
  const ids = [id, ...GetChildIds(id, state)];
  console.log(ids);
  return state.map((todo)=>{
    if(ids.indexOf(todo.id) !== -1){
      return {... todo, done};
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

function EditReducer(state = [], action) {
  const { id, name, text, done } = action.payload;

  return state.map((todo) => {
     if(todo.id === id){
      return { 
        ...todo, 
        name: name || todo.name,
        text: text || todo.text,
        done: (done === undefined ? todo.done : done)
      }
     }
     return todo;
  });
}