import React, { Component } from 'react'
import {Link,NavLink}from 'react-router-dom';
export default class Share extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
        // this.history=useHistory();
        // console.log(this.history);
    }
    componentDidMount(prevProps,prevState){

        let page=this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topics?page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res.data
            });
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.od!==this.props.match.id){
            let page=this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data:res.data
                });
        })
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map((item)=>{
                    if(item.tab=='share'){
                        console.log("this share")
                        return (
                        <div className="all"key={item.id}>
                            {/* <h2>{item.title}</h2> */}
                            <div><img  className="b"src={item.author.avatar_url}/></div>
                           
                            <div style={{float:'left',fontSize:15}}>{item.reply_count}</div>
                            <div style={{float:'left'}}>/</div>
                            <div style={{float:'left'}}>{item.visit_count}</div>
                            <div style={{width:'20',height:'20',background:'rgb(62, 221, 62)',color:'white',float:'left'}}>置顶</div>
                            <div style={{float:'left',fontSize:'15px'}}onClick={()=>{this.props.history.push('/content/'+item.id)}}>{item.title}</div>
                            <div className="b2">3天前</div>
                        </div>
                    )
                    
                        }
                    })
                }
                <div>
                <ul>
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                        <li className="b1"key={item}>
                            <NavLink activeStyle={
                                {background:'rgb(80, 79, 79)',
                                color:'#fff'}
                            } to={'/home/share/'+item}>{item}</NavLink>
                        </li>
                    ))
                }
                </ul>
                </div>
            </div>
        )
    }
}
