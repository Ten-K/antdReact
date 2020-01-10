import React,{Component} from 'react'
import {HashRouter as Router, Route ,Switch} from 'react-router-dom'
import Main from './Main'
import About from '../router1/About'
import Info from './Info'
import Topics from '../router1/Topics'
import Home from './Home'

export default class IRouter extends Component{
    render(){
        return(
            <Router>
                <Home>
                    <Switch>
                        <Route path="/Main" render={()=>
                            <Main>
                                <Route path="/Main/:value" component={Info}></Route>
                            </Main>
                        }></Route>
                        <Route path="/About" component={About}></Route>
                        <Route path="/Topics" component={Topics}></Route>
                    </Switch>
                </Home>
            </Router>
        )
    }
}