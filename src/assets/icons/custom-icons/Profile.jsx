import { FaRegUserCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default function ProfileIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<FaRegUserCircle style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
