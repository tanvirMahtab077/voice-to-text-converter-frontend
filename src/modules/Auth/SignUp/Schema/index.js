import * as Yup from 'yup';

const validationSchema = Yup.object({
	name: Yup.string().max(20, 'Must be 20 characters or less').required('Name Required'),
	email: Yup.string().email('Invalid email address').required('Email Required'),
	password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password Required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('Confirm-Password Required'),
});

export default validationSchema;
