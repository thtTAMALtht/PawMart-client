
import { Link, useNavigate } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Register = () => {
  const {googleSignIn,createUser,setLoading} = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((result) => {
      console.log(result.user);
      setLoading(false);
      toast.success("Google SignIn Successful");
      navigate("/");
    })
    .catch((error) => {
      toast.error(error.message);
    });
  };


const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    
    const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    if (!name) {
      toast.error("Please enter your name");
      return;
    }
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    if (!photo) {
      toast.error("Please enter your photo url");
      return;
    }
    if (!password) {
      toast.error("Please enter valid password");
      return;
    }
    if (!casePattern.test(password)) {
      toast.error(
        "Password must contain at least one uppercase and one lowercase letter."
      );
      return;
    }
    if (password.length < 6) {
      toast.error("Password should be atleast 6 characters");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("SignUp successful")
        setLoading(false)
        e.target.reset();
        navigate("/");
      })
      .catch((err) => {
        if(err.code==="auth/email-already-in-use"){
          toast.error("Your Email already in-use")
        }
      });
  };

 const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };




  return (
    <div className="flex justify-center mt-16">
      <div className=" card bg-base-100 w-full border border-gray-200 max-w-2xl shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold text-center py-2 text-secondary">Register now!</h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset space-y-2 text-lg">
              <label className="label text-lg font-semibold">Name</label>
              <input
                type="text"
                name="name"
                className="outline w-full p-2 rounded-sm outline-gray-200 placeholder-gray-400"
                placeholder="Name"
              />

              <label className="label text-lg font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="outline w-full p-2 rounded-sm outline-gray-200 placeholder-gray-400"
                placeholder="Email"
              />

              <label className="label text-lg font-semibold">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="outline w-full p-2 rounded-sm outline-gray-200 placeholder-gray-400"
                placeholder="Photo URL"
              />

              <div className="relative">
                <label className="label text-sm font-semibold">Password</label>
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
                    className="btn btn-sm absolute right-2 top-6"
                  >
                    <FaEyeSlash />
                  </button>
                ) : (
                  <button
                    onClick={handleShowPassword}
                    type="button"
                    className="btn btn-sm absolute right-2 top-6"
                  >
                    <FaEye />
                  </button>
                )}
              </div>
              <button className="btn btn-secondary shadow-none mt-4 text-white">
                Register
              </button>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <span className="text-sm">
                  Already have an account ?{" "}
                  <Link
                    className="text-[#4388C9] font-semibold"
                    to="/auth/login"
                  >
                    Login here!
                  </Link>
                </span>
                <h3 className="text-sm text-[#F76100] hidden md:block">
                  Alternative option ╰┈➤
                </h3>
                <button
                onClick={handleGoogleSignIn}
                  type="button"
                  className="btn mt-3 md:mt-0 w-full md:w-fit bg-white text-black border-[#4388C9]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
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
              </div>
              
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
