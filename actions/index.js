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

export function DoneTodo(id) {
  return {
    type: actions.TODO_DONE,
    payload: { id }
  }
}

