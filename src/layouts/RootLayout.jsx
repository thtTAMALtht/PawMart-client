import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import { Toaster } from 'react-hot-toast';

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      <Footer>
        <Footer></Footer>
      </Footer>
      <Toaster />
    </div>
    
  );
};

export default RootLayout;
