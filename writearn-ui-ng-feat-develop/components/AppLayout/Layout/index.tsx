import React, { FormEvent } from "react";
import Footer from "../Footer";
import Header from "../Header";

interface Props {
  children: JSX.Element | JSX.Element[];
};

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
