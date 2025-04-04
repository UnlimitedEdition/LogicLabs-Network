---
layout: ../../layouts/MarkdownLayout.astro
title: 'JavaScript - Свеприсутни језик веб развоја'
description: 'Упознајте JavaScript - динамички језик који покреће интерактивност и функционалност савремених веб апликација'
---

# JavaScript

JavaScript је моћан, флексибилан и свеприсутан програмски језик који је прошао импресиван еволутивни пут од скромног скриптног језика до основног темеља модерног веб развоја. Поред веб прегледача, данас се JavaScript користи за серверско програмирање, мобилни развој, десктоп апликације, IoT уређаје и много више.

## Кључне карактеристике

- **⚡ Динамичка природа**: JavaScript је интерпретирани језик са динамичким типовима, што омогућава брзи развој и флексибилност.

- **🔄 Асинхроно програмирање**: Помоћу callback функција, Promise објеката и async/await синтаксе, JavaScript елегантно хендлује асинхроне операције.

- **🌐 Универзална примена**: "JavaScript everywhere" - од фронтенда (у прегледачу) до бекенда (Node.js), мобилних апликација (React Native), десктоп апликација (Electron) и IoT уређаја.

- **🧩 Прототипско наслеђивање**: Уникатни механизам наслеђивања заснован на прототиповима (иако новије верзије нуде и класе).

- **📦 Богат екосистем**: Огроман број библиотека, фрејмворка и алата који чине развој бржим и ефикаснијим.

- **🚀 Стални развој**: Језик се редовно унапређује кроз нове верзије ECMAScript стандарда.

## Примери кода

### Основни концепти и синтакса

```javascript
// Променљиве
let ime = "Марко";                // променљива која се може мењати
const године = 30;                // константа која се не може мењати
var stariNacin = "избегавајте";   // застарели начин декларисања

// Типови података
const текст = "Ово је строка";    // строка (string)
const број = 42;                  // број (number)
const decimalни = 3.14;           // такође број (number)
const јестеTacно = true;          // булеан (boolean)
const нијеNista = null;           // null
const нијеDefinisano = undefined; // undefined
const мојObjekat = {              // објекат (object)
  име: "Ана",
  године: 28
};
const мојNiz = [1, 2, 3, 4, 5];   // низ (array)
const мојаDatum = new Date();     // датум (Date object)

// Функције
function позdravi(име) {
  return `Здраво, ${име}!`;
}

// Arrow функције (ES6+)
const kvadrat = (број) => број * број;

// Условне конструкције
if (године > 18) {
  console.log("Пунолетан");
} else {
  console.log("Малолетан");
}

// Петље
for (let i = 0; i < 5; i++) {
  console.log(`Број: ${i}`);
}

// Петља по низу
мојNiz.forEach(element => {
  console.log(element);
});

// Методи за рад са низовима
const duplirani = мојNiz.map(број => број * 2);     // [2, 4, 6, 8, 10]
const парни = мојNiz.filter(број => број % 2 === 0); // [2, 4]
const збир = мојNiz.reduce((acc, број) => acc + број, 0); // 15
```

### DOM манипулација

```javascript
// Селектовање елемената
const naslov = document.getElementById('naslov');
const paragrafи = document.querySelectorAll('.paragраф');
const dugme = document.querySelector('button.dugме-akcija');

// Мењање садржаја
naslov.textContent = 'Нови наслов';
naslov.innerHTML = 'Наслов са <strong>подебљаним</strong> текстом';

// Мењање стилова
naslov.style.color = 'blue';
naslov.style.fontSize = '24px';
naslov.classList.add('истакнуто');
naslov.classList.remove('сакривено');
naslov.classList.toggle('активно');

// Додавање и уклањање елемената
const noviElement = document.createElement('div');
noviElement.textContent = 'Нови елемент';
document.body.appendChild(noviElement);

const елементЗаБрисање = document.querySelector('.за-брисање');
if (елементЗаБрисање) {
  елементЗаБрисање.parentNode.removeChild(елементЗаБрисање);
  // или модернији начин
  елементЗаБрисање.remove();
}

// Догађаји
dugme.addEventListener('click', function() {
  alert('Дугме је кликнуто!');
});

// Пример креирања комплексније структуре
function kreirajKarticu(proизвод) {
  const kartica = document.createElement('div');
  kartica.className = 'kartica-proизвода';
  
  kartica.innerHTML = `
    <h3>${proизвод.naziv}</h3>
    <p class="opis">${proизвод.opis}</p>
    <div class="cena">${proизвод.cena} РСД</div>
    <button class="dodaj-u-korпу" data-id="${proизвод.id}">
      Додај у корпу
    </button>
  `;
  
  const dugmeDodaj = kartica.querySelector('.dodaj-u-korпу');
  dugmeDodaj.addEventListener('click', function() {
    dodajUKorпу(proизвод.id);
  });
  
  return kartica;
}
```

### Асинхроно програмирање

```javascript
// Callback приступ (старији начин)
function dohvatiPodatkeCallback(url, uspeh, gresка) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  
  xhr.onload = function() {
    if (xhr.status === 200) {
      uspeh(JSON.parse(xhr.responseText));
    } else {
      gresка('Грешка: ' + xhr.status);
    }
  };
  
  xhr.onerror = function() {
    gresка('Мрежна грешка');
  };
  
  xhr.send();
}

// Promise приступ (ES6+)
function dohvatiPodatkePromise(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Мрежна грешка: ' + response.status);
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// Async/Await приступ (ES8+)
async function dohvatiPodatkeAsync(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Мрежна грешка: ' + response.status);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Грешка:', error);
    throw error;
  }
}

// Пример коришћења асинхроних функција
async function prikaziKориснике() {
  try {
    const korisnici = await dohvatiPodatkeAsync('https://api.example.com/korисници');
    
    const listaElement = document.getElementById('lista-kорисника');
    listaElement.innerHTML = '';
    
    korisници.forEach(kорисник => {
      const element = document.createElement('li');
      element.textContent = `${kорисник.име} (${kорисник.email})`;
      listaElement.appendChild(element);
    });
  } catch (error) {
    console.error('Грешка при дохватању података:', error);
    // Приказивање поруке о грешци кориснику
  }
}
```

### JavaScript модули и класе

```javascript
// korisник.js - Дефиниција класе
export class Korисник {
  constructor(име, email) {
    this.име = име;
    this.email = email;
    this.jeUlogovan = false;
  }
  
  ulogujSe() {
    this.jeUlogovan = true;
    console.log(`${this.име} се успешно улоговао/ла.`);
    return this;
  }
  
  izlogujSe() {
    this.jeUlogovan = false;
    console.log(`${this.име} се излоговао/ла.`);
    return this;
  }
  
  azurirajEmail(noviEmail) {
    this.email = noviEmail;
    console.log(`Email је ажуриран на: ${this.email}`);
    return this;
  }
  
  // Статички метод
  static proveriaFormatEmaila(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

// Наслеђивање
export class Admin extends Korисник {
  constructor(име, email, nivo) {
    super(име, email);
    this.nivo = nivo;
    this.dozvole = [];
  }
  
  dodajDozvolu(dozvola) {
    this.dozvole.push(dozвола);
    return this;
  }
  
  jeDozvoljeno(dozвола) {
    return this.dozволе.includes(dozвола);
  }
}

// main.js - Употреба модула
import { Korисник, Admin } from './korисник.js';

const marko = new Korисник('Марко', 'marko@example.com');
marko.ulogujSe().azurirajEmail('marko.new@example.com');

const ana = new Admin('Ана', 'ana@example.com', 1);
ana.dodajDozvolu('брисање').dodajDozvolu('уредjивање');

if (ana.jeDozvoljeno('брисање')) {
  console.log('Ана може да брише садржај.');
}

// Провера формата email-а
if (Korисник.proveriaFormatEmaila('test@example.com')) {
  console.log('Email је исправан.');
}
```

## Модерни JavaScript фрејмворци

JavaScript екосистем укључује бројне фрејмворке и библиотеке које убрзавају развој сложених апликација:

| Име | Тип | Најбољи за |
|-----|-----|------------|
| React | Библиотека | Интерактивне UI компоненте, SPA, мобилне апликације |
| Angular | Фрејмворк | Велике ентерпрајз апликације, сложене форме |
| Vue.js | Фрејмворк | Прогресивне веб апликације, лака интеграција |
| Svelte | Компајлер | Перформантне и мале апликације |
| Next.js | React фрејмворк | SSR/SSG веб сајтови, оптимизација перформанси |
| Express | Node.js фрејмворк | REST API, серверске апликације |

> 💡 **Савет**: Уместо да одмах почнете са учењем фрејмворка, прво савладајте основе ванила JavaScript-а. То ће вам омогућити лакше разумевање и прелазак на било који фрејмворк када буде потребно.

## Тренутни трендови у JavaScript екосистему

- **TypeScript**: Додаје статичку типизацију у JavaScript, што смањује грешке и побољшава развојно искуство
- **JAMstack**: JavaScript, API и Markup архитектура за брзе и сигурне веб сајтове
- **Serverless**: JavaScript функције које се извршавају у клауд окружењу
- **Микрофронтенд**: Дељење фронтенд апликације на мање, независне делове
- **Web Components**: Стандардизовани начин за креирање прилагођених, поново употребљивих HTML елемената

JavaScript наставља да еволуира и проширује своје могућности, остајући неизоставни део модерног веб развоја и далеко превазилазећи своју првобитну намену као скриптни језик за веб странице.
