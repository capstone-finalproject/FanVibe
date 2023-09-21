import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";

export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  

  if (currentUser) return <Navigate to="/" />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    if (!username || !password) return setErrorText('Missing username or password');

    const [user, error] = await createUser({ username, password, firstName, lastName, email});
    if (error) return setErrorText(error.statusText);

    setCurrentUser(user);
    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
    if (name === 'firstName') setFirstName(value);
    if (name === 'lastName') setLastName(value);
    if (name === 'email') setEmail(value);
  };

  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="src/logo2.png" alt="Fanvibe" />
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
          Sign Up
        </h1>
      </div>
  
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-white-900">
              First Name:
            </label>
            <div className="mt-2">
              <input
                type="text"
                autoComplete="off"
                id="firstName"
                name="firstName"
                required
                value={firstName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
  
          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-white-900">
              Last Name:
            </label>
            <div className="mt-2">
              <input
                type="text"
                autoComplete="off"
                id="lastName"
                name="lastName"
                required
                value={lastName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
  
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white-900">
              Email:
            </label>
            <div className="mt-2">
              <input
                type="email"
                autoComplete="off"
                id="email"
                name="email"
                required
                value={email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
  
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-white-900">
              Username:
            </label>
            <div className="mt-2">
              <input
                type="text"
                autoComplete="off"
                id="username"
                name="username"
                required
                value={username}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
  
          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white-900">
              Password:
            </label>
            <div className="mt-2">
              <input
                type="password"
                autoComplete="off"
                id="password"
                name="password"
                required
                value={password}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
  
          {/* Sign Up Button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up Now!
            </button>
          </div>
  
          {/* Login Link */}
          <p className="mt-4 text-center text-sm">
            Already have an account with us? <Link to="/login" className="text-indigo-600 hover:underline">Log in!</Link>
          </p>
        </form>
  
        {!!errorText && <p className="mt-4 text-center text-sm text-red-500">{errorText}</p>}
      </div>
    </div>
  </>
  
  );
}
