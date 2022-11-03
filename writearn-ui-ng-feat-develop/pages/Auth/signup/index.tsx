import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Button,
  Col,
  FormGroup,
  Label,
  Row,
  FormText,
  CardLink,
  Container,
  CardText,
} from "reactstrap";
import { FaFacebookF, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { GrGooglePlus } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import styles from "../signup/styles.module.css";
import Divider from "../../../components/Divider";
import { useRouter } from "next/router";

interface IFormInput {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  handleChange: any;
  onCloseModal: any;
  initialValues?: Object | undefined | any;
}

const SignInSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(20, "First name is too long")
    .required("Please enter first name"),
  lastName: Yup.string()
    .max(50, "Last name is too long")
    .required("Please enter last name"),
  email: Yup.string()
    .email("Please enter valid email.")
    .required("Please enter the email"),
  password: Yup.string()
    .required("Please enter password")
    .min(6, "Please enter at least 6 digit password.")
    .max(20, "Password should not be more than 20 characters."),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Password and confirm password didn't match"
    )
    .required("Please enter the confirm password.")
    .min(6, "Please enter at least 6 digit password")
    .max(20, "Password should not be more than 20 characters"),
});

const Signup: React.FC<IFormInput> = ({ handleChange, onCloseModal }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const router = useRouter();

  const handleTermsandConditions = () => {
    router.push("/Home/TermsConditions");
    onCloseModal();
  };
  const handleChangePrivacyPolicy = () => {
    router.push("/Home/PrivacyPolicy");
    onCloseModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        onCloseModal();
        alert("You have successfully registered..!!!");
      }}
    >
      {(formik) => {
        const { errors, touched } = formik;
        return (
          <Container>
            <Label className="fw-bold mb-0" tag="h4">
              Sign Up
            </Label>
            <Label className="fw-bold">Welcome to WRITEARN</Label>
            <Divider />
            <Form>
              <Row>
                <Col md={6} className="my-1">
                  <FormGroup>
                    <Label htmlFor="firstName" className={styles.text}>
                      <BiUser size={20} />
                    </Label>
                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      className={`${
                        errors.firstName && touched.firstName
                          ? "input-error"
                          : null
                      } ${styles.form_input}`}
                    />
                    <ErrorMessage
                      name="firstName"
                      component="span"
                      className="error text-danger"
                    />
                  </FormGroup>
                </Col>
                <Col md={6} className="my-1">
                  <FormGroup>
                    <Label htmlFor="lastName" className={styles.text}>
                      <BiUser size={20} />
                    </Label>
                    <Field
                      type="text"
                      name="lastName"
                      id="lasstName"
                      placeholder="Last Name"
                      className={`${
                        errors.lastName && touched.lastName
                          ? "input-error"
                          : null
                      } ${styles.form_input}`}
                    />
                    <ErrorMessage
                      name="lastName"
                      component="span"
                      className="error text-danger"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="my-1">
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
                <Col md={12} className="my-1">
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
                <Col md={12} className="my-2">
                  <FormGroup>
                    <Label htmlFor="confirmPassword" className={styles.text}>
                      <FiLock size={20} color="secondary" />
                    </Label>
                    <Field
                      className={` ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "input-error"
                          : null
                      } ${styles.form_input}`}
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      autoComplete="off"
                      placeholder="Confirm Password"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="span"
                      className="error text-danger"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={7}>
                  <FormGroup check className={styles.checkbox}>
                    <Field id="check" name="check" type="checkbox" />{" "}
                    <Label check for="exampleCheck" className="text-secondary">
                      I want to recieve newsletter
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={5}>
                  <FormText>
                    Already a member?{" "}
                    <CardLink
                      className={styles.login_link}
                      onClick={handleChange}
                    >
                      Sign In
                    </CardLink>
                  </FormText>
                </Col>
              </Row>
              <FormGroup className={styles.login_section}>
                <Button
                  color="primary"
                  className={`rounded-pill ${styles.signup_btn}`}
                  type="submit"
                >
                  Create Account For Free
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
                <CardText className="mt-3">
                  By signing up, I agree with{" "}
                  <CardLink
                    onClick={handleTermsandConditions}
                    className={styles.pagination_link}
                  >
                    terms and condition
                  </CardLink>{" "}
                  , and{" "}
                  <CardLink
                    className={styles.pagination_link}
                    onClick={handleChangePrivacyPolicy}
                  >
                    Privacy Policy
                  </CardLink>
                  .
                </CardText>
              </FormGroup>
            </Form>
          </Container>
        );
      }}
    </Formik>
  );
};
export default Signup;
