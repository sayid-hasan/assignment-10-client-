import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  return <div></div>;
};

export default PrivateRoutes;
