import { createContext, useState } from "react";

export const InfoContext = createContext();


export const InfoProvider = ({ children }) => {

    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [disabled, setDisabled] = useState(false);


    return (
        <InfoContext.Provider value={{ email, setEmail, image, setImage, password, setPassword,  token, setToken, disabled, setDisabled}}>
            {children}
        </InfoContext.Provider>
    )
}