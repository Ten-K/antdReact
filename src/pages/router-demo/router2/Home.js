import React, { Component} from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component{
    render(){
        return(
                <div>
                    <Link to="/Main">HOME1</Link>
                    <Link to="/About">About1</Link>
                    <Link to="/Topics">Topics1</Link>
                    {this.props.children}
                </div>
        )
    }
}