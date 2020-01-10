import React, { Component } from 'react'

export default class Child extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        };
    }
    static getDerivedStateFromProps(props, state) {

        console.log("组件初始化:getDerivedStateFromProps:" + props)
        console.log(state)
        console.log(props)
        //组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)，每次获取新的props或state之后;
        //每次接收新的props之后都会返回一个对象作为新的state，返回null则说明不需要更新state
        return state
    }
    componentDidCatch(error, info) { // 获取到javascript错误
        console.log(error,info)
    }
    render(){
        return(
            <div>
                <p>这是子组件:</p>
                <p>{this.props.name}</p>
            </div>
        )
    }

    // componentWillMount(){
    //     console.log("初始化数据，渲染前：componentWillMount")
    // }
    componentDidMount(){
        console.log("DOM挂载后，已经渲染了：componentDidMount")
    }
    // componentWillReceiveProps(newProps){
    //     console.log("组件收到新的props：componentWillReceiveProps：" + newProps)
    // }
    shouldComponentUpdate(newState){
        console.log("组件发生了更新，组件是否更新：shouldComponentUpdate：" + newState)
        return true;
    }
    // componentWillUpdate(){
    //     console.log("组件开始更新：componentWillUpdate")
    // }
    componentDidUpdate(){
        console.log("组件完成更新：componentDidUpdate")
    }
    componentWillUnmount() {
        console.log("组件被卸载：componentWillUnmount")
    }
} 