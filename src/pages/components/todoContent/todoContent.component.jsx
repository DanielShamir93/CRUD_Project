import React from 'react';
import Api from '../../../api.js';
import { Link } from 'react-router-dom';

export default class TodoContent extends React.Component {

    state = { todoContent: '' }

    componentDidMount = async () => {
        const api = new Api(`https://61c2fce49cfb8f0017a3e843.mockapi.io/api/todos/${parseInt(this.props.match.params.id)}`);
        const todoContent = (await api.getData()).data;
        this.setState({ todoContent })
    }
    
    render = () => {

        return (
            
            <form className="Todo-content">
                <p>{this.state.todoContent.title}</p>
                <textarea cols="30" rows="10" value={this.state.todoContent.content}></textarea>
                <Link className="ui primary button" to="/">Back</Link>
                <button className="ui secondary button" type="button">Save</button>
            </form>

        );

    }

}