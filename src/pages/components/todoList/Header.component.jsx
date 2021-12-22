import React from 'react';
import './header.styles.scss';

export default class Header extends React.Component {

    render = () => {

        return (
            
            <div className="header">
                <p className="header-title">Todo List</p>
                <div className="header-buttons">
                    <button className="ui green button">+</button>
                    <button className="ui red button">Clear All</button>
                </div>
            </div>

        );

    }

}