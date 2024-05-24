import React, { createContext, useState } from 'react'


const MyContext=createContext()

const MyProvider = ({children}) => {

    const [data, setData] = useState([])
  return (
    <MyContext.Provider value={{data,setData}} >
      {children}
    </MyContext.Provider>
  )
}

export { MyProvider,MyContext}
