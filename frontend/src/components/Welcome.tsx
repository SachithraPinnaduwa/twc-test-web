import React from 'react';

const Welcome = ({ onAddContact }) => {
  return (
    <div className="bg-gray-800 h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl text-white font-bold mb-4">Welcome,</h1>
        <p className="text-white text-lg mb-6">
          This is where your contacts will live. Click the button below to add a new contact.
        </p>
        <button
          onClick={onAddContact}
          className="bg-transparent text-white py-2 px-4 border border-white rounded hover:bg-white hover:text-gray-800 transition duration-200"
        >
          add your first contact
        </button>
      </div>
    </div>
  );
};

export default Welcome;
