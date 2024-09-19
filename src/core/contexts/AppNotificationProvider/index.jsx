/* eslint-disable react-refresh/only-export-components */
import { message } from 'antd';
import { createContext, useContext } from 'react';

const NotificationContext = createContext(null);

export const useNotification = () => useContext(NotificationContext);

const AppNotificationProvider = ({ children }) => {
	const [messageApi, contextHolder] = message.useMessage();
	return (
		<NotificationContext.Provider value={{ messageApi }}>
			{contextHolder}
			{children}
		</NotificationContext.Provider>
	);
};
export default AppNotificationProvider;
