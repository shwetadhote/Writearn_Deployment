import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardImg,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  List,
  ListGroupItem,
  ListInlineItem,
  Row,
} from "reactstrap";
import BlogImage from "../../pages/assets/images/writing3.webp";
import person1 from "../../pages/assets/images/person1.webp";
import person2 from "../../pages/assets/images/person2.webp";
import person3 from "../../pages/assets/images/person3.jpg";
import Divider from "../../components/Divider";
import ExploreTopic from "../../components/ExploreTopics";
import TopAuthors from "../../components/TopAuthors";
import WritearnContent from "../../components/WritearnContent";
import HorizontalLine from "../../components/HorizontalLine";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import styles from "./styles.module.css";
import PopularTags from "../../components/PopulatTags";
import Newsletter from "../../components/Newsletter";
import InstagramPosts from "../../components/InstagramPosts";

const AboutUs: React.FC = () => {
  return (
    <>
      <Card className={styles.aboutusHead} body>
        <CardTitle className="text-body mb-0" tag="h3">
          About Us
        </CardTitle>
        <Breadcrumb>
          <BreadcrumbItem href="#" tag="a">
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#" tag="a" active>
            About Us
          </BreadcrumbItem>
        </Breadcrumb>
      </Card>
      <Container>
        <Row>
          <Col sm={8} md={12} lg={7} xl={8}>
            <Container>
              <CardTitle className="mt-4 text-body" tag="h4">
                About Us
              </CardTitle>
              <Row>
                <Col sm={6}>
                  <Divider />
                </Col>
              </Row>
              <Card body className="p-4">
                <CardImg
                  alt="Writearn Image"
                  src={BlogImage.src}
                  className="p-3"
                />
                <CardBody>
                  <CardText className="fw-bold">
                    To all the wordsmiths whose eyes are over such forums where
                    they can share their piece of writing and even get paid for
                    their skills of using words. So, take peace of breath, you
                    are finally standing at the right place you are seeking. Let
                    your brains go wandering and come up with the best ideas on
                    which you can write on. WRITEARN gives you an opportunity to
                    show your writing talent and is the best blogging platform
                    to make money and amongst the top-earning blogs websites in
                    India. The platform is reliable and easy to operate.
                  </CardText>
                  <br />
                  <CardText className="fw-bold">
                    “Where can I write a blog and earn money” or “how to make
                    money from blogging”? Are these questions whacking your
                    head? Don’t be worried, many of you are sailing on the same
                    boat and I have an answer for all such questions: follow
                    your passion, money will find its way.
                  </CardText>
                  <br />
                  <CardText className="fw-bold">
                    We are looking for such passionate writers who know how to
                    play with words but not getting a good platform where they
                    can flaunt their writings. Join the forum today and don’t
                    miss a chance to meet other writers and get inspired by
                    their skills.
                  </CardText>
                  <br />
                  <CardText className="fw-bold">
                    Some extra income is something we all urge for and there is
                    nothing wrong in that. You can start even as a freelancer.
                    Take a break for a cup of joy and write in your spare time.
                    Wherever you feel and whenever you feel like writing.
                    Without any time frame.
                  </CardText>
                  <br />
                  <CardText className="fw-bold">
                    Google is flooded with freelance blog writing jobs but, some
                    swindler sites make us lose our interest. So be a bit
                    cautious before you jump into the puddle of such sites.
                    Search for legit sites.
                  </CardText>
                  <br />
                  <CardText className="fw-bold">
                    Start a blog and make money online and gravitate toward the
                    crowd with your creative writing. The list of Indian sites
                    that pay for writing articles is never-ending but WRITEARN
                    fall in the category of best blogging sites in India 2021.
                  </CardText>
                  <br />
                  <CardText className="fw-bold">
                    What you need to do
                    <List>
                      <ListGroupItem>
                        Make your profile at WRITEARN
                      </ListGroupItem>
                      <ListGroupItem>Write your unique content</ListGroupItem>
                      <ListGroupItem>
                        Start a blog and make money online
                      </ListGroupItem>
                    </List>
                  </CardText>
                  <br />
                  <CardText className="fw-bold">
                    For a writer, their writings remain for eternity and we
                    totally respect that.
                  </CardText>
                  <br />
                  <Col sm={12} className="my-3">
                    <HorizontalLine />
                  </Col>
                  <List type="inline" className="text-center">
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
                        href="/"
                        target="__blank"
                        className={styles.header_social_icon}
                      >
                        <FaWhatsapp />
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
                </CardBody>
              </Card>
              <CardTitle className="mt-5 text-body" tag="h4">
                Our Team Member
              </CardTitle>
              <Row>
                <Col sm={6}>
                  <Divider />
                </Col>
              </Row>
              <Row>
                <Col sm={4} className="text-center">
                  <CardImg
                    alt="Card image cap"
                    src={person1.src}
                    className="rounded p-1"
                  />
                  <CardTitle tag="h5" className="text-body my-1">
                    William James
                  </CardTitle>
                  <CardSubtitle className="fw-bold">
                    Creative Director
                  </CardSubtitle>
                </Col>
                <Col sm={4} className="text-center">
                  <CardImg
                    alt="Card image cap"
                    src={person2.src}
                    className="rounded p-1"
                  />
                  <CardTitle tag="h5" className="text-body my-1">
                    Andrew Garfield
                  </CardTitle>
                  <CardSubtitle className="fw-bold">
                    Project Manager
                  </CardSubtitle>
                </Col>
                <Col sm={4} className="text-center ">
                  <CardImg
                    alt="Card image cap"
                    src={person3.src}
                    className="rounded p-1"
                  />
                  <CardTitle tag="h5" className="text-body my-1">
                    Jon Jones
                  </CardTitle>
                  <CardSubtitle className="fw-bold">
                    Creative Writer
                  </CardSubtitle>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col sm={4} md={12} lg={5} xl={4}>
            <TopAuthors />
            <ExploreTopic />
            <WritearnContent />
            <PopularTags />
            <Newsletter />
          </Col>
        </Row>
        <InstagramPosts />
      </Container>
    </>
  );
};

export default AboutUs;
