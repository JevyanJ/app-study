import React, { Component } from 'react';

class Question extends Component {
    constructor(text, isSelected) {
        super();
        this.text = text;
        this.isSelected = isSelected
    }

    render () {
        return (
            <div>
                <p>{this.props.text}</p>
                <p>{this.props.isSelected ? 'Selected' : 'Not Selected'}</p>
            </div>
        );
    }
}

export default Question;
