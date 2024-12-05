import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authentication } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(Authentication);

  return (
    <nav className="bg-blue-500 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Sunflower-Visa</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/all-visas" className="hover:underline">
            All Visas
          </Link>
          {user && (
            <>
              <Link to="/addvisa" className="hover:underline">
                Add Visa
              </Link>
              <Link to="/myvisas" className="hover:underline">
                My Added Visas
              </Link>
              <Link to="/myapplication" className="hover:underline">
                My Visa Applications
              </Link>
            </>
          )}
        </div>

        {/* Login/Register or User Info */}
        <div className="flex items-center space-x-4">
          {!user ? (
            <>
              <Link
                to="/login"
                className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-2">
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-8 h-8 rounded-full cursor-pointer"
                title={user.displayName}
              />
              <button
                onClick={logOut}
                className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
