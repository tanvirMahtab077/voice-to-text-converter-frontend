import { LiaBoneSolid } from 'react-icons/lia';
import { IconContext } from 'react-icons';

export default function BoneIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles }}>
			<LiaBoneSolid style={{ ...iconStyles }} />
		</IconContext.Provider>
	);
}
