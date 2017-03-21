var React=require('react');
var QuestionItem=require('./QuestionItem.jsx');
module.exports=React.createClass({
	render:function(){
		var questions=this.props.questions;
		var onVote=this.props.onVote;
		if(!Array.isArray(questions))throw new Error("cuowu");
		var queCs=questions.map(function(qts){
			return <QuestionItem key={qts.key}
				questionkey={qts.key}
				title={qts.title}
				desc={qts.desc}
				voteCount={qts.voteCount}
				onVote={onVote} />
		});
		return(
		<div id="questions">
			{queCs}
		</div>
			)
	}
})