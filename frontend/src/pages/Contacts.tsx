import React, { useState } from 'react'
import New from '../components/New';
import List from '../components/List';
import Welcome from '../components/Welcome';
import { Link } from 'react-router-dom';

function Contacts() {

    const [activeView, setActiveView] = useState('welcome'); // other value might be 'viewContacts'


    const showAddContact = () => {
        setActiveView('addContact');
      };
      
      const showContactsList = () => {
        setActiveView('viewContacts');
      };
  return (
    <div>
        {activeView === 'welcome' && (
    <Welcome onAddContact={showAddContact} />
    )}
    {activeView === 'addContact' && (
    <New />
    
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