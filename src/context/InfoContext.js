import { createContext, useState } from "react";

export const InfoContext = createContext();


export const InfoProvider = ({ children }) => {

    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [tarefa, setTarefa] = useState([]);
    const [token, setToken] = useState("");
    const [tarefaCriada, setTarefaCriada] = useState(false);


    return (
        <InfoContext.Provider value={{ email, setEmail, image, setImage, password, setPassword, tarefa, setTarefa, token, setToken, tarefaCriada, setTarefaCriada }}>
            {children}
        </InfoContext.Provider>
    )
}