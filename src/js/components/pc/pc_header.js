import React from 'react'
import {Row,Col,Menu,Icon} from 'antd'

export default class PCHeader extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {
			current:"top"
		}
	}

	render(){
		return(
			<header id="pc_header">
				<Row>
			      <Col span={2}></Col>
			      <Col span={4}>
					<a href="/">
						<img src="./src/images/news_logo.png" alt="logo"/>
						<span>ReactNews</span>
					</a>
			      </Col>
			      <Col span={16}>
					<Menu mode="horizontal" selectedKeys={this.state.current}>
						<Menu.Item key="top">
							<Icon type="appstore">头条</Icon>
						</Menu.Item>
						<Menu.Item key="shehui">
							<Icon type="appstore">社会</Icon>
						</Menu.Item>
						<Menu.Item key="guonei">
							<Icon type="appstore">国内</Icon>
						</Menu.Item>
						<Menu.Item key="guoji">
							<Icon type="appstore">国际</Icon>
						</Menu.Item>
						<Menu.Item key="yule">
							<Icon type="appstore">娱乐</Icon>
						</Menu.Item>
						<Menu.Item key="tiyu">
							<Icon type="appstore">体育</Icon>
						</Menu.Item>
						<Menu.Item key="keji">
							<Icon type="appstore">科技</Icon>
						</Menu.Item>
					</Menu>
			      </Col>
			      <Col span={2}></Col>
			    </Row>
			</header>
		)
	}
}