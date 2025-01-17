import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Loding from "../component/Loding";
import PropTypes from "prop-types";
const PrivetRoutes = ({ children }) => {
  const { user, loding } = useContext(AuthContext);


if (loding) {
  return <Loding/>;
}

  if (user && user?.email) {
    return children;
  }

  return (
    <>
      <Navigate to="/login" />
    </>
  );
};
PrivetRoutes.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default PrivetRoutes;
