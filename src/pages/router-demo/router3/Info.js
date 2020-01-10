import React, { Component} from 'react'

export default class Info extends Component{
    render(){
        return(
            <div>
                this is info
                动态路由的值:{this.props.match.params.value}
            </div>
        )
    }
}