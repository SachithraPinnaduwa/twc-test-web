
import  { useState } from 'react';

const New = () => {
    // Optional: If you want to handle form state
    const [contact, setContact] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        gender: '',
    });

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        });
    };

    // Optional: Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, such as sending data to an API
    };

    return (
        <div className="bg-gray-800 h-screen flex items-center justify-center">
        <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md mx-4">
            <h1 className="text-xl text-white font-semibold mb-8">New Contact</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <input
                    type="text"
                    name="fullName"
                    placeholder="full name"
                    onChange={handleChange}
                    value={contact.fullName}
                    className="w-full p-4 bg-gray-700 text-white rounded focus:outline-none"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="e-mail"
                    onChange={handleChange}
                    value={contact.email}
                    className="w-full p-4 bg-gray-700 text-white rounded focus:outline-none"
                />
                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="phone number"
                    onChange={handleChange}
                    value={contact.phoneNumber}
                    className="w-full p-4 bg-gray-700 text-white rounded focus:outline-none"
                />
                <div className="flex items-center">
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={handleChange}
                            checked={contact.gender === 'male'}
                            className="form-radio h-5 w-5 text-gray-500 focus:ring-blue-500 border-gray-600 bg-gray-700"
                        />
                        <span className="ml-2 text-white">male</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={handleChange}
                            checked={contact.gender === 'female'}
                            className="form-radio h-5 w-5 text-pink-600 focus:ring-pink-500 border-gray-600 bg-gray-700"
                        />
                        <span className="ml-2 text-white">female</span>
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-full p-4 bg-red-600 text-white rounded focus:outline-none hover:bg-red-700 transition-colors"
                >
                    add your first contact
                </button>
            </form>
        </div>
    </div>
    );
};

export default New;
