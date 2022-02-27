import logo from './logo.svg';
import './App.css';
import { useSelector} from 'react-redux'
import { selectorTodos } from './redux/selectors'
import AddTodo from  './containers/AddTodo'

function App() {
  // useSelector(store => store.todoState.todos)
  const todos = useSelector(selectorTodos);

  return (
    <div className="App">
      <AddTodo />
      <ul>
      {todos.map(todo => <li> id: {todo.id} ; name: {todo.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
