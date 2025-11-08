import { Link} from "react-router";

const Login = () => {

  return (
    <div className="flex justify-center mt-16">
      <div className=" card bg-base-100 w-full border border-gray-200 max-w-2xl shrink-0 shadow-md">
        <div className="card-body">
          <h1 className="text-5xl font-bold text-primary text-center py-2">Login now!</h1>
          <form>
            <fieldset className="fieldset space-y-2">
              <label className="label text-lg font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="outline w-full p-2 rounded-sm outline-gray-200 placeholder-gray-400"
                placeholder="Email"
              />
              <label className="label text-lg font-semibold">Password</label>
              <input
                type="password"
                name="password"
                className="outline w-full p-2 rounded-sm outline-gray-200 placeholder-gray-400"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-primary shadow-none text-white mt-4">
                Login
              </button>
              <hr className="border-0 `h-[1px]` bg-gray-200" />
              <button
            
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
  );
};

export default Login;
