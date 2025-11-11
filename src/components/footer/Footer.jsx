import Container from "../../components/container/Container";
import { Link } from "react-router";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import LogoImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#273140]">
      <Container>
        <footer className="grid grid-cols-12 lg:gap-12 py-8 space-y-12 lg:space-y-0 text-center">
          <div className="col-span-12 lg:col-span-5 space-y-4">
            <Link className="group flex items-center gap-2">
              <img src={LogoImg} alt="logo" className="w-14" />
              <p className="text-3xl font-extrabold italic text-[#F76100] group-hover:text-[#4388C9]">
                Paw
                <span className="text-[#4388C9] group-hover:text-[#F76100]">
                  Mart
                </span>
              </p>
            </Link>
            <p className="text-justify text-white">
              "PawMart connects local pet owners and buyers for adoption and pet
              care products. Discover loving pets looking for a home, or shop
              for quality food, toys, and accessories from trusted sellers. Our
              community-driven platform makes it easy to connect, adopt, and
              care for your furry friends — all in one safe and friendly space."
            </p>
          </div>

          <div
            id="contact"
            className="col-span-12 lg:col-span-4 text-white space-y-4"
          >
            <h3 className="text-xl font-semibold tracking-widest text-[#4388C9]">
              Contact Info
            </h3>
            <p>Email: support@pawmart.com</p>
            <p>Phone: +880-1725485869</p>
            <p>Address: Dhaka, Bangladesh</p>
            <Link to="/terms-condtions" className="text-[#F76100]/70 underline">
              Terms & Conditions
            </Link>
          </div>

          <div className="col-span-12 lg:col-span-3 text-white lg:flex flex-col   space-y-4">
            <h3 className="text-xl tracking-widest font-bold text-[#4388C9]">
              Get in touch
            </h3>
            <ul className="flex justify-center gap-5 text-lg">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://x.com/" target="_blank" rel="noreferrer">
                  <FaSquareXTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>

            <p className="text-white tracking-widest mt-2">
              &copy;2025 PawMart - All Rights Reserved
            </p>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
