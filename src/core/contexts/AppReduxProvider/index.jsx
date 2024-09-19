import { Provider } from 'react-redux';
import { store } from '../../services/redux/store';
import PropTypes from 'prop-types';

function AppReduxProvider({ children }) {
	return <Provider store={store}>{children}</Provider>;
}

export default AppReduxProvider;

AppReduxProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
