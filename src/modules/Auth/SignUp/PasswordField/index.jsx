/* eslint-disable react/prop-types */
import { Input } from 'antd';
import { LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const styles = {
	inputError: {
		borderColor: 'red',
	},
	inputWrapper: {
		marginTop: '25px',
		background:'transparent',
		border:'1px solid #64dfdf'
	},
	error: {
		color: 'red',
		fontSize: '0.8rem',
		marginTop: '5px',
	},
};

const PasswordField = ({ id, name, placeholder, value, onChange, onBlur, touched, error }) => (
	<div>
		<Input.Password
			id={id}
			name={name}
			placeholder={placeholder}
			prefix={<LockOutlined className="text-[#64dfdf]"/>}
			iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			className={touched && error ? 'input-error' : ''}
			style={touched && error ? { ...styles.inputWrapper, ...styles.inputError } : styles.inputWrapper}
		/>
		{touched && error && <div style={styles.error}>{error}</div>}
	</div>
);

export default PasswordField;
