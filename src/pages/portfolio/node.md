---
layout: ../../layouts/MarkdownLayout.astro
title: 'Node.js - JavaScript окружење за серверску страну'
description: 'Откријте моћ Node.js за развој брзих и скалабилних серверских апликација помоћу JavaScript-a'
---

# Node.js

Node.js је моћно JavaScript извршно окружење (runtime) изграђено на Chrome-овом V8 JavaScript енџину. Омогућава извршавање JavaScript кода изван веб прегледача, што је револуционаризовало развој серверских, десктоп и IoT апликација.

## Кључне карактеристике

- **⚡ Асинхроно и догађајима вођено**: Node.js користи неблокирајући I/O модел што га чини изузетно ефикасним за апликације које захтевају високу пропусност.
  
- **🌐 JavaScript екосистем**: Користи исти језик на фронтенду и бекенду, што поједностављује развој и омогућава дељење кода.
  
- **📦 npm (Node Package Manager)**: Приступ највећем екосистему библиотека отвореног кода на свету са преко милион пакета.
  
- **🚀 Високе перформансе**: V8 JavaScript енџин компајлира код у машински код, што резултира изузетним перформансама.
  
- **🔄 Скалабилност**: Савршен за микросервисе и апликације које захтевају велики број конкурентних конекција.
  
- **🛠️ Свестраност**: Користи се за веб сервере, API-је, реалтајм апликације, стриминг, IoT, десктоп апликације и CLI алате.

## Примери кода

### Основни HTTP сервер

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Здраво из Node.js сервера!\n');
});

server.listen(port, hostname, () => {
  console.log(`Сервер је покренут на http://${hostname}:${port}/`);
});
```

### Рад са фајл системом

```javascript
const fs = require('fs');
const path = require('path');

// Асинхроно читање фајла
fs.readFile(path.join(__dirname, 'primer.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error('Грешка при читању фајла:', err);
    return;
  }
  console.log('Садржај фајла:', data);
});

// Асинхроно писање у фајл
const новиСадржај = 'Ово је нови садржај који ће бити записан у фајл.';
fs.writeFile('novi-fajl.txt', новиСадржај, (err) => {
  if (err) {
    console.error('Грешка при писању у фајл:', err);
    return;
  }
  console.log('Фајл је успешно креиран!');
});

// Синхроне верзије - блокирају извршавање, избегавати у продукцији
try {
  const садржај = fs.readFileSync('primer.txt', 'utf8');
  console.log('Синхроно прочитан садржај:', садржај);
} catch (err) {
  console.error('Грешка при синхроном читању:', err);
}
```

### Express.js веб апликација

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware за парсирање JSON података
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Сервирање статичких фајлова из 'public' директоријума
app.use(express.static('public'));

// Руте
app.get('/', (req, res) => {
  res.send('Добродошли на почетну страницу!');
});

app.get('/о-нама', (req, res) => {
  res.send('Страница о нама');
});

// Рута са параметрима
app.get('/корисници/:id', (req, res) => {
  res.send(`Приказујем информације о кориснику са ID: ${req.params.id}`);
});

// POST захтев
app.post('/api/контакт', (req, res) => {
  console.log('Примљени подаци:', req.body);
  res.status(201).json({ 
    порука: 'Порука успешно примљена!',
    подаци: req.body 
  });
});

// Руковање грешкама
app.use((req, res, next) => {
  res.status(404).send('Страница није пронађена!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Нешто је пошло наопако!');
});

// Покретање сервера
app.listen(port, () => {
  console.log(`Апликација је покренута на порту ${port}`);
});
```

### Асинхроно програмирање са async/await

```javascript
const fs = require('fs').promises;
const axios = require('axios');

// Обмотавање функције у Promise
function сачекај(мс) {
  return new Promise(resolve => setTimeout(resolve, мс));
}

// Функција за читање фајла која користи async/await
async function прочитајФајл(путања) {
  try {
    const садржај = await fs.readFile(путања, 'utf8');
    return садржај;
  } catch (грешка) {
    console.error('Грешка при читању фајла:', грешка);
    throw грешка;
  }
}

// Функција која дохвата податке са API-ја
async function дохватиПодатке(url) {
  try {
    const одговор = await axios.get(url);
    return одговор.data;
  } catch (грешка) {
    console.error('Грешка при дохватању података:', грешка);
    throw грешка;
  }
}

// Главна функција која демонстрира асинхрону обраду
async function главнаФункција() {
  try {
    // Паралелно извршавање више асинхроних операција
    const [садржајФајла, подациСаAPI] = await Promise.all([
      прочитајФајл('config.json'),
      дохватиПодатке('https://api.example.com/data')
    ]);
    
    console.log('Садржај фајла:', садржајФајла);
    console.log('Подаци са API-ја:', подациСаAPI);
    
    // Секвенцијално извршавање асинхроних операција
    await сачекај(1000); // сачекај 1 секунду
    console.log('Операција завршена након чекања');
    
    return { садржајФајла, подациСаAPI };
  } catch (грешка) {
    console.error('Дошло је до грешке:', грешка);
  }
}

// Позив асинхроне функције
главнаФункција().then(резултат => {
  console.log('Све операције су успешно завршене!', резултат);
});
```

### Креирање Socket.io сервера за реалтајм комуникацију

```javascript
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Догађаји у реалном времену са Socket.io
io.on('connection', (socket) => {
  console.log('Нови корисник је повезан!');
  
  // Слање поруке свим клијентима осим пошиљаоцу
  socket.on('чет порука', (msg) => {
    socket.broadcast.emit('чет порука', msg);
  });
  
  // Слање поруке у специфичну собу
  socket.on('придружи се соби', (соба) => {
    socket.join(соба);
    io.to(соба).emit('обавештење', `Нови корисник је ушао у собу: ${соба}`);
  });
  
  // Руковање дисконекцијом
  socket.on('disconnect', () => {
    console.log('Корисник је искључен');
  });
});

server.listen(3000, () => {
  console.log('Socket.io сервер је покренут на порту 3000');
});
```

## Популарни Node.js фрејмворци и библиотеке

| Име | Тип | Примарна намена |
|-----|-----|-----------------|
| Express | Веб фрејмворк | Веб сервери и API-ји |
| Nest.js | Фрејмворк | Enterprise апликације са TypeScript-ом |
| Fastify | Веб фрејмворк | Високо-перформантни API-ји |
| Socket.io | Библиотека | Реал-тајм апликације |
| Mongoose | ODM | MongoDB интеграција |
| Sequelize | ORM | SQL базе података |
| Jest | Библиотека | Тестирање |
| PM2 | Управљач процесима | Продукционо покретање Node.js апликација |

## Предности коришћења Node.js

- **Једнојезично програмирање**: JavaScript на фронтенду и бекенду смањује комплексност и повећава продуктивност.
  
- **Високе перформансе**: Асинхрони I/O модел омогућава оптималну искоришћеност ресурса сервера.
  
- **Активна заједница**: Огромна база програмера и екосистем библиотека доступних преко npm-а.
  
- **Идеалан за микросервисе**: Брзо стартовање и мала потрошња меморије чине га савршеним за контејнеризоване микросервисе.
  
- **Реал-тајм подршка**: Подршка за WebSockets и Server-Sent Events га чини одличним за чет апликације, игре и сличне апликације.

> 💡 **Савет**: Иако је Node.js сјајан за I/O операције, није идеалан за задатке који захтевају интензивну CPU обраду због своје једнонитне природе. За такве сценарије, размотрите Worker Threads API или алтернативне технологије.

Node.js је трансформисао начин на који размишљамо о серверском програмирању и омогућио JavaScript програмерима да проширују своје вештине на целокупни стек развоја.
