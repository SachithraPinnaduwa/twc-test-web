import React, { useEffect, useState } from "react";
import axios from "axios";

const List = ({ newContact }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/contacts");
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleDelete = async (email) => {
    if (
      window.confirm(
        `Are you sure you want to delete the contact with email: ${email}?`
      )
    ) {
      try {
        await axios.delete(`http://localhost:3000/contacts/${email}`);
        fetchContacts(); // Refresh the list after deletion
      } catch (error) {
        console.error("Error deleting the contact:", error);
      }
    }
  };

  return (
    <div className="bg-gray-800 h-screen flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg w-full max-w-4xl mx-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl text-white font-semibold">Contacts</h1>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
            onClick={newContact}
          >
            Add New Contact
          </button>
        </div>
        <div className="overflow-auto">
          <table className="w-full">
            <thead className="text-xs text-white uppercase bg-gray-700">
              <tr>
                <th className="py-3 px-6">Full Name</th>
                <th className="py-3 px-6">Gender</th>
                <th className="py-3 px-6">E-mail</th>
                <th className="py-3 px-6">Phone Number</th>
                <th className="py-3 px-6">{""}</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium text-white">
              {contacts.length > 0 ? (
                contacts.map((contact) => (
                  <tr key={contact.email}>
                    <td className="py-4 px-6">{contact.full_name}</td>
                    <td className="py-4 px-6">{contact.gender}</td>
                    <td className="py-4 px-6">{contact.email}</td>
                    <td className="py-4 px-6">{contact.phone}</td>
                    <td className="py-4 px-6">
                      <div className="flex justify-center">
                        {/* Placeholder for edit functionality */}
                        <button
                          className="text-red-500 hover:text-red-300 mx-1"
                          onClick={() => handleDelete(contact.email)}
                        >
                          <svg
                            className="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                            />
                          </svg>
                        </button>
                        <button>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
</svg>

                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-4 px-6 text-center">
                    No contacts found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
