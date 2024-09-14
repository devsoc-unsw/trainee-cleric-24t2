import { User } from "lucide-react"
import Input from "../Components/Input"
import { useState, ChangeEvent } from "react"

const SignUpPage: React.FC = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transpare bg-clip-text">
        Create Account
      </h2>
      <form onSubmit={handleSignUp}>
        <h3 className="form-title">Login Form</h3>
        <Input
          icon={User}
          type="text"
          label="Name"
          value={name}
          name="name"
          error={error}
          onChange={handleChange}
          placeholder="Please enter your full name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUpPage