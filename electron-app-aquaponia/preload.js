const fetch = require('node-fetch');

const url = "https://script.google.com/macros/s/AKfycbyY6l5MVdawn5v4yhP1lQKdeCcoKHO-pgvEDhCfoqZZlbCj4fe2Imd_KEiFv-Dma9CC/exec";

var dados = {
    data: 0,
    temperatura: 0,
    temperaturaDS18B20: 0,
    tds: 0,
    turbidez: 0,
    pH: 0,
    condutividade: 0
}

function getDados(){  
    let settings = {
       method: "Get",
       redirect: 'follow',
    };
  
    fetch(url, settings)
    .then(res => {
        return res.json();
    })
    .then(responseJson => {

        dados.data = responseJson.hora
        dados.temperatura = responseJson.temperatura
        dados.temperaturaDS18B20 = responseJson.temperaturaDS18B20
        dados.tds = responseJson.tds
        dados.turbidez = responseJson.turbidez
        dados.pH = responseJson.pH
        dados.condutividade = parseInt(responseJson.tds) * 2 / 1000

        let ano = dados.data.substring(0, dados.data.indexOf('-'))
        let mes = dados.data.substring(dados.data.indexOf(ano) + 5, dados.data.indexOf(ano) + 7)
        let dia = dados.data.substring(dados.data.indexOf(mes) + 3, dados.data.indexOf('T'))
        let hora = dados.data.substring(dados.data.indexOf('T') + 1, dados.data.indexOf('.'))

        let data = dia + "/" + mes + '/' + ano + " " + hora

        dados.data = data

        document.getElementById('horario').innerHTML += dados.data
        document.getElementById('temperatura').innerHTML += dados.temperatura
        document.getElementById('temperaturaDS').innerHTML += dados.temperaturaDS18B20
        document.getElementById('condutividade').innerHTML += dados.condutividade
        document.getElementById('tds').innerHTML += dados.tds
        document.getElementById('pH').innerHTML += dados.pH
        document.getElementById('turbidez').innerHTML += dados.turbidez

    });

}

window.addEventListener('DOMContentLoaded', () => {
   // getDados();
})