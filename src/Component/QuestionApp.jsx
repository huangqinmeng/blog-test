import React, { Component, PropTypes } from 'react';
import {Link} from "react-router";
import '../bower_components/font-awesome-4.7.0/css/font-awesome.css';
var Show=require('./show.jsx');

var QuestionForm=require('./QuestionForm.jsx');
var QuestionList=require('./QuestionList.jsx');
var QuestionItem=require('./QuestionItem.jsx');
var _=require('lodash');
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          questions:[
		{
			key: 1,
			title:'博客置顶排序',
			desc:'当你点击点赞，文章会根据点赞数自动排序并更新',
			voteCount:20,

		},
		{
			key:2,
			title:'请给我点赞',
			desc:'简单的博客功能',
			voteCount:15,

		},
		],
        }
    

	this.ontoggleForm= () => {
		this.setState({
			formDisplay:!this.state.formDisplay,
		})

	}
	this.onNewQues= (newQuestion) => {
		newQuestion.key=this.state.questions.length+1;		
		var newQuestions=this.state.questions.concat(newQuestion);
		newQuestions=this.sortQues(newQuestions);

		this.setState({
			questions:newQuestions,
		})

	}
	this.sortQues=(questions)=>{
		questions.sort(function(a,b){
			return b.voteCount-a.voteCount;
		});
		return questions;
	}
	this.onVote=(key,newCount)=>{
		var questions= _.uniq(this.state.questions);
		var index=_.findIndex(questions,function(qts){
			return qts.key==key;
		});
		questions[index].voteCount=newCount;
		questions=this.sortQues(questions);
		this.setState({
			questions:questions,
		})
	}
}

	render(){
		return(
<div>
	<div className="top">
		<span>
			<b>简单的blog</b>
		</span>
		<Show ontoggleForm={this.ontoggleForm} />
	</div>
	<QuestionForm 
	onNewQues={this.onNewQues} 
	ontoggleForm={this.ontoggleForm} 
	formDisplay={this.state.formDisplay} />
	<QuestionList 
	questions={this.state.questions}
	onVote={this.onVote} />
{this.props.children}
</div>
			);
	}
}

export default Main