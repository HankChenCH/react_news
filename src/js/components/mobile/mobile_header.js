import React from 'react'

export default class MobileHeader extends React.Component
{
	render() {
		return(
			<header id="mobile_header">
				<a href="/">
					<img src="./src/images/news_logo.png" alt="logo"/>
					<span>ReactNews</span>
				</a>
			</header>
		)
	}
}