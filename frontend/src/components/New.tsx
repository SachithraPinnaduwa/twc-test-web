import { useState } from 'react';
import axios from 'axios';

const NewContent = () => {
    const [contact, setContact] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        gender: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user._id) {
        alert('You must be logged in to add a contact.');
        return;
    }

        try {
            const response = await axios.post('http://localhost:3000/contacts', {
                userId: user._id,  
                full_name: contact.fullName,
                gender: contact.gender,
                email: contact.email,
                phone: contact.phoneNumber
            });
            alert('Contact added successfully!');
            console.log(response.data); 
            setContact({
                fullName: '',
                email: '',
                phoneNumber: '',
                gender: '',
            });
           
        } catch (error) {
            console.error('Error adding contact:', error.response ? error.response.data : error.message);
            alert('Failed to add contact: ' + (error.response ? error.response.data : error.message));
        }
    };

    return (
        <div className="bg-gray-800 h-screen flex items-center justify-center">
            <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md mx-4">
                <h1 className="text-xl text-white font-semibold mb-8">New Contact</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        onChange={handleChange}
                        value={contact.fullName}
                        className="w-full p-4 bg-gray-700 text-white rounded focus:outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={handleChange}
                        value={contact.email}
                        className="w-full p-4 bg-gray-700 text-white rounded focus:outline-none"
                    />
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
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
                            <span className="ml-2 text-white">Male</span>
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
                            <span className="ml-2 text-white">Female</span>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-4 bg-red-600 text-white rounded focus:outline-none hover:bg-red-700 transition-colors"
                    >
                        Add Your First Contact
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewContent;
