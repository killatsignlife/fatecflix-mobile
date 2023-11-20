import React from "react"
import { Dimensions, View, StyleSheet, StatusBar } from "react-native"
import { TabView, SceneMap, TabBar } from "react-native-tab-view"
import { FontAwesome, Foundation  } from "@expo/vector-icons"
import ExibeTexto from "./ExibeTexto"
import ListaAulas from "./ListaAulas"
import ListaMateriais from "./ListaMateriais"
import ListaExercicios from './ListaExercicios'
import ExibeComentarios from "./ExibeComentarios"


const RotaTextos = (texto, titulo) => {
  return (
    <ExibeTexto texto={texto} titulo={titulo} />
  )
}

const RotaAulas = (aulas, id) => {
  return (
    <ListaAulas aulas={aulas} id={id}/>
  )
}

const RotaExercicios = (exercicios) => {
    return (
      <ListaExercicios exercicios={exercicios} />
    )
}

const RotaMateriais = (materiais) => {
  return (
    <ListaMateriais materiais={materiais} />
  )
}

const RotaComentarios = () => {
  return (
    <ExibeComentarios />
  )
}

const getTabBarIcon = (props) => {
  const {route} = props
    if (route.key === 'textos') {
      return <FontAwesome name='file-text' size={30} color={'red'}/>
    } else if (route.key === 'aulas') {
      return <Foundation name='list-bullet' size={30} color={'red'}/>
    } else if (route.key === 'exercicios') {
      return <FontAwesome name='edit' size={30} color={'red'}/>
    } else if (route.key === 'comentarios') {
      return <FontAwesome name='comment' size={30} color={'red'}/>
    } else if (route.key === 'materiais') {
      return <FontAwesome name='book' size={30} color={'red'} />
    }
}

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'red' }}
    style={{ backgroundColor: 'black' }}
    renderIcon={
      props => getTabBarIcon(props)
    }
  />
);

export default class TabViewAulaContent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'textos'},
      { key: 'aulas'},
      { key: 'exercicios' },
      { key: 'materiais' },
      { key: 'comentarios' },
    ]
  }

  render() {
    
    return (
      <TabView
        renderTabBar={renderTabBar}
        navigationState={this.state}
        renderScene={SceneMap({
          textos: () => RotaTextos(this.props.textos, this.props.titulo),
          aulas: () => RotaAulas(this.props.aulas, this.props.cursoId),
          exercicios: () => RotaExercicios(this.props.exercicios),
          materiais: () => RotaMateriais(this.props.materiais),
          comentarios: RotaComentarios,
        })}
        
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        style={styles.menu}
      />
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    marginTop: StatusBar.currentHeight,
  }
});