import {createContext,useState} from 'react'

export const FirebaseContext = createContext(null)
export const NameContext = createContext(null)

export default function UserContext({children}){
    const [name, setName] = useState("Name");

    return(
        <NameContext.Provider value={{name,setName}}>
            {children}
        </NameContext.Provider>
    )

}

