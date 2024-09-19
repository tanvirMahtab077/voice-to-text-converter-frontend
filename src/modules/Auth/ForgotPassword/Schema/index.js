import * as Yup from 'yup';

const ForgotPasswordSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Please input your Email'),
});

export default ForgotPasswordSchema;
