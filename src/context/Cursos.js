import { createContext, useState } from "react";
import { 
    listaCursos, 
    cursosAndamento, 
    cursoConquistas, 
    cursosFavoritos 
} from "../mocks/cursos";


export const CursosContext = createContext();
CursosContext.displayName = "CursosContext";

export const CursosProvider = ({ children }) => {

    const [cursos, setCursos] = useState(listaCursos);
    const [cursoMatriculados, setCursosMatriculados] = useState(cursosAndamento);
    const [conquistas, setConquistas] = useState(cursoConquistas);
    const [favoritos, setFavoritos] = useState(cursosFavoritos);

    return (
        <CursosContext.Provider 
        value={{
            cursos, setCursos,
            cursoMatriculados, setCursosMatriculados,
            conquistas, setConquistas,
            favoritos, setFavoritos
        }}>
            {children}
        </CursosContext.Provider>
    );
}

