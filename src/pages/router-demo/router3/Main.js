import React, { Component} from 'react'
import {Link} from 'react-router-dom'

export default class Main extends Component{
    render(){
        return(
            <div>
                this is main
                <br/>
                <Link to="/Main/test-id">嵌套路由</Link>
                <br/>
                <Link to="/Main/456">嵌套路由22</Link>
                {this.props.children}
            </div>
        )
    }
}