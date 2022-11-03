import React, { ReactNode, useEffect, useState } from "react";
import {
  Container,
  Card,
  Col,
  Row,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
import Divider from "../Divider";
import styles from "./styles.module.css";
import HorizontalLine from "../HorizontalLine";
import { slice } from "lodash";
import { PopularBlogPostApi } from "../../services/Auth";
import DateFormatData from "../../utils/helpers/dateFormatData";


interface IPopularPostData {
  PopularBlogPostApiCaller?: () => Promise<void>;
  slicedata?: string[] | undefined | unknown;
}

const PopularBlogPost: React.FC<IPopularPostData> = () => {
  const [exploreData, setExploreData] = useState<any>([]);
  useEffect(() => {
    PopularBlogPostApiCaller();
  }, []);

  const PopularBlogPostApiCaller = async () => {
    try {
      const data = await PopularBlogPostApi();
      setExploreData(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const slicedata = slice(exploreData, 1, 4);

  return (
    <>
      <Container>
        <Card body className="p-4 mt-5 text-center">
          <CardTitle className="text-center text-body" tag="h4">
            Popular Blog Post
          </CardTitle>
          <Row>
            <Col className={styles.divider}>
              <Divider />
            </Col>
          </Row>
          {slicedata.map((item: any) => {
            return (
              <>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Row>
                    <Col sm={3}>
                      <CardImg
                        alt="featured post"
                        src={`${process.env.NEXT_PUBLIC_APP_WRITEARN_IMAGE_ENDPOINT}${item.featuredImage}`}
                        className={styles.card_profile_img}
                        style={{
                          width: "4rem",
                          height: 60,
                        }}
                      />
                    </Col>
                    <Col sm={9}>
                      <CardText className=" my-2 fw-bold text-body">
                        {item.shortDescription}
                      </CardText>
                      <CardText className="fw-bold">
                        {" "}
                        {DateFormatData(item.createdAt)}
                      </CardText>
                    </Col>
                    <Col className="m-3">
                      <HorizontalLine />
                    </Col>
                  </Row>
                </Col>
              </>
            );
          })}
        </Card>
      </Container>
    </>
  );
};

export default PopularBlogPost;
