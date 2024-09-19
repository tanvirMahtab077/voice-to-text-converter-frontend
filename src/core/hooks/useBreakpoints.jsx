import { Grid } from 'antd';
import { useEffect, useState } from 'react';

export const useBreakpoints = () => {
	const [currentBreakpoint, setCurrentBreakpoint] = useState();
	const { useBreakpoint } = Grid;
	const screens = useBreakpoint();

	useEffect(() => {
		Object.entries(screens)
			.filter(screen => !!screen[1])
			.map(screen => {
				setCurrentBreakpoint(screen);
			});
	}, [screens]);

	return {
		currentScreen: currentBreakpoint?.length > 0 && currentBreakpoint[0],
		value: currentBreakpoint?.length > 0 && currentBreakpoint[1],
	};
};
