import React, { useEffect, useState } from "react";
import { Button, Card, CardTitle, Col, Container, Row } from "reactstrap";
import styles from "./styles.module.css";
import Divider from "../Divider";
import { CategoryApi } from "../../services/Auth";
import { slice } from "lodash";

interface IPopularTagsData {
  PopularTagsApiCaller?: () => void;
}

const PopularTags: React.FC<IPopularTagsData> = () => {
  const [exploreData, setExploreData] = useState<any>([]);
  useEffect(() => {
    PopularTagsApiCaller();
  }, []);

  const PopularTagsApiCaller = async () => {
    try {
      const data = await CategoryApi();
      setExploreData(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const slicedata = slice(exploreData, 0, 5);
  return (
    <>
      <Container>
        <Card body className="mt-5 text-center">
          <CardTitle className="text-center text-body" tag="h4">
            Popular Tags
          </CardTitle>
          <Row>
            <Col className={styles.divider}>
              <Divider />
            </Col>
          </Row>
          <Col xl={12}>
            {slicedata.map((item: any) => {
              return (
                <>
                  <Button outline className={`rounded-pill fw-bold ${styles.button}`}>
                    {item.slug}
                  </Button>
                </>
              );
            })}
          </Col>
        </Card>
      </Container>
    </>
  );
};

export default PopularTags;
