import React, { useEffect, useState } from "react";
import { Col, Row, CardImg, CardText } from "reactstrap";
import { slice } from "lodash";
import styles from "./styles.module.css";
import HorizontalLine from "../HorizontalLine";
import { LatestPostApi } from "../../services/Auth";
import DateFormatData from "../../utils/helpers/dateFormatData";


interface IRecentPostsData {
  LatestPostApiCall?: () => void;
}

const RecentPost: React.FC<IRecentPostsData> = () => {
  const [topAuthorsData, seTopAuthorsData] = useState<string[]>([]);

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
  const slicedata = slice(topAuthorsData, 1, 5);
  return (
    <>
      <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mt-4">
        {slicedata.map((item: any) => {
          return (
            <>
              <Row>
                <Col sm={3}>
                  <CardImg
                    alt="Card image cap"
                    src={`${process.env.NEXT_PUBLIC_APP_WRITEARN_IMAGE_ENDPOINT}${item.featuredImage}`}
                    className={styles.card_profile_img}
                    style={{
                      width: "5rem",
                      height: 80,
                    }}
                  />
                </Col>
                <Col sm={9}>
                  <CardText tag="h6" className=" my-2 text-body">
                    {item.shortDescription}
                  </CardText>
                  <CardText className="fw-bold">
                    {" "}
                    {DateFormatData(item.createdAt)}
                  </CardText>
                </Col>
                <Col className="my-3">
                  <HorizontalLine />
                </Col>
              </Row>
            </>
          );
        })}
      </Col>
    </>
  );
};

export default RecentPost;
