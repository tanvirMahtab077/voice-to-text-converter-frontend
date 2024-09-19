import { IconContext } from 'react-icons';
import { LuShoppingCart } from 'react-icons/lu';

export default function EcommerceIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<LuShoppingCart style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
