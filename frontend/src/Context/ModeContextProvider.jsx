import React from 'react'
import ModeContext from './ModeContext'
const ModeContextProvider = ({children}) => {
    const [mode,setMode] = React.useState('light')
  return (
    <ModeContext.Provider value={{mode,setMode}}>
        {children}
    </ModeContext.Provider>
  )
}

export default ModeContextProvider