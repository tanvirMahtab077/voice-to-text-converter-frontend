import { FaTeethOpen } from 'react-icons/fa6';
import { IconContext } from 'react-icons';

export default function TeethIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles }}>
			<FaTeethOpen style={{ ...iconStyles }} />
		</IconContext.Provider>
	);
}
