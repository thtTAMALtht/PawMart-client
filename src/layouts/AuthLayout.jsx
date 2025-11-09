import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import useAuthContext from "../hooks/useAuthContext";

const AuthLayout = () => {
  const { loading } = useAuthContext();
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <Toaster
        position="top-right"
        containerStyle={{
          top: 80,
          right: 20,
          left: 20,
        }}
      />
    </div>
  );
};

export default AuthLayout;
