import React, { useState, useEffect } from "react";
import { slice } from "lodash";
import { LatestPostApi } from "../../../services/Auth";
import DateFormatData from "../../../utils/helpers/dateFormatData";

import {
  Button,
  Card,
  CardBody,
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
import Divider from "../../../components/Divider";
import HorizontalLine from "../../../components/HorizontalLine";
import Icons from "../../../components/Icons";
import styles from "./styles.module.css";
import { GoPrimitiveDot } from "react-icons/go";

interface ILatestPostData {
  LatestPostApiCall?: () => void;
  loadMore?: () => void;
}

const Latestpost: React.FC<ILatestPostData> = () => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [index, setIndex] = useState<any>(4);
  const [topAuthorsData, seTopAuthorsData] = useState<string[]>([]);
  const initialPosts = slice(topAuthorsData, 0, index);

  useEffect(() => {
    return () => {
      LatestPostApiCall();
    };
  }, []);

  const LatestPostApiCall = async () => {
    try {
      const data = await LatestPostApi();
      seTopAuthorsData(data.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const loadMore = () => {
    setIndex(index + 5);
    if (index >= topAuthorsData.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  return (
    <>
      <Container>
        <CardTitle tag="h4" className="mt-5 mx-4 text-body">
          Latest post
        </CardTitle>
        <Row>
          <Col sm={6} className="mx-4">
            <Divider />
          </Col>
        </Row>
        <Card body className="py-5">
          {initialPosts.map((item: any) => {
            return (
              <>
                <Container>
                  <Card className="text-dark border-0" key={item.id}>
                    <CardBody>
                      <Row>
                        <Col sm={4} lg={12} xl={4}>
                          <CardImg
                            alt="Card image cap"
                            src={`${process.env.NEXT_PUBLIC_APP_WRITEARN_IMAGE_ENDPOINT}${item.featuredImage}`}
                            style={{
                              height: 180,
                              marginTop:"10px",
                            }}
                          />
                        </Col>
                        <Col sm={8} lg={12} xl={8}>
                          <List type="inline" className="my-2">
                            <ListInlineItem>
                              <CardImg
                                alt="Profile Image"
                                src={`${process.env.NEXT_PUBLIC_APP_WRITEARN_IMAGE_ENDPOINT}${item.author.profileImage}`}
                                className={styles.card_profile_img}
                                width="100%"
                                style={{
                                  height: 28,
                                  width: "2rem",
                                }}
                              />
                            </ListInlineItem>
                            <ListInlineItem>
                              <CardSubtitle className="mx-1 fw-bold">
                                {item.author.firstName} {item.author.lastName}
                              </CardSubtitle>
                            </ListInlineItem>
                            <ListInlineItem>
                              <CardSubtitle
                                className={`mx-1 fw-bold ${styles.categories}`}
                              >
                                <GoPrimitiveDot
                                  size={13}
                                  className="text-center mx-1 mb-1"
                                />
                                {item.categories[0].name}
                                <GoPrimitiveDot
                                  size={13}
                                  className="text-center mx-1 mb-1"
                                />
                              </CardSubtitle>
                            </ListInlineItem>
                            <ListInlineItem>
                              <CardSubtitle className="mx-1 fw-bold">
                                {DateFormatData(item.createdAt)}
                              </CardSubtitle>
                            </ListInlineItem>
                          </List>
                          <CardTitle tag="h5" className="text-body">
                            {item.title}
                          </CardTitle>
                          <CardText className="text-secondary fw-bold">
                            {item.shortDescription}
                          </CardText>
                          <Icons
                            totalLikes={item.totalLikes}
                            totalViews={item.totalViews}
                            totalComments={item.totalComments}
                          />
                        </Col>
                      </Row>
                      <Col className="mt-4">
                        <HorizontalLine />
                      </Col>
                    </CardBody>
                  </Card>
                </Container>
              </>
            );
          })}
        </Card>
        {isCompleted ? (
          <>
            <Col className={styles.btn} xs={12} sm={6} md={11} xl={6} lg={12}>
              <Button
                onClick={loadMore}
                outline
                color="secondary"
                className={`rounded-pill px-5 ${styles.LoadMore_btn}`}
              >
                That{"'"}s It
              </Button>
            </Col>
          </>
        ) : (
          <>
            <Col className={styles.btn} xs={12} sm={6} md={11} xl={6} lg={6}>
              <Button
                onClick={loadMore}
                outline
                color="secondary"
                className={`rounded-pill ${styles.loadMore_btn}`}
              >
                Load more
              </Button>
            </Col>
          </>
        )}
      </Container>
    </>
  );
};
export default Latestpost;
