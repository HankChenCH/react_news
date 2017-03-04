import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router'

export default class PCNewsImageBlock extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {
			news: ''
		}
	}
	componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		}
		fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=' + this.props.type 
			+ '&count=' + this.props.count,myFetchOptions)
		.then((response)=>response.json())
		.then((json)=>{
			console.log(json)
			this.setState({
				news:json
			})
		})
	}
	render() {
		const styleImage = {
			display:"block",
			width:this.props.imageWidth,
			height:"90px"
		}
		const styleH3 = {
			width: this.props.imageWidth,
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		}
		const styleP = {
			width: this.props.imageWidth,
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		}
		const {news} = this.state
		const newsList = news.length
		?
		news.map((newsItem,index)=>(
			<li key={index} class="imageblock">
				<Link to={`details/${newsItem.uniquekey}`} target="_blank">
					<div class="custom-image">
						<img style={styleImage} src={newsItem.thumbnail_pic_s}/>
					</div>
					<div class="custom-card">
						<h3 style={styleH3}>{newsItem.title}</h3>
						<p style={styleP}>{newsItem.author_name}</p>
					</div>
				</Link>
			</li>
		))
		: '还没有任何新闻';
		return(
			<div class="topNews">
				<Card title={this.props.cartTitle}  bordered={true} style={{width:this.props.width}}>
					{newsList}
				</Card>
			</div>
		)
	}	
}