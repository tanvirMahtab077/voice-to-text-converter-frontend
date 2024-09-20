import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, theme, Typography } from "antd";
import { FormikProvider, useFormik } from "formik";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useBreakpoints } from "../../../core/hooks/useBreakpoints";
import SignInSchema from "./Schema";
const { useToken } = theme;
const { Text } = Typography;
// const BackgroundWrapper = styled.div`
//    background-image: url('https://audiotext.kodeend.com/bg/colors.png'); /* Adjust the image path */
//   background-size: cover; /* Ensure the image covers the whole area */
//   background-position: center; /* Position it in the center */
//   background-repeat: no-repeat; /* Prevent repeating */
//   min-height: 100vh; /* Make sure the wrapper covers the full viewport */
//   width: 100%;
// `;
export default function SigninPage() {
  const { token } = useToken();
  const screens = useBreakpoints().currentScreen;
  const navigate = useNavigate();
  const location = useLocation();
console.log(screens);
  const formik = useFormik({
    initialValues: {
      email: "admin@gmail.com",
      password: "123456",
      remember: false,
    },
    onSubmit: (values, { resetForm }) => {
      if (
        values.email === "admin@gmail.com" &&
        values.password === "123456" &&
        location.pathname === "/"
      ) {
        navigate("/dashboard");
      }
      resetForm();
    },
    validationSchema: SignInSchema,
  });

  const styles = {
    container: {
      margin: "0 auto",
      padding: "40px 40px",
      width: "350px",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      borderRadius: "10px",
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%",
    },
    forgotPassword: {
      float: "right",
    },
    header: {
      marginBottom: token.marginXL,
    },
    headerLogo: {
      width: "80px",
      height: "80px",
      display: "block",
      margin: "0 auto",
    },
    section: {
      alignItems: "center",
      display: "flex",
      height: "100vh",
      padding: !screens.md ? `${token.sizeXXL}px 0px` : "0px",
      backgroundImage: "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)"
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  const { handleChange, values, handleBlur, errors, touched, handleSubmit } =
    formik;

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <img style={styles.headerLogo} src={logo}></img>
        </div>

        <FormikProvider value={formik}>
          <Form
            layout="vertical"
            requiredMark="optional"
            onFinish={handleSubmit}
          >
            <Form.Item name="email">
              <Input
                prefix={<MailOutlined className="text-[#64dfdf]" />}
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                defaultValue={values.email}
                status={errors.email && touched.email ? "error" : null}
                style={{background:'transparent',border:'1px solid #64dfdf'}}
              />
              {errors.email && touched.email && (
                <Text type="danger">{errors.email}</Text>
              )}
            </Form.Item>
            <Form.Item name="password">
              <Input.Password
                prefix={<LockOutlined className="text-[#64dfdf]"/>}
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                defaultValue={values.password}
                status={errors.password && touched.password ? "error" : null}
                style={{background:'transparent',border:'1px solid #64dfdf'}}
              />
              {errors.password && touched.password && (
                <Text type="danger">{errors.password}</Text>
              )}
            </Form.Item>
            <Form.Item>
              <div className="flex flex-row flex-wrap justify-between items-center">
                <div>
                  <Form.Item valuePropName="checked" noStyle>
                    <Checkbox name="remember" onChange={handleChange}>
                      Remember me
                    </Checkbox>
                  </Form.Item>
                </div>
                <div>
                  <Link style={styles.forgotPassword} to="/forgot-password">
                    Forgot password?
                  </Link>
                </div>
              </div>
            </Form.Item>
            <Form.Item style={{ marginBottom: "0px" }}>
              <Button
                block="true"
                type="primary"
                htmlType="submit"
                className="bg-[#64dfdf] hover:!bg-[#7ef9f3] shadow-none"
              >
                Log in
              </Button>
              <div style={styles.footer}>
                <Text style={styles.text}>Don&apos;t have an account?</Text>{" "}
                <Link className="text-[#64dfdf]" to="/signup">Sign up now</Link>
              </div>
            </Form.Item>
          </Form>
        </FormikProvider>
      </div>
    </section>
  );
}
