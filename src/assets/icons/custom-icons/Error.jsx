import { RiErrorWarningFill } from 'react-icons/ri';

import { IconContext } from 'react-icons';

export default function ErrorIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<RiErrorWarningFill style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
