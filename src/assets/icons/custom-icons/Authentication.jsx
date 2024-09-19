import { MdOutlineAppRegistration } from 'react-icons/md';
import { IconContext } from 'react-icons';

export default function AuthIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<MdOutlineAppRegistration style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
