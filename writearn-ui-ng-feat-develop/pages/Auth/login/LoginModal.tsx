import { Modal, ModalHeader, ModalBody, Container } from "reactstrap";
import Login from "../login";

interface ILoginModalFn {
  show: any;
  onCloseModal: any;
  handleSigninModal: any;
}

const LoginModal: React.FC<ILoginModalFn> = ({
  handleSigninModal,
  show,
  onCloseModal,
}) => {
  return (
    <Container>
      <Modal isOpen={show} centered={true}>
        <ModalHeader className="border-0" toggle={onCloseModal}></ModalHeader>
        <ModalBody>
          <Login handleSignupModal={handleSigninModal} />
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default LoginModal;
