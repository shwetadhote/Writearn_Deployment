import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaFacebookF, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { GrGooglePlus } from "react-icons/gr";
import {
  Button,
  CardLink,
  Col,
  Container,
  FormGroup,
  FormText,
  Label,
  Row,
} from "reactstrap";
import * as Yup from "yup";
import styles from "./styles.module.css";

interface FormInput {
  email?: string;
  password?: string;
  handleSubmit?: () => void;
  handleSignupModal?: any;
  initialValues?: Object | undefined | any;
}

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  password: Yup.string()
    .required("Please enter password")
    .min(6, "Please enter at least 6 digit password")
    .max(20, "Password should not be more than 20 characters"),
});

const Login: React.FC<FormInput> = ({ handleSignupModal }) => {
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={(values) => {}}
    >
      {(formik) => {
        const { errors, touched } = formik;
        return (
          <Container>
            <Label className="fw-bold" tag="h3">
              Sign In
            </Label>
            <Label tag="h6">Enter Login Details</Label>
            <div className={styles.divider}></div>
            <Form>
              <Row>
                <Col md={12} className="my-2">
                  <FormGroup>
                    <Label htmlFor="email" className={styles.text}>
                      <FaRegEnvelope size={20} />
                    </Label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className={`${
                        errors.email && touched.email ? "input-error" : null
                      } ${styles.form_input}`}
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="error text-danger"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={12} className="my-2">
                  <Label htmlFor="password" className={styles.text}>
                    <FiLock size={20} />
                  </Label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className={` ${
                      errors.password && touched.password ? "input-error" : null
                    } ${styles.form_input}`}
                  />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="error text-danger"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={7}>
                  <FormGroup>
                    <CardLink color="link" className={styles.f_password_link}>
                      Forgot Password
                    </CardLink>
                  </FormGroup>
                </Col>
                <Col md={5}>
                  <FormText>
                    Not a member?{" "}
                    <CardLink
                      color="link"
                      className={styles.signup_link}
                      onClick={handleSignupModal}
                    >
                      Sign Up
                    </CardLink>
                  </FormText>
                </Col>
              </Row>
              <FormGroup className={styles.login_section}>
                <Button
                  color="primary"
                  className={`rounded-pill ${styles.login_btn}`}
                  type="submit"
                >
                  Login
                </Button>
                <CardLink
                  href="http://www.facebook.com/writearn.in"
                  target="__blank"
                  className={styles.icon_facebook}
                >
                  <FaFacebookF size={13} />
                </CardLink>
                <CardLink
                  href="https://twitter.com/writearn"
                  target="__blank"
                  className={styles.icon_twitter}
                >
                  <FaTwitter size={13} />
                </CardLink>
                <CardLink
                  href="http://www.goggle.com/writearn.in"
                  target="__blank"
                  className={styles.icon_google}
                >
                  <GrGooglePlus size={14} />
                </CardLink>
              </FormGroup>
            </Form>
          </Container>
        );
      }}
    </Formik>
  );
};
export default Login;
