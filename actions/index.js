import { actions } from "./../constants";

export function AddTodo(name, text, parentId) {
  return {
    type: actions.TODO_ADD,
    payload: {
       name,
       text,
       parentId
      }
  }
}

export function RemoveTodo(id, parentId) {
  return {
    type: actions.TODO_REMOVE,
    payload: { id, parentId }
  }
}

export function DoneTodo(id, done) {
  return {
    type: actions.TODO_DONE,
    payload: { id, done }
  }
}

export function EditoTodo(id, name, text, done) {
  return {
    type: actions.TODO_EDIT,
    payload: { id, name, text, done }
  }
}