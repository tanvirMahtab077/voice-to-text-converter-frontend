import './App.css'
import { converterRoute } from './core/constants/Route.constant'
import AppNotificationProvider from './core/contexts/AppNotificationProvider'
import AppReduxProvider from './core/contexts/AppReduxProvider'
import AppRouterProvider from './core/contexts/AppRouterProvider'
import AppThemeProvider from './core/contexts/AppThemeProvider'

function App() {
  return (
    <AppReduxProvider>
			<AppNotificationProvider>
				<AppThemeProvider>
					<AppRouterProvider router={converterRoute} />
				</AppThemeProvider>
			</AppNotificationProvider>
		</AppReduxProvider>
  )
}

export default App
