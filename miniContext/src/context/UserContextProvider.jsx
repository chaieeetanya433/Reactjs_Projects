import React, { useState } from "react"

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

  return (
    <UserContextProvider.Provider value={{user, setUser}}>
        {children}
    </UserContextProvider.Provider>
  )
}
export default UserContextProvider