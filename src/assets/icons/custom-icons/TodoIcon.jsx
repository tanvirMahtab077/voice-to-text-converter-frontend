import { IconContext } from 'react-icons';
import { LuListTodo } from 'react-icons/lu';
const TodoIcon = ({ styles, iconStyles }) => {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<LuListTodo style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
};

export default TodoIcon;
