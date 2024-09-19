import { IconContext } from 'react-icons';
import { FaArrowTrendUp } from 'react-icons/fa6';

export default function TrendUp({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<FaArrowTrendUp style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
