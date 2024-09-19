/* eslint-disable react/prop-types */
import sidebarNav from '../../constants/SidebarNav.constant';
import { StyledMenu } from './index.styled';

export default function SidebarMenu({ selectedKey, collapsed, styles }) {
	const items = sidebarNav(collapsed);
	return (
		<StyledMenu
			style={{ ...styles }}
			defaultSelectedKeys={[selectedKey]}
			defaultOpenKeys={['app', 'com', 'page']}
			mode="inline"
			items={[...items]}
			inlineCollapsed={collapsed}
		/>
	);
}
