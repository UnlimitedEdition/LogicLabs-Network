---
layout: ../../layouts/MarkdownLayout.astro
title: 'Python (Django)' 
---
# Python (Django)

Python је интерпретирани, објектно-оријентисани програмски језик високог нивоа са динамичким семантикама. Познат је по својој једноставној и читљивој синтакси.

Django је Python веб фрејмворк високог нивоа који подстиче брз развој и чист, прагматичан дизајн. Изграђен од стране искусних програмера, он се брине о великом делу муке око веб развоја, тако да се можете фокусирати на писање ваше апликације без потребе да поново измишљате точак. Бесплатан је и отвореног кода.

## Кључне карактеристике Django-а:

*   **"Батерије укључене" (Batteries Included):** Долази са многим уграђеним компонентама које су потребне за веб развој, укључујући ORM (Object-Relational Mapper), систем за миграције, административни интерфејс, систем за аутентификацију, фрејмворк за форме, и још много тога.
*   **MTV Архитектура:** Користи варијанту MVC (Model-View-Controller) обрасца, коју Django назива MVT (Model-View-Template). Модел управља подацима, View (слично контролеру у MVC) рукује логиком захтева, а Template управља презентацијом.
*   **Django ORM:** Моћан алат за интеракцију са базом података користећи Python код уместо SQL-а. Подржава различите базе података (PostgreSQL, MySQL, SQLite, Oracle).
*   **Административни интерфејс:** Аутоматски генерише функционалан административни интерфејс за управљање подацима апликације, што је изузетно корисно за брз развој.
*   **Сигурност:** Пружа уграђену заштиту од многих уобичајених веб напада, као што су CSRF, XSS (Cross-Site Scripting), SQL инјекције и clickjacking.
*   **Скалабилност:** Дизајниран да буде скалабилан, користе га неки од највећих веб сајтова на свету.

## Пример (Дефинисање модела и view-а у Django-у):

```python
# models.py (унутар Django апликације)
from django.db import models

class Pitanje(models.Model):
    tekst_pitanja = models.CharField(max_length=200)
    datum_objave = models.DateTimeField('датум објаве')

    def __str__(self):
        return self.tekst_pitanja

class Odgovor(models.Model):
    pitanje = models.ForeignKey(Pitanje, on_delete=models.CASCADE) # Веза са моделом Pitanje
    tekst_odgovora = models.CharField(max_length=200)
    glasovi = models.IntegerField(default=0)

    def __str__(self):
        return self.tekst_odgovora

# views.py (унутар Django апликације)
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Pitanje

def index(request):
    # Дохватање последњих 5 питања
    najnovija_pitanja = Pitanje.objects.order_by('-datum_objave')[:5]
    context = {'najnovija_pitanja': najnovija_pitanja}
    # Рендеровање HTML шаблона 'index.html' са подацима
    return render(request, 'polls/index.html', context)

def detalji(request, pitanje_id):
    pitanje = get_object_or_404(Pitanje, pk=pitanje_id) # Дохватање питања или враћање 404 грешке
    return render(request, 'polls/detalji.html', {'pitanje': pitanje})

# Потребно је дефинисати и URL руте у urls.py и креирати HTML шаблоне.
```

Django је одличан избор за изградњу сложених, подацима вођених веб апликација, нудећи структуру и алате за ефикасан развој.
