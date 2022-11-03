import React, { useState } from "react";
import { Modal, ModalHeader,ModalBody } from "reactstrap";
import Signup from ".";

interface ISignupModalFn {
  showSignup: any;
  onCloseModal: any;
  handleChange?: any;
}
const SignupModal: React.FC<ISignupModalFn> = ({
  showSignup,
  onCloseModal,
  handleChange,
}) => {
  return (
    <>
      <Modal size="md" isOpen={showSignup} centered={true}>
        <ModalHeader className="border-0" toggle={onCloseModal}></ModalHeader>
        <ModalBody>
          <Signup handleChange={handleChange} onCloseModal={onCloseModal} />
        </ModalBody>
      </Modal>
    </>
  );
};
export default SignupModal;
