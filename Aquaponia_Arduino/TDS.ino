void medeTDS(){
  gravityTDS.setTemperature(temperaturaDS);  // Compensasão por temperatura
  gravityTDS.update();  //Calculo
  tds = gravityTDS.getTdsValue();
}
