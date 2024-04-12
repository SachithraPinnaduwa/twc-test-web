import React, { useEffect, useState } from 'react'
import New from '../components/New';
import List from '../components/List';
import Welcome from '../components/Welcome';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Contacts() {

    const [activeView, setActiveView] = useState('viewContacts'); // other value might be 'viewContacts'

    useEffect(() => {
        fetchContacts();
      }, []);

      const fetchContacts = async () => {
        try {
          const response = await axios.get("http://localhost:3000/contacts");
          if (response.data.length === 0) {
            setActiveView('welcome');
          }
         
        } catch (error) {
          console.error("Error fetching contacts:", error);
        }
      };

    const showAddContact = () => {
        setActiveView('addContact');
      };
      
      const showContactsList = () => {
        setActiveView('viewContacts');
      };
  return (
    <div>
        {activeView === 'welcome'  && (
    <Welcome onAddContact={showAddContact} />
    )}
    {activeView === 'addContact' && (
    <New showContactsList={showContactsList}/>
    
    )}
    {activeView === 'viewContacts' && (
    <List newContact={showAddContact}/>
    )}
    <div className='flex flex-row mx-auto justify-center gap-10'>
    <button onClick={showAddContact}>Add Contact</button>
    <button onClick={showContactsList}>View Contacts</button>
    <button>
        <Link to="/login">Login</Link>
    </button>
    </div>
  </div>
  )
}

export default Contacts