import { Link, useLocation, useNavigate } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAxios from "../../hooks/useAxios";
import Container from "../../components/container/Container";

const Login = () => {
  const { googleSignIn, signInUser, setLoading } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const axiosHook = useAxios();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setLoading(false);
        toast.success("Google SignIn Successful");
        navigate(location.state || "/");
        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };
        axiosHook
          .post("/users", userInfo)
          .then((data) => {
            // if (data.data.insertedId) {
            //   toast.success("Google SignIn Successful");
            // }
          })
          .catch((error) => {
            toast.error(error.message);
            setLoading(false);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    if (!password) {
      toast.error("Please enter your valid password");
      return;
    }

    signInUser(email, password)
      .then(() => {
        setLoading(false);
        toast.success("Login Successful");
        navigate(location.state || "/");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);

        if (error.code === "auth/invalid-credential") {
          toast.error("Email or password doesn't match");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Please enter a valid email");
        } else if (error.code === "auth/missing-password") {
          toast.error("Please enter your valid password");
        } else {
          toast.error("Something went wrong! Try again later");
        }
      });
  };

  return (
    <Container>
      <div className="flex justify-center py-24">
        <title>PawMart | Login</title>
        <div className=" card bg-base-100 w-full border border-gray-200 max-w-2xl shrink-0 shadow-md">
          <div className="card-body">
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center py-2">
              Login now!
            </h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset space-y-2 text-lg">
                <label className="label text-lg font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  className="outline w-full p-2 rounded-sm outline-gray-200 placeholder-gray-400"
                  placeholder="Email"
                />
                <div className="relative">
                  <label className="label text-lg font-semibold mb-3">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="text-[16px] outline w-full p-2 rounded-sm outline-gray-200 placeholder-gray-400"
                    placeholder="Password"
                  />
                  {showPassword ? (
                    <button
                      onClick={handleShowPassword}
                      type="button"
                      className="btn btn-sm absolute right-2 top-9"
                    >
                      <FaEyeSlash />
                    </button>
                  ) : (
                    <button
                      onClick={handleShowPassword}
                      type="button"
                      className="btn btn-sm absolute right-2 top-11"
                    >
                      <FaEye />
                    </button>
                  )}
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-primary shadow-none text-white mt-4">
                  Login
                </button>
                <hr className="h-px bg-gray-200 border-0" />
                <button
                  onClick={handleGoogleSignIn}
                  type="button"
                  className="btn bg-white text-black border-[#4388C9]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#ffffff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
                <span className="mt-2 text-sm">
                  Dont have an account ?{" "}
                  <Link
                    className="text-[#F76100] font-semibold"
                    to="/auth/register"
                  >
                    Register here!
                  </Link>
                </span>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
