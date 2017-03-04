import React from 'react'
import { BackTop } from 'antd'

import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'

export default class MobileDetails extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {
			newsItem: ''
		}
	};
	componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		}
		fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=' + this.props.params.uniquekey,myFetchOptions)
		.then(response=>response.json())
		.then(json=>{
			this.setState({
				newsItem: json
			})
			document.title = this.state.newsItem.title + ' - React News'
		})
	}
	createMarkup(){
		return {__html: this.state.newsItem.pagecontent}
	};
	render() {
		return ( 
			<div id="mobileDetailContainer">
				<MobileHeader/>
				<div className="ucmobileList">
				<div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
				<BackTop/>
				<MobileFooter/>
				</div>
			</div>
		);
	}
}