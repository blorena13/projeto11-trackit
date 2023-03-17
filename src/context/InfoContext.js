import { createContext, useState } from "react";

export const InfoContext = createContext();

export const InfoProvider = ({children}) => {

    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [tarefa, setTarefa] = useState([]);
    

    return (
        <InfoContext.Provider  value={{email, setEmail, image, setImage, password, setPassword, tarefa, setTarefa}}>
            {children}
            </InfoContext.Provider>
    )
}