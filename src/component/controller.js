import React, { Component } from 'react';
class Uncontrolled extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    } 

    handleChange({ target }) {
        console.log(target.value)
    }

    handleSubmit(e) {
        e.preventDefault()

        console.log(this.state.value);
    }

    render() {
        return(
            <form>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }

}

export default Uncontrolled;