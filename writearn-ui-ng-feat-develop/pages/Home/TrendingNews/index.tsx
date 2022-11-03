import React, { useEffect, useState } from "react";
import {
  Container,
  CardTitle,
  Row,
  Col,
  Card,
  CardImg,
  List,
  ListInlineItem,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { slice } from "lodash";
import Divider from "../../../components/Divider";
import HorizontalLine from "../../../components/HorizontalLine";
import Icons from "../../../components/Icons";
import { TrendingNewsApi } from "../../../services/Auth";
import  DateFormatData  from "../../../utils/helpers/dateFormatData";

interface TrendingNewsData {
  ExploreTopicsApiCaller?: () => void;
}

const TrendingNews: React.FC<TrendingNewsData> = () => {
  const [exploreData, setExploreData] = useState<any>([]);

  useEffect(() => {
    TrendingNewsApiCaller();
  }, []);

  const TrendingNewsApiCaller = async () => {
    try {
      const data = await TrendingNewsApi();
      setExploreData(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Container>
        <CardTitle tag="h4" className="mt-5 mx-4 text-body">
          Trending News
        </CardTitle>
        <Row>
          <Col sm={6} className="mx-4">
            <Divider />
          </Col>
        </Row>
        <Card body className="p-4">
          <Row>
            <Col sm={6} lg={6} xl={6}>
              {exploreData.slice(0, 1).map((item: any) => {
                return (
                  <>
                    <CardImg
                      alt="Card image cap"
                      src={`${process.env.NEXT_PUBLIC_APP_WRITEARN_IMAGE_ENDPOINT}${item.featuredImage}`}
                      className="p-2"
                      style={{
                        height: 220,
                      }}
                    />
                    <List type="inline" className="px-2 py-1">
                      <ListInlineItem>
                        <CardImg
                          alt="Card image cap"
                          src={`${process.env.NEXT_PUBLIC_APP_WRITEARN_IMAGE_ENDPOINT}${item.featuredImage}`}
                          width="100%"
                          style={{
                            height: 30,
                            width: "2rem",
                          }}
                        />
                      </ListInlineItem>
                      <ListInlineItem>
                        <CardSubtitle className="p-2 fw-bold">
                          {item.author.firstName}
                          {item.author.lastName}
                        </CardSubtitle>
                      </ListInlineItem>
                      <ListInlineItem>
                        <CardSubtitle className="p-2 fw-bold">
                          {DateFormatData(item.createdAt)}
                        </CardSubtitle>
                      </ListInlineItem>
                    </List>
                    <CardTitle tag="h6" className="text-body">{item.title}</CardTitle>
                    <Icons
                      totalComments={item.totalComments}
                      totalLikes={item.totalLikes}
                      totalViews={item.totalViews}
                    />
                    <CardText className="my-4 fw-bold">
                      {item.shortDescription}
                    </CardText>
                    <Col className="my-3">
                      <HorizontalLine />
                    </Col>
                    {exploreData.slice(1, 3).map((item: any) => {
                      return (
                        <>
                          <Row>
                            <Col xs={3} sm={3} lg={5} className="text-center">
                              <CardImg
                                alt="Card image cap"
                                src={`${process.env.NEXT_PUBLIC_APP_WRITEARN_IMAGE_ENDPOINT}${item.featuredImage}`}
                                style={{
                                  height: 70,
                                  width: "5rem",
                                }}
                              />
                            </Col>
                            <Col xs={9} sm={9} lg={7}>
                              <CardText className=" my-2 fw-bold text-body">
                                {item.shortDescription}
                              </CardText>
                              <CardText className="fw-bold">
                                {" "}
                                {DateFormatData(item.createdAt)}
                              </CardText>
                            </Col>
                          </Row>
                          <Col className="my-3">
                            <HorizontalLine />
                          </Col>
                        </>
                      );
                    })}
                  </>
                );
              })}
            </Col>

            <Col sm={6} lg={6} xl={6}>
              {exploreData.slice(3, 4).map((item: any) => {
                return (
                  <>
                    <CardImg
                      alt="Card image cap"
                      src={`${process.env.NEXT_PUBLIC_APP_WRITEARN_IMAGE_ENDPOINT}${item.featuredImage}`}
                      style={{
                        height: 220,
                      }}
                      className="p-2"
                    />
                    <List type="inline" className="px-2 py-1">
                      <ListInlineItem>
                        <CardImg
                          alt="Card image cap"
                          src={`${process.env.NEXT_PUBLIC_APP_WRITEARN_IMAGE_ENDPOINT}${item.featuredImage}`}
                          style={{
                            height: 30,
                            width: "2rem",
                          }}
                        />
                      </ListInlineItem>
                      <ListInlineItem>
                        <CardSubtitle className="p-2 fw-bold">
                          {item.author.firstName} {item.author.lastName}
                        </CardSubtitle>
                      </ListInlineItem>
                      <ListInlineItem>
                        <CardSubtitle className="p-2 fw-bold">
                        {DateFormatData(item.createdAt)}

                        </CardSubtitle>
                      </ListInlineItem>
                    </List>
                    <CardTitle tag="h6" className="text-body">{item.title}</CardTitle>
                    <Icons
                      totalComments={item.totalComments}
                      totalLikes={item.totalLikes}
                      totalViews={item.totalViews}
                    />
                    <CardText className="fw-bold">{item.shortDescription}</CardText>
                    <Col className="my-3">
                      <HorizontalLine />
                    </Col>
                    {exploreData.slice(4, 6).map((item: any) => {
                      return (
                        <>
                          <Row>
                            <Col xs={3} sm={3} lg={5} className="text-center">
                              <CardImg
                                alt="Card image cap"
                                src={`${process.env.NEXT_PUBLIC_APP_WRITEARN_IMAGE_ENDPOINT}${item.featuredImage}`}
                                style={{
                                  height: 70,
                                  width: "5rem",
                                }}
                              />
                            </Col>
                            <Col xs={9} sm={9} lg={7}>
                              <CardText className=" my-2 fw-bold text-body">
                                {item.shortDescription}
                              </CardText>
                              <CardText className="fw-bold">
                              {DateFormatData(item.createdAt)}
                              </CardText>
                            </Col>
                          </Row>
                          <Col className="my-3">
                            <HorizontalLine />
                          </Col>
                        </>
                      );
                    })}
                  </>
                );
              })}
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default TrendingNews;
