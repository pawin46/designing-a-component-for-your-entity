// write the component code here
import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/150"; // Placeholder image URL
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phoneNumber = "+1 234 567 890";
  const address = "123, Elm Street, Springfield, USA";

  return (
    <div className="user-card-container bg-gray-100 rounded-2xl shadow-lg p-4 max-w-sm mx-auto">
      <div className="profile-photo mb-4 flex justify-center">
        <img
          src={profilePhoto}
          alt="Profile"
          className="rounded-full w-24 h-24 border-2 border-blue-500"
        />
      </div>
      <div className="user-details text-center">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-600 mb-1">Email: {email}</p>
        <p className="text-gray-600 mb-1">Phone: {phoneNumber}</p>
        <p className="text-gray-600">Address: {address}</p>
      </div>
    </div>
  );
};

export default Usercard;