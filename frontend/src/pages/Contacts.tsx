import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [emailToDelete, setEmailToDelete] = useState(null);  
    const navigate = useNavigate();
  
    useEffect(() => {
      fetchContacts();
    }, []);
  
    const fetchContacts = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user._id) {
        console.error("No user data found");
        return;
      }
      try {
        const response = await axios.get(`http://localhost:3000/contacts?userId=${user._id}`);
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
  
    const confirmDelete = (email) => {
      setEmailToDelete(email);
      setIsConfirmModalOpen(true);
    };
  
    const handleDelete = async () => {
        if (!emailToDelete) return;
        try {
            const user = JSON.parse(localStorage.getItem("user"));
          const response = await axios.delete(`http://localhost:3000/contacts/${emailToDelete}`, {data: { userId: user }});
          if (response.status === 200) {
            fetchContacts();
            setIsModalOpen(true); // Show success message
            setIsConfirmModalOpen(false); // Close confirmation modal
          }
        } catch (error) {
          console.error("Error deleting the contact:", error);
        }
      };
  
    const logout = () => {
      localStorage.removeItem("user");
      navigate("/login");
    };
  
    const newContact = () => {
      navigate("/contacts/new");
    };
  

  return (
    <div className="bg-[#093f47] flex flex-col min-h-screen justify-center items-center">
      <div className=" p-8 rounded-lg w-full max-w-4xl mx-4 ">
        <div className="justify-start">
          <img src="src/assets/logo2.png" alt="logo" className="w-15" />
          <img
            src="src/assets/text2.png"
            alt="illustration"
            className="w-30 text-white"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-center space-y-4 md:space-y-0 mb-6 mt-10">
          <h1 className="text-white font-semibold text-5xl text-center">
            Contacts
          </h1>
          <button
            className="py-2 px-4 mt-4 md:mt-0 inline-block bg-[#093f47] text-white rounded-full border-2 focus:outline-none hover:bg-teal-700 transition-colors"
            onClick={() => newContact()}
          >
            Add New Contact
          </button>
        </div>
        <div className="rounded-lg w-full mx-4 my-4 relative overflow-hidden">
        <div className="overflow-y-auto bg-white p-4 rounded-3xl "  style={{
            maxHeight: '60vh',
           
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none', 
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}>
          <table className="">
            <thead className=" text-[#093f47] lowercase">
              <tr>
                <th className="py-2 px-6">profile</th>
                <th className="py-2 px-6">Full Name</th>
                <th className="py-2 px-6">Gender</th>
                <th className="py-2 px-6">E-mail</th>
                <th className="py-2 px-6">Phone Number</th>
                <th className="py-2 px-6">{""}</th>
              </tr>
            </thead>
            <tbody className=" font-semibold text-[#093f47] text-base">
              {contacts.length > 0 ? (
                contacts.map((contact) => (
                  <tr key={contact.email}>
                    <td className="py-2 px-6">
                      {contact.gender === "female" ? (
                        <div>
                          <svg
                            viewBox="0 0 61.7998 61.7998"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#093f47"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <title></title>{" "}
                              <g data-name="Layer 2" id="Layer_2">
                                {" "}
                                <g data-name="—ÎÓÈ 1" id="_ÎÓÈ_1">
                                  {" "}
                                  <path
                                    d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"
                                    fill="#ffe8be"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <circle
                                    cx="30.8999"
                                    cy="30.8999"
                                    fill="#58b0e0"
                                    r="30.8999"
                                  ></circle>{" "}
                                  <path
                                    d="M45.487 19.987l-29.173.175s1.048 16.148-2.619 21.21h35.701c-.92-1.35-3.353-1.785-3.909-21.385z"
                                    fill="#60350a"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M18.135 45.599l7.206-3.187 11.55-.3 7.42 3.897-5.357 11.215-7.613 4.088-7.875-4.35-5.331-11.363z"
                                    fill="#d5e1ed"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M24.744 38.68l12.931.084v8.949l-12.931-.085V38.68z"
                                    fill="#f9dca4"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M37.677 38.778v3.58a9.168 9.168 0 0 1-.04 1.226 6.898 6.898 0 0 1-.313 1.327c-4.37 4.165-11.379.78-12.49-6.333z"
                                    fill-rule="evenodd"
                                    opacity="0.11"
                                  ></path>{" "}
                                  <path
                                    d="M52.797 52.701a30.896 30.896 0 0 1-44.08-.293l1.221-3.098 9.103-4.122c3.262 5.98 6.81 11.524 12.317 15.455A45.397 45.397 0 0 0 43.2 45.483l8.144 3.853z"
                                    fill="#434955"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M19.11 24.183c-2.958 1.29-.442 7.41 1.42 7.383a30.842 30.842 0 0 1-1.42-7.383z"
                                    fill="#f9dca4"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M43.507 24.182c2.96 1.292.443 7.411-1.419 7.384a30.832 30.832 0 0 0 1.419-7.384z"
                                    fill="#f9dca4"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M31.114 8.666c8.722 0 12.377 6.2 12.601 13.367.307 9.81-5.675 21.43-12.6 21.43-6.56 0-12.706-12.018-12.333-21.928.26-6.953 3.814-12.869 12.332-12.869z"
                                    fill="#ffe8be"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M33.399 24.983a7.536 7.536 0 0 1 5.223-.993h.005c5.154.63 5.234 2.232 4.733 2.601a2.885 2.885 0 0 0-.785 1.022 6.566 6.566 0 0 1-1.052 2.922 5.175 5.175 0 0 1-3.464 2.312c-.168.027-.34.048-.516.058a4.345 4.345 0 0 1-3.65-1.554 8.33 8.33 0 0 1-1.478-2.53v.003s-.797-1.636-2.072-.114a8.446 8.446 0 0 1-1.52 2.64 4.347 4.347 0 0 1-3.651 1.555 5.242 5.242 0 0 1-.516-.058 5.176 5.176 0 0 1-3.464-2.312 6.568 6.568 0 0 1-1.052-2.921 2.75 2.75 0 0 0-.77-1.023c-.5-.37-.425-1.973 4.729-2.603h.002a7.545 7.545 0 0 1 5.24 1.01l-.001-.001.003.002.215.131a3.93 3.93 0 0 0 3.842-.148l-.001.001zm-4.672.638a6.638 6.638 0 0 0-6.157-.253c-1.511.686-1.972 1.17-1.386 3.163a5.617 5.617 0 0 0 .712 1.532 4.204 4.204 0 0 0 3.326 1.995 3.536 3.536 0 0 0 2.966-1.272 7.597 7.597 0 0 0 1.36-2.37c.679-1.78.862-1.863-.82-2.795zm10.947-.45a6.727 6.727 0 0 0-5.886.565c-1.538.911-1.258 1.063-.578 2.79a7.476 7.476 0 0 0 1.316 2.26 3.536 3.536 0 0 0 2.967 1.272 4.228 4.228 0 0 0 .43-.048 4.34 4.34 0 0 0 2.896-1.947 5.593 5.593 0 0 0 .684-1.44c.702-2.25.076-2.751-1.828-3.451z"
                                    fill="#464449"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M17.89 25.608c0-.638.984-.886 1.598 2.943a22.164 22.164 0 0 0 .956-4.813c1.162.225 2.278 2.848 1.927 5.148 3.166-.777 11.303-5.687 13.949-12.324 6.772 3.901 6.735 12.094 6.735 12.094s.358-1.9.558-3.516c.066-.538.293-.733.798-.213C48.073 17.343 42.3 5.75 31.297 5.57c-15.108-.246-17.03 16.114-13.406 20.039z"
                                    fill="#8a5c42"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M24.765 42.431a14.125 14.125 0 0 0 6.463 5.236l-4.208 6.144-5.917-9.78z"
                                    fill="#ffffff"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M37.682 42.431a14.126 14.126 0 0 1-6.463 5.236l4.209 6.144 5.953-9.668z"
                                    fill="#ffffff"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <circle
                                    cx="31.22307"
                                    cy="52.56222"
                                    fill="#434955"
                                    r="0.83905"
                                  ></circle>{" "}
                                  <circle
                                    cx="31.22307"
                                    cy="56.29122"
                                    fill="#434955"
                                    r="0.83905"
                                  ></circle>{" "}
                                  <path
                                    d="M41.997 24.737c1.784.712 1.719 1.581 1.367 1.841a2.886 2.886 0 0 0-.785 1.022 6.618 6.618 0 0 1-.582 2.086v-4.949zm-21.469 4.479a6.619 6.619 0 0 1-.384-1.615 2.748 2.748 0 0 0-.77-1.023c-.337-.249-.413-1.06 1.154-1.754z"
                                    fill="#464449"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                </g>{" "}
                              </g>{" "}
                            </g>
                          </svg>
                        </div>
                      ) : (
                        <div>
                          <svg
                            viewBox="0 0 61.7998 61.7998"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <title></title>{" "}
                              <g data-name="Layer 2" id="Layer_2">
                                {" "}
                                <g data-name="—ÎÓÈ 1" id="_ÎÓÈ_1">
                                  {" "}
                                  <circle
                                    cx="30.8999"
                                    cy="30.8999"
                                    fill="#58b0e0"
                                    r="30.8999"
                                  ></circle>{" "}
                                  <path
                                    d="M23.255 38.68l15.907.121v12.918l-15.907-.121V38.68z"
                                    fill="#f9dca4"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M43.971 58.905a30.967 30.967 0 0 1-25.843.14V48.417H43.97z"
                                    fill="#e6e6e6"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M33.403 61.7q-1.238.099-2.503.1-.955 0-1.895-.057l1.03-8.988h2.41z"
                                    fill="#e9573e"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M25.657 61.332A34.072 34.072 0 0 1 15.9 57.92a31.033 31.033 0 0 1-7.857-6.225l1.284-3.1 13.925-6.212c0 5.212 1.711 13.482 2.405 18.95z"
                                    fill="#677079"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M39.165 38.759v3.231c-4.732 5.527-13.773 4.745-15.8-3.412z"
                                    fill-rule="evenodd"
                                    opacity="0.11"
                                  ></path>{" "}
                                  <path
                                    d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.267 0-21.281-35.266 0-35.266z"
                                    fill="#ffe8be"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M18.365 24.046c-3.07 1.339-.46 7.686 1.472 7.658a31.972 31.972 0 0 1-1.472-7.659z"
                                    fill="#f9dca4"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.993 31.993 0 0 0 1.471-7.658z"
                                    fill="#f9dca4"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M21.931 14.328c-3.334 3.458-2.161 13.03-2.161 13.03l-1.05-.495c-6.554-25.394 31.634-25.395 25.043 0l-1.05.495s1.174-9.572-2.16-13.03c-4.119 3.995-14.526 3.974-18.622 0z"
                                    fill="#464449"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M36.767 61.243a30.863 30.863 0 0 0 17.408-10.018l-1.09-2.631-13.924-6.212c0 5.212-1.7 13.393-2.394 18.861z"
                                    fill="#677079"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M39.162 41.98l-7.926 6.465 6.573 5.913s1.752-9.704 1.353-12.378z"
                                    fill="#ffffff"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M23.253 41.98l7.989 6.465-6.645 5.913s-1.746-9.704-1.344-12.378z"
                                    fill="#ffffff"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M28.109 51.227l3.137-2.818 3.137 2.818-3.137 2.817-3.137-2.817z"
                                    fill="#e9573e"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M25.767 61.373a30.815 30.815 0 0 1-3.779-.88 2.652 2.652 0 0 1-.114-.093l-3.535-6.39 4.541-3.26h-4.752l1.017-6.851 4.11-2.599c.178 7.37 1.759 15.656 2.512 20.073z"
                                    fill="#434955"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                  <path
                                    d="M36.645 61.266c.588-.098 1.17-.234 1.747-.384.682-.177 1.36-.377 2.034-.579l.134-.043 3.511-6.315-4.541-3.242h4.752l-1.017-6.817-4.11-2.586c-.178 7.332-1.758 15.571-2.51 19.966z"
                                    fill="#434955"
                                    fill-rule="evenodd"
                                  ></path>{" "}
                                </g>{" "}
                              </g>{" "}
                            </g>
                          </svg>
                        </div>
                      )}
                    </td>
                    <td className="py-2 px-6">{contact.full_name}</td>
                    <td className="py-2 px-6">{contact.gender}</td>
                    <td className="py-2 px-6">{contact.email}</td>
                    <td className="py-2 px-6">{contact.phone}</td>
                    <td className="py-2 px-6">
                      <div className="flex justify-center">
                        <button className="text-[#093f47]">
                          <svg
                            className="w-6 h-6 text-[#093f47]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                            />
                          </svg>
                        </button>
                        <button
                          className=" mx-1"
                          onClick={() => confirmDelete(contact.email)}
                        >
                          <svg
                            className="w-6 h-6 text-[#093f47]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                            />
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
        <Modal
        isOpen={isConfirmModalOpen}
        toggleModal={() => setIsConfirmModalOpen(false)}
        title="Are you sure you want to delete this contact?"
      >
        <button onClick={handleDelete} className="bg-green-500">Confirm</button>
        <button onClick={() => setIsConfirmModalOpen(false)} className="bg-red-500">Cancel</button>
      </Modal>

      <Modal
        isOpen={isModalOpen}
        toggleModal={() => setIsModalOpen(false)}
        title="Your contact has been deleted successfully!"
      >
        <button onClick={() => setIsModalOpen(false)}>OK</button>
      </Modal>
      </div>
      
    </div>
  );
}

export default Contacts;
