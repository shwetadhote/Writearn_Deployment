import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Toastify: React.FC = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};
export default Toastify;
