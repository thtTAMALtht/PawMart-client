import { Link, NavLink } from "react-router";
import LogoImg from "../../assets/logo.jpg";
import Container from "../container/Container";
import { MdOutlineMenu } from "react-icons/md";
import useAuthContext from "../../hooks/useAuthContext";

const Navbar = () => {
  const { user } = useAuthContext();
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink>Pets & Supplies</NavLink>
      </li>
      <li>
        <NavLink>Add Listing</NavLink>
      </li>
      <li>
        <NavLink>My Listing</NavLink>
      </li>
      <li>
        <NavLink>My Orders</NavLink>
      </li>
    </>
  );

const handleSignOut=()=>{
  console.log('hihi');
}



  return (
    <div className="shadow ">
      <Container>
        <div className="navbar border">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="cursor-pointer border border-[#4388C9] rounded-sm lg:hidden mr-2"
              >
                <MdOutlineMenu className="text-3xl text-[#4388C9]" />
              </div>
              <ul
                tabIndex="-1"
                className="text-center space-y-4 py-2  dropdown-content bg-base-100 rounded-box  mt-6 w-52 shadow border text-primary border-gray-100"
              >
                {links}
              </ul>
            </div>
            <Link className="group flex items-center justify-between gap-2">
              <img src={LogoImg} alt="logo" className="w-14" />
              <p className="text-3xl font-extrabold italic text-[#F76100] group-hover:text-[#4388C9]">
                Paw
                <span className="text-[#4388C9] group-hover:text-[#F76100]">
                  Mart
                </span>
              </p>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex text-secondary ">
            <ul className="flex gap-6 text-lg font-medium">{links}</ul>
          </div>

          {user ? (
            <div className="navbar-end flex relative gap-2 dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar mr-8"
              >
                <div className="w-10 rounded-full ">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="cursor-pointer dropdown-content bg-base-100 rounded-box z-1 mt-32 w-24 p-2 shadow text-center space-y-3"
              >
                <li>
                  <Link className="justify-between">Profile</Link>
                </li>
                <li>
                  <button onClick={handleSignOut}>SignOut</button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="navbar-end flex gap-2">
              <Link
                to="/auth/login"
                className="btn btn-sm shadow-none btn-primary"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-sm shadow-none btn-secondary"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
