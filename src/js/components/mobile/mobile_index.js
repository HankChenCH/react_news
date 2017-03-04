import React from 'react'
import {Tabs,Carousel} from 'antd'

import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import MobileList from './mobile_list'

const TabPane = Tabs.TabPane

export default class MobileIndex extends React.Component
{
	render(){
		const setting = {
			dots:true,
			infinite:true,
			speed:500,
			slidesToShow:1,
			autoplay:true
		}
		return(
			<div>
				<MobileHeader/>
				<Tabs>
					<TabPane key="1" tab="头条">
						<div style={{width:'100%'}} class="carousel">
							<Carousel {...setting}>
								<div><img src="./src/images/1.jpg"/></div> 
								<div><img src="./src/images/2.jpg"/></div> 
								<div><img src="./src/images/3.jpg"/></div> 
							</Carousel>
						</div>
						<MobileList type="top" count={20} />
					</TabPane>
					<TabPane key="2" tab="国内">
						<MobileList type="guonei" count={20} />
					</TabPane>
					<TabPane key="3" tab="国际">
						<MobileList type="guoji" count={20} />
					</TabPane>
					<TabPane key="4" tab="社会">
						<MobileList type="shehui" count={20} />
					</TabPane>
					<TabPane key="5" tab="娱乐">
						<MobileList type="yule" count={20} />
					</TabPane>
					<TabPane key="6" tab="科技">
						<MobileList type="keji" count={20} />
					</TabPane>
					<TabPane key="7" tab="体育">
						<MobileList type="tiyu" count={20} />
					</TabPane>
				</Tabs>
				<MobileFooter/>
			</div>
		)
	}
}