import { HiOutlineDotsVertical } from 'react-icons/hi';
import { IconContext } from 'react-icons';

export default function VerticalDotIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles }}>
			<HiOutlineDotsVertical style={{ ...iconStyles }} />
		</IconContext.Provider>
	);
}
