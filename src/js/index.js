import React from 'react'
import ReactDom from 'react-dom'
import {Router,Route,hashHistory} from 'react-router'
import MediaQuery from 'react-responsive' 

import PCIndex from './components/pc/pc_index'
import MobileIndex from './components/mobile/mobile_index'

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
					<PCIndex/>
				</MediaQuery>
				<MediaQuery query="(max-device-width:1224px)">
					<MobileIndex/>
				</MediaQuery>
			</div>
		)
	}
}

ReactDom.render(
	<Root/>,
	document.getElementById('app')
);