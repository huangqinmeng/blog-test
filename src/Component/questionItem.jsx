var React=require('react');

module.exports=React.createClass({
	voteUp:function(e){
		var newCount=parseInt(this.props.voteCount)+1;
		this.props.onVote(this.props.questionkey,newCount);
		
	},
	voteDown:function(e){
		var newCount=parseInt(this.props.voteCount)-1;
		this.props.onVote(this.props.questionkey,newCount);
	},
	render:function(){
		return(
			
		<div key={this.props.key} style={{marginTop:'20px'}}>
			<div>
				<button onClick={this.voteUp} className="up"><i className="fa fa-chevron-up" aria-hidden="true" ></i><p>{this.props.voteCount}</p></button>
				<div style={{marginLeft:'50px'}}>
					<h2>{this.props.title}</h2>
					<p>{this.props.desc}</p>
				</div>
				
				<button onClick={this.voteDown} className="down"><b className="fa fa-chevron-down" aria-hidden="true" ></b></button>

				
			</div>
		</div>
			)
	}
})