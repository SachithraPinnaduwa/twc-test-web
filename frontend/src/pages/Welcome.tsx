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
        <div className="bg-[#093f47] h-screen flex flex-col">
           
            <div className="flex flex-col justify-center lg:mx-auto md:mx-40 md:max-w-5xl max-w-lg mx-20">
            <div className=" rounded-lg w-full max-w-4xl mt-[10vh] mb-[10vh] ">
        <div className="justify-start">
          <img src="src/assets/logo2.png" alt="logo" className="w-15" />
          <img
            src="src/assets/text2.png"
            alt="illustration"
            className="w-30 text-white"
          />
        </div>
        </div>
                    <h1 className="text-4xl text-white font-bold mb-4 items-start mx-auto md:mx-0">Welcome,</h1>
                  
                    <p className="text-white md:text-3xl mb-6 text-lg leading-tight">
                        This is where your contacts will live. Click the button below to add a new contact.
                    </p>
                    
               
                <div className='flex md:inline-block mx-auto md:mx-0'>
                <button
                        onClick={() => navigate('contacts/new')}
                        className="bg-transparent rounded-full text-white py-2 px-4 border border-white  hover:bg-white hover:text-gray-800 transition duration-200 mt-6"
                    >
                        add your first contact
                    </button>
                    </div>
            </div>
            <div className="absolute top-0 right-0 md:bottom-0 md:top-auto p-5">
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
          <span className="underline">Logout</span>
        </button>
        </div>
        </div>
    );
};

export default Welcome;
