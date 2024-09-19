import { IoReceiptOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

export default function ReceiptIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<IoReceiptOutline style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
