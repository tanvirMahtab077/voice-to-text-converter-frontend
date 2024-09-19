/* eslint-disable react/prop-types */
import { MenuFoldOutlined } from '@ant-design/icons';
import { Typography, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CloseIcon from '../../../assets/icons/custom-icons/Close';
import MenuIcon from '../../../assets/icons/custom-icons/Menu';
import { setLayoutMarginLeft } from '../../helpers/Layout.helper';
import { getLastPathSegment } from '../../helpers/String.helper';
import { useBreakpoints } from '../../hooks/useBreakpoints';
import AppDrawer from '../AppDrawer';
import SidebarMenu from './SidebarMenu';
import UserProfile from './UserProfile';
import styled from 'styled-components';
const StyledHeader = styled.div`
	background-image:linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);
	height:60px;
`
export default function HeaderNav({ collapsed, setCollapsed, hideDrawer }) {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const location = useLocation();
	const selectedKey = getLastPathSegment(location.pathname);
	const breakpoint = useBreakpoints();
	const [open, setOpen] = useState(false);
	const showDrawer = () => {
		setOpen(true);
	};
	const onClose = () => {
		setOpen(false);
	};

	return (
		<>
			<StyledHeader
				style={{
					padding: 0,
					marginLeft: setLayoutMarginLeft(collapsed, hideDrawer),
					position: 'fixed',
					left: 0,
					zIndex: 10,
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				{breakpoint.currentScreen === 'md' ||
				breakpoint.currentScreen === 'xs' ||
				breakpoint.currentScreen === 'sm' ? (
					<div
						style={{
							fontSize: '16px',
							width: 64,
							height: 64,
							display: 'block',
							marginLeft: '20px',
							marginTop:'40px',
							cursor: 'pointer',
						}}
						onClick={showDrawer}
					>
						{collapsed ? (
							<MenuIcon styles={{ size: '1.5em' }} iconStyles={{ marginBottom: '-8px' }} />
						) : (
							<MenuFoldOutlined />
						)}
					</div>
				) : (
					<div
						style={{
							fontSize: '16px',
							width: 64,
							height: 64,
							display: 'block',
							marginLeft: '20px',
							marginTop:'40px',
							cursor: 'pointer',
						}}
						onClick={() => setCollapsed(!collapsed)}
					>
						{collapsed ? (
							<CloseIcon styles={{ size: '1.5em' }} iconStyles={{ marginBottom: '-8px' }} />
						) : (
							<MenuIcon styles={{ size: '1.5em' }} iconStyles={{ marginBottom: '-8px' }} />
						)}
					</div>
				)}
				<UserProfile collapsed={collapsed} hideDrawer={hideDrawer} username="Jane doe" />
			</StyledHeader>

			<AppDrawer
				open={open}
				placement={'left'}
				onClose={onClose}
				size="default"
				width={280}
				closable={false}
				title={
					<Typography style={{ textAlign: 'left', fontWeight: 900, fontSize: '20px', textTransform: 'uppercase' }}>
						Converter
					</Typography>
				}
			>
				<SidebarMenu selectedKey={selectedKey} styles={{ marginLeft: '-10px',border:'none' }} />
			</AppDrawer>
		</>
	);
}
