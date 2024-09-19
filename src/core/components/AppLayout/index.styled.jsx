import { Menu } from 'antd';
import styled from 'styled-components';
import { HEADER_COLOR, HIGHLIGHT_ONE, WHITE_COLOR } from '../../constants/ThemeColor.constant';

export const StyledMenu = styled(Menu)`
	.ant-menu-item-selected {
		background-color: #cbf3f0!important;
		font-weight: 700 !important;
	}

	.ant-menu-item {
		color: ${HEADER_COLOR};
	}

	.ant-menu-submenu-title span {
		color: ${HEADER_COLOR};
	}

	.ant-menu-item-group-title {
		font-weight: 700;
	}

	.ant-menu-sub.ant-menu-inline {
		background: ${WHITE_COLOR} !important;
	}
`;
