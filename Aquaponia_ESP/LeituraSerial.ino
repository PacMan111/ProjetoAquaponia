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



// T-4C289.35D35.75Z3000.00P16.85


void destrinchaSerial(){

  temperatura = textoRecebido.substring(textoRecebido.indexOf("T") + 1, textoRecebido.indexOf("C"));
  
  TDS = textoRecebido.substring(textoRecebido.indexOf("C") + 1, textoRecebido.indexOf("D"));
  
  temperaturaDS = textoRecebido.substring(textoRecebido.indexOf("D") + 1, textoRecebido.indexOf("Z"));
  
  Turbidez = textoRecebido.substring(textoRecebido.indexOf("Z") + 1, textoRecebido.indexOf("P"));
  
  PH = textoRecebido.substring(textoRecebido.indexOf("P") + 1, textoRecebido.length());

  textoRecebido = "";

  Serial.print("Temperatura: "); Serial.println(temperatura);

  Serial.print("TDS: "); Serial.println(TDS);

  Serial.print("temperaturaDS: "); Serial.println(temperaturaDS);

  Serial.print("Turbidez: "); Serial.println(Turbidez);

  Serial.print("PH: "); Serial.println(PH);

}
