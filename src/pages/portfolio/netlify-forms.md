---
layout: ../../layouts/MarkdownLayout.astro
title: 'Netlify Forms' 
---
# Netlify Forms

Netlify Forms је услуга коју пружа Netlify платформа и омогућава лако прикупљање података из HTML форми на вашем статичком сајту без потребе за серверским кодом или JavaScript-ом.

## Како ради:

1.  Додате `netlify` атрибут вашој HTML `<form>` ознаци.
2.  Додате `name` атрибут форми како бисте је идентификовали у Netlify интерфејсу.
3.  Netlify аутоматски детектује форму приликом изградње (deploy) сајта и подешава endpoint за пријем података.
4.  Послати подаци су доступни у Netlify контролној табли.

## Кључне карактеристике:

*   **Једноставност:** Није потребно подешавање сервера или база података.
*   **Интеграција:** Лако се интегрише са постојећим статичким сајтовима хостованим на Netlify-у.
*   **Обавештења:** Могућност подешавања обавештења путем имејла или Slack-а за нове пријаве.
*   **Заштита од спама:** Уграђена reCAPTCHA и Honeypot поља.
*   **File Uploads:** Подршка за слање датотека.

## Пример:

```html
<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Име: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Порука: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Пошаљи</button>
  </p>
</form>
```

Netlify Forms значајно поједностављује руковање формама на статичким веб сајтовима.
