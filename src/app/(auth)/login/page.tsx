"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // npm i lucide-react

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted", { email, password });
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Panel */}
      <div className="bg-[#061d26] text-white flex flex-col justify-center items-center px-6 py-10">
        <p className="text-sm text-center">#1 AI Photo in India</p>
        <p className="text-lg my-2">⭐⭐⭐⭐⭐</p>
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Studio Quality Photos at Home.
        </h1>
        <div className="flex -space-x-2 mb-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <img
              key={i}
              src={`/avatars/${i}.png`}
              alt={`avatar-${i}`}
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>
        <p className="text-sm text-center mb-1">
          <span className="font-bold">92%</span> of customers recommend us
        </p>
        <p className="text-xs text-gray-300 mb-6">
          Trusted by 100+ satisfied customers
        </p>
        <p className="flex items-center text-sm gap-2 text-green-400">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21.75 5.25a17.13 17.13 0 01-5.04 1.32A8.42 8.42 0 0022 3a16.92 16.92 0 01-5.34 2.06 8.38 8.38 0 00-14.28 7.64A23.76 23.76 0 013 6.25"
            />
          </svg>
          PICAI
        </p>
      </div>

      {/* Right Panel */}
      <div className="bg-[#fefef6] flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-2 text-center">
            Welcome back!
          </h2>
          <p className="text-sm text-center text-gray-500 mb-6">
            Sign in to your account
          </p>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-9 text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#061d26] text-white py-2 rounded-md hover:bg-black"
          >
            Sign In
          </button>

          {/* Footer */}
          <hr className="my-6" />
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="font-semibold text-black">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
