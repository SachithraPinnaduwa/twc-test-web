import React from 'react';

const contacts = [
  { id: 1, name: 'Dion Fernando', gender: 'Male', email: 'dion342@gmail.com', phone: '0776342513' },
  { id: 2, name: 'Senoli Edirisinghe', gender: 'Female', email: 'ediri.senli@gmail.com', phone: '0715483254' },
  { id: 3, name: 'Kenath De Silva', gender: 'Male', email: 'kenath1996@gmail.com', phone: '0768978124' },
];

const List = ({newContact}) => {
  return (
    <div className="bg-gray-800 h-screen flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg w-full max-w-4xl mx-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl text-white font-semibold">Contacts</h1>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          onClick={newContact}>
            add new contact
          </button>
        </div>
        <div className="overflow-auto">
          <table className="w-full">
            <thead className="text-xs text-white uppercase bg-gray-700">
              <tr>
                <th className="py-3 px-6">full name</th>
                <th className="py-3 px-6">gender</th>
                <th className="py-3 px-6">e-mail</th>
                <th className="py-3 px-6">phone number</th>
                <th className="py-3 px-6">edit</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium text-white">
              {contacts.map((contact) => (
                <tr key={contact.id} className="border-b border-gray-700">
                  <td className="py-4 px-6">{contact.name}</td>
                  <td className="py-4 px-6">{contact.gender}</td>
                  <td className="py-4 px-6">{contact.email}</td>
                  <td className="py-4 px-6">{contact.phone}</td>
                  <td className="py-4 px-6">
                    <div className="flex justify-center">
                      <button className="text-blue-500 hover:text-blue-300 mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M17.5 2.5a1.5 1.5 0 00-3 0h-3v3a1.5 1.5 0 003 0v-3h3zM5 4a1 1 0 012-1h3v3a1 1 0 11-2 0V4H5a1 1 0 010-2zm1 6a1 1 0 100-2 1 1 0 000 2zm9-1a1 1 0 110 2 1 1 0 010-2zm-3 1a1 1 0 102 0 1 1 0 00-2 0z" />
                          <path fillRule="evenodd" d="M4 8a1 1 0 011-1h3v3a1 1 0 102 0V7h3a1 1 0 110 2h-3v3a1 1 0 11-2 0V9H5a1 1 0 01-1-1zM2 13a2 2 0 012-2h12a2 2 0 012 2v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="text-red-500 hover:text-red-300 mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-2 0V4H5v1a1 1 0 11-2 0V4zm2 3a1 1 0 100-2 1 1 0 000 2zm9-1a1 1 0 110 2 1 1 0 010-2zm-3 1a1 1 0 102 0 1 1 0 00-2 0z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M5 9a1 1 0 011 1v5h8V10a1 1 0 112 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2V10a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
