import React from 'react';

export default class EditInput extends React.Component{
    constructor(props) {
        super(props);
    }
    render () {
        return(
            <form onSubmit={this.props.onSubmit}>
                <input type="text" value={this.props.text} onChange={this.props.onChange}/>
            </form>
        )
    }
}