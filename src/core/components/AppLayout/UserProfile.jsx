/* eslint-disable react/prop-types */
import { Avatar, Dropdown, Menu, Typography } from 'antd';
import { setLayoutMarginRight } from '../../helpers/Layout.helper';
import { UserOutlined } from '@ant-design/icons';
import ProfileImage from './../../../assets/images/doc-4.jpg';
import { TEXT_LIGHT } from '../../constants/ThemeColor.constant';

const menu = (
	<Menu>
		{/* <Menu.Item key="0">
			<a href="/dashboard/ecommerce">Profile</a>
		</Menu.Item>
		<Menu.Item key="1">
			<a href="/dashboard/ecommerce">Settings</a>
		</Menu.Item>
		<Menu.Divider /> */}
		<Menu.Item key="3">
			<a href="/">Logout</a>
		</Menu.Item>
	</Menu>
);

export default function UserProfile({ collapsed, hideDrawer, username }) {
	return (
		<>
			<div style={{ marginRight: setLayoutMarginRight(collapsed, hideDrawer), cursor: 'pointer' }}>
				<Dropdown overlay={menu} trigger={['click']}>
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						{/* <Avatar src={ProfileImage} icon={<UserOutlined />} shape="square" /> */}
						<img src={ProfileImage} alt="" className='w-9 h-9 rounded-md'/>
						<div style={{ marginLeft: '10px' }}>
							<Typography style={{lineHeight:'13px',fontWeight:'400',marginTop:'4px'}}>{username}</Typography>
							<Typography style={{ fontSize: '12px',color:TEXT_LIGHT }}>sales manager</Typography>
						</div>
					</div>
				</Dropdown>
			</div>
		</>
	);
}
