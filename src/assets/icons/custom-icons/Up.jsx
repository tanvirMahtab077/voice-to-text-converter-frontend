import { IconContext } from 'react-icons';
import { TiArrowSortedUp } from 'react-icons/ti';

export default function Up({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<TiArrowSortedUp style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
