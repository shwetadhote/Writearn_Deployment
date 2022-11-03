import React from "react";
import { CardImg, Card } from "reactstrap";
import logo from "../../../pages/assets/images/logo.png";
import styles from "../navlogo/styles.module.css";

const Navlogo: React.FC = () => {
  return (
    <>
      <Card className={`text-center ${styles.card_logo}`}>
        <CardImg
          alt="background"
          src={logo.src}
          className={styles.card_img_logo}
        />
      </Card>
    </>
  );
};

export default Navlogo;
