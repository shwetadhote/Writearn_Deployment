import React, { useEffect, useState } from "react";
import ExploreTopics from "../../../components/ExploreTopics";
import Divider from "../../../components/Divider";
import styles from "./styles.module.css";
import HorizontalLine from "../../../components/HorizontalLine";
import Icons from "../../../components/Icons";
import WritearnContent from "../../../components/WritearnContent";
import PopularRecentPost from "../../../components/PopularRecentPost";
import PopularTags from "../../../components/PopulatTags";
import PopularBlogPost from "../../../components/PopularBlogPost";
import Newsletter from "../../../components/Newsletter";
import InstagramPosts from "../../../components/InstagramPosts";
import { Auth } from "../../../services/Auth";
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Container,
  CardImg,
  CardSubtitle,
  List,
  ListInlineItem,
} from "reactstrap";
import TopAuthors from "../../../components/TopAuthors";
import Latestpost from "../LatestPost";
import TrendingNews from "../TrendingNews";
import { slice } from "lodash";
import DateFormatData from "../../../utils/helpers/dateFormatData";
import { GoPrimitiveDot } from "react-icons/go";

interface ItemCategories {
  createdAt: string | number | Date | undefined;
  featuredImage: any;
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}

interface IUsersData {
  TopPickApi?: () => void;
}

const TopPicksForYou: React.FC<IUsersData> = () => {
  const [topPicksData, setTopPicksData] = useState<any>([]);
  const [topPicksDataIndex, setTopPicksDataIndex] = useState<any>([]);
  const initialPosts = slice(topPicksDataIndex, 0, 1);

  useEffect(() => {
    TopPicksApi();
  }, []);

  const TopPicksApi = async () => {
    try {
      const data = await Auth();
      setTopPicksData(data.data);
      setTopPicksDataIndex(data.data);
    } catch (error) {}
  };

  return (
    <>
      <Container>
        <Row>
          <Col sm={8} md={12} lg={7} xl={8}>
            <Container>
              <CardTitle tag="h4" className="mt-5 mx-4 text-body">
                Top Picks For You
              </CardTitle>
              <Row>
                <Col sm={6} className="mx-4">
                  <Divider />
                </Col>
              </Row>
              <Card body={true} className="p-4">
                <Row>
                  {initialPosts.map((posts: any) => {
                    return (
                      <>
                        <Col sm={6} lg={6}>
                          <CardImg
                            alt="Card image cap"
                            src={`${process.env.NEXT_PUBLIC_APP_WRITEARN_IMAGE_ENDPOINT}${posts.featuredImage}`}
                            className={styles.card_img}
                            style={{
                              height: 200,
                            }}
                          />
                          <List type="inline" className="mt-2">
                            <ListInlineItem>
                              <CardImg
                                alt="Card image cap"
                                src={`${process.env.NEXT_PUBLIC_APP_WRITEARN_IMAGE_ENDPOINT}${posts.author.profileImage}`}
                                className={styles.card_profile_img}
                                width="100%"
                                style={{
                                  height: 28,
                                  width: "2rem",
                                }}
                              />
                            </ListInlineItem>
                            <ListInlineItem>
                              <CardSubtitle className="fw-bold mx-1">
                                {posts.author.firstName} {posts.author.lastName}
                              </CardSubtitle>
                            </ListInlineItem>
                            <GoPrimitiveDot
                              size={13}
                              className={`text-center  ${styles.dot}`}
                            />
                            <ListInlineItem>
                              <CardSubtitle className="fw-bold mx-2">
                                {DateFormatData(posts.createdAt)}
                              </CardSubtitle>
                            </ListInlineItem>
                          </List>
                          <CardTitle
                            tag="h4"
                            className="text-body font-weight-bold"
                          >
                            {topPicksData.authorTitle}
                          </CardTitle>
                          <Icons
                            totalLikes={posts.totalLikes}
                            totalViews={posts.totalViews}
                            totalComments={posts.totalComments}
                          />
                          <CardText tag="h6" className="my-3">
                            {posts.shortDescription}
                          </CardText>
                        </Col>
                      </>
                    );
                  })}
                  <Col sm={6}>
                    {topPicksData.map((item: ItemCategories) => {
                      return (
                        <>
                          <Row className="mt-3">
                            <Col xs={4} sm={4}>
                              <CardImg
                                alt="Card image cap"
                                src={`${process.env.NEXT_PUBLIC_APP_WRITEARN_IMAGE_ENDPOINT}${item.featuredImage}`}
                                style={{
                                  height: 80,
                                }}
                              />
                            </Col>
                            <Col xs={8} sm={8}>
                              <CardText className="text-body fw-bold">
                                {item.title}
                              </CardText>
                              <CardText className="mt-2 fw-bold">
                                {DateFormatData(item.createdAt)}
                              </CardText>
                            </Col>
                            <Col className="m-3">
                              <HorizontalLine />
                            </Col>
                          </Row>
                        </>
                      );
                    })}
                  </Col>
                </Row>
              </Card>
            </Container>
            <Latestpost />
            <TrendingNews />
          </Col>
          <Col sm={4} md={12} lg={5} xl={4}>
            <TopAuthors />
            <ExploreTopics />
            <WritearnContent />
            <PopularRecentPost />
            <PopularTags />
            <PopularBlogPost />
            <Newsletter />
          </Col>
        </Row>
        <InstagramPosts />
      </Container>
    </>
  );
};

export default TopPicksForYou;
