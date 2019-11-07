import React, { Component } from 'react'
import {Link} from 'react-router-dom'; 
export default class Log extends Component {
    render() {
        return (
            <div class="log">
                <div class="log1">用户名：<input type="text"name='用户名'/></div>
               
                
                <div class="log1">&nbsp;密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:<input type="password"name="密码"/></div>
             

                <div class="log1">
                    <Link to="/home">
                    <button class="log11">登录</button>
                    </Link>
                    忘记密码了？
                </div>
            </div>
        )
    }
}
