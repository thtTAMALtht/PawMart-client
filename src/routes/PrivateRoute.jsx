
import { Navigate } from "react-router";
import { useLocation } from "react-router";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import useAuthContext from "../hooks/useAuthContext";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>
  }

  if (user) {
    return children;
  }
  return <Navigate to="/auth/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
