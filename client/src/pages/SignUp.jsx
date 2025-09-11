import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextInput, Label, Checkbox, Button, Alert, Spinner } from "flowbite-react";

const SignUp = () => {
  const [formData, setFormData] = useState({});
const [errorMessage, setErrorMessage] = useState(null);
const [loading, setLoading] = useState(false);
const navigate = useNavigate();

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.username || !formData.email || !formData.password) {
    return setErrorMessage('Please fill out all fields.');
  }

  try {
    setLoading(true);
    setErrorMessage(null);

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success === false) {
      setErrorMessage(data.message);
    } else if (res.ok) {
      navigate('/sign-in');
    }
  } catch (error) {
    setErrorMessage(error.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to={"/"} className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Praveen's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            error voluptate, blanditiis ipsum accusamus id vero ducimus dolore
            ipsam quo, laudantium voluptatibus harum sint quidem quaerat
            consequuntur tenetur recusandae? Sapiente.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
          <div>
              <div className="mb-2 block">
                <Label htmlFor="username">Your Username</Label>
              </div>
              <TextInput
                id="username"
                type="text"
                placeholder="Username"
                 onChange={handleChange} required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email">Your email</Label>
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="name@gmail.com"
                 onChange={handleChange} required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password">Your password</Label>
              </div>
              <TextInput id="password" type="password" placeholder="password"  onChange={handleChange} required />
            </div>
            <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white" type="submit" disabled={loading}>{
              loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ): 'Sign-up'
              }</Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to={'/sign-in'} className="text-blue-500">Sign In</Link>
          </div>

          {
            errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default SignUp;
