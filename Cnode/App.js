// import React, { Component } from 'react'
// import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
// import Hoc from './Hoc/Hoc';
// import Parent from './Context/Parent';
// import Sider from './Sider';
// import NoMatch from './NoMatch';
// import Content from './Router/Content';
// import Hooks from './Router/Hooks';
// function Login(props){
//     console.log(props);
//     return <button>登录</button>
// }
// // let LoginWithRouter=withRouter(Login);
// export default class App extends Component {
//     render() {
//         return (
//             <Router basename="/build">
//                 <div>
                    
//                     {/* <Content>
//                         <h2>这是children的内容</h2>
//                         <ul>
//                             <li>1</li>
//                         </ul>
//                     </Content> */}
//                     <Sider/>
//                     <div style={
//                         {float:'left',
//                         border:'2px solid red',
//                         marginLeft: 100}
//                     }>
//                     <Switch>
//                         <Route exact path='/hoc' component={Hoc} />
//                         <Route path='/parent' component={Parent}/>
//                         {/* <Redirect from='/old' to='/hoc'/> */}
//                         <Route path='/old' render={()=><Redirect to='/hoc'/>}/>
//                         <Route path='/content/:id' component={Content}/>
//                         <Route path='/hooks/:id'component={Hooks}/>
//                         <Route>
//                             <NoMatch/>
//                         </Route>
//                     </Switch>
//                     </div>
//                 </div>  
//             </Router>
//         )
//     }
// }





import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Log from './container/Log';
import Content from './container/Content';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                </div>
                <div className='content'>
                    <div className="left">
                        <Route path='/home' component={Home}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/log'component={Log}/>
                        <Route path='/content'component={Content}/>
                    </div>
                    <div className="right">
                        <div className="right1">
                            <p>CNode:Node.js专业中文社区</p>
                            <p>您可以登录或注册，也可以</p>
                            <button className="right11">通过GitHub登录</button>
                        </div>
                        <div className="right2">
                            <p>闲时流量包，5折优惠</p>
                        </div>
                        <div className="right2">
                            <h4>全球云服务器2折</h4>
                        </div>
                        <div className="right3">
                            <h4>alinode</h4>
                        </div>
                        <div className="right4">
                            <p>无人回复的话题</p>
                            <p>一个支援socket io,websocket,unix sock...node安装完成后npm-v检查报错
                                前端react window.location.href='下载路...一种支持插件开发的命令行工具开发模式请问
                                缓存的内存模型是什么呢'
                            </p>
                        </div>
                        
                    </div>
                </div>
            </Router>
        )
    }
}