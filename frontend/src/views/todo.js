import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/todo.css';
import { Button } from '../components/index';
import axios from 'axios';
const $http = axios;
const lists = [];


export class Todo extends React.Component{
    constructor () {
        super();
        this.state = {
            text : '',
            lists : lists
        }
        this.lists = lists;
    }
    componentDidMount () {
        let getLists = () => {
            $http.get('http://localhost:8000/todo')
                .then(function (res) {
                    console.log(res.data);
                    res.data.forEach(function (value, index) {
                        console.log(value.todo);
                        lists.push(value.todo);
                    })
                })
        }
        getLists();
    }
    registerList (e) {
        if(e) {
            e.preventDefault();
        }
        console.log('register');
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
    handleClick (e) {
        e.preventDefault();
        console.log('click');
    }
    delete (index) {
        console.log(index);
        console.log('delete');
    }
    modify(index) {
        console.log(index);
        console.log('modify');
    }
    render () {
        return (
            <div>
                <div className="write-list">
                    <form onSubmit={(e) => this.registerList(e)}>
                        <input type="text" onChange={(e) => this.getText(e) } value={this.state.text}/>
                        <Button buttonText="입력" onClick={ e => this.handleClick(e) }/>
                    </form>
                </div>
                <ul className="filter-wrap">
                    <li><label><input type="radio" name="todo-list"/>todo</label></li>
                    <li><label><input type="radio" name="todo-list"/>doing</label></li>
                    <li><label><input type="radio" name="todo-list"/>done</label></li>
                </ul>
                <div className="lists-wrap">
                    <ul>
                        { this.state.lists.map((v, i) => (<li key={i}>{v}<Button buttonText="삭제" onClick={ i => this.delete(i)}/><Button buttonText="수정" onClick={ i => this.modify(i) }/></li>))}
                    </ul>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Todo/>, document.getElementById('todo'));

