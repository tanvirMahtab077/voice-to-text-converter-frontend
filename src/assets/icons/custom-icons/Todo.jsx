import { LuListTodo } from 'react-icons/lu';
import { IconContext } from 'react-icons';

export default function TodoIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<LuListTodo style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
