import React from 'react';
import {Input,Button} from 'antd';
import "./login.css";

class login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            pwd : ''
        }
    }
    handleClick() {
        if(this.state.name === "admin" && this.state.pwd === "112233"){
            alert("登陆成功")
        }else{
            alert("登陆失败")
        }
      }
    render(){
    return(
            <div class="box">
            <h1>登陆</h1>
            <div class="input_box">
            <Input value={this.state.name} onChange={(e)=>this.textChangedName(e)}  placeholder="请输入用户名"/>
            </div>
            <div class="input_box">
            <Input value={this.state.pwd} onChange={(e)=>this.textChangedPwd(e)} placeholder="请输入密码"/>
            </div>
            <div class="input_box">
            <Button type="submit" name="button" value="登录" onClick={(e) => this.handleClick(e)} >登陆</Button>
            </div>
        </div>
    )
    }
    textChangedName=(e)=>{
        console.log(e.target.value)
        this.setState({
            name:e.target.value,
        })
    }
    textChangedPwd=(e)=>{
        console.log(e.target.value)
        this.setState({
            pwd:e.target.value,
        })
    }
}export default login;
