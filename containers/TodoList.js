import TodoList from './../components/TodoList'
import {connect} from 'react-redux';
import {DoneTodo, GoInto} from './../actions'

function findTodos (id, todos){
  if(id === 0) return todos;
  const todo = todos.find((todo)=>{
    return todo.id === id;
  });
  if(todo){
    const ids = todo.childs;
    return todos.filter((todo)=>{
      return ~ids.indexOf(todo.id);
    });
  } else {
    return todos;
  }
}

const mapSpateToProps = (state, ownProps) => {
 
  const todos = findTodos(state.activeTodo, state.todos); 
  console.log(todos);
  return {
    todos:todos.filter(({done})=>{
      return !done;
    })
  };
};
const mapDispatchToProps = (dispatch, ownProps) =>{
  return {
    onDone: (id, done) => {dispatch(DoneTodo(id, done)) },
    onInto: (id) => { dispatch(GoInto(id))}
  }
}

export default connect(mapSpateToProps, mapDispatchToProps)(TodoList);