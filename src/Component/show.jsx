var React=require('react');

module.exports=React.createClass({
	
	render:function(){
		return(
			<div>
			<button id="addques" onClick={this.props.ontoggleForm}>添加问题</button>
			{this.props.children}
			</div>
			);
	}
})