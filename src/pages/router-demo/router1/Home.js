import React, { Component} from 'react'
import {HashRouter,Route,Link,Switch} from 'react-router-dom'
import Main from './Main.js'
import About from './About.js'
import Topics from './Topics.js'

export default class Home extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <Link to="/Main">HOME</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Topics">Topics</Link>
                    <hr/>
                    {/* Switch匹配到第一个路由就不再执行下面的路由，exact精确匹配 */}
                    <Switch>
                        <Route exact path="/Main" component={Main}></Route>
                        <Route path="/About" component={About}></Route>
                        <Route path="/Topics" component={Topics}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}