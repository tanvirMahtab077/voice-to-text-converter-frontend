/* eslint-disable react/prop-types */
import { Button } from 'antd';

const styles = {
	button: {
		marginTop: '10px',
		backgroundColor: '#64dfdf',
		padding: '4px',
		color: 'white',
		borderRadius: '4px',
		width: '100%',
		cursor: 'pointer',
	},
};

const SubmitButton = ({ isSubmitting }) => {
	return (
		<Button
			type="primary"
			htmlType="submit"
			style={isSubmitting ? { backgroundColor: '#0056b3', ...styles.button } : styles.button}
			disabled={isSubmitting}
		>
			{isSubmitting ? 'Submitting...' : 'Submit'}
		</Button>
	);
};

export default SubmitButton;
