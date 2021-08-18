# Correst
REST Web Service for track Correios objects.

<p align="center">
  <img src="assets/imgs/correios.png">
</p>

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Running
### 1. Configure
````
# Web Service
Create and configure .env file like .env.example.
````

### 2. Run
````
# Install dependencies
npm install

# Start
npm start
````

# Example
````
curl --location --request GET 'http://localhost:3000/track/PX547037143BR'
````

# Response example
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

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)