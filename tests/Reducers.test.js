import TodoReducer from "./../reducers/TodoReducer";
import NavigationReducer from "./../reducers/NavigationReducer";

import { AddTodo, RemoveTodo, DoneTodo, EditoTodo, GoInto, GoHome } from "./../actions"

describe('Reducers tests', () => {
  const parent = {
    id: 1,
    done: false,
    name: "name",
    text: "text",
    childs: [2]
  }
  const child = {
    id: 2,
    done: false,
    name: "name1",
    text: "text1",
    childs: []
  }

  test('Add todo (simple)', () => {

    const todo = {
      id: 1,
      done: false,
      name: "name",
      text: "text",
      childs: []
    }

    let state = []

    state = TodoReducer(state, AddTodo(todo.name, todo.text));

    expect(state.length).toBe(1);
    expect(state[0]).toEqual(todo);
  });

  test('Add todo (fractal)', () => {
    let state = [];
 

    state = TodoReducer(state, AddTodo(parent.name, parent.text, undefined));
    state = TodoReducer(state, AddTodo(child.name, child.text, parent.id));

    expect(state.length).toBe(2);
    expect(state[0]).toEqual(parent);
    expect(state[1]).toEqual(child);
  });

  test('Remove todo (simple)', () => {

    let state = [
        parent,
        child
      ];

    state = TodoReducer(state, RemoveTodo(parent.id));
    state = TodoReducer(state, RemoveTodo(child.id));

    expect(state.length).toBe(0);

  });

  test('Remove todo (fractal)', () => {
    let state = [
        parent,
        child
      ];

    state = TodoReducer(state, RemoveTodo(child.id, parent.id));
    expect(state[0]).toEqual({
      ...parent, childs: []
    });
    state = TodoReducer(state, RemoveTodo(parent.id));

    expect(state.length).toBe(0);
  });


  test('Done todo (simple)', () => {
    let state = [
        parent,
        child
      ];

    state = TodoReducer(state, DoneTodo(child.id));

    expect(state[1]).toEqual({
      ...child, done: true
    });
    state = TodoReducer(state, DoneTodo(parent.id));

    expect(state[0]).toEqual({
      ...parent, done: true
    });

    expect(state.length).toBe(2);
  });

  test('Done todo (fractal)', () => {
    let state = [
        parent,
        {...child, id:2, childs:[3]},
        {...child, id:3, childs:[]},
      ];
    const len = state.length;

    state = TodoReducer(state, DoneTodo(parent.id));

    expect(state[2]).toEqual({
      ...child, id:3, childs:[], done: true
    });

    expect(state[0]).toEqual({
      ...parent, done: true
    });

    expect(state.length).toBe(len);
  });


  test('Edit todo', () => {
    const name = "NEWNAME";
    const text = "newText";
    const done = true;

    let state = [
        parent,
      ];

    state = TodoReducer(state, EditoTodo(parent.id, name));

    expect(state[0]).toEqual({
      ...parent, name
    });

    state = TodoReducer(state, EditoTodo(parent.id, name, text));

    expect(state[0]).toEqual({
      ...parent, name, text
    });
    state = TodoReducer(state, EditoTodo(parent.id, name, text, done));

    expect(state[0]).toEqual({
      ...parent, name, text, done
    });

    expect(state.length).toBe(1);
  });

  test('Navigation', () => {

    let state = 0;
    state = NavigationReducer(state, GoInto(2));

    expect(state).toBe(2);
    state = NavigationReducer(state, GoHome());

    expect(state).toBe(0);
  });

});