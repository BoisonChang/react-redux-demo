import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch} from 'react-redux'
import { selectorTodos } from './redux/selectors'
import AddTodo from  './containers/AddTodo'
import { deleteTodo } from './redux/actions'

function App() {
  // useSelector(store => store.todoState.todos)
  const todos = useSelector(selectorTodos);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <AddTodo />
      <ul>
        {todos.map(todo => <li> id: {todo.id} ; name: {todo.name}
          <button onClick={() => dispatch(deleteTodo(todo.id))}>delete</button>
        </li>)}
      </ul>
    </div>
  );
}

export default App;
