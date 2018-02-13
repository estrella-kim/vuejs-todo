import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/todo.css';
import { Button } from '../components/index';
import axios from 'axios';
const $http = axios;

export class Todo extends React.Component{
    constructor () {
        super();
        this.lists = [];
        this.state = {
            text : '',
            lists : this.lists
        }
    }
    componentDidMount () {
        let getLists = () => {
            let _this = this;
            $http.get('http://localhost:8000/todo')
                .then(function (res) {
                    res.data.forEach(function (value, index) {
                        const list = {
                            index : value.index,
                            text : value.todo,
                            status : value.isDone
                        }
                        _this.lists.push(list);
                    })
                    _this.setState({
                        lists : _this.lists
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
        this.setState({
            lists : this.lists,
            text : ''
        })
        $http.post('http://localhost:8000/todo', this.state)
            .then(function(res){
                console.log(res);
            })
    }
    filterLists (e) {
        const filter = e.target.value;
        const arr = [];
        this.setState({
            lists : this.lists
        })
        if(filter === 'todo'){
            this.lists.forEach(function(value, index){
                if(value.status === 0) {
                    arr.push(value);
                }
            })
            this.setState({
                lists : arr
            })
        }else if(filter === 'done') {
            this.lists.forEach(function(value, index){
                if(value.status === 1) {
                    arr.push(value);
                }
            })
            this.setState({
                lists : arr
            })
        }

    }
    getText (e) {
        const text = e.target.value;
        this.setState({
            text : text
        })
    }
    delete (index) {
        console.log('delete', index.target);
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
                        <Button buttonText="입력" onClick={ e => this.registerList(e) }/>
                    </form>
                </div>
                <ul className="filter-wrap">
                    <li><label><input type="radio" name="todo-list" value='all' onChange={(e) => this.filterLists(e)}/>all</label></li>
                    <li><label><input type="radio" name="todo-list" value='todo' onChange={(e) => this.filterLists(e)}/>todo</label></li>
                    <li><label><input type="radio" name="todo-list" value='done' onChange={(e) => this.filterLists(e)}/>done</label></li>
                </ul>
                <div className="lists-wrap">
                    <ul>
                        { this.state.lists.map((v, i) => (<li key={i}>{v.index}{v.status}{v.text}<Button buttonText="삭제" onClick={ i => this.delete(i)}/><Button buttonText="수정" onClick={ i => this.modify(i) }/></li>))}
                    </ul>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Todo/>, document.getElementById('todo'));

