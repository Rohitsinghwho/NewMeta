import React from 'react'
import AdminContext from './AdminContext'
const AdminContextProvider = ({children}) => {
    const [admin,setAdmin] = React.useState();
  return (
    <AdminContext.Provider value={{admin,setAdmin}}>
        {children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider