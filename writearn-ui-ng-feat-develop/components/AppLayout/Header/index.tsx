import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Container,
  List,
  ListInlineItem,
  CardLink,
  CardHeader,
  Button,
} from "reactstrap";
import Dropdown from "rsuite/Dropdown";
import Navlogo from "../../../pages/Home/navlogo";
import LoginModal from "../../../pages/Auth/login/LoginModal";
import SignupModal from "../../../pages/Auth/signup/SignupModal";
import { CategoryApi, ExploreTopicsApi } from "../../../services/Auth";
import { useRouter } from "next/router";

interface IHeaderData {
  args?: (e: React.FormEvent) => void;
  signinToggle?: () => void;
  signupToggle?: () => void;
  handleSigninModal?: () => void;
  handleModalBox?: () => void;
  handleChange?: () => void;
  handleModal?: () => void;
  onCloseModal?: () => void;
  handleChangeAbout?: () => void;
  handleChangeHome?: () => void;
  handleChangeContact?: () => void;
}

const Header: React.FC<IHeaderData> = ({ args }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);
  const [exploreData, setExploreData] = useState<any>([]);
  const [isCategoryData, setIsCategoryData] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    PopularTagsApiCaller();
  }, []);

  const PopularTagsApiCaller = async () => {
    try {
      const data = await ExploreTopicsApi();
      setExploreData(data.data);
      const categoryData = await CategoryApi();
      setIsCategoryData(categoryData.data);
    } catch (error) {}
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
  return (
    <>
      <CardHeader className={styles.cardHeader}>
        <Navbar {...args} expand="md" color="light">
          <Container>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink
                    className={
                      router.pathname == "/" ? styles.active : styles.inactive
                    }
                    onClick={handleChangeHome}
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={
                      router.pathname == "/AboutUs"
                        ? styles.active
                        : styles.inactive
                    }
                    onClick={handleChangeAbout}
                  >
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={
                      router.pathname == "/ContactUs"
                        ? styles.active
                        : styles.inactive
                    }
                    onClick={handleChangeContact}
                  >
                    Contact
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <Dropdown title="Categories" noCaret>
                    {exploreData.map((item: any) => {
                      return (
                        <>
                          <Dropdown.Menu title={`${item.name}`}>
                            {isCategoryData.map((element: any) => {
                              return (
                                <>
                                  {" "}
                                  {element.postType === item._id ? (
                                    <Dropdown.Item key={element._id}>
                                      {element.name}
                                    </Dropdown.Item>
                                  ) : null}
                                </>
                              );
                            })}
                          </Dropdown.Menu>
                        </>
                      );
                    })}
                  </Dropdown>
                </UncontrolledDropdown>
              </Nav>
              <List type="inline" className={styles.btn_section}>
                <ListInlineItem className="mt-3">
                  <CardLink
                    href="http://www.facebook.com/writearn.in"
                    target="__blank"
                    className={styles.header_social_icon}
                  >
                    <FaFacebookF />
                  </CardLink>
                </ListInlineItem>
                <ListInlineItem className="mt-3">
                  <CardLink
                    href="https://twitter.com/writearn"
                    target="__blank"
                    className={styles.header_social_icon}
                  >
                    <FaTwitter />
                  </CardLink>
                </ListInlineItem>
                <ListInlineItem className="mt-3">
                  <CardLink
                    href="https://www.instagram.com/writearn/"
                    target="__blank"
                    className={styles.header_social_icon}
                  >
                    <FaInstagram />
                  </CardLink>
                </ListInlineItem>
                <ListInlineItem className="mt-3">
                  <CardLink
                    href="/"
                    target="__blank"
                    className={styles.header_social_icon}
                  >
                    <FaWhatsapp />
                  </CardLink>
                </ListInlineItem>
                <ListInlineItem className="mt-3">
                  <CardLink
                    href="/"
                    target="__blank"
                    className={styles.header_social_icon}
                  >
                    <FaYoutube />
                  </CardLink>
                </ListInlineItem>
                <ListInlineItem className={styles.section}>
                  <Button
                    color="primary"
                    className={`m-1 rounded-pill ${styles.btn}`}
                    onClick={handleChangeSignin}
                  >
                    Login
                  </Button>
                  <Button
                    color="primary"
                    className={`m-1 rounded-pill ${styles.btn}`}
                    onClick={handleChangeSignup}
                  >
                    Signup
                  </Button>
                </ListInlineItem>
              </List>
            </Collapse>
          </Container>
        </Navbar>
        <Navlogo />
      </CardHeader>
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

export default Header;
