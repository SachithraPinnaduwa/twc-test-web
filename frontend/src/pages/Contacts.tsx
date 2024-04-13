import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user._id) {
        console.error("No user data found");

        return;
      }

      const userId = user._id;
      const response = await axios.get(
        `http://localhost:3000/contacts?userId=${userId}`
      );
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
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user || !user._id) {
          alert("No user data found");

          return;
        }
        const userId = user._id;
        const response = await axios.delete(
          `http://localhost:3000/contacts/${email}`,
          {
            data: { userId },
          }
        );

        if (response.status === 200) {
          alert("Contact deleted successfully!");
        }
        fetchContacts(); // Refresh the list after deletion
      } catch (error) {
        console.error("Error deleting the contact:", error);
      }
    }
  };
  const logout =() => {
    localStorage.removeItem('user');
    navigate('/login');
  }
    
  return (
    <div className="bg-gray-800 h-screen flex flex-col justify-center items-center">
            <div className="bg-gray-900 p-8 rounded-lg w-full max-w-4xl mx-4 my-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl text-white font-semibold">Contacts</h1>
                    <button
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                        onClick={() => navigate("contacts/new")}
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
                                                    {/* SVG for delete icon */}
                                                </button>
                                                <button>
                                                    {/* SVG for edit icon */}
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
            <div className="absolute bottom-0 right-0 p-5">
                <button onClick={logout} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                    Logout
                </button>
            </div>
        </div>
  );

  //   return (
  //     <div>

  //     <div className='flex flex-row mx-auto justify-center gap-10'>

  //     <button onClick={toggleModal} className="btn btn-primary">
  //         Open Modal
  //       </button>
  //     <Modal
  //         isOpen={modalOpen}
  //         toggleModal={toggleModal}
  //         title="Confirmation"
  //       >
  //         <p>Are you sure you want to perform this action?</p>
  //         <button onClick={toggleModal} className="btn btn-danger">Confirm</button>
  //         <button onClick={toggleModal} className="btn btn-secondary">Cancel</button>
  //       </Modal>
  //       <button onClick={logout} className="btn btn-primary"
  //       >
  //         Logout
  //       </button>
  //     </div>
  //   </div>
  //   )
}

export default Contacts;
