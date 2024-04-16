import React, { useEffect, useState } from 'react'
import {  useNavigate} from 'react-router-dom';
import axios from 'axios';
import Modal from '../components/Modal';

const New = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
   
const navigate = useNavigate();
    useEffect(() => {
        fetchContacts();
      }, []);

    const fetchContacts = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user') as string);
            if (!user || !user._id) {
                navigate('/login');
                return;
            }
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    };
      const [contact, setContact] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        gender: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setContact(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user') as string);
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
            setIsModalOpen(true);
            console.log(response.data); 
            setContact({
                fullName: '',
                email: '',
                phoneNumber: '',
                gender: '',
            });
           
          
        } catch (error: unknown | any) {
            console.error('Error adding contact:', error.response ? error.response.data : error.message);
            alert('Failed to add contact: ' + (error.response ? error.response.data : error.message));
        }
    };
      const logout =() => {
        localStorage.removeItem('user');
        navigate('/login');
      }

  
     

    return (
        <div className="bg-[#093f47] min-h-screen flex flex-col items-center justify-center px-4 md:flex-row">
        <div className="p-8 rounded-lg w-full max-w-6xl">
        <div className="justify-start mb-[10vh]">
         <div className='flex flex-row '>
          <img
            src="https://th.bing.com/th/id/OIP.J7omjR6eP11S8f_ZWJpYEAHaHa?rs=1&pid=ImgDetMain"
            alt="twc logo"
            className="w-10 text-white"
          />
          <span className="text-white text-2xl ml-1">twc</span>
          </div>
          <h2 className='text-white text-3xl font-bold'>contacts</h2>
          <h2 className='text-white text-3xl font-normal'>portal</h2>
        </div>
            <h1 className="text-4xl text-white font-bold mb-8">New Contact</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className='flex flex-col gap-4 md:flex-row md:gap-10'>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        onChange={handleChange}
                        value={contact.fullName}
                        className="w-full p-2 pl-8 bg-white placeholder:text-[#093f47] font-bold rounded-full focus:outline-none text-lg"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={handleChange}
                        value={contact.email}
                        className="w-full p-2 pl-8 bg-white placeholder:text-[#093f47] font-bold rounded-full focus:outline-none text-lg"
                    />
                </div>
                <div className='flex flex-col gap-4 md:flex-row md:gap-16'>
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        value={contact.phoneNumber}
                        className="w-full p-2 pl-8 bg-white placeholder:text-[#093f47] font-bold rounded-full focus:outline-none text-lg flex-1"
                    />
                    <div className="flex-1 flex items-center justify-between flex-col md:flex-row gap-2">
                        <p className='text-white'>Gender</p>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                onChange={handleChange}
                                checked={contact.gender === 'male'}
                                className="form-radio h-5 w-5 text-gray-500 focus:ring-blue-500 border-gray-600 bg-gray-700 "
                            />
                            <span className="ml-2 text-white">Male</span>
                        </label>
                        <label className="inline-flex items-center md:ml-6 ml-4">
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
                </div>
                <button
                    type="submit"
                    style={{ marginTop: '4rem' }}
                    className="py-2 px-4 inline-block bg-[#093f47] text-white rounded-full border-2 focus:outline-none hover:bg-teal-700 transition-colors"
                >
                    Add Your First Contact
                </button>
            </form>
        </div>
        <div className="absolute top-0 right-0 md:bottom-0 md:top-auto p-5">
            <button onClick={logout} className="text-white py-2 px-4 rounded hover:text-slate-500 transition duration-200 flex items-center justify-center">
                <svg fill="#FFFFFF" viewBox="-3.2 -3.2 38.40 38.40" xmlns="http://www.w3.org/2000/svg" className="mr-2" width="35" height="35">
                    <g>
                        <polygon points="6 22 7.414 20.586 3.828 17 12 17 12 15 3.828 15 7.414 11.414 6 10 0 16 6 22"></polygon>
                        <path d="M16,2A13.9581,13.9581,0,0,0,6.105,6.105L7.5188,7.5186a12,12,0,1,1,0,16.9628L6.105,25.895A13.9974,13.9974,0,1,0,16,2Z"></path>
                    </g>
                </svg>
                <span className='underline'>Logout</span>
            </button>
        </div>
        <Modal
        isOpen={isModalOpen}
        toggleModal={() => setIsModalOpen(false)}
        title="Your contact has been added successfully!"
      >
        <button onClick={() =>{
          
        setIsModalOpen(false);
        navigate('/contacts')
        }}
        className='bg-[#093f47] hover:bg-teal-900 text-white  py-2 px-6 rounded-3xl border-2 border-[#093f47] mr-4 text-xl'
        >OK</button>
      </Modal>
    </div>
    );
};

export default New;

