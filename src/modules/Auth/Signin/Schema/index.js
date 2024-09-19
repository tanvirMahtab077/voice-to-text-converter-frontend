import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
	password: Yup.string().min(5, 'Too Short!').required('Please input your Password!'),
	email: Yup.string().email('Invalid email').required('Please input your Email'),
});

export default SignInSchema;
