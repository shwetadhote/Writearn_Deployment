import React, { useEffect, useState } from "react";
import { Card, CardTitle, CardText, Container, Col, Row } from "reactstrap";
import Divider from "../Divider";
import styles from "./styles.module.css";
import { FcNext } from "react-icons/fc";
import HorizontalLine from "../HorizontalLine";
import { ExploreTopicsApi } from "../../services/Auth";

interface IExploreTopicData {
  ExploreTopicsApiCaller?: () => void;
}

interface IItemInterface {
  name: string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  totalPosts: string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}

const ExploreTopic: React.FC<IExploreTopicData> = () => {
  const [exploreData, setExploreData] = useState<any>([]);
  useEffect(() => {
    ExploreTopicsApiCaller();
  }, []);

  const ExploreTopicsApiCaller = async () => {
    try {
      const data = await ExploreTopicsApi();
      setExploreData(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Container>
        <Card body className="px-4 mt-5 py-0">
          <CardTitle tag="h4" className="text-center text-body mt-4">
            Explore Topics
          </CardTitle>
          <Row>
            <Col className={styles.divider}>
              <Divider />
            </Col>
          </Row>
          {exploreData.map((item: IItemInterface) => {
            return (
              <>
                <Row>
                  <Col xs={9}>
                    <CardText className="fw-bold text-body" tag="h6">
                      <FcNext className="mx-2" />
                      {item.name}
                    </CardText>
                  </Col>
                  <Col xs={3}>
                    <CardText className="fw-bold">({item.totalPosts})</CardText>
                  </Col>
                </Row>
                <Col className="my-3">
                  <HorizontalLine />
                </Col>
              </>
            );
          })}
        </Card>
      </Container>
    </>
  );
};

export default ExploreTopic;
