import './App.css';
import { TodoCounter } from '../src/components/TodoCounter';
import { TodoSearch } from '../src/components/TodoSearch';
import { TodoList } from '../src/components/TodoList';
import { TodoItem } from '../src/components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

const todos = [
  { text: 'Cortar cebollas', completed: true},
  { text: 'Tomar el intro del curso de React', completed: false},
  { text: 'LLorar con la llorona', completed: false},
]

function App(props) {
  return (
    <>
    <TodoCounter/>
    <TodoSearch/>
    <TodoList>
        { todos.map(todo =>(<TodoItem 
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        />))}
    </TodoList>
    <CreateTodoButton/>
    </>
  );
}

export default App;
