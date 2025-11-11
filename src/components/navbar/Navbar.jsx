import { Link, NavLink } from "react-router";
import LogoImg from "../../assets/logo.png";
import Container from "../container/Container";
import { MdOutlineMenu } from "react-icons/md";
import useAuthContext from "../../hooks/useAuthContext";
import toast from "react-hot-toast";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import { RingLoader } from "react-spinners";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
  const { user, signOutUser, loading } = useAuthContext();

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/pets-supplies">Pets & Supplies</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addListing">Add Listing</NavLink>
          </li>
          <li>
            <NavLink to="/myListing">My Listing</NavLink>
          </li>
          <li>
            <NavLink to="/myOrders">My Orders</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("SignOut successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  if (loading) {
    return LoadingSpinner;
  }
  return (
    <div className="shadow">
      <Container>
        <div className="navbar">
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
            <Link className="group flex flex-col md:flex-row items-center gap-2">
              <img src={LogoImg} alt="logo" className="w-14 hidden md:block" />
              <p className="text-3xl font-extrabold italic text-[#F76100] group-hover:text-[#4388C9]">
                Paw
                <span className="text-[#4388C9] group-hover:text-[#F76100]">
                  Mart
                </span>
              </p>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex text-primary ">
            <ul className="flex gap-6 text-lg font-medium">{links}</ul>
          </div>

          {loading ? (
            <RingLoader size={30} color="#4388C9"></RingLoader>
          ) : (
            <>
              {user ? (
                <div className="navbar-end flex relative gap-2 dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar mr-2 md:mr-16"
                  >
                    <div className="w-10 rounded-full border-2 border-[#4388C9]">
                      <img
                        id="user-avatar"
                        alt={user.displayName}
                        src={user.photoURL}
                        className="rounded-full"
                        data-tooltip-content={user.displayName}
                        data-tooltip-id="avatar-tooltip"
                      />
                      <Tooltip
                        id="avatar-tooltip"
                        place="left"
                        clickable={true}
                        className={`z-9999`}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="cursor-pointer dropdown-content bg-base-200 rounded-box z-100 mt-40 w-48 p-2 shadow text-center  space-y-3 border border-[#4388C9]"
                  >
                    <li>
                      <p className="text-sm break-all">Email : {user.email}</p>
                    </li>
                    <li>
                      <hr className="h-px bg-[#4388C9] border-0" />
                      <button
                        className="cursor-pointer  btn btn-sm btn-secondary mt-2"
                        onClick={handleSignOut}
                      >
                        SignOut
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="navbar-end flex items-center gap-2">
                  <Link
                    to="/auth/login"
                    className="btn btn-sm shadow-none btn-primary inline-flex items-center"
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth/register"
                    className="btn btn-sm shadow-none btn-secondary mr-2 hidden md:inline-flex items-center"
                  >
                    Register
                  </Link>
                </div>
              )}
            </>
          )}
          <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="dark"
              />

              {/* sun icon */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
