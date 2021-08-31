void enviarParaESP(){

  textoEnvio =  "T" + String(temperatura);
  textoEnvio += "C" + String(tds);
  textoEnvio += "D" + String(temperaturaDS);
  textoEnvio += "Z" + String(turbidez);
  textoEnvio += "P" + String(PH);

  Serial.println(textoEnvio);
  
}
