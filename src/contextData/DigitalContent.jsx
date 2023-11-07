import { useState, createContext, useEffect } from "react"
import PropTypes from "prop-types";

const DigitalContent = createContext()
export function DataProvider({children}) {
    const [digital, setDigital] = useState([])

    useEffect(()=>{
        fetch('https://backend.pluralcode.institute/loop-course-list')
        .then((response)=>response.json())
        .then(result=>setDigital(result))
    },[])
  return (
    <DigitalContent.Provider value={{digital}}>
        {children}
    </DigitalContent.Provider>
  )
}


DataProvider.propTypes = {
    children: PropTypes.any,
  };
export default DigitalContent
