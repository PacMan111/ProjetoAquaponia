import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {useState} from 'react' 
import { Text, View } from 'react-native'
import styles from './src/styles'

const url = "https://script.google.com/macros/s/AKfycbyY6l5MVdawn5v4yhP1lQKdeCcoKHO-pgvEDhCfoqZZlbCj4fe2Imd_KEiFv-Dma9CC/exec"

function getData(setDados){

  let settings = {
    method: "Get",
    redirect: 'follow',
  };

  fetch(url, settings)
  .then(res => {
      return res.json();
  }).then(responseJson => {

    let ano = responseJson.hora.substring(0, responseJson.hora.indexOf('-'))
    let mes = responseJson.hora.substring(responseJson.hora.indexOf(ano) + 5, responseJson.hora.indexOf(ano) + 7)
    let dia = responseJson.hora.substring(responseJson.hora.indexOf(mes) + 3, responseJson.hora.indexOf('T'))
    let hora = responseJson.hora.substring(responseJson.hora.indexOf('T') + 1, responseJson.hora.indexOf('.'))

    let data = dia + "/" + mes + '/' + ano + " " + hora

    setDados({
      data: data,
      temperatura: responseJson.temperatura,
      temperaturaDS18B20: responseJson.temperaturaDS18B20,
      TDS: responseJson.tds,
      turbidez: responseJson.turbidez,
      pH: responseJson.pH,
      condutividade: parseInt(responseJson.tds) * 2 / 1000
    })
  })

  setTimeout(function(){
    getData(setDados);
  }, 60000);
}

export default function App() {


  const [dados, setDados] = useState({
    data: 'Buscando dados',
    temperatura: '',
    temperaturaDS18B20: '',
    TDS: '',
    condutividade: '',
    pH: '',
    turbidez: ''
  })

  React.useEffect(() => {
    getData(setDados)    
  }, []);

  return (
    <View style={styles.body}>

      <View style={styles.header}>
        <Text style={styles.titulo}>Aquaponia</Text>
      </View>
      <View style={styles.conteudo}>
        <Text style={styles.text}> Última atualização: {dados.data}</Text>
        <Text style={styles.text}>Temperatura do ar: {dados.temperatura}</Text>
        <Text style={styles.text}>Temperatura da água: {dados.temperaturaDS18B20}</Text>
        <Text style={styles.text}>PH: {dados.pH}</Text>
        <Text style={styles.text}>TDS: {dados.TDS}</Text>
        <Text style={styles.text}>Condutividade: {dados.condutividade}</Text>
        <Text style={{...styles.text, borderBottomWidth: 0}}>Turbidez: {dados.turbidez}</Text>
      </View>

    </View>
  );
}