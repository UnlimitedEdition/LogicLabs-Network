---
layout: ../../layouts/MarkdownLayout.astro
title: 'HTML/CSS/JS' 
---
# HTML, CSS, и JavaScript

HTML (HyperText Markup Language), CSS (Cascading Style Sheets), и JavaScript чине три основне технологије за изградњу веб страница и веб апликација.

## HTML (HyperText Markup Language)

HTML је стандардни језик за означавање (markup language) за креирање структуре веб страница. Он дефинише значење и структуру веб садржаја користећи "ознаке" (tags).

*   **Структура:** Дефинише елементе као што су наслови (`<h1>` до `<h6>`), параграфи (`<p>`), листе (`<ul>`, `<ol>`, `<li>`), линкови (`<a>`), слике (`<img>`), табеле (`<table>`), форме (`<form>`) итд.
*   **Семантика:** Пружа семантичко значење деловима садржаја (нпр. `<article>`, `<nav>`, `<header>`, `<footer>`).
*   **Основа:** Свака веб страница коју видите у прегледачу је у основи HTML документ.

**Пример:**
```html
<!DOCTYPE html>
<html lang="sr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моја страница</title>
    <link rel="stylesheet" href="style.css"> <!-- Повезивање са CSS датотеком -->
</head>
<body>
    <h1>Наслов странице</h1>
    <p>Ово је параграф текста са <a href="#">линком</a>.</p>
    <script src="script.js"></script> <!-- Повезивање са JavaScript датотеком -->
</body>
</html>
```

## CSS (Cascading Style Sheets)

CSS је језик за стилизовање који се користи за описивање презентације документа написаног у markup језику као што је HTML. CSS одваја презентацију од садржаја.

*   **Изглед:** Контролише боје, фонтове, распоред елемената, размаке, позадине, ивице, анимације итд.
*   **Селектори:** Користи селекторе за циљање HTML елемената на које треба применити стилове.
*   **Каскадирање и наслеђивање:** Правила омогућавају дефинисање приоритета стилова и наслеђивање стилова од родитељских елемената.
*   **Responsive Design:** Омогућава креирање дизајна који се прилагођава различитим величинама екрана (медија упити - media queries).

**Пример (`style.css`):**
```css
body {
  font-family: sans-serif;
  line-height: 1.6;
  background-color: #f4f4f4;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  color: #555;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

## JavaScript

JavaScript је скриптни језик који омогућава додавање интерактивности и динамичког понашања веб страницама.

*   **Интерактивност:** Рукује догађајима корисника (кликови, унос текста), мења HTML садржај и CSS стилове динамички.
*   **Асинхроне операције:** Комуницира са сервером у позадини (AJAX/Fetch API) за дохватање или слање података без поновног учитавања странице.
*   **Манипулација DOM-ом:** Омогућава програмски приступ и модификацију структуре, стила и садржаја документа.
*   **Веб АПИ-ји:** Користи АПИ-је прегледача за функционалности као што су геолокација, веб складиште (localStorage, sessionStorage), цртање на Canvas-у итд.

**Пример (`script.js`):**
```javascript
// Проналажење H1 елемента
const naslov = document.querySelector('h1');

// Додавање слушаоца догађаја (event listener)
naslov.addEventListener('click', () => {
  alert('Кликнули сте на наслов!');
  naslov.style.color = 'red'; // Промена боје на клик
});

console.log('JavaScript је учитан!');
```

Заједно, HTML, CSS и JavaScript чине темељ модерног фронт-енд веб развоја. HTML пружа структуру, CSS изглед, а JavaScript интерактивност.
