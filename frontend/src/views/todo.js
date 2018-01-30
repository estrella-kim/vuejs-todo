import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/todo.css';
import { Button } from '../components/index';

export class Todo extends React.Component{
    constructor () {
        super();
        this.state = {
            list : '',
            lists : []
        }
        this.lists = [];
    }
    registerList (e) {
        if(e) e.preventDefault();
        this.lists.push(this.state.list);
        this.setState( {
            lists : this.lists,
            list : ''
        })
    }
    changeList (e) {
        const list = e.target.value;
        console.log(e.target.value);
        this.setState({
            list : list
        })
    }
    render () {
        return (
            <div>
                <div className="write-list">
                    <form onSubmit={(e) => this.registerList(e)}>
                        <input type="text" onChange={(e) => this.changeList(e)} value={this.state.list}/>
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
                        { this.state.lists.map((i, v) => (<li key={i}>{this.state.list}</li>))}
                    </ul>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Todo/>, document.getElementById('todo'));