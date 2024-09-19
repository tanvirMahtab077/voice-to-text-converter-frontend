import { IconContext } from 'react-icons';
import { FaChartPie } from 'react-icons/fa';

export default function ChartIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<FaChartPie style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
