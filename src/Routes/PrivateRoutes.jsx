import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <>
        <div className="flex justify-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#05A081]"></div>
        </div>
      </>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};
PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
