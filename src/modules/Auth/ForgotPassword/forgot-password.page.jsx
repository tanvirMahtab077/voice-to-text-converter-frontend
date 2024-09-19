import { MailOutlined } from '@ant-design/icons';
import { Button, Form, Grid, Input, Typography, theme } from 'antd';
import { FormikProvider, useFormik } from 'formik';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import ForgotPasswordSchema from './Schema';

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text } = Typography;

export default function ForgotPasswordPage() {
	const { token } = useToken();
	const screens = useBreakpoint();
	const formik = useFormik({
		initialValues: {
			email: '',
		},
		onSubmit: (values, { resetForm }) => {
			/** write your logic code here */
			console.info(values);
			resetForm();
		},
		validationSchema: ForgotPasswordSchema,
	});

	const styles = {
		container: {
			margin: '0 auto',
			padding: '40px 40px',
			width: '300px',
			boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
			borderRadius: '10px',
		},
		footer: {
			marginTop: '20px',
			textAlign: 'center',
			width: '100%',
		},
		forgotPassword: {
			float: 'right',
		},
		header: {
			marginBottom: token.marginXL,
		},
		headerLogo: {
			width: '80px',
			height: '80px',
			display: 'block',
			margin: '0 auto',
		},
		section: {
			alignItems: 'center',
			display: 'flex',
			height: screens.sm ? '100vh' : 'auto',
			padding: !screens.md ? `${token.sizeXXL}px 0px` : '0px',
		},
		text: {
			color: token.colorTextSecondary,
		},
		title: {
			fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
		},
	};

	const { handleChange, values, handleBlur, errors, touched, handleSubmit } = formik;

	return (
		<section style={styles.section}>
			<div style={styles.container}>
				<div style={styles.header}>
					<img style={styles.headerLogo} src={logo}></img>
				</div>

				<FormikProvider value={formik}>
					<Form layout="vertical" requiredMark="optional" onFinish={handleSubmit}>
						<Form.Item name="email">
							<Input
								prefix={<MailOutlined />}
								placeholder="your email address"
								onChange={handleChange}
								onBlur={handleBlur}
								name="email"
								defaultValue={values.email}
								status={errors.email && touched.email ? 'error' : null}
							/>
							{errors.email && touched.email && <Text type="danger">{errors.email}</Text>}
						</Form.Item>

						<Form.Item style={{ marginBottom: '0px' }}>
							<Button block="true" type="primary" htmlType="submit"  className="bg-[#8A5CFF] hover:!bg-[#9c75ff]">
								Send
							</Button>
							<div style={styles.footer}>
								<Text style={styles.text}>back to login page</Text> <Link to="/" className='text-[#8A5CFF]'>log in</Link>
							</div>
						</Form.Item>
					</Form>
				</FormikProvider>
			</div>
		</section>
	);
}
