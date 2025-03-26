//const twilio = require('twilio');

const express = require('express');
const twilio = require('twilio');
const app = express();

app.post('/enviar-sms', (req, res) => {
  const { numero, mensagem } = req.body;
  const accountSid = 'AC380e8a2eec46442a3f77977669fcc26d';
  const authToken = '09a3492f213fff6be1062b49a0f4592e';
  const client = new twilio(accountSid, authToken);

  client.messages
    .create({
      from: '+17402003008',
      to: numero,
      body: mensagem,
    })

  .then((message) => res.send(`Mensagem enviada com sucesso! ${message.sid}`))
  .catch((error) => res.status(500).send(`Erro ao enviar mensagem: ${error.message}`));
});

app.listen(3000, () => {
console.log('Servidor iniciado na porta 3000');
  });








///module.exports = {enviarSMS};
