import React from 'react';
 // Import your CSS file if separate styling is used

const UserSignup = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Sign Up as a User</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">First Name</label>
            <input type="text" id="firstName" name="firstName" className="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
            <input type="text" id="lastName" name="lastName" className="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
