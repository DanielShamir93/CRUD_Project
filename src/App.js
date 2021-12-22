import { BrowserRouter, Route } from 'react-router-dom';
import TodoList from './pages/components/todoList/TodoList.component';
import TodoContent from './pages/components/todoContent/todoContent.component';
import './styles/normalize.scss';
import './styles/reset.scss';
import './styles/app.scss';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={ TodoList }/>
        <Route path="/todos/:id" exact component={ TodoContent } />
      </BrowserRouter>
    </div>
  );
}

export default App;
