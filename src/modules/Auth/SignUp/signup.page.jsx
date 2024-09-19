import { useState } from "react";
import { Input } from "antd";
import { message } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { FormikProvider, useFormik } from "formik";
import validationSchema from "./Schema";
import SubmitButton from "./SubmitButton";
import PasswordField from "./PasswordField";
import logo from "../../../assets/logo.png";
import styled from "styled-components";
const BackgroundWrapper = styled.div`
  background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%); /* Adjust the image path */
  background-size: cover; /* Ensure the image covers the whole area */
  background-position: center; /* Position it in the center */
  background-repeat: no-repeat; /* Prevent repeating */
  min-height: 100vh; /* Make sure the wrapper covers the full viewport */
  width: 100%;
`;
const styles = {
  formContainer: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "400px",
    padding: "40px",
    borderRadius: "5px",
    backgroundColor: "transparent",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  },
  img: {
    display: "block",
    margin: "0 auto",
    padding: "9px 0",
    width: "80px",
  },
  error: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: "5px",
  },
  successMessage: {
    color: "green",
    fontSize: "1.2rem",
    marginTop: "10px",
  },
  alreadyHaveAccount: {
    textAlign: "center",
    marginTop: "10px",
  },
  signinLink: {
    color: "#64dfdf",
    textDecoration: "none",
  },
  inputError: {
    borderColor: "red",
  },
  inputWrapper: {
    marginTop: "25px",
	background:'transparent',
	border:'1px solid #64dfdf'
  },
};

const SignupForm = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      resetForm();
      setSubmitting(false);
      setSuccessMessage("Registration successful");
    },
  });

  const {
    handleChange,
    values,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
  } = formik;

  return (
	<BackgroundWrapper>
      <FormikProvider value={formik}>
        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <img src={logo} style={styles.img} alt={""} />
          <Input
            placeholder="Name"
            id="name"
            name="name"
            type="text"
            prefix={<UserOutlined className="text-[#64dfdf]"/>}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            className={touched.name && errors.name ? "input-error" : ""}
            style={
              touched.name && errors.name
                ? { ...styles.inputWrapper, ...styles.inputError }
                : styles.inputWrapper
            }
          />
          {touched.name && errors.name ? (
            <div style={styles.error}>{errors.name}</div>
          ) : null}
          <Input
            placeholder="Email Address"
            id="email"
            name="email"
            type="email"
            prefix={<MailOutlined  className="text-[#64dfdf]" />}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={touched.email && errors.email ? "input-error" : ""}
            style={
              touched.email && errors.email
                ? { ...styles.inputWrapper, ...styles.inputError }
                : styles.inputWrapper
            }
          />
          {touched.email && errors.email ? (
            <div style={styles.error}>{errors.email}</div>
          ) : null}
          <PasswordField
            id="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.password}
            error={errors.password}
          />
          <PasswordField
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.confirmPassword}
            error={errors.confirmPassword}
          />
		  <div style={{padding:'15px 0'}}>
          <SubmitButton isSubmitting={isSubmitting} />	
		  </div>
          {successMessage && message.success(successMessage)}
          <div style={styles.alreadyHaveAccount}>
            Already have an account?{" "}
            <Link to="/" style={styles.signinLink}>
              Sign In now
            </Link>
          </div>
        </form>
      </FormikProvider>
	</BackgroundWrapper>
  );
};

export default SignupForm;
