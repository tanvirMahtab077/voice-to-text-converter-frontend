import { Drawer } from 'antd';
const AppDrawer = ({ title, open, placement, onClose, children, size, width, closable = true }) => {
	return (
		<Drawer
			title={title}
			placement={placement}
			closable={closable}
			onClose={onClose}
			open={open}
			key={placement}
			size={size}
			width={width}
		>
			<>{children}</>
		</Drawer>
	);
};
export default AppDrawer;
