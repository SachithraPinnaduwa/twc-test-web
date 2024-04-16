import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Welcome = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        fetchContacts();
    }, []);
    
    const logout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const fetchContacts = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user') as string);
            if (!user || !user._id) {
                navigate('/login');
                return;
            }
            const userId = user._id;
            const response = await axios.get(`http://localhost:3000/contacts?userId=${userId}`);
            if (response.data.length !== 0) {
                navigate('contacts');
            }
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    };

    return (
        <div className="bg-gray-800 h-screen flex flex-col justify-center">
            <div className="flex flex-col justify-center mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl text-white font-bold mb-4">Welcome,</h1>
                    <p className="text-white text-lg mb-6">
                        This is where your contacts will live. Click the button below to add a new contact.
                    </p>
                    <button
                        onClick={() => navigate('contacts/new')}
                        className="bg-transparent text-white py-2 px-4 border border-white rounded hover:bg-white hover:text-gray-800 transition duration-200"
                    >
                        Add your first contact
                    </button>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 p-5">
                <button onClick={logout} className="text-white bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Welcome;
