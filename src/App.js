import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { selectorTodos } from './redux/selectors'
import { addTodo } from './redux/actions'

function App() {
  // useSelector(store => store.todoState.todos)
  const todos = useSelector(selectorTodos);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => {
        dispatch(addTodo( Math.random() ))
      }}> add todo </button>
      <ul>
      {todos.map(todo => <li> id: {todo.id} ; name: {todo.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
