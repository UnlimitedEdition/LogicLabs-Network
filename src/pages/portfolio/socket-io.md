---
layout: ../../layouts/MarkdownLayout.astro
title: 'Socket.IO' 
---
# Socket.IO

Socket.IO је JavaScript библиотека која омогућава двосмерну комуникацију у реалном времену, засновану на догађајима (event-based), између веб клијената (прегледача) и сервера. Састоји се од две компоненте:

1.  **Серверске библиотеке:** Интегрише се са Node.js HTTP сервером.
2.  **Клијентске библиотеке:** Учитава се у прегледачу.

Socket.IO примарно користи WebSockets протокол, али има механизме за fallback на друге технологије (као што је HTTP long-polling) у случајевима када WebSockets нису подржани од стране прегледача или мрежне инфраструктуре, обезбеђујући тако да комуникација у реалном времену функционише готово свуда.

## Кључне карактеристике:

*   **Комуникација у реалном времену:** Идеално за апликације које захтевају тренутно ажурирање података без потребе да корисник освежава страницу (нпр. чет апликације, онлајн игре, колаборативни алати, праћење уживо).
*   **Двосмерна комуникација:** И сервер и клијент могу слати поруке један другоме у било ком тренутку.
*   **Засновано на догађајима:** Комуникација се одвија путем емитовања и слушања прилагођених догађаја.
*   **Поузданост:** Аутоматски рукује прекидима везе и покушава поново да успостави конекцију.
*   **Fallback механизми:** Осигурава компатибилност са старијим прегледачима и рестриктивним мрежама.
*   **Подршка за собе (Rooms):** Омогућава емитовање порука одређеним групама клијената.
*   **Мултиплексирање:** Омогућава креирање више логичких канала (Namespaces) преко једне физичке конекције.

## Пример (Једноставан чет - Серверска страна Node.js):

```javascript
// Потребно инсталирати: npm install express socket.io
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Сервирање HTML фајла
});

io.on('connection', (socket) => {
  console.log('Корисник се повезао:', socket.id);

  // Слушање 'chat message' догађаја од клијента
  socket.on('chat message', (msg) => {
    console.log('Порука: ' + msg);
    // Емитовање поруке свим повезаним клијентима, укључујући пошиљаоца
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Корисник се одјавио:', socket.id);
  });
});

server.listen(3000, () => {
  console.log('Сервер слуша на порту 3000');
});
```

## Пример (Једноставан чет - Клијентска страна HTML/JS):

```html
<!DOCTYPE html>
<html>
<head><title>Socket.IO Чет</title></head>
<body>
  <ul id="messages"></ul>
  <form id="form" action="">
    <input id="input" autocomplete="off" /><button>Пошаљи</button>
  </form>
  <script src="/socket.io/socket.io.js"></script>
  <script>
    const socket = io(); // Повезивање са Socket.IO сервером

    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const messages = document.getElementById('messages');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (input.value) {
        socket.emit('chat message', input.value); // Слање поруке серверу
        input.value = '';
      }
    });

    // Слушање 'chat message' догађаја од сервера
    socket.on('chat message', (msg) => {
      const item = document.createElement('li');
      item.textContent = msg;
      messages.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
    });
  </script>
</body>
</html>
```

Socket.IO је моћна библиотека за изградњу интерактивних веб апликација у реалном времену.
