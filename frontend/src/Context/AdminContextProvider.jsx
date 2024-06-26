import React from 'react'
import AdminContext from './AdminContext'
const AdminContextProvider = ({children}) => {
    const [admin,setAdmin] = React.useState(false)
  return (
    <AdminContext.Provider value={{admin,setAdmin}}>
        {children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider