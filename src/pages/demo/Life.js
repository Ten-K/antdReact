import React, { Component } from 'react'
import Child from './Child'
import {Button, Input} from 'antd'
import './index.less'

export default class Life extends Component{
	constructor(props){
		super(props);
		this.state = {
			count: 0
		};
	}
	// 你必须谨慎对待 JSX 回调函数中的 this，类的方法默认是不会绑定 this 的。
	// 如果你忘记绑定 this.handleClick 并把它传入 onClick, 当你调用这个函数的时候 this 的值会是 undefined。
	handleAdd = ()=>{
		this.setState({
			count: this.state.count + 1
		})
	}
	handleClick(){
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
		return (
			<div className="content">
				<p>React生命周期介绍</p>
				<Input></Input>
				<Button onClick={this.handleAdd}>点击一下</Button>
				<button onClick={this.handleAdd}>点击一下</button>
				<button onClick={this.handleClick.bind(this)}>点击一下</button>
				<p>{this.state.count}</p>
				<Child name={this.state.count}></Child>
			</div>
		);
	}
}