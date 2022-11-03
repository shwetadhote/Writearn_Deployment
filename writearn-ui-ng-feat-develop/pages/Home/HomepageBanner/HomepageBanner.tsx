import React, { useState } from "react";
import background from "../../assets/images/BannerBackground.jpg";
import top from "../../assets/images/pancil_top.png";
import last from "../../assets/images/pancil_last.png";
import coin from "../../assets/images/coine.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import {
  CardImgOverlay,
  CardTitle,
  Card,
  CardImg,
  CardText,
  CardLink,
  List,
  ListInlineItem,
  Button,
  Container,
} from "reactstrap";
import styles from "./styles.module.css";
import SignupModal from "../../Auth/signup/SignupModal";
import LoginModal from "../../Auth/login/LoginModal";
import TopPicksForYou from "../TopPicksForYou";

interface IHeaderData {
  handleChangeSignupModal?: any;
  handleChange?: any;
  onCloseModal?: any;
}
const HomepageBanner: React.FC<IHeaderData> = () => {
  const [signupModal, setSignupModal] = useState<boolean>(false);
  const [openSignupModal, setOpenSignupModal] = useState<boolean>(false);

  const handleChangeSignupModal = () => {
    setSignupModal(true);
  };
  const handleChange = () => {
    setSignupModal(true);
    setOpenSignupModal(!openSignupModal);
  };

  const onCloseModal = () => {
    setSignupModal(false);
    setOpenSignupModal(false);
  };
  return (
    <>
      <Card inverse>
        <CardImg
          alt="background"
          src={background.src}
          className={styles.Card_img}
          style={{
            height: 600,
          }}
        />
        <CardImgOverlay className={`text-center ${styles.Img_overlay}`}>
          <Container>
            <CardTitle tag="h5" className="mb-0">
              <CardImg
                src={last.src}
                style={{
                  width: "2rem",
                }}
              />
              <strong className="mx-2">Show your</strong>
              <CardImg
                src={top.src}
                style={{
                  width: "1.5rem",
                }}
              />
            </CardTitle>
            <CardTitle tag="h2">
              Writing Skills & <strong> GET PAID </strong>
              <CardImg src={coin.src} className={styles.coins} />
            </CardTitle>
            <CardText>
              There are lot of categories you can choose and write about.
              <br />
              You can use WRITEARN for any kind of service.
            </CardText>
            <Button
              color="primary"
              className="mt-4 px-5 rounded-pill fw-bold"
              onClick={() => handleChangeSignupModal()}
            >
              Join Now
            </Button>
          </Container>
          <SignupModal
            handleChange={handleChange}
            showSignup={signupModal}
            onCloseModal={onCloseModal}
          />
          <LoginModal
            handleSigninModal={handleChange}
            show={openSignupModal}
            onCloseModal={onCloseModal}
          />
          <List type="inline">
            <ListInlineItem className="mt-2">
              <CardLink
                href="http://www.facebook.com/writearn.in"
                target="__blank"
                className={`p-1 ${styles.header_social_icon}`}
              >
                <FaFacebookF />
              </CardLink>
            </ListInlineItem>
            <ListInlineItem>
              <CardLink
                href="https://twitter.com/writearn"
                target="__blank"
                className={`p-1 ${styles.header_social_icon}`}
              >
                <FaTwitter />
              </CardLink>
            </ListInlineItem>
            <ListInlineItem>
              <CardLink
                href="https://www.instagram.com/writearn/"
                target="__blank"
                className={`p-1 ${styles.header_social_icon}`}
              >
                <FaInstagram />
              </CardLink>
            </ListInlineItem>
            <ListInlineItem>
              <CardLink
                href="/"
                target="__blank"
                className={`p-1 ${styles.header_social_icon}`}
              >
                <FaWhatsapp />
              </CardLink>
            </ListInlineItem>
            <ListInlineItem>
              <CardLink
                href="/"
                target="__blank"
                className={`p-1 ${styles.header_social_icon}`}
              >
                <FaYoutube />
              </CardLink>
            </ListInlineItem>
          </List>
        </CardImgOverlay>
      </Card>
      <TopPicksForYou />
    </>
  );
};

export default HomepageBanner;
