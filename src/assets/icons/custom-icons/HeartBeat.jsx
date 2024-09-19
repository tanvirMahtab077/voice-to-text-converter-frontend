import { IconContext } from 'react-icons';
import { GiHeartBeats } from 'react-icons/gi';

export default function HeartBeatIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles }}>
			<GiHeartBeats style={{ ...iconStyles }} />
		</IconContext.Provider>
	);
}
