/* eslint-disable react/prop-types */
'use client';
import { Spin } from 'antd';
import styled from 'styled-components';

const StyledAppLoader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100%;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
`;

const contentStyle = {
	padding: 50,
	background: 'rgba(0, 0, 0, 0.05)',
	borderRadius: 4,
};

const content = <div style={contentStyle} />;

const AppLoader = ({ tip = 'loading', size = 'large' }) => {
	return (
		<StyledAppLoader>
			<Spin tip={tip} size={size} >
				{content}
			</Spin>
		</StyledAppLoader>
	);
};

export default AppLoader;
