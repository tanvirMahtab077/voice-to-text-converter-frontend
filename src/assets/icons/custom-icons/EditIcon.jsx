import { CiEdit } from 'react-icons/ci';
import { IconContext } from 'react-icons';

export default function EditIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles }}>
			<CiEdit style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
