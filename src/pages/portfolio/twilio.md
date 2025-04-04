---
layout: ../../layouts/MarkdownLayout.astro
title: 'Twilio' 
---
# Twilio

Twilio је комуникациона платформа у облаку као услуга (CPaaS - Communications Platform as a Service) која омогућава програмерима да програмски упућују и примају телефонске позиве, шаљу и примају текстуалне поруке (SMS), и обављају друге комуникационе функције користећи њене веб сервис API-је.

Twilio апстрахује сложеност телекомуникационе инфраструктуре, пружајући једноставне API-је које програмери могу користити за интеграцију различитих комуникационих канала у своје апликације.

## Кључне услуге и производи:

*   **Programmable SMS:** Слање и примање SMS и MMS порука глобално.
*   **Programmable Voice:** Упућивање, примање, праћење и рутирање телефонских позива. Омогућава изградњу IVR (Interactive Voice Response) система, конференцијских позива, итд.
*   **Programmable Video:** Додавање видео ћаскања у реалном времену у веб и мобилне апликације.
*   **Programmable Chat / Conversations API:** Изградња ћаскања унутар апликације преко више канала (SMS, WhatsApp, веб чет).
*   **SendGrid Email API:** Слање трансакционих и маркетиншких имејлова. (SendGrid је компанија коју је Twilio купио).
*   **Verify API:** Имплементација двофакторске аутентификације (2FA) и верификације телефона путем SMS-а, гласа или имејла.
*   **Lookup API:** Добијање информација о телефонским бројевима, као што су тип линије и оператер.
*   **Twilio Functions & Assets:** Serverless окружење за хостовање бек-енд логике за Twilio апликације.
*   **TwiML (Twilio Markup Language):** XML-базирани језик који се користи за дефинисање како Twilio треба да одговори на долазне позиве или поруке.

## Пример (Слање SMS поруке користећи Twilio Node.js библиотеку):

```javascript
// Потребно инсталирати: npm install twilio
// Потребно је имати Twilio налог и добити Account SID и Auth Token

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Ваш Account SID са Twilio конзоле
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Ваш Auth Token са Twilio конзоле
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Ово је тест порука послата са Twilio-а!', // Садржај поруке
     from: '+15017122661', // Ваш Twilio број телефона (мора бити купљен или верификован)
     to: '+1234567890'     // Број телефона примаоца
   })
  .then(message => console.log('Порука послата, SID:', message.sid))
  .catch(error => console.error('Грешка при слању поруке:', error));

// Напомена: Замените бројеве телефона и користите стварне креденцијале.
// Препоручује се чување креденцијала у environment варијаблама.
```

Twilio омогућава програмерима да лако додају моћне комуникационе могућности у своје апликације без потребе за управљањем сложеном телекомуникационом инфраструктуром.
