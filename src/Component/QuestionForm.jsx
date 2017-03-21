var React=require('react');

module.exports=React.createClass({
	handle:function(e){
		e.preventDefault();
		if(!this.refs.titles.value){
				alert("标题不能为空");
				
		}
		else if(!this.refs.desc.value){
			alert("内容不能为空");
		}
		else{
				var newQuestion={
					title:this.refs.titles.value,
					desc:this.refs.desc.value,
					voteCount:0,
				}
				this.refs.addQues.reset();
				this.props.onNewQues(newQuestion);
		}
				
			
		
	},
	render:function(){
		var styleObj={
			display:this.props.formDisplay?"block":"none",
		}
		return(

			<form ref="addQues" style={styleObj} className="question"onSubmit={this.handle}>
		问题<br/>
		<br/>
		<input type="text" ref="titles" placeholder="您的问题的标题" className="questitle"/>
		<br/>
		<textarea ref="desc" placeholder="问题的描述" className="quesdesc"></textarea>
		<br/>
		<button className="submit">确认</button>
		<a className="esc"onClick={this.props.ontoggleForm}>取消</a>
		
		
	</form>
			);
	}
})