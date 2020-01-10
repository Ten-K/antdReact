import React,{Component} from 'react'
import {HashRouter as Router, Route , Link} from 'react-router-dom'
import Main from './Main'
import About from '../router1/About'
import Topics from '../router1/Topics'
import Home from './Home'

export default class IRouter extends Component{
    render(){
        return(
            <Router>
                <Home>
                    <Route path="/Main" render={()=>
                        <Main>
                            <Route path="/Main/a" component={About}></Route>
                        </Main>
                    }></Route>
                    <Route path="/About" component={About}></Route>
                    <Route path="/Topics" component={Topics}></Route>
                </Home>
            </Router>
        )
    }
}