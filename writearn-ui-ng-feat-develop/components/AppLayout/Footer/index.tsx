import React, { useState } from "react";
import styles from "./styles.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import {
  Row,
  Col,
  List,
  CardLink,
  Card,
  CardTitle,
  ListInlineItem,
  ListGroupItem,
  CardText,
  Button,
  InputGroup,
  Input,
  CardBody,
  Form,
  FormGroup,
  Container,
  CardFooter,
} from "reactstrap";
import { useForm } from "react-hook-form";
import LoginModal from "../../../pages/Auth/login/LoginModal";
import SignupModal from "../../../pages/Auth/signup/SignupModal";
import { useRouter } from "next/router";

interface IFormDataInput {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  message?: string;
  onSubmit?: () => void;
  handleChangePrivacyPolicy?: () => void;
  handleChangeHome?: () => void;
  handleChangeAbout?: () => void;
  handleChangeContact?: () => void;
}

const Footer: React.FC<IFormDataInput> = () => {
  const { handleSubmit } = useForm<IFormDataInput>();
  const router = useRouter();
  const [json, setJson] = useState<string>();

  const onSubmit = (data: IFormDataInput) => {
    setJson(JSON.stringify(data));
  };
  const [signinModal, setSigninModal] = useState<boolean>(false);
  const [openSigninModal, setOpenSigninModal] = useState<boolean>(false);

  const [signupModal, setSignupModal] = useState<boolean>(false);
  const [openSignupModal, setOpenSignupModal] = useState<boolean>(false);

  const handleChangeSignin = () => {
    setSigninModal(true);
  };

  const handleChangeSignup = () => {
    setSignupModal(true);
  };

  const handleSigninModal = () => {
    setSigninModal(true);
    setOpenSigninModal(!openSigninModal);
  };
  const handleSignupModal = () => {
    setSignupModal(true);
    setOpenSignupModal(!openSignupModal);
  };
  const onCloseModal = () => {
    setSigninModal(false);
    setSignupModal(false);
    setOpenSigninModal(false);
    setOpenSignupModal(false);
  };
  const handleChangeHome = () => {
    router.push("/");
  };
  const handleChangeAbout = () => {
    router.push("/AboutUs");
  };
  const handleChangeContact = () => {
    router.push("/ContactUs");
  };
  const handleChangePrivacyPolicy = () => {
    router.push("/Home/PrivacyPolicy");
  };
  const handleChangeFaq = () => {
    router.push("/FaQ");
  };
  const handleChangeTermsConditions = () => {
    router.push("/Home/TermsConditions");
  };

  return (
    <>
      <Card className={`my-2 ${styles.Card}`} body={true}>
        <Container className={styles.Card_text}>
          <Row>
            <Col sm="4" className="mt-3">
              <CardTitle tag="h5">Learn More</CardTitle>
              <List>
                <ListGroupItem>
                  <CardLink
                    onClick={handleChangeHome}
                    className={styles.Card_link}
                  >
                    Home
                  </CardLink>
                </ListGroupItem>
                <ListGroupItem>
                  <CardLink
                    onClick={handleChangeAbout}
                    className={styles.Card_link}
                  >
                    About
                  </CardLink>
                </ListGroupItem>
                <ListGroupItem>
                  <CardLink
                    onClick={handleChangeContact}
                    className={styles.Card_link}
                  >
                    Contact Us
                  </CardLink>
                </ListGroupItem>
                <ListGroupItem>
                  <CardLink
                    onClick={handleChangeTermsConditions}
                    className={styles.Card_link}
                  >
                    Terms and Conditions
                  </CardLink>
                </ListGroupItem>
                <ListGroupItem>
                  <CardLink
                    onClick={handleChangePrivacyPolicy}
                    className={styles.Card_link}
                  >
                    Privacy Policy
                  </CardLink>
                </ListGroupItem>
                <ListGroupItem>
                  <CardLink
                    onClick={handleChangeFaq}
                    className={styles.Card_link}
                  >
                    FAQ
                  </CardLink>
                </ListGroupItem>
              </List>
              <CardTitle tag="h5">Newsletter</CardTitle>
              <CardText>Join us to get the latest news and updates</CardText>
                <InputGroup className="mt-3">
              <Row>
                  <Col sm="8">
                    <Input
                      placeholder="Enter Your Email Here..."
                      className={`rounded-pill fw-bold ${styles.newsletter_input}`}
                    />
                  </Col>
                  <Col sm="4">
                    <Button
                      color="primary"
                      className={`rounded-pill fw-bold ${styles.subscribe_btn}`}
                    >
                      Subscribe
                    </Button>
                  </Col>
              </Row>
                </InputGroup>
            </Col>
            <Col sm="4" className="mt-3">
              <CardTitle tag="h5">Connect</CardTitle>
              <Row>
                <Col>
                  <Button
                    color="primary"
                    className="rounded-pill px-4"
                    onClick={handleChangeSignin}
                  >
                    Login
                  </Button>
                  <Button
                    outline
                    color="primary"
                    className="rounded-pill px-4 m-1"
                    onClick={handleChangeSignup}
                  >
                    Sign Up
                  </Button>
                </Col>
              </Row>
              <List type="inline">
                <ListInlineItem className="my-3">
                  <CardLink
                    href="http://www.facebook.com/writearn.in"
                    target="__blank"
                    className={styles.footer_social_icon}
                  >
                    <FaFacebookF />
                  </CardLink>
                </ListInlineItem>
                <ListInlineItem>
                  <CardLink
                    href="https://twitter.com/writearn"
                    target="__blank"
                    className={styles.footer_social_icon}
                  >
                    <FaTwitter />
                  </CardLink>
                </ListInlineItem>
                <ListInlineItem>
                  <CardLink
                    href="https://www.instagram.com/writearn/"
                    target="__blank"
                    className={styles.footer_social_icon}
                  >
                    <FaInstagram />
                  </CardLink>
                </ListInlineItem>
                <ListInlineItem>
                  <CardLink
                    href="/"
                    target="__blank"
                    className={styles.footer_social_icon}
                  >
                    <FaWhatsapp />
                  </CardLink>
                </ListInlineItem>
                <ListInlineItem>
                  <CardLink
                    href="/"
                    target="__blank"
                    className={styles.footer_social_icon}
                  >
                    <FaYoutube />
                  </CardLink>
                </ListInlineItem>
              </List>
              <CardTitle tag="h5">Contact Us</CardTitle>
              <CardText>
                <Row>
                  <Col>
                    Plot No. 47, Second Floor, G S Plaza,
                    <br />
                    Scheme No 78 - III, Part II, Vijay Nagar,
                    <br />
                    Indore, Madhya Pradesh - 452010
                    <br />
                    <CardLink
                      href="tel:0731-4949036"
                      target="__blank"
                      className={styles.phone_no}
                    >
                      0731-4949036
                    </CardLink>
                  </Col>
                </Row>
              </CardText>
              <Row>
                <Col>
                  <CardLink
                    href="mailto:contact@writearn.in"
                    target="__blank"
                    className={styles.Card_email}
                    color="primary"
                  >
                    contact@writearn.in
                  </CardLink>
                </Col>
              </Row>
            </Col>
            <Col sm="4" className="mt-3">
              <CardTitle tag="h5">Get in touch</CardTitle>
              <CardBody className="p-0 mt-4">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          type="text"
                          className={styles.Card_input_field}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                          type="text"
                          className={styles.Card_input_field}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          id="email"
                          name="email"
                          placeholder="Email"
                          type="email"
                          className={styles.Card_input_field}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          id="password"
                          name="password"
                          placeholder="Password"
                          type="password"
                          className={styles.Card_input_field}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup row>
                    <Col sm={12}>
                      <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                        placeholder="Message"
                        className={styles.Card_input_field}
                      />
                    </Col>
                  </FormGroup>
                </Form>
                <Button color="primary" className="rounded-pill px-5 fw-bold">
                  Submit
                </Button>
              </CardBody>
            </Col>
          </Row>
        </Container>
        <CardFooter className={`mt-5 ${styles.Card_footer}`}></CardFooter>
        <Container>
          <CardText className={`my-3 ${styles.footer_text}`}>
            © 2022 writearn.in all rights reserved
          </CardText>
        </Container>
      </Card>
      <LoginModal
        handleSigninModal={handleSigninModal}
        show={signinModal}
        onCloseModal={onCloseModal}
      />
      <SignupModal
        handleChange={handleSignupModal}
        showSignup={openSigninModal}
        onCloseModal={onCloseModal}
      />
      <SignupModal
        handleChange={handleSignupModal}
        showSignup={signupModal}
        onCloseModal={onCloseModal}
      />
      <LoginModal
        handleSigninModal={handleSignupModal}
        show={openSignupModal}
        onCloseModal={onCloseModal}
      />
    </>
  );
};

export default Footer;
