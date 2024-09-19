import { IconContext } from 'react-icons';
import { BsCart4 } from 'react-icons/bs';

export default function CartIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<BsCart4 style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
