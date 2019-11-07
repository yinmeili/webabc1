import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import All from './All';
import Jinghua from './Jinghua';
import Share from './Share';
import Answer from './Answer';
import Job from './Job';

export default class Home extends Component {
    render() {
        let {url} = this.props.match
        // console.log(this.props)
        return (
            <div>
                <div class="a">
                    {/* <Link to={`${url}/all`}>全部</Link>
                    <Link to={`${url}/jinghua`}>精华</Link>
                    <Link to={`${url}/share`}>分享</Link> */}
                    <Link to='/home/all/:id'>全部</Link>
                    <Link class="a"to='/home/jianghua:id'>精华</Link>
                    <Link class="a"to='/home/share:id'>分享</Link>
                    <Link class="a"to='/home/answer:id'>答案</Link>
                    <Link class="a"to='/home/job:id'>招聘</Link>
                    {/* <Link class="a"to='/home/customer'>客户端测试</Link> */}
                    
                </div>
                <div>
                    {/* <Route path={url+'/all'} component={All}/> */}
                    {/* <Route path='/home/jinghua' component={Jinghua}/> */}
                    <Route path='/home/all/:id'component={All}/>
                    <Route path='/home/jianghua:id'component={Jinghua}/>
                    <Route path='/home/share:id'component={Share}/>
                    <Route path='/home/answer:id'component={Answer}/>
                    <Route path='/home/job:id'component={Job}/>
                    {/* <Route path='/home/customer'component={Customer}/> */}
                 
                </div>
            </div>
        )
    }
}