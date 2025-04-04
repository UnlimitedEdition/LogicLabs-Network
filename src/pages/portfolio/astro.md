---
layout: ../../layouts/MarkdownLayout.astro
title: 'Astro - Модерни фрејмворк за брзе веб сајтове'
description: 'Откријте моћ Astro-а за креирање брзих и оптимизованих веб сајтова са фокусом на садржај'
---

# Astro

Astro је револуционарни веб фрејмворк дизајниран за изградњу ултрабрзих веб сајтова са фокусом на садржај. Уз Astro, добијате невероватне перформансе без жртвовања искуства развоја.

## Кључне карактеристике

- **🏝 Острвска архитектура (Islands Architecture)**: Учитава JavaScript само за интерактивне компоненте, док остатак сајта остаје лаган статички HTML.
  
- **🧩 UI-агностичан**: Флексибилност да користите омиљени UI фрејмворк - React, Preact, Svelte, Vue, SolidJS, Lit или ниједан - само HTML и JavaScript.
  
- **🚀 Нула JavaScript подразумевано**: Максималне перформансе са минималним JavaScript-ом који се шаље клијенту.
  
- **🔍 Оптимизован за SEO**: Статички генерисане странице које претраживачи воле.
  
- **📄 Савршен за садржај**: Блогови, маркетиншки сајтови, документација, e-commerce - све је могуће.

## Примери кода

### Основна Astro компонента:

```astro
---
// src/components/Hero.astro
const { title, subtitle } = Astro.props;
---
<section class="hero">
  <h1>{title}</h1>
  <p>{subtitle}</p>
  <slot /> <!-- Садржај из родитељске компоненте -->
</section>

<style>
  .hero {
    padding: 4rem 1rem;
    text-align: center;
    background: linear-gradient(45deg, #4F46E5, #7E22CE);
    color: white;
    border-radius: 8px;
  }
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
</style>
```

### Коришћење Astro са React-ом:

```jsx
// src/components/Counter.jsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <h2>Интерактивна React компонента унутар Astro-а</h2>
      <p>Тренутни број: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>
        Повећај
      </button>
    </div>
  );
}
```

И затим је укључите у Astro компоненту:

```astro
---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
import Hero from '../components/Hero.astro';
import Counter from '../components/Counter.jsx';
---

<Layout title="Почетна страница">
  <Hero 
    title="Добродошли у Astro" 
    subtitle="Невероватно брз веб фрејмворк"
  >
    <a href="/docs" class="btn">Започните</a>
  </Hero>
  
  <div class="content">
    <h2>Погледајте ову React компоненту:</h2>
    <Counter client:visible />
  </div>
</Layout>
```

## Перформансе и скалирање

Astro аутоматски оптимизује ваш сајт за најбоље могуће перформансе:

| Фрејмворк | Укупна оцена | FCP | LCP | TTI | Величина JS |
|-----------|--------------|-----|-----|-----|-------------|
| Astro     | 95+          | 0.5s| 0.9s| 0.5s| ~50KB       |
| Next.js   | 78           | 0.7s| 2.0s| 3.7s| ~400KB      |
| Gatsby    | 74           | 0.8s| 2.2s| 4.2s| ~480KB      |
| Nuxt      | 70           | 0.9s| 2.5s| 4.5s| ~450KB      |

> 💡 **Добро је знати**: Astro користи само "хидрирање по захтеву", што значи да JavaScript се учитава само када је компонента постала видљива кориснику, додатно побољшавајући перформансе.

## Зашто изабрати Astro за свој следећи пројекат?

```shell
# Инсталирајте Astro и почните са развојем
npm create astro@latest
```

Испробајте Astro данас и уверите се у невероватне перформансе ваших веб сајтова!
