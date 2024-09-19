import { CiMenuFries } from 'react-icons/ci';
import { IconContext } from 'react-icons';

export default function MenuIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<CiMenuFries style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
