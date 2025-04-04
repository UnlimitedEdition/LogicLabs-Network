---
layout: ../../layouts/MarkdownLayout.astro
title: 'WordPress API' 
---
# WordPress REST API

WordPress REST API пружа API endpoints (крајње тачке) за WordPress типове података који омогућавају програмерима да интерактивно комуницирају са сајтовима слањем и примањем података у JSON (JavaScript Object Notation) формату.

Ово отвара WordPress за потпуно нове начине коришћења, омогућавајући му да служи као бек-енд платформа за апликације на једној страници (SPA), мобилне апликације, или било који други систем који може да шаље и прима HTTP захтеве.

## Кључне карактеристике:

*   **JSON формат:** Подаци се размењују у лако читљивом и широко подржаном JSON формату.
*   **HTTP методе:** Користи стандардне HTTP методе (GET, POST, PUT, DELETE) за CRUD (Create, Read, Update, Delete) операције над WordPress ресурсима (постови, странице, корисници, таксономије, итд.).
*   **Проширивост:** Програмери могу да додају прилагођене endpoints како би изложили функционалности својих тема или додатака (plugins).
*   **Аутентификација:** Подржава различите методе аутентификације (нпр. колачићи, OAuth, Application Passwords) за сигурну интеракцију са заштићеним подацима.
*   ** decoupled / headless CMS:** Омогућава коришћење WordPress-а као "headless" CMS-а, где се WordPress користи само за управљање садржајем, док се фронт-енд гради помоћу других технологија (нпр. React, Vue, Angular, Svelte).

## Пример (Дохватање последњих 10 постова помоћу `fetch` у JavaScript-у):

```javascript
// URL вашег WordPress сајта + REST API путања
const apiUrl = 'https://your-wordpress-site.com/wp-json/wp/v2/posts?_embed&per_page=10';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP грешка! Статус: ${response.status}`);
    }
    return response.json(); // Парсирање одговора као JSON
  })
  .then(posts => {
    console.log('Примљени постови:', posts);
    // Овде можете обрадити и приказати постове на вашој страници
    posts.forEach(post => {
      console.log('Наслов:', post.title.rendered);
      console.log('Садржај:', post.content.rendered);
      // Ако сте користили _embed, можете приступити истакнутој слици:
      if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
        console.log('URL истакнуте слике:', post._embedded['wp:featuredmedia'][0].source_url);
      }
      console.log('---');
    });
  })
  .catch(error => {
    console.error('Грешка при дохватању постова:', error);
  });
```
*Напомена: Замените `https://your-wordpress-site.com` са стварним URL-ом вашег WordPress сајта.* `_embed` параметар се користи да би се у одговор укључили повезани ресурси као што су истакнуте слике, аутори, итд. `per_page=10` ограничава број постова на 10.

WordPress REST API чини WordPress флексибилнијом платформом, омогућавајући интеграцију са модерним веб технологијама.
