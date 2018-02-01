import React from 'react';

export default class Button extends React.Component{
    constructor (props) {
        super(props);
    }


    render () {
        return(
                <button type="button" onClick={ this.props.onClick }>{this.props.buttonText } </button>
        )
    }
}
ReactDOM.render(<Button/>, document.getElementById('button'))