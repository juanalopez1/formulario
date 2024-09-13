#!/usr/bin/env bash
# Hacer cert autofirmado

#Crear rootCA
openssl req -x509 -sha256 -days 356 -nodes -newkey rsa:2048 -keyout rootCA.key -out rootCA.crt

#Crear clave
openssl genrsa -out ucu.key 2048

#Generar csr
openssl req -new -key ucu.key -out ucu.csr

#Autofirmar
openssl x509 -req -in ucu.csr -CA rootCA.crt -CAkey rootCA.key -CAcreateserial -out ucu.crt -days 365 -sha256
