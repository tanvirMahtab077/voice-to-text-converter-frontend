import { IconContext } from 'react-icons';
import { FaArrowTrendDown } from 'react-icons/fa6';

export default function TrendDown({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<FaArrowTrendDown style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
