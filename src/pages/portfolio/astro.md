---
layout: ../../layouts/MarkdownLayout.astro
title: 'Astro' 
---
# Astro

Astro је модеран веб фрејмворк за изградњу брзих веб сајтова фокусираних на садржај.

## Кључне карактеристике:

*   **Острвска архитектура (Islands Architecture):** Учитава JavaScript само за интерактивне компоненте, чинећи већину сајта статичким HTML-ом.
*   **UI-агностичан:** Можете користити React, Preact, Svelte, Vue, SolidJS, Lit и друге UI фрејмворке или само HTML и JavaScript.
*   **Фокус на перформансе:** Подразумевано шаље нула JavaScript-а клијенту.
*   **Одличан за садржај:** Идеалан за блогове, маркетиншке сајтове, документацију и е-трговину.

## Пример (Astro компонента):

```astro
---
// src/components/MyComponent.astro
const pageTitle = "О Astro-у";
---
<html lang="sr">
<head>
  <meta charset="utf-8" />
  <title>{pageTitle}</title>
</head>
<body>
  <h1>{pageTitle}</h1>
  <p>Ово је пример Astro компоненте.</p>
</body>
</html>
```

Astro омогућава брз развој сајтова са одличним перформансама.
