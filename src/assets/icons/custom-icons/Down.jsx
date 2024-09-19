import { IconContext } from 'react-icons';
import { TiArrowSortedDown } from 'react-icons/ti';

export default function Down({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<TiArrowSortedDown style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
