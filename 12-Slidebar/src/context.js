import React, {useState, useContext} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <AppContext.Provider value={{
            isModalOpen,
            isSidebarOpen, 
            openModal, 
            closeModal, 
            openSidebar,
            closeSidebar,
            }}>
                {children}
        </AppContext.Provider>
    );
};

//the reason we're creating this custom hook is that in order to implement context API we needed to import useContext in each component in which we're wheeling to use context info
//so by custom hook we'll avoid that part
//custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
};


export {AppContext, AppProvider} 

