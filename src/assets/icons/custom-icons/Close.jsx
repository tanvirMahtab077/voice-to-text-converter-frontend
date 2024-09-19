import { TfiClose } from 'react-icons/tfi';
import { IconContext } from 'react-icons';

export default function CloseIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<TfiClose style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
