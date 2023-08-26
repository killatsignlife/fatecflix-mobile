import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppRotas from './src/rotas/AppRotas';

export default function App() {
  return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar/>
        <AppRotas/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
