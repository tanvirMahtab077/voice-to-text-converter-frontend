import { Layout, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HEADER_COLOR, WHITE_COLOR } from '../../constants/ThemeColor.constant';
import { setLayoutMarginLeft } from '../../helpers/Layout.helper';
import { getLastPathSegment } from '../../helpers/String.helper';
import HeaderNav from './Header';
import SidebarMenu from './SidebarMenu';

export default function withLayout(Component) {
	return function WithLayoutComponent(props) {
		const location = useLocation();
		const selectedKey = getLastPathSegment(location.pathname);
		const [collapsed, setCollapsed] = useState(false);
		const [hide, setHide] = useState(false);
		const {
			token: { borderRadiusLG },
		} = theme.useToken();

		return (
			<Layout style={{ p: '0 !important', height: '100vh',backgroundColor: "none", }}>
				{/* sidebar */}
				<Sider
					trigger={null}
					collapsible
					collapsed={collapsed}
					width={250}
					style={{
						position: 'fixed',
						height: '100vh',
						zIndex: 10,
						backgroundImage: " linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)",
						display: hide ? 'none' : 'block',
						color: WHITE_COLOR,
						overflow: 'auto',
						insetInlineStart: 0,
						top: 0,
						bottom: 0,
						scrollbarWidth: 'thin',
						scrollbarColor: 'unset',
						// boxShadow:"rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
					}}
					breakpoint="lg"
					onBreakpoint={broken => {
						setCollapsed(broken);
						setHide(broken);
					}}
				>
					{/* Fixed Logo */}
					<div
						className="demo-logo-vertical"
						style={{
							position: 'fixed',
							top: 0,
							insetInlineStart: 0,
							width: '100%',
							height: 64,
							// backgroundImage: "linear-gradient(to top, #dfe9f3 0%, white 100%)",
							zIndex: 1000,
							padding: collapsed ? '20px' : '20px 60px',
							color: HEADER_COLOR,
							fontSize: '20px',
							textTransform: 'uppercase',
						}}
					>
						{collapsed ? 'CON' : 'CONVERTER'}
					</div>
					{/* Sidebar Menu */}
					<div style={{ paddingTop: 84 }}>
						<SidebarMenu
							selectedKey={selectedKey}
							collapsed={collapsed}
							styles={{
								padding: '0 10px',
								backgroundColor: "transparent",
								color: HEADER_COLOR,
								border:'none'
							}}
						/>
					</div>
				</Sider>
				<Layout>
					{/* header */}
					<HeaderNav setCollapsed={setCollapsed} collapsed={collapsed} hideDrawer={hide} />
					{/* inner content */}
					<Content
						style={{
							margin: '65px 0px',
							padding: 10,
							maxHeight: '100%',
							borderRadius: borderRadiusLG,
							marginLeft: setLayoutMarginLeft(collapsed, hide),
							transition: 'margin-left 0.2s ease',
						}}
					>
						<Component {...props} />
					</Content>
				</Layout>
			</Layout>
		);
	};
}
