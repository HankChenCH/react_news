import React from 'react'
import { Row,Col,Tabs,Carousel } from 'antd'

const TabPane = Tabs.TabPane 

import PCNewsBlock from './pc_news_block'
import PCNewsImageBlock from './pc_news_image_block'

export default class PCNewsContainer extends React.Component
{
	constructor(props) {
		super(props);
		
	};

	render() {
		const setting = {
			dots:true,
			infinite:true,
			speed:500,
			slidesToShow:1,
			autoplay:true
		}
		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20}>
						<div class="leftContainer">
							<div class="carousel">
								<Carousel {...setting}>
									<div><img src="./src/images/1.jpg"/></div> 
									<div><img src="./src/images/2.jpg"/></div> 
									<div><img src="./src/images/3.jpg"/></div> 
								</Carousel>
							</div>
							<PCNewsImageBlock count={6} type="guonei" cartTitle="国内新闻" width="400px" imageWidth="112px"/>
						</div>
						<Tabs class="tabs_news">
							<TabPane key="1" tab="头条">
								<PCNewsBlock type="top" count={20} bordered="false"/>
							</TabPane>
							<TabPane key="2" tab="国内">
								<PCNewsBlock type="guonei" count={20} bordered="false"/>
							</TabPane>
							<TabPane key="3" tab="国际">
								<PCNewsBlock type="guoji" count={20} bordered="false"/>
							</TabPane>
							<TabPane key="4" tab="娱乐">
								<PCNewsBlock type="yule" count={20} bordered="false"/>
							</TabPane>
							<TabPane key="5" tab="体育">
								<PCNewsBlock type="tiyu" count={20} bordered="false"/>
							</TabPane>
						</Tabs>
						<div>
							<PCNewsImageBlock count={16} type="guoji" cartTitle="国际新闻" width="100%" imageWidth="112px"/>
							<PCNewsImageBlock count={16} type="yule" cartTitle="娱乐新闻" width="100%" imageWidth="112px"/>
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		);
	}
}