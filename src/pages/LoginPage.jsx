import React from 'react'

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
      const response = await axios.post('http://localhost/resource/PHP/login.php', {
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
    <div>Login</div>
  )
}
export default LoginPage