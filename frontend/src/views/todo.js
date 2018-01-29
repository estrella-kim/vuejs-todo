import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/todo.css';
export class Todo extends React.Component{
    render () {
        return (
            <div>
                <ul className="fiter-wrap">
                    <li>todo</li>
                    <li>doing</li>
                    <li>done</li>
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