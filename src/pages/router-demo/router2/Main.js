import React, { Component} from 'react'
import {Link} from 'react-router-dom'

export default class Main extends Component{
    render(){
        return(
            <div>
                this is main
                <Link to="/Main/a">嵌套路由</Link>
                {this.props.children}
            </div>
        )
    }
}