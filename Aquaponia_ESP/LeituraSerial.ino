void lerSerial(){

  static unsigned long leituraAnterior;
  
  if(millis() - leituraAnterior > 1000){
    if (Serial.available()){
      textoRecebido = Serial.readStringUntil('\n');
    }
  
    if (textoRecebido != ""){
      Serial.println(textoRecebido);
      destrinchaSerial();  
    }
    
    leituraAnterior = millis();
  }
  
}

void destrinchaSerial(){

  temperatura = textoRecebido.substring(textoRecebido.indexOf("T") + 1, textoRecebido.indexOf("C"));
  
  TDS = textoRecebido.substring(textoRecebido.indexOf("C") + 1, textoRecebido.indexOf("D"));
  
  temperaturaDS = textoRecebido.substring(textoRecebido.indexOf("D") + 1, textoRecebido.indexOf("Z"));
  
  Turbidez = textoRecebido.substring(textoRecebido.indexOf("Z") + 1, textoRecebido.indexOf("P"));
  
  PH = textoRecebido.substring(textoRecebido.indexOf("P") + 1, textoRecebido.length());

  textoRecebido = "";

  Serial.print("Temperatura: " + temperatura);

  Serial.print("TDS: " + TDS);

  Serial.print("temperaturaDS: " + temperaturaDS);

  Serial.print("Turbidez: " + Turbidez); 

  Serial.print("PH: " + PH); 

}
