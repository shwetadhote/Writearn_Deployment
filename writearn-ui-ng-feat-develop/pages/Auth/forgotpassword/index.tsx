import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalProps,
  Form,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  FormText,
  CardLink,
  Container,
} from "reactstrap";
import { FaFacebookF, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import styles from "./styles.module.css";
import { GrGooglePlus } from "react-icons/gr";


interface IFormInput{
  handleChange:any;
}
const ForgotPassword: React.FC<IFormInput> = ({handleChange}
) => {
  return (
    <>
      <Container>
        <Label className="fw-bold" tag="h2">
          Forgot Your Password
        </Label>
        <Label tag="h6">
          Enter your email below and we will send you instructions on how to
          reset your password
        </Label>
        <div className={styles.divider}></div>
        <Form inline>
          <Row>
            <Col md={12} className="my-2">
              <FormGroup>
                <Label htmlFor="email" className={styles.text}>
                  <FaRegEnvelope size={20} />
                </Label>
                <Input
                  className={styles.form_input}
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="my-2">
              <FormGroup>
                <Label htmlFor="password" className={styles.text}>
                  <FiLock size={20} color="secondary" />
                </Label>
                <Input
                  className={styles.form_input}
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Password"
                />
              </FormGroup>
              <Col>
                  <FormText>
                    Already a member?{" "}
                    <CardLink
                      className={styles.login_link}
                      onClick={handleChange}
                    >
                      Login
                    </CardLink>
                  </FormText>
                </Col>
              <FormGroup className={styles.login_section}>
                <Button
                  color="primary"
                  className={`m-2 rounded-pill ${styles.btn}`}
                  type="submit"
                >
                  Forgot Password
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
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default ForgotPassword;
