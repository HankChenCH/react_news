import React from 'react'
import { Row,Col,BackTop } from 'antd'

import PCHeader from './pc_header'
import PCFooter from './pc_footer'
import PCNewsImageBlock from './pc_news_image_block'

export default class PCNewsDetails extends React.Component
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
			<div>
				<PCHeader/>
				<Row>
					<Col span={2}></Col>
					<Col span={14}>
						<div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
					</Col>
					<Col span={6}>
						<PCNewsImageBlock type="top" count={30} width="100%" bordered={false} cartTitle="相关新闻" imageWidth="133px"/>
					</Col>
					<Col span={2}></Col>
				</Row>
				<BackTop/>
				<PCFooter/>
			</div>
		);
	}
}