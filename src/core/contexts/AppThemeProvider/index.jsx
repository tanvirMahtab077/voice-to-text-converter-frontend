import { ConfigProvider } from 'antd';
import PropTypes from 'prop-types';
import { BACKGROUND_COLOR, HEADER_COLOR, PRIMARY_COLOR } from '../../constants/ThemeColor.constant';

const AppThemeProvider = ({ children }) => {
	return (
		<ConfigProvider
			theme={{
				// this this will be changed soon
				token: {
					colorPrimary: PRIMARY_COLOR,
					colorBgLayout:BACKGROUND_COLOR,
					colorTextHeading: HEADER_COLOR,
				},
			}}
		>
			{children}
		</ConfigProvider>
	);
};
export default AppThemeProvider;

AppThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
