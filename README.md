# Correst
REST Web Service for track Correios objects.

### Prerequisites
* [Node.js](https://nodejs.org/en/) - Node.js

### Running
The server can be run locally and also deployed to your own server.

### Run
````
# Install dependencies
npm install

# Start
npm start
````

### cURL Example
````
curl --location --request GET 'http://localhost:3000/track/PX547037143BR'
````

### Response example
```json
{
  "code": "PX547037143BR",
  "events": [
    {
      "date": "04/12/2019",
      "hour": "15:20",
      "location": "CACHOEIRO DE ITAPEMIRIM / ES",
      "event": "Objeto encaminhado",
      "message": "de Agência dos Correios em CACHOEIRO DE ITAPEMIRIM / ES para Unidade de Tratamento em CAJAMAR / SP"
    },
    {
      "date": "03/12/2019",
      "hour": "18:13",
      "location": "CACHOEIRO DE ITAPEMIRIM / ES",
      "event": "Objeto postado após o horário limite da unidade",
      "message": "Sujeito a encaminhamento no próximo dia útil"
    }
  ]
}
```

### Built With
* [Node.js](https://nodejs.org/en/)

### Authors
* **Giovani de Oliveira** - [xxgicoxx](https://github.com/xxgicoxx)