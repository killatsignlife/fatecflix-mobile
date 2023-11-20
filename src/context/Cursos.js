import { createContext, useContext, useState } from "react";
import { 
    listaCursos, 
    cursosAndamento, 
    cursoConquistas, 
    cursosFavoritos 
} from "../mocks/cursos";
import { Alert } from "react-native";

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

export const useCursosContext = () => {
    const {
        cursos, setCursos,
        cursoMatriculados, setCursosMatriculados,
        conquistas, setConquistas,
        favoritos, setFavoritos
    } = useContext(CursosContext);

    function favoritarCurso(id){

        const curso = cursos.find(curso => curso.cursoId === id);
        
        if(favoritos.find(favorito => favorito.cursoId === curso.cursoId)){
            const novosFavoritos = favoritos.filter(favorito => favorito.cursoId !== curso.cursoId);
            setFavoritos(novosFavoritos);
            Alert.alert("Curso desfavoritado");
            return;
        } else {
            const novoFavorito = {
                id: favoritos.length + 1,
                cursoId: curso.cursoId, 
                titulo: curso.titulo, 
                modulos: 3,
                aulas: 12,
                exercicios: 5
              };
            setFavoritos([...favoritos, novoFavorito]);
            Alert.alert("Curso favoritado");
        }

        return  {
            favoritarCurso
        }
        
        
    }
    
}