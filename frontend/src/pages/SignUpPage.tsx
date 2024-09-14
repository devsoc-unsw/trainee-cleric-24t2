import {Lock, Mail, User } from "lucide-react"
import Input from "../Components/Input"
import { useState, ChangeEvent } from "react"
import { Link } from "react-router-dom";
import PasswordStrengthMeter from "../Components/PasswordStrengthMeter";

const SignUpPage: React.FC = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [error, setError] = useState(false);
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
  }
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  const handleNameBlur = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handleEmailBlur = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "" || event.target.validity.typeMismatch) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handlePasswordBlur = (event:ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
    if (event.target.value !== "") {
      setConfirmPasswordError(false);
    }
  }

  const handleConfirmPasswordBlur = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "" || event.target.value !== password) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  }
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden ">
      <div className="max-w-md w-full bg-gradient-to-br bg-gray-800  bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transpare bg-clip-text">
            Create An Account
          </h2>
          <form onSubmit={handleSignUp}>
            <Input
              Icon={User}
              type="text"
              label="Name"
              value={name}
              name="name"
              error={error}
              onBlur={handleNameBlur}
              onChange={handleNameChange}
              placeholder="Please enter your full name"
            />
            {nameError && (<p role="alert" className="text-red-600 font-bold">
              Please make sure you have entered a {""}
              <em>name</em>
            </p>)}
            <Input
              Icon={Mail}
              type="email"
              label="Email"
              value={email}
              name="name"
              error={error}
              onBlur={handleEmailBlur}
              onChange={handleEmailChange}
              placeholder="Please enter your email address"
            />
            <Input
              Icon={Lock}
              type="password"
              label="Password"
              value={password}
              name="password"
              error={error}
              onBlur={handlePasswordBlur}
              onChange={handlePasswordChange}
              placeholder="Please enter your password"
            />
            <PasswordStrengthMeter password={password}/>
            <Input
              Icon={Lock}
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              name="confirm password"
              error={error}
              onBlur={handleConfirmPasswordBlur}
              onChange={handleConfirmPasswordChange}
              placeholder="Please re-enter your password"
            />
            <button type="submit" className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
						  font-bold rounded-lg shadow-lg hover:from-green-600
						  hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
						  focus:ring-offset-gray-900 transition duration-200">Sign up</button>
          </form>
        </div>
        <div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center'>
				    <p className='text-sm text-gray-400'>
					    Already have an account?{" "}
					    <Link to={"/login"} className='text-green-400 hover:underline'>
						    Login
					    </Link>
				    </p>
		    </div>
      </div>
    </div>
    </>
  )
}

export default SignUpPage