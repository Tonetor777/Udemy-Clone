import React, { useState , useEffect} from 'react'
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
const LoginPage = () => {
  const [email , setEmail] = useState("");
  const [pass , setPass] = useState("");
  const [error , setError] = useState("");
  const [msg , setMsg] = useState("");
  
  const handleInputChange = (e , type) => {
      switch(type){
        case "email":
          setError("");
          setEmail(e.target.value); 
          break; 
        case "pass":
          setError("");
          setPass(e.target.value);
          break;
      }
  }



  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-2xl">
        <h1 className=" font-bold ml-4 mb-8 text-2xl text-gray-800">
          Log in to your Udemy account
        </h1>
        <form className="space-y-4 ">
          <p>
            {
              error !== '' ? 
              <span className='text-2xl text-red-500'> {error} </span> :
              <span className='text-2xl text-green-500'> {msg} </span>
            }
          </p>
          <div className="w-full max-w-2xl">
            <div className=" flex j border border-black overflow-hidden transition-all duration-300">
              <div>
                <img src={GoogleIcon} alt="" />
              </div>

              <button
                type="button"
                id="google-signin"
                className="w-full px-3 py-6 border rounded focus:outline-none hover:bg-gray-200 hover:border-transparent font-bold text-3xl text-gray-800"
              >
                Continue with Google
              </button>
            </div>
          </div>

          <div className="w-full max-w-2xl">
            <div className=" flex j border border-black overflow-hidden transition-all duration-300">
              <div>
                <img src={FacebookIcon} alt="" />
              </div>

              <button
                type="button"
                id="google-signin"
                className="w-full px-3 py-6 border rounded focus:outline-none hover:bg-gray-200 hover:border-transparent font-bold text-3xl text-gray-800"
              >
                Continue with FaceBook
              </button>
            </div>
          </div>

          <div className="w-full max-w-2xl">
            <div className=" flex j border border-black overflow-hidden transition-all duration-300">
              <div>
                <img src={AppleIcon} alt="" />
              </div>

              <button
                type="button"
                id="google-signin"
                className="w-full px-3 py-6 border rounded focus:outline-none hover:bg-gray-200 hover:border-transparent font-bold text-3xl text-gray-800"
              >
                Continue with Apple
              </button>
            </div>
          </div>
          <div className=" border  px-4  border-black  overflow-hidden   ">
            <label htmlFor="email" className="block mb-1 pt-8  font-bold  ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded px-3  focus:outline-none"
              value={email}
              onChange={(e) => handleInputChange(e , "email")}
            />
          </div>
          <div className="  border  px-6 border-black  overflow-hidden">
            <label htmlFor="password" className="block  pt-8  mb-1 font-bold ">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border rounded px-3 focus:outline-none "
              value={pass}
              onChange={(e) => handleInputChange(e , "pass")}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-5 font-bold rounded mb-12 hover:bg-purple-700"
          >
            Log in
          </button>
        </form>
        <div className="flex justify-center px-2 space-x-4 mb-4 mt-4">
          <div className=" text-gray-800">or</div>
          <div className="text-purple-800 font-bold underline hover:text-purple-900 ">
            Forgot Password
          </div>
        </div>
        <div>
          <hr />
        </div>
        <p className="text-center mt-6">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-purple-700 font-bold underline hover:text-purple-900 "
          >
            sign up
          </a>
          <p>
            <a
              href="/login"
              className="text-purple-700 font-bold text-center underline hover:text-purple-900"
            >
              Log in with your organization
            </a>
          </p>
        </p>
      </div>
    </div>
  );
  
}
export default LoginPage