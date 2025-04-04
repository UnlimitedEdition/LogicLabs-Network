---
layout: ../../layouts/MarkdownLayout.astro
title: 'Node.js' 
---
# Node.js

Node.js је JavaScript извршно окружење (runtime environment) изграђено на Chrome-овом V8 JavaScript енџину. Омогућава извршавање JavaScript кода на серверској страни, изван веб прегледача.

## Кључне карактеристике:

*   **Асинхроно и догађајима вођено (Asynchronous and Event-Driven):** Node.js користи неблокирајући I/O модел, што га чини ефикасним и погодним за апликације које захтевају велики број истовремених конекција (нпр. чет апликације, стриминг).
*   **JavaScript свуда:** Омогућава коришћење истог језика (JavaScript) и на фронт-енду и на бек-енду.
*   **NPM (Node Package Manager):** Највећи екосистем отвореног кода на свету. NPM олакшава инсталацију, дељење и управљање зависностима пројекта.
*   **Брзина:** V8 енџин компајлира JavaScript у машински код, што резултира брзим извршавањем.
*   **Свестраност:** Користи се за израду веб сервера, API-ја, алата командне линије, десктоп апликација (са фрејмворцима попут Electron), IoT апликација и још много тога.

## Пример (Једноставан HTTP сервер):

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Здраво свете\n');
});

server.listen(port, hostname, () => {
  console.log(`Сервер ради на http://${hostname}:${port}/`);
});
```

Node.js је изузетно популаран за развој бек-енд система и алата.
