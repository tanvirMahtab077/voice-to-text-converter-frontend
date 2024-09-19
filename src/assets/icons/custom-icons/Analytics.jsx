import { IconContext } from 'react-icons';
import { IoBarChart } from 'react-icons/io5';

export default function AnalyticsIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<IoBarChart style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
