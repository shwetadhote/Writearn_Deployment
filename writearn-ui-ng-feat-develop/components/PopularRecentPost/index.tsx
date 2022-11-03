import React, { useState } from "react";
import { Container, Card, Col, Row, Button, Spinner } from "reactstrap";
import PopularPost from "./PopularPost";
import RecentPost from "./RecentPost";
import styles from './styles.module.css';

interface IFormData {
  handleChangePopularPost?: () => void;
  handleChangeRecentPost?: () => void;
}

const PopularRecentPost: React.FC<IFormData> = () => {
  const [isPopular, setIsPopular] = useState<boolean>(true);
  const [isRecent, setIsRecent] = useState<boolean>(false);

  const handleChangePopularPost = () => {
    setIsPopular(true);
    setIsRecent(false);
  };
  const handleChangeRecentPost = () => {
    setIsPopular(false);
    setIsRecent(true);
  };

  return (
    <>
      <Container>
        <Card body className="text-center mt-5">
          <Row>
            <Col className="text-center my-3">
              <Button
                color="primary"
                className={`rounded-pill fw-bold mx-2 ${styles.button}`}
                onClick={handleChangePopularPost}
              >
                Popular
              </Button>
              <Button
                outline
                className={`rounded-pill fw-bold mx-2 ${styles.button}`}
                onClick={handleChangeRecentPost}
              >
                Recent
              </Button>
            </Col>
          </Row>
          {isPopular && <PopularPost />}
          {isRecent && <RecentPost />}
        </Card>
      </Container>
    </>
  );
};

export default PopularRecentPost;
