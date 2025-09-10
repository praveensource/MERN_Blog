import React from "react";
import { Link } from "react-router-dom";
import { TextInput, Label, Checkbox, Button } from "flowbite-react";

const SignUp = () => {
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
          <form className="flex max-w-md flex-col gap-4">
          <div>
              <div className="mb-2 block">
                <Label htmlFor="username">Your Username</Label>
              </div>
              <TextInput
                id="username"
                type="text"
                placeholder="Username"
                required
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
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password">Your password</Label>
              </div>
              <TextInput id="password" type="password" placeholder="password" required />
            </div>
            <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white" type="submit">Sign Up</Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to={'/sign-in'} className="text-blue-500">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
