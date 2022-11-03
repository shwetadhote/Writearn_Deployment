import React from "react";
import { Card, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import styles from "./styles.module.css";

const Category = () => {
  return (
    <>
      <Card className={styles.cardHead} body>
        <CardTitle className="text-body mb-0" tag="h3">
          LifeStyle
        </CardTitle>
        <Breadcrumb>
          <BreadcrumbItem href="#" tag="a">
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#" tag="a" active>
            LifeStyle
          </BreadcrumbItem>
        </Breadcrumb>
      </Card>
    </>
  );
};

export default Category;
