import { Link, NavLink } from "react-router";
import LogoImg from "../../assets/logo.png";
import Container from "../container/Container";
import { MdOutlineMenu } from "react-icons/md";
import useAuthContext from "../../hooks/useAuthContext";
import toast from "react-hot-toast";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import { RingLoader } from "react-spinners";

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
            <Link className="group flex items-center gap-2">
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

          {loading ? (
            <RingLoader size={30} color="#4388C9"></RingLoader>
          ) : (
            <>
              {user ? (
                <div className="navbar-end flex relative gap-2 dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar mr-16"
                  >
                    <div className="w-10 rounded-full ">
                      <img
                        title={user.displayName}
                        alt={user.displayName}
                        src={user.photoURL}
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
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
