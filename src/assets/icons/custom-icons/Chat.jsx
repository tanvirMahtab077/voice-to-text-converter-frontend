import { IoChatbubblesOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

export default function ChatIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<IoChatbubblesOutline style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
