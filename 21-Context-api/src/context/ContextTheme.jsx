import React, { createContext } from 'react'
export const ThemeDataContext= createContext()
function ContextTheme(props) {
  return (
    <div>
     <ThemeDataContext.Provider value='Tanisha'>
        {props.children}
     </ThemeDataContext.Provider>
    </div>
  )
}

export default ContextTheme
