import React from 'react'
import ReactDom from 'react-dom'
import {Router,Route,hashHistory} from 'react-router'
import MediaQuery from 'react-responsive' 

import PCIndex from './components/pc/pc_index'
import PCNewsDetails from './components/pc/pc_news_details'
import MobileIndex from './components/mobile/mobile_index'
import MobileDetails from './components/mobile/mobile_details'

import 'antd/dist/antd.css'

class Root extends React.Component
{
	constructor(){
		super()
	};

	render(){
		return(
			<div>
				<MediaQuery query='(min-device-width: 1224px)'>
					<Router history={hashHistory}>
						<Route path="/" component={PCIndex}/>
						<Route path="/details/:uniquekey" component={PCNewsDetails}/>
					</Router>
				</MediaQuery>
				<MediaQuery query="(max-device-width:1224px)">
					<Router history={hashHistory}>
						<Route path="/" component={MobileIndex}/>
						<Route path="/details/:uniquekey" component={MobileDetails}/>
					</Router>
				</MediaQuery>
			</div>
		)
	}
}

ReactDom.render(
	<Root/>,
	document.getElementById('app')
);