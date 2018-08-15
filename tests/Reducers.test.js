import reducer from "./../reducers/index";
import {AddTodo, RemoveTodo, DoneTodo} from "./../actions"

describe('Reducers tests', () => {
  const parent = {
    id: 1,
    done:false,
    name:"name",
    text:"text",
    childs:[2]
  }
  const child = {
    id: 2,
    done:false,
    name:"name1",
    text:"text1",
    childs:[]
  }
  
  test('Add todo (simple)', () => {

    const todo = {
      id: 1,
      done:false,
      name:"name",
      text:"text",
      childs:[]
    }

    let state = [];
    state = reducer(state, AddTodo(todo.name, todo.text));
    
    expect(state.length).toBe(1);
    expect(state[0]).toEqual(todo);
  });

  test('Add todo (fractal)', () => {
    let state = [];

    state = reducer(state, AddTodo(parent.name, parent.text, undefined));
    state = reducer(state, AddTodo(child.name, child.text, parent.id));
    
    expect(state.length).toBe(2);
    expect(state[0]).toEqual(parent);
    expect(state[1]).toEqual(child);
  });

  test('Remove todo (simple)', () => {
    
    let state = [
      parent,
      child  
    ];

    state = reducer(state, RemoveTodo(parent.id));
    state = reducer(state, RemoveTodo(child.id));
    
    expect(state.length).toBe(0);

  });

  test('Remove todo (fractal)', () => {
    let state = [
      parent,
      child  
    ];

    state = reducer(state, RemoveTodo(child.id, parent.id));
    expect(state[0]).toEqual({
      ...parent, childs:[]
    });
    state = reducer(state, RemoveTodo(parent.id));
        
    expect(state.length).toBe(0);
  });

  
  test('Done todo (simple)', () => {
    let state = [
      parent,
      child  
    ];

    state = reducer(state, DoneTodo(child.id));
    expect(state[1]).toEqual({
      ...child, done:true
    });
    state = reducer(state, DoneTodo(parent.id));
       
    expect(state[0]).toEqual({
      ...parent, done:true
    });

    expect(state.length).toBe(2);
  });

  test('Done todo (fractal)', () => {
    let state = [
      parent,
      child  
    ];

    state = reducer(state, DoneTodo(parent.id));

    expect(state[1]).toEqual({
      ...child, done:true
    });
    
    expect(state[0]).toEqual({
      ...parent, done:true
    });

    expect(state.length).toBe(2);
  });

});