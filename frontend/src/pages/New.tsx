import React, { useEffect, useState } from 'react'


import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Modal from '../components/Modal';
import NewContent from '../components/New';
const New = () => {
    
   
    const [activeView, setActiveView] = useState('viewContacts'); // other value might be 'viewContacts'
const navigate = useNavigate();
    useEffect(() => {
        fetchContacts();
      }, []);

      const fetchContacts = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
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
           navigate('/contacts')
        } catch (error) {
            console.error('Error adding contact:', error.response ? error.response.data : error.message);
            alert('Failed to add contact: ' + (error.response ? error.response.data : error.message));
        }
    };
      const logout =() => {
        localStorage.removeItem('user');
        navigate('/login');
      }

  
      const showContactsList = () => {
        navigate('/contacts')
      };

    return (
        <div className="bg-[#093f47] min-h-screen flex items-center justify-center">
            
        <div className=" p-8 rounded-lg w-full max-w-6xl mx-20">
        {/* <div className='justify-start'>
        <img src="src/assets/logo2.png" alt="logo" className="w-60 mb-5" />
          <img src="src/assets/text2.png" alt="illustration" className="w-50 h-50" />
            </div> */}
            <h1 className="text-4xl text-white font-bold mb-8">New Contact</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className='flex flex-row gap-10'>
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
                    className="w-full p-2 pl-8 bg-white  placeholder:text-[#093f47] font-bold rounded-full focus:outline-none text-lg"
                />
                </div>
                 
                <div className='flex flex-row gap-16'>
                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    value={contact.phoneNumber}
                    className="w-full p-2 pl-8 bg-white placeholder:text-[#093f47] font-bold rounded-full focus:outline-none flex-1 text-lg"
                />
                <div className="flex-1 flex items-center justify-between">
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
                </div>
                <button
                    type="submit"
                    style={{ marginTop: '4rem' }}
                    className="py-2 px-4 my-50 inline-block bg-[#093f47] text-white rounded-full border-2 focus:outline-none hover:bg-teal-700 transition-colors"
                >
                    Add Your First Contact
                </button>
            </form>
        </div>
        <div className="absolute bottom-0 right-0 p-5   items-center">
        <button
  onClick={logout}
  className=" text-white py-2 px-4 rounded hover:text-slate-500 transition duration-200 flex items-center justify-center"
>
  <svg
     fill="#FFFFFF"
    viewBox="-3.2 -3.2 38.40 38.40"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2 "
    width="35" 
    height="35" 
  >
    <g>
      <polygon points="6 22 7.414 20.586 3.828 17 12 17 12 15 3.828 15 7.414 11.414 6 10 0 16 6 22"></polygon>
  
      <path d="M16,2A13.9581,13.9581,0,0,0,6.105,6.105L7.5188,7.5186a12,12,0,1,1,0,16.9628L6.105,25.895A13.9974,13.9974,0,1,0,16,2Z"></path>
     
    </g>
  </svg>
  <span className='underline'>Logout</span>
</button>

      </div>
    </div>
    );
};

export default New;


{/* <div className='flex flex-row mx-auto justify-center gap-10'>
    <button onClick={showAddContact}>Add Contact</button>
    <button onClick={showContactsList}>View Contacts</button>
    <button>
        <Link to="/login">Login</Link>
    </button>
    <button onClick={toggleModal} className="btn btn-primary">
        Open Modal
      </button>
    <Modal
        isOpen={modalOpen}
        toggleModal={toggleModal}
        title="Confirmation"
      >
        <p>Are you sure you want to perform this action?</p>
        <button onClick={toggleModal} className="btn btn-danger">Confirm</button>
        <button onClick={toggleModal} className="btn btn-secondary">Cancel</button>
      </Modal>
      <button onClick={logout} className="btn btn-primary" 
      >
        Logout
      </button>
    </div> */}