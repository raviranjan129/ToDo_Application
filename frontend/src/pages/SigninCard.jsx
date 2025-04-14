import React from 'react';
import { Link } from 'react-router-dom';

export const SigninCard = ({
  signinForm,
  setSigninForm,
  validationError,
  onSigninFormSubmit,
  error,
  isPending,
  isSuccess,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient bg-[length:400%_400%] z-0" />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10" />

      <div className="relative z-20 max-w-md w-full bg-white bg-opacity-90 rounded-2xl shadow-2xl px-8 py-10 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">Welcome back! Please enter your credentials.</p>
        </div>

        <form className="space-y-6" onSubmit={onSigninFormSubmit}>
          <div className="space-y-4">
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
              value={signinForm.email}
              onChange={(e) => setSigninForm({ ...signinForm, email: e.target.value })}
            />
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
              value={signinForm.password}
              onChange={(e) => setSigninForm({ ...signinForm, password: e.target.value })}
            />
          </div>

          {validationError && (
            <p className="text-red-500 text-sm text-center">{validationError.message}</p>
          )}
          {error && (
            <p className="text-red-500 text-sm text-center">{error.message}</p>
          )}
          {isSuccess && (
            <p className="text-green-500 text-sm text-center">Successfully signed in! Redirecting...</p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className={`w-full flex justify-center py-3 px-6 rounded-md text-white font-semibold transition ${
              isPending
                ? 'bg-indigo-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            }`}
          >
            {isPending ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="text-center text-sm text-gray-700">
          Don't have an account?{' '}
          <Link to="/users/signup" className="text-indigo-600 font-medium hover:underline">
            Register
          </Link>
        </div>
      </div>

      {/* Gradient animation styles */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            animation: gradient 10s ease infinite;
          }
        `}
      </style>
    </div>
  );
};
