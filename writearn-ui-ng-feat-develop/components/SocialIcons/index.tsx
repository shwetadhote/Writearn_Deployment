import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import {
  CardLink,
  Col,
  Container,
  List,
  ListInlineItem,
  Row,
} from "reactstrap";
import styles from "./styles.module.css";

const SocialIcons: React.FC = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={12}>
            <List type="inline">
              <ListInlineItem>
                <CardLink
                  href="http://www.facebook.com/writearn.in"
                  target="__blank"
                  className={styles.social_icons}
                >
                  <FaFacebookF />
                </CardLink>
              </ListInlineItem>
              <ListInlineItem>
                <CardLink href="https://twitter.com/writearn" target="__blank" className={styles.social_icons}>
                  <FaTwitter />
                </CardLink>
              </ListInlineItem>
              <ListInlineItem>
                <CardLink
                  href="https://www.instagram.com/writearn/"
                  target="__blank"
                  className={styles.social_icons}
                >
                  <FaInstagram />
                </CardLink>
              </ListInlineItem>
              <ListInlineItem>
                <CardLink href="/" target="__blank" className={styles.social_icons}>
                  <FaWhatsapp />
                </CardLink>
              </ListInlineItem>
              <ListInlineItem>
                <CardLink href="/" target="__blank" className={styles.social_icons}>
                  <FaYoutube />
                </CardLink>
              </ListInlineItem>
            </List>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SocialIcons;
