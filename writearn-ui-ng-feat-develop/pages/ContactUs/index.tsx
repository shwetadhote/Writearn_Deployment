import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { ImMap2 } from "react-icons/im";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardLink,
  CardTitle,
  Col,
  Container,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import Divider from "../../components/Divider";
import InstagramPosts from "../../components/InstagramPosts";
import styles from "./styles.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Toastify from "../../components/Toastify";
import { toast } from "react-toastify";

interface IFormInput {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  textarea?: string;
  handleChange: () => void;
  onCloseModal: () => void;
  initialValues?: Object | undefined | any;
  phoneRegExp?: RegExp;
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const SignInSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(20, "First name is too long.")
    .required("Please enter first name."),
  lastName: Yup.string()
    .max(50, "Last name is too long.")
    .required("Please enter last name."),
  email: Yup.string()
    .email("Please enter valid email.")
    .required("Please enter email."),
  phone: Yup.string()
    .required("Please enter phone number.")
    .matches(phoneRegExp, "Please enter valid phone number.")
    .max(14),
  textarea: Yup.string().min(20,"Please enter at least 20 characters.").max(160).required("Please enter message."),
});

const ContactUs: React.FC<IFormInput> = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    textarea: "",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          toast.success(
            "Thanks for contacting us. We’ll be in touch with you shortly!"
          );
        }}
      >
        {(formik) => {
          const { errors, touched } = formik;
          return (
            <>
              <Card className={styles.contactusHead} body>
                <CardTitle className="text-body mb-0" tag="h3">
                  Contact Us
                </CardTitle>
                <Breadcrumb>
                  <BreadcrumbItem href="#" tag="a">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem href="#" tag="a" active>
                    Contact Us
                  </BreadcrumbItem>
                </Breadcrumb>
              </Card>
              <Container>
                <Container>
                  <Card body className="border-0 my-4">
                    <Row>
                      <Col sm={4}>
                        <Card body>
                          <Row>
                            <Col xs={3} sm={3} className="text-center">
                              <BsTelephone size={40} className={styles.icon} />
                            </Col>
                            <Col xs={9} sm={9}>
                              <CardTitle
                                tag="h6"
                                className="fw-bold text-body m-0"
                              >
                                Phone
                              </CardTitle>
                              <CardLink
                                href="tel:0731-4949036"
                                target="__blank"
                                className="text-secondary fw-bold"
                              >
                                0731-4949036
                              </CardLink>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col sm={4}>
                        <Card body>
                          <Row>
                            <Col xs={3} sm={3} className="text-center">
                              <FiMail size={40} className={styles.icon} />
                            </Col>
                            <Col xs={9} sm={9}>
                              <CardTitle
                                tag="h6"
                                className="fw-bold text-body m-0"
                              >
                                Mail
                              </CardTitle>
                              <CardLink
                                href="mailto:contact@writearn.in"
                                target="__blank"
                                className="text-secondary fw-bold"
                              >
                                contact@writearn.in
                              </CardLink>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col sm={4}>
                        <Card body>
                          <Row>
                            <Col xs={3} sm={3} className="text-center">
                              <ImMap2 size={40} className={styles.icon} />
                            </Col>
                            <Col xs={9} sm={9}>
                              <CardTitle
                                tag="h6"
                                className="fw-bold text-body m-0"
                              >
                                Location
                              </CardTitle>
                              <CardLink
                                href="https://goo.gl/maps/iApdi6eYFmCrm35r8"
                                target="__blank"
                                className="text-secondary fw-bold"
                              >
                                Indore India
                              </CardLink>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  </Card>
                </Container>
                <Container className="px-4 mt-5">
                  <CardTitle tag="h4" className="text-body">
                    Send Messages
                  </CardTitle>
                  <Row>
                    <Col sm={4}>
                      <Divider />
                    </Col>
                  </Row>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Input
                            tag={Field}
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            className={` rounded-pill ${
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
                      <Col md={6}>
                        <FormGroup>
                          <Input
                            tag={Field}
                            type="text"
                            name="lastName"
                            id="lasstName"
                            placeholder="Last Name"
                            className={` rounded-pill ${
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
                      <Col md={6}>
                        <FormGroup>
                          <Input
                            tag={Field}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className={` rounded-pill ${
                              errors.email && touched.email
                                ? "input-error"
                                : null
                            } ${styles.form_input}`}
                          />
                          <ErrorMessage
                            name="email"
                            component="span"
                            className="error text-danger"
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Input
                            tag={Field}
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Phone No"
                            className={` rounded-pill ${
                              errors.phone && touched.phone
                                ? "input-error"
                                : null
                            } ${styles.form_input}`}
                          />
                          <ErrorMessage
                            name="phone"
                            component="span"
                            className="error text-danger"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup row>
                      <Col sm={12}>
                        <Input
                          tag={Field}
                          id="textarea"
                          name="textarea"
                          placeholder="Message"
                          className={`${
                            errors.textarea && touched.textarea
                              ? "input-error"
                              : null
                          } ${styles.Card_input_field}`}
                          type="textarea"
                        />
                        <ErrorMessage
                          name="textarea"
                          component="span"
                          className="error text-danger"
                        />
                      </Col>
                    </FormGroup>
                    <Button
                      color="primary"
                      type="submit"
                      className="rounded-pill px-5 my-5"
                    >
                      Submit Message
                    </Button>
                  </Form>
                </Container>
              <InstagramPosts />
              </Container>
            </>
          );
        }}
      </Formik>
      <Toastify />
    </>
  );
};

export default ContactUs;
