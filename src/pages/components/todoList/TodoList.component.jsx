import React from 'react';
import Todo from '../../../components/todo/Todo.component';
import Header from './Header.component';
import Api from '../../../api.js';
import './todoList.styles.scss';

export default class TodoList extends React.Component {

    state = { todoList: [] }

    componentDidMount = async () => {
        const api = new Api('https://61c2fce49cfb8f0017a3e843.mockapi.io/api/todos');
        const todoList = (await api.getData()).data;
        this.setState({ todoList })
    }

    renderTodoList = () => {
        return (
            this.state.todoList.map((todo) => {
                return <Todo link={`/todos/${todo.id}`} id={todo.id} key={todo.id} title={todo.title} />
            })
        );        
    }

    render = () => {

        return (
            
            <div className="Todo-list">
                <Header />
                <div>
                    {this.renderTodoList()}
                </div>
            </div>

        );

    }

}