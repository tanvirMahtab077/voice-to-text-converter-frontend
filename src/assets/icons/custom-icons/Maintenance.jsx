import { GrVmMaintenance } from 'react-icons/gr';
import { IconContext } from 'react-icons';

export default function MaintenanceIcon({ styles, iconStyles }) {
	return (
		<IconContext.Provider value={{ ...styles, margin: '0px 20px' }}>
			<GrVmMaintenance style={{ marginRight: '10px', ...iconStyles }} />
		</IconContext.Provider>
	);
}
