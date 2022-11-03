import React from "react";
import {
  Card,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Badge,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
  UncontrolledAccordion,
  ListGroup,
  ListGroupItem,
  CardLink,
} from "reactstrap";
import InstagramPosts from "../../components/InstagramPosts";
import styles from "./styles.module.css";

const Faq:React.FC = () => {
  return (
    <>
      <Card className={styles.faqsHead} body>
        <CardTitle className="text-body mb-0" tag="h3">
          Frequently asked questions
        </CardTitle>
        <Breadcrumb>
          <BreadcrumbItem href="#" tag="a">
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#" tag="a" active>
            FaQ
          </BreadcrumbItem>
        </Breadcrumb>
      </Card>
      <Container>
        <Card body className={styles.cardBody}>
         
        </Card>
      <InstagramPosts/>
      </Container>
    </>
  );
};

export default Faq;
