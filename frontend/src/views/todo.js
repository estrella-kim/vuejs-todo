import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/todo.css';

export class Todo extends React.Component{
    render () {
        return (
            <div>
                <ul className="filter-wrap">
                    <li><input type="radio"/>todo</li>
                    <li><input type="radio"/>doing</li>
                    <li><input type="radio"/>done</li>
                </ul>
                <div className="lists-wrap">
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Todo/>, document.getElementById('todo'));