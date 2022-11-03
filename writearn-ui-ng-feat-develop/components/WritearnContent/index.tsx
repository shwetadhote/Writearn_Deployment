import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  Card,
  CardLink,
  CardText,
  CardTitle,
  Container,
  List,
  ListInlineItem,
} from "reactstrap";
import styles from "./styles.module.css";

const WritearnContent: React.FC = () => {
  return (
    <>
      <Container>
        <Card body className=" text-center mt-5 p-4">
          <CardTitle tag="h3" className="text-body">
            Writearn.<span className="text-primary">in</span>
          </CardTitle>
          <CardText className="text-secondary fw-bold mt-2">
            Hello we are a content writer who is fascinated by the content
            lifestyle. We help clients bring the right content to the right
            people.
          </CardText>
          <List type="inline" className="mt-3">
            <ListInlineItem>
              <CardLink
                href="http://www.facebook.com/writearn.in"
                target="__blank"
                className={styles.header_social_icon}
              >
                <FaFacebookF />
              </CardLink>
            </ListInlineItem>
            <ListInlineItem>
              <CardLink
                href="https://twitter.com/writearn"
                target="__blank"
                className={styles.header_social_icon}
              >
                <FaTwitter />
              </CardLink>
            </ListInlineItem>
            <ListInlineItem>
              <CardLink
                href="https://www.instagram.com/writearn/"
                target="__blank"
                className={styles.header_social_icon}
              >
                <FaInstagram />
              </CardLink>
            </ListInlineItem>
            <ListInlineItem>
              <CardLink
                href="/"
                target="__blank"
                className={styles.header_social_icon}
              >
                <FaYoutube />
              </CardLink>
            </ListInlineItem>
          </List>
        </Card>
      </Container>
    </>
  );
};

export default WritearnContent;
