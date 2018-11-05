import React, { Component } from 'react'
import './lists.css'

class Condition extends Component {
    constructor(props){
        super(props)
        this.state = {
            bool: false
        }
        this.handleEnter = this.handleEnter.bind(this)
        this.handleOut = this.handleOut.bind(this)
    }

    componentDidMount() {

    }


    handleEnter() {
        this.props.handleBoolean(true)
        this.setState({
            bool: true
        })
    }
    handleOut() {
        this.setState({
            bool: false
        })
        this.props.handleBoolean(false)
    }
    handleClick(id, key) {
        this.props.deleteLabel(id,key)
    }

    render() {
        let { data } = this.props
        return(
            <span
                className={this.state.bool?'active':''}
                onMouseEnter={this.handleEnter} 
                onMouseLeave={this.handleOut}>
                {data.name}
                <em onClick={this.handleClick.bind(this,data.id, data.key)}>X</em>
            </span>
        )
    }
}

export default Condition