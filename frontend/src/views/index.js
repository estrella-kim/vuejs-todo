import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../components/button';

export class Test extends React.Component{
    render () {
        return (
            <div>
                <span>this is test component</span>
                <Button/>
            </div>
        )
    }
}
ReactDOM.render(<Test/>, document.getElementById('test'));