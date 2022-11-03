import  {useRouter}  from "next/router";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  List,
  ListInlineItem,
  Row,
} from "reactstrap";
import Divider from "../../components/Divider";
import HorizontalLine from "../../components/HorizontalLine";
import Icons from "../../components/Icons";
import Newsletter from "../../components/Newsletter";
import TopAuthors from "../../components/TopAuthors";
import WritearnContent from "../../components/WritearnContent";
import { ProfileDataApi } from "../../services/Auth";
import CardImage from "../assets/images/user4.jpg";
const Profile = () => {
  const [profileData, setProfileData] = useState([]);
  const router = useRouter();
  const { userId } = router.query;
  useEffect(() => {
    return () => {
      ProfilePageApiCall();
    };
  }, []);

  const ProfilePageApiCall = async () => {
    try {
      const data = await ProfileDataApi([userId]);
      setProfileData(Object.values(data.data));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col sm={4} md={12} lg={5} xl={4}>
            <TopAuthors />
            <WritearnContent />
            <Newsletter />
          </Col>
          <Col sm={8} md={12} lg={7} xl={8}>
            <Card className="mt-5 border-0" body>
              {profileData.map((item: any) => {
                return (
                  <>
                    <CardTitle tag="h3" className="text-body">
                      {item.firstName} {item.lastName}
                    </CardTitle>
                  </>
                );
              })}
              <Col sm={6}>
                <Divider />
              </Col>
              <Row>
                <Col sm={6} lg={6}>
                  <Card body className="mb-4">
                    <CardImg
                      alt="Card image cap"
                      src={CardImage.src}
                      width="100%"
                    />
                    <List type="inline" className="mt-2">
                      <ListInlineItem>
                        <CardImg
                          alt="Card image cap"
                          width="100%"
                          src={CardImage.src}
                          style={{
                            height: 26,
                            width: "2rem",
                          }}
                        />
                      </ListInlineItem>
                      <ListInlineItem>
                        <CardSubtitle tag="h6" className="m-2">
                          John Doe
                        </CardSubtitle>
                      </ListInlineItem>
                      <ListInlineItem>
                        <CardSubtitle tag="h6" className="m-1">
                          12 March 2022
                        </CardSubtitle>
                      </ListInlineItem>
                    </List>
                    <CardTitle tag="h4" className="text-body font-weight-bold">
                      Facts About life That will help you Success
                    </CardTitle>
                    <CardText tag="h6" className="my-1">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nemo dicta iusto placeat? Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Rerum dolore tempore
                      officia.
                    </CardText>
                    <Col className="mt-3">
                      <HorizontalLine />
                    </Col>
                    <Col className="text-center">
                      <Icons />
                    </Col>
                  </Card>
                </Col>
                <Col sm={6} lg={6} className="mb-4">
                  <Card body>
                    <CardImg
                      alt="Card image cap"
                      src={CardImage.src}
                      width="100%"
                    />
                    <List type="inline" className="mt-2">
                      <ListInlineItem>
                        <CardImg
                          alt="Card image cap"
                          width="100%"
                          src={CardImage.src}
                          style={{
                            height: 26,
                            width: "2rem",
                          }}
                        />
                      </ListInlineItem>
                      <ListInlineItem>
                        <CardSubtitle tag="h6" className="m-2">
                          John Doe
                        </CardSubtitle>
                      </ListInlineItem>
                      <ListInlineItem>
                        <CardSubtitle tag="h6" className="m-1">
                          12 March 2022
                        </CardSubtitle>
                      </ListInlineItem>
                    </List>
                    <CardTitle tag="h4" className="text-body font-weight-bold">
                      Facts About life That will help you Success
                    </CardTitle>
                    <CardText tag="h6" className="my-1">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nemo dicta iusto placeat? Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Rerum dolore tempore
                      officia.
                    </CardText>
                    <Col className="mt-3">
                      <HorizontalLine />
                    </Col>
                    <Col className="text-center">
                      <Icons />
                    </Col>
                  </Card>
                </Col>
                <Col sm={6} lg={6} className="mb-4">
                  <Card body>
                    <CardImg
                      alt="Card image cap"
                      src={CardImage.src}
                      width="100%"
                    />
                    <List type="inline" className="mt-2">
                      <ListInlineItem>
                        <CardImg
                          alt="Card image cap"
                          width="100%"
                          src={CardImage.src}
                          style={{
                            height: 26,
                            width: "2rem",
                          }}
                        />
                      </ListInlineItem>
                      <ListInlineItem>
                        <CardSubtitle tag="h6" className="m-2">
                          John Doe
                        </CardSubtitle>
                      </ListInlineItem>
                      <ListInlineItem>
                        <CardSubtitle tag="h6" className="m-1">
                          12 March 2022
                        </CardSubtitle>
                      </ListInlineItem>
                    </List>
                    <CardTitle tag="h4" className="text-body font-weight-bold">
                      Facts About life That will help you Success
                    </CardTitle>
                    <CardText tag="h6" className="my-1">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nemo dicta iusto placeat? Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Rerum dolore tempore
                      officia.
                    </CardText>
                    <Col className="mt-3">
                      <HorizontalLine />
                    </Col>
                    <Col className="text-center">
                      <Icons />
                    </Col>
                  </Card>
                </Col>
                <Col sm={6} lg={6} className="mb-4">
                  <Card body>
                    <CardImg
                      alt="Card image cap"
                      src={CardImage.src}
                      width="100%"
                    />
                    <List type="inline" className="mt-2">
                      <ListInlineItem>
                        <CardImg
                          alt="Card image cap"
                          width="100%"
                          src={CardImage.src}
                          style={{
                            height: 26,
                            width: "2rem",
                          }}
                        />
                      </ListInlineItem>
                      <ListInlineItem>
                        <CardSubtitle tag="h6" className="m-2">
                          John Doe
                        </CardSubtitle>
                      </ListInlineItem>
                      <ListInlineItem>
                        <CardSubtitle tag="h6" className="m-1">
                          12 March 2022
                        </CardSubtitle>
                      </ListInlineItem>
                    </List>
                    <CardTitle tag="h4" className="text-body font-weight-bold">
                      Facts About life That will help you Success
                    </CardTitle>
                    <CardText tag="h6" className="my-1">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nemo dicta iusto placeat? Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Rerum dolore tempore
                      officia.
                    </CardText>
                    <Col className="mt-3">
                      <HorizontalLine />
                    </Col>
                    <Col className="text-center">
                      <Icons />
                    </Col>
                  </Card>
                </Col>
                <Col sm={6} lg={6} className="mb-4">
                  <Card body>
                    <CardImg
                      alt="Card image cap"
                      src={CardImage.src}
                      width="100%"
                    />
                    <List type="inline" className="mt-2">
                      <ListInlineItem>
                        <CardImg
                          alt="Card image cap"
                          width="100%"
                          src={CardImage.src}
                          style={{
                            height: 26,
                            width: "2rem",
                          }}
                        />
                      </ListInlineItem>
                      <ListInlineItem>
                        <CardSubtitle tag="h6" className="m-2">
                          John Doe
                        </CardSubtitle>
                      </ListInlineItem>
                      <ListInlineItem>
                        <CardSubtitle tag="h6" className="m-1">
                          12 March 2022
                        </CardSubtitle>
                      </ListInlineItem>
                    </List>
                    <CardTitle tag="h4" className="text-body font-weight-bold">
                      Facts About life That will help you Success
                    </CardTitle>
                    <CardText tag="h6" className="my-1">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nemo dicta iusto placeat? Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Rerum dolore tempore
                      officia.
                    </CardText>
                    <Col className="mt-3">
                      <HorizontalLine />
                    </Col>
                    <Col className="text-center">
                      <Icons />
                    </Col>
                  </Card>
                </Col>
                <Col sm={6} lg={6} className="mb-4">
                  <Card body>
                    <CardImg
                      alt="Card image cap"
                      src={CardImage.src}
                      width="100%"
                    />
                    <List type="inline" className="mt-2">
                      <ListInlineItem>
                        <CardImg
                          alt="Card image cap"
                          width="100%"
                          src={CardImage.src}
                          style={{
                            height: 26,
                            width: "2rem",
                          }}
                        />
                      </ListInlineItem>
                      <ListInlineItem>
                        <CardSubtitle tag="h6" className="m-2">
                          John Doe
                        </CardSubtitle>
                      </ListInlineItem>
                      <ListInlineItem>
                        <CardSubtitle tag="h6" className="m-1">
                          12 March 2022
                        </CardSubtitle>
                      </ListInlineItem>
                    </List>
                    <CardTitle tag="h4" className="text-body font-weight-bold">
                      Facts About life That will help you Success
                    </CardTitle>
                    <CardText tag="h6" className="my-1">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nemo dicta iusto placeat? Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Rerum dolore tempore
                      officia.
                    </CardText>
                    <Col className="mt-3">
                      <HorizontalLine />
                    </Col>
                    <Col className="text-center">
                      <Icons />
                    </Col>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
