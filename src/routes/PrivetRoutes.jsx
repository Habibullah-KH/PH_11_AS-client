import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Loding from "../component/Loding";

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

export default PrivetRoutes;
