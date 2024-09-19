import { FaTableList } from 'react-icons/fa6';
import { IconContext } from 'react-icons';

export default function HealthcareIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<FaTableList style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
