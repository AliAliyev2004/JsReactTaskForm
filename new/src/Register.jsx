import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration data:", { name, email, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cyan-400 from-purple-500 to-pink-500">
      <div className="w-full max-w-md p-10 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create an Account</h2>
        <p className="text-center text-gray-500 mb-6">Sign up to get started</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 p-4 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 p-4 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              placeholder="Enter your email"
              requiredP
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 p-4 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          >
            Register
          </button>
          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="#" className="text-purple-500 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
