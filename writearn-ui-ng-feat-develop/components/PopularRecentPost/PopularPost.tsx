import React, { useEffect, useState } from "react";
import { Col, Row, CardImg, CardText } from "reactstrap";
import HorizontalLine from "../HorizontalLine";
import styles from "./styles.module.css";
import { PopularBlogPostApi } from "../../services/Auth";
import { slice } from "lodash";
import DateFormatData from "../../utils/helpers/dateFormatData";

const PopularPost: React.FC = () => {
  const [exploreData, setExploreData] = useState<any>([]);
  useEffect(() => {
    ExploreTopicsApiCaller();
  }, []);

  const ExploreTopicsApiCaller = async () => {
    try {
      const data = await PopularBlogPostApi();
      setExploreData(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const slicedata = slice(exploreData, 1, 5);
  return (
    <>
      {slicedata.map((item: any) => {
        return (
          <>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mt-1">
              <Row>
                <Col sm={3}>
                  <CardImg
                    alt="Card image cap"
                    src={`${process.env.NEXT_PUBLIC_APP_WRITEARN_IMAGE_ENDPOINT}${item.featuredImage}`}
                    className={styles.card_profile_img}
                    style={{
                      width: "4rem",
                      height: 60,
                    }}
                  />
                </Col>
                <Col sm={9}>
                  <CardText className=" mb-2 fw-bold text-body">
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
    </>
  );
};

export default PopularPost;
