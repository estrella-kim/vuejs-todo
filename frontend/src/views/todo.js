import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/todo.css';
import { Button } from '../components/index';

export class Todo extends React.Component{
    constructor () {
        super();
        this.state = {
            text : '',
            lists : []
        }
        this.lists = [];
    }
    registerList (e) {
        if(e) e.preventDefault();
        this.lists.push(this.state.text);
        console.log(this.lists);
        this.setState({
            lists : this.lists,
            text : ''
        })
    }
    getText (e) {
        const text = e.target.value;
        this.setState({
            text : text
        })
    }
    render () {
        return (
            <div>
                <div className="write-list">
                    <form onSubmit={(e) => this.registerList(e)}>
                        <input type="text" onChange={(e) => this.getText(e) } value={this.state.text}/>
                        <Button onClick={() => this.registerList()}/>
                    </form>
                </div>
                <ul className="filter-wrap">
                    <li><label><input type="radio" name="todo-list"/>todo</label></li>
                    <li><label><input type="radio" name="todo-list"/>doing</label></li>
                    <li><label><input type="radio" name="todo-list"/>done</label></li>
                </ul>
                <div className="lists-wrap">
                    <ul>
                        { this.state.lists.map((v, i) => (<li key={i}>{v}</li>))}
                    </ul>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Todo/>, document.getElementById('todo'));