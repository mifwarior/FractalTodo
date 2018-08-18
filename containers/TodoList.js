import TodoList from './../components/TodoList'
import {connect} from 'react-redux';
import {DoneTodo} from './../actions'
const mapSpateToProps = (state, ownProps) => {
  return {
    todos:state
  };
};
const mapDispatchToProps = (dispatch, ownProps) =>{
  return {
    onChange: (id, done) => {dispatch(DoneTodo(id, done)) }
  }
}

export default connect(mapSpateToProps, mapDispatchToProps)(TodoList);