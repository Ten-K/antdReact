import React, { Component} from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component{
    render(){
        return(
                <div>
                    <ul>
                        <li>
                            <Link to="/Main">HOME1</Link>
                        </li>
                        <li>
                            <Link to="/About">About1</Link>
                        </li>
                        <li>
                            <Link to="/Topics">Topics1</Link>
                        </li>
                    </ul>
                    {this.props.children}
                </div>
        )
    }
}