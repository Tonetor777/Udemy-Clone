import { useState , useEffect, useContext } from 'react';
import {Link , useNavigate} from 'react-router-dom'
import axios from 'axios'; 
import GoogleIcon from '@mui/icons-material/Google';
import { AuthContext } from '../components/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate()
  const { login } = useContext(AuthContext);

  useEffect(() => {
    setError('');
    setMsg('');
  }, [email, password]);

  const handleInputChange = (e, type) => {
    setError('');
    switch (type) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required.");
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/login.php', {
        email,
        password,
      });
      
      console.log(response)
      if(response.data.Status === "OK"){
        login(response.data.user);
          navigate("/")
      }
      setError(response.data.message)
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl">
        <h1 className="font-bold ml-4 mb-8 text-2xl text-gray-800">
          Log in to your Udemy account
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && <span className="text-2xl text-red-500">{error}</span>}
          {msg && <span className="text-2xl text-green-500">{msg}</span>}
          <div className="w-full max-w-2xl">
            <div className="flex justify-center border border-black overflow-hidden transition-all duration-300">
              <div className='px-5 '>
                <GoogleIcon fontSize='large' />
              </div>
              <button
                type="button"
                className="w-full px-3 py-6 border rounded focus:outline-none hover:bg-gray-200 hover:border-transparent font-bold text-3xl text-gray-800"
              >
                Continue with Google
              </button>
            </div>
          </div>

          <div className="border px-4 border-black overflow-hidden">
            <label htmlFor="email" className="block mb-1 pt-8 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded px-3 focus:outline-none"
              value={email}
              onChange={(e) => handleInputChange(e, 'email')}
            />
          </div>
          <div className="border px-6 border-black overflow-hidden">
            <label htmlFor="password" className="block pt-8 mb-1 font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border rounded px-3 focus:outline-none"
              value={password}
              onChange={(e) => handleInputChange(e, 'password')}
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
          <div className="text-gray-800">or</div>
          <div className="text-purple-800 font-bold underline hover:text-purple-900">
            Forgot Password
          </div>
        </div>
        <div>
          <hr />
        </div>
        <p className="text-center mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="text-purple-900 font-bold underline">
    Signup
  </Link>
          <p className="text-purple-700 font-bold text-center underline hover:text-purple-900">
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
};

export default LoginPage;
