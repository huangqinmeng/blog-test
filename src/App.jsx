import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
// import {Provider} from 'react-redux';
// // import route from './Router/Route'; //路由配置
// import store from './Redux/Store/Store';
// import './Config/Config.js';//引入默认配置

import './Style/login.css';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

// store.subscribe(() => { //监听state变化
//     //console.log(store.getState())
// });
import login from './Component/login'; 


class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


const QuestionApp = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./Component/QuestionApp').default)
    },'QuestionApp')
}



// const saleRecord = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('./Component/saleRecord').default)
//     },'saleRecord')
// }

// const allDeposit = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('./Component/allDeposit').default)
//     },'allDeposit')
// }

// const applyRecord = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('./Component/applyRecord').default)
//     },'applyRecord')
// }

// const applyDeposit = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('./Component/applyDeposit').default)
//     },'applyDeposit')
// }


render(
	
      <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={login} />//首页
            
           
            <Route path="index" getComponent={QuestionApp} />//销售记录
         
            //提现记录
            <Redirect from='*' to='/'  />
        </Route>
    </Router>,
    
    document.getElementById('app')
);

