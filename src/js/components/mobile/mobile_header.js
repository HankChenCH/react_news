import React from 'react';
import {Row,Col,Menu,Icon,Tabs,message,Form,Input,Button,CheckBox,Modal} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import {Link} from 'react-router';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class MobileHeader extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {
			current:'top',
			modalVisible: false,
			hasLogined: false,
			action: 'login',
			userNickName: '',
			userid: 0
		}
	};
	componentWillMount() {
		if(localStorage.userid != ''){
			this.setState({
				hasLogined: true,
				userNickName: localStorage.userNickName,
				userid: localStorage.userid
			})
		}	
	};
	setModalVisible(value){
		this.setState({
			modalVisible: value
		})
	};
	onClickHandle(e){
		if(e.key === "register"){
			this.setState({
				current:'register'
			})
			this.setModalVisible(true)
		}else{
			this.setState({
				current: e.key
			})
		}
	};
	onhandleOk(e){
		this.setModalVisible(false)
	};
	onhandleCancel(e){
		this.setModalVisible(false)
	};
	onSubmitHandle(e){
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET',
		}
		var formData = this.props.form.getFieldsValue();
		//console.log("form data is :",formData);
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
			+ "&username=" + formData.userName + "&password=" + formData.password
			+ "&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password
			+ "&r_confirmPassword=" + formData.r_confirmPassword,myFetchOptions)
			.then(response => response.json())
			.then(json => {
				this.setState({
					userNickName: json.NickUserName,
					userid: json.UserId,
					hasLogined: true
				});
				localStorage.userNickName = json.NickUserName;
				localStorage.userid = json.UserId;
				message.success("请求成功");
				this.setModalVisible(false);
			})
			.catch((e)=>{
				message.success("请求失败");
				this.setModalVisible(false);
				console.error(e);
			})
	};
	login(){
		this.setModalVisible(true)
	};
	callback(key){
		if(key == 1){
			this.setState({action:'login'})
		}else{
			this.setState({action:'register'})
		}
	};
	logout(){
		this.setState({
			hasLogined: false,
			userNickName: '',
			userid: 0
		})
		localStorage.userNickName = '';
		localStorage.userid = '';
	};
	render() {
		let {getFieldDecorator} = this.props.form;
		const userShow = this.state.hasLogined?
		<Link>
			<Icon type="inbox"/>
		</Link>
		:
		<Icon type="setting" onClick={this.login.bind(this)}/>
		;
		return(
			<header id="mobile_header">
				<div>
					<a href="/">
						<img src="./src/images/news_logo.png" alt="logo"/>
						<span>ReactNews</span>
					</a>
					{userShow}
				</div>
				<Modal title="用户中心" warpClassName="vertical-center-modal" footer={null} visible={this.state.modalVisible}
					onOk={this.onhandleOk.bind(this)} onCancel={this.onhandleCancel.bind(this)}>
					<Tabs type="card" onChange={this.callback.bind(this)}>
						<TabPane tab="登录" key="1">
							<Form horizontal onSubmit={this.onSubmitHandle.bind(this)}>
								<FormItem label="用户">
								  {getFieldDecorator('userName', {
						              rules: [{ required: true, message: 'Please input your username!' }],
						          })(
						            <Input placeholder="请输入您的账号" />
						          )}
								</FormItem>
								<FormItem label="密码">
								  {getFieldDecorator('password', {
						              rules: [{ required: true, message: 'Please input your password!' }],
						          })(
						            <Input type="password" placeholder="请输入您的密码" />
						          )}
								</FormItem>
								<Button type="primary" htmlType="submit">登录</Button>
							</Form>
						</TabPane>
						<TabPane tab="注册" key="2">
							<Form horizontal onSubmit={this.onSubmitHandle.bind(this)}>
								<FormItem label="用户">
								  {getFieldDecorator('r_userName', {
						              rules: [{ required: true, message: 'Please input your username!' }],
						          })(
						            <Input placeholder="请输入您的账号" />
						          )}
								</FormItem>
								<FormItem label="密码">
								  {getFieldDecorator('r_password', {
						              rules: [{ required: true, message: 'Please input your password!' }],
						          })(
						            <Input type="password" placeholder="请输入您的密码" />
						          )}
								</FormItem>
								<FormItem label="确认密码">
							      {getFieldDecorator('r_confirmPassword', {
						              rules: [{ required: true, message: 'Please input your confirmPassword!' }],
						          })(
						            <Input type="password" placeholder="请再次输入您的密码" />
						          )}
								</FormItem>
								<Button type="primary" htmlType="submit">注册</Button>
							</Form>
						</TabPane>
					</Tabs>
					</Modal>
			</header>
		)
	}
}

export default MobileHeader = Form.create({})(MobileHeader);