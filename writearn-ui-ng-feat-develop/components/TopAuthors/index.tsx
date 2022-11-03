import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  Container,
  CardTitle,
  CardImg,
  Row,
  CardSubtitle,
  CardText,
  Button,
  Col,
  CardLink,
  List,
  ListInlineItem,
} from "reactstrap";
import styles from "./styles.module.css";
import { TopAuthorsApi } from "../../services/Auth";
import HorizontalLine from "../HorizontalLine";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Divider from "../Divider";
import { useRouter } from "next/router";
import DateFormatData from "../../utils/helpers/dateFormatData";

interface ITopAuthorsData {
  TopAuthorsApiCall?: () => void;
  handleFollow?: () => void;
  next?: () => void;
  previous?: () => void;
  slides?: () => void;
}

const TopAuthors: React.FC<ITopAuthorsData> = () => {
  const [isFollow, setIsFollow] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);
  const [topAuthorsData, seTopAuthorsData] = useState<object[]>([]);
  let router = useRouter();

  useEffect(() => {
    return () => {
      TopAuthorsApiCall();
    };
  }, []);

  const TopAuthorsApiCall = async () => {
    try {
      const data = await TopAuthorsApi();
      seTopAuthorsData(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRedirectUrl = (id: any) => {
    router.push(`/Profile/${id}`);
  };

  const handleFollow = () => {
    setIsFollow(!isFollow);
  };

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === topAuthorsData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? topAuthorsData.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = topAuthorsData.map((item: any) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <Container>
          <Card className="text-center mt-5 p-3">
            <CardTitle tag="h4" className="text-body my-1">
              TopAuthors
            </CardTitle>
            <Row>
              <Col className={styles.divider}>
                <Divider />
              </Col>
            </Row>
            <Row className={styles.user2Img}>
              <CardImg
                alt="Profile Image"
                src={`${process.env.NEXT_PUBLIC_APP_WRITEARN_IMAGE_ENDPOINT}${item.profileImage}`}
                className={styles.user2_img}
                style={{
                  height:100
                }}
              />
            </Row>
            <CardTitle tag="h4" className="text-body mt-4">
              {item.firstName} {item.lastName}
            </CardTitle>
            <CardSubtitle tag="h6" className="text-body text-capitalize">
              {item.userType}
            </CardSubtitle>
            <CardText className="fw-bold">
              {" "}
              {DateFormatData(item.createdAt)}
            </CardText>
            <Row className="my-4">
              <Col>
                <Button
                  color="primary"
                  className={`rounded-pill ${styles.follow_btn}`}
                  onClick={handleFollow}
                >
                  {isFollow ? "Following" : "Follow"}
                </Button>
                <Button
                  color="primary"
                  className={`rounded-pill ${styles.profile_btn}`}
                  onClick={() => handleRedirectUrl(item._id)}
                >
                  View Profile
                </Button>
              </Col>
            </Row>
            <List type="inline">
              <ListInlineItem>
                <CardLink
                  href="http://www.facebook.com/writearn.in"
                  target="__blank"
                  className="text-body mx-1"
                >
                  <FaFacebookF size={12} />
                </CardLink>
              </ListInlineItem>
              <ListInlineItem>
                <CardLink
                  href="https://twitter.com/writearn"
                  target="__blank"
                  className="text-body"
                >
                  <FaTwitter size={12} />
                </CardLink>
              </ListInlineItem>
              <ListInlineItem>
                <CardLink
                  href="https://www.instagram.com/writearn/"
                  target="__blank"
                  className="text-body  mx-1"
                >
                  <FaInstagram size={12}/>
                </CardLink>
              </ListInlineItem>
              <ListInlineItem>
                <CardLink href="/" target="__blank" className="text-body">
                  <FaWhatsapp size={12}/>
                </CardLink>
              </ListInlineItem>
              <ListInlineItem>
                <CardLink href="/" target="__blank" className="text-body mx-1">
                  <FaYoutube size={12} />
                </CardLink>
              </ListInlineItem>
            </List>
            <Col className="mt-2 mb-5">
              <HorizontalLine />
            </Col>
          </Card>
        </Container>
      </CarouselItem>
    );
  });

  return (
    <>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
          className={styles.carouselControlPrev}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
          className={styles.carouselControlNext}
        />
      </Carousel>
    </>
  );
};

export default TopAuthors;
