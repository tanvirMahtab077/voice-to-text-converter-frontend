import { FaRegCalendarAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default function CalendarIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<FaRegCalendarAlt style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
