import { createBrowserRouter } from 'react-router-dom';
import SigninPage from '../../modules/Auth/Signin/signin.page';
import SignUpPage from './../../modules/Auth/SignUp/signup.page';
import ForgotPasswordPage from '../../modules/Auth/ForgotPassword/forgot-password.page';
import Dashboard from '../../modules/Dashboards';
import AllConversation from '../../modules/AllConversation';
import Users from '../../modules/Users';

export const converterRoute = createBrowserRouter([
	{
		path: '/',
		element: <SigninPage />,
	},
	{
		path: 'signup',
		element: <SignUpPage />,
	},
	{
		path:'forgot-password',
		element: <ForgotPasswordPage/>
	},
	{
		path: 'dashboard',
		element:<Dashboard/>
	},
	{
		path: 'all-conversation',
		element:<AllConversation/>
	},
	{
		path: 'users',
		element:<Users/>
	},
	{
		path: '*',
		element: <>404 not found</>,
	},
]);
