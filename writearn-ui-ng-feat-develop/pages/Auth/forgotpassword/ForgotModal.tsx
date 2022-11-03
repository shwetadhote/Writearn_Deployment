import {
    Modal,
    ModalHeader,
    ModalBody,
    Container,
  } from "reactstrap";
import ForgotPassword from "../forgotpassword";
  
  interface IForgotModalFn {
    useState?: boolean;
    showSignup: any;
    onCloseModal: any;
    handleChange:any;
  }
  
  const ForgotModal: React.FC<IForgotModalFn> = ({handleChange, showSignup, onCloseModal }) => {
    return (
      <Container>
      <Modal isOpen={showSignup} centered={true}>
        <ModalHeader className="border-0" toggle={onCloseModal}></ModalHeader>
        <ModalBody>
          <ForgotPassword handleChange={handleChange}/>
        </ModalBody>
      </Modal>
      </Container>
    );
  };
  
  export default ForgotModal;
  