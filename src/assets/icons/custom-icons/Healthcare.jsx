import { IconContext } from 'react-icons';
import { FaLaptopMedical } from 'react-icons/fa';

export default function HealthcareIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<FaLaptopMedical style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
