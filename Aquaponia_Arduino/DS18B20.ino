void medeTemperaturaDS(){
  barramento.requestTemperatures(); 
  temperaturaDS = barramento.getTempC(sensor);
}
