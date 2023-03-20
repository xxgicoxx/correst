# Correst
REST Web Service for track Correios objects.

<p align="center">
  <img src="assets/imgs/correios.png">
</p>

# Features
* Track Correios objects

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
  "code": "QJ852965722BR",
  "events": [
    {
      "event": "Objeto entregue ao destinatário",
      "date": "10/01/2022",
      "hour": "08:53",
      "location": "Unidade de Distribuição - Pato Branco / PR"
    },
    {
      "event": "Objeto em trânsito - por favor aguarde",
      "date": "06/01/2022",
      "hour": "09:43",
      "origin": "Agência dos Correios - Sao Bernardo Do Campo / SP",
      "destination": "Unidade de Tratamento - Cajamar / SP"
    },
    {
      "event": "Objeto postado",
      "date": "05/01/2022",
      "hour": "15:47",
      "location": "Agência dos Correios - Sao Bernardo Do Campo / SP"
    }
  ]
}
```

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)