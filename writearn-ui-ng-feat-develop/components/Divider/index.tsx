import React from "react";
import { Card } from "reactstrap";
import styles from "./styles.module.css";

const Divider: React.FC = () => {
  return (
    <>
      <Card className={styles.mainDivider}></Card>
    </>
  );
};

export default Divider;
