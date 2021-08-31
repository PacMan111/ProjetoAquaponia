#include <ESP8266WiFi.h>

String textoRecebido;

String temperatura;
String temperaturaDS;
String TDS;
String Turbidez;
String PH;

//WIFI
String ssid       = "VIRUS";
String password   = "6SCJ2013";
int ContaFaltaWifi;

void lerSerial();
void destrinchaSerial();
void enviarDados();
void checaWifi();
void reset();

void setup() {

  Serial.begin(9600);
 
}

void loop() {

  lerSerial();

  static unsigned long enviarDadosAnterior;

  if(millis() - enviarDadosAnterior > 300000){
  
    if(temperatura != ""){
        enviarDados();
    }

    enviarDadosAnterior = millis();
  }

  checaWifi();
  reset();
  
}
