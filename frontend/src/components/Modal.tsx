

const Modal = ({ isOpen, toggleModal, title, children }: { isOpen: boolean, toggleModal: () => void, title: string, children: React.ReactNode }) => {
   
    const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();
  
    return (
      <>
        {isOpen && (
          <div 
            className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
            tabIndex={-1}
            onClick={toggleModal} 
          >
            <div 
              className="relative p-4 w-full max-w-md h-full md:h-auto"
              onClick={stopPropagation} 
            >
              <div className="relative bg-white rounded-lg shadow">
                <div className="p-6 text-center">
                  <h3 className="mb-5 text-lg text-[#093f47] font-bold">{title}</h3>
                  {children}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default Modal;
  