import React, { Component } from 'react'
import {Route,Link} from 'react-router-dom'
export default class Content extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            ID:''
        }
    }
   
    componentDidMount(){
        let page=this.props.match.params;
        let Id=this.props.location.pathname.slice(9);
        fetch('https://cnodejs.org/api/v1/topics?page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            console.log("res:",res);
            this.setState({
                data:res.data,
                Id:Id
            })
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page=this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data:res.data
                })
            })
        }
    }
    render() {
        return (
            
            <div>{
                this.state.data.map((item)=>{
                    if(this.state.Id===item.id){
                    return(
                    <div style={{backgroundColor:"white",width:850,float:"left"}}
                    dangerouslySetInnerHTML={{__html:item.content}}></div>
                )
                    } 
                 } )
            }
           
            </div>
           
        )
    }
}
