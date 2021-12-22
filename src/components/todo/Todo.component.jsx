import React from 'react';
import { Link } from 'react-router-dom';
import './todo.styles.scss';

export default class Todo extends React.Component {

    render = () => {

        return (
            
            <div className="Todo">
                <Link className="ui primary button" to={this.props.link}>{this.props.title}</Link>
                <div>
                    <button className="ui yellow button edit">Edit</button>
                    <button className="ui orange button">X</button>
                </div>
            </div>
            
        );

    }

}