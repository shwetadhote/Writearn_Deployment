import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Container,
  FormGroup,
  Row,
  CardLink,
  Input,
} from "reactstrap";
import Divider from "../Divider";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

interface INewsLetterFormInput {
  email?: string;
  handleSubmit?: () => void;
  initialValues?: Object | undefined | any;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required"),
});

const Newsletter: React.FC<INewsLetterFormInput> = () => {
  const router = useRouter();
  const handleChangePrivacyPolicy = () => {
    router.push("/Home/PrivacyPolicy");
  };
  const initialValues = {
    email: "",
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {}}
      >
        {(formik) => {
          const { errors, touched } = formik;
          return (
            <Container>
              <Card className="text-center mt-5">
                <CardTitle className="text-body mt-4 mb-0" tag="h4">
                  Newsletter
                </CardTitle>
                <Row>
                  <Col className={styles.divider}>
                    <Divider />
                  </Col>
                </Row>
                <CardText className="fw-bold">
                  Join 1,00,000 subscribers
                </CardText>
                <Form>
                  <Col md={12} className="my-2">
                    <FormGroup className="my-3 px-5">
                      <Input
                        tag={Field}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email address..."
                        className={`text-center fw-bold rounded-pill ${
                          errors.email && touched.email ? "input-error" : null
                        } ${styles.form_input}`}
                      />
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="fw-bolder error text-danger"
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={12}>
                    <Button
                      color="primary"
                      type="submit"
                      className={`rounded-pill fw-bold ${styles.btn}`}
                    >
                      Subscribe
                    </Button>
                  </Col>
                </Form>
                <CardText className="pt-2 pb-5 fw-bold">
                  By signin up, you are agree to our,{" "}
                  <CardLink
                    onClick={handleChangePrivacyPolicy}
                    className={styles.privacy_policy}
                  >
                    Privacy Policy
                  </CardLink>
                </CardText>
              </Card>
            </Container>
          );
        }}
      </Formik>
    </>
  );
};
export default Newsletter;
