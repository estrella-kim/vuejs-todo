import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/todo.css';
import { Button } from '../components/index';
import  axios  from 'axios';

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
        console.log(axios)
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
    delete () {
        console.log('delete');
    }
    modify() {
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
                </div>f
                <ul className="filter-wrap">
                    <li><label><input type="radio" name="todo-list"/>todo</label></li>
                    <li><label><input type="radio" name="todo-list"/>doing</label></li>
                    <li><label><input type="radio" name="todo-list"/>done</label></li>
                </ul>
                <div className="lists-wrap">
                    <ul>
                        { this.state.lists.map((v, i) => (<li key={i}>{v}<Button buttonText="삭제" onClick={this.delete}/><Button buttonText="수정" onClick={this.modify}/></li>))}
                    </ul>
                </div>
            </div>
        )
    }
}