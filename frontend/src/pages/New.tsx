import React, { useEffect, useState } from 'react'
import List from '../components/List';

import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Modal from '../components/Modal';
const New = () => {
    
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => setModalOpen(!modalOpen);
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
        
          
            const userId = user._id;
            const response = await axios.get(`http://localhost:3000/contacts?userId=${userId}`);
            if (response.data.length === 0) {
              setActiveView('welcome');
            }
         
        } catch (error) {
          console.error("Error fetching contacts:", error);
        }
      };
      const logout =() => {
        localStorage.removeItem('user');
        navigate('/login');
      }

    const showAddContact = () => {
        navigate('/contacts/new')
      };
      
      const showContactsList = () => {
        navigate('/contacts')
      };

    return (
         <div>
      
    
    {activeView === 'viewContacts' && (
    <List />
    )}
    <div className='flex flex-row mx-auto justify-center gap-10'>
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
    </div>
  </div>
    );
};

export default New;
