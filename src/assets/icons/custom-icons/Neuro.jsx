import { GiBrain } from 'react-icons/gi';
import { IconContext } from 'react-icons';

export default function NeuroIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles }}>
			<GiBrain style={{ ...iconStyles }} />
		</IconContext.Provider>
	);
}
