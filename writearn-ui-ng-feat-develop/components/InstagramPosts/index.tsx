import React from "react";
import { Button, Card, CardImg, CardLink, Col, Row } from "reactstrap";
import writing3 from "../../pages/assets/images/writing3.webp";
import writing2 from "../../pages/assets/images/writing2.jpg";
import writing1 from "../../pages/assets/images/writing1.webp";
import styles from "./styles.module.css";

const InstagramPosts: React.FC = () => {
  return (
    <>
      <Card className={`border-0 text-center my-4 ${styles.card}`}>
        <Row>
          <Col sm={2} lg={3} xl={2}>
            <CardImg
              alt="Instagram Posts"
              src={writing1.src}
              width="100%"
              height="100%"
              className="p-1 rounded"
            />
          </Col>
          <Col sm={4} lg={3} xl={2}>
            <CardImg
              alt="Instagram Posts"
              src={writing2.src}
              width="100%"
              height="100%"
              className="p-1 rounded"
            />
          </Col>
          <Col sm={4} lg={3} xl={2}>
            <CardImg
              alt="Instagram Posts"
              src={writing3.src}
              width="100%"
              height="100%"
              className="p-1 rounded"
            />
          </Col>
          <Col sm={4} lg={3} xl={2}>
            <CardImg
              alt="Instagram Posts"
              src={writing1.src}
              width="100%"
              height="100%"
              className="p-1 rounded"
            />
          </Col>
          <Col sm={4} lg={3} xl={2}>
            <CardImg
              alt="Instagram Posts"
              src={writing2.src}
              width="100%"
              height="100%"
              className="p-1 rounded"
            />
          </Col>
          <Col sm={4} lg={3} xl={2}>
            <CardImg
              alt="Instagram Posts"
              src={writing3.src}
              width="100%"
              height="100%"
              className="p-1 rounded"
            />
          </Col>
          <CardLink
            href="https://www.instagram.com/writearn/"
            target="__blank"
          >
            <Button color="primary" className={`rounded-pill ${styles.button}`}>
              @writearn on Instagram
            </Button>
          </CardLink>
        </Row>
      </Card>
    </>
  );
};

export default InstagramPosts;
