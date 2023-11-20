import { createContext, useState } from "react";
import { perfil } from "../mocks/perfil";

export const PerfilContext = createContext();
PerfilContext.displayName = "PerfilContext";

export const PerfilProvider = ({ children }) => {

    const[dadosPessoais, setDadosPessoais] = useState(perfil.pessoais);
    const[dadosAcademicos, setDadosAcademicos] = useState(perfil.academicos);
    const [dadosSeguranca, setDadosSeguranca ] = useState(perfil.seguranca);

    return (
        <PerfilContext.Provider 
        value={{
            dadosPessoais, setDadosPessoais,
            dadosAcademicos, setDadosAcademicos,
            dadosSeguranca, setDadosSeguranca
        }}>
            {children}
        </PerfilContext.Provider>
    );




}