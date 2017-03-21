var React=require('react');
import {Link} from "react-router";
module.exports=React.createClass({
	contextTypes: {
    router: React.PropTypes.object
  },
	getInitialState:function(){
		var user=[
			{
				key:1,
				username:"huangma",
				password:123123
			},
			{
				key:2,
				username:"huangm",
				password:123123
			}


			];
			return{
				user:user,
				match:false,
			}
			
		
	},
	submit:function(e){
		e.preventDefault();

		if(!this.refs.username.value){
				alert("用户名不能为空");
				
		}
		else if(!this.refs.password.value){
			alert("密码不能为空");
		}
		else{
			var newUser={
				username:this.refs.username.value,
				password:this.refs.password.value,
			}
			this.setState({
				match:this.matchting(newUser),

			});
			

		}

		
		


	},
	matchting:function(user){
		for(var i in this.state.user){
			if(user.username==this.state.user[i].username){
				if(user.password==this.state.user[i].password){  console.log('sucess');return true;}
			}
			else {
				alert("不正确");
				return false;
			}
		}
	},
	 componentWillUpdate:function(nextProps,nextState){
		if(nextState.match){

			alert('sucess');
			this.context.router.push('/index');
			
		}
		

	},
	render:function(){
		
			return(
			<div className='content'>
				<p style={{position:'fixed',top:'20px',fontSize:'30px',left:'30%'}} >博客登录界面</p><br/>
				<form className="input" onSubmit={this.submit}>
				
					<div className="username">
						
						<input type="text" ref="username" className="login_text" name="username1" id="username_1" placeholder="请输入用户名"/>

					</div>
					<div className="password">
						
						<input type="password" ref='password' className="login_text" name="password1" id="password_1" placeholder="请输入密码"/>

					</div>
					
					<button type="submit"className="sumbit1 "  >登录</button>
					
					
				</form>
				
				
			</div>

		
			)

		

	}
})