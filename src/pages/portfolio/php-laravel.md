---
layout: ../../layouts/MarkdownLayout.astro
title: 'PHP (Laravel)' 
---
# PHP (Laravel)

PHP (рекурзивни акроним за *PHP: Hypertext Preprocessor*) је широко коришћен скриптни језик отвореног кода, посебно погодан за веб развој и може се уградити у HTML. Извршава се на серверској страни.

Laravel је веб апликацијски фрејмворк са експресивном, елегантном синтаксом, написан у PHP-у. Прати MVC (Model-View-Controller) архитектонски образац. Laravel покушава да олакша развојни процес уклањањем бола из уобичајених задатака који се користе у већини веб пројеката, као што су аутентификација, рутирање, сесије и кеширање.

## Кључне карактеристике Laravel-а:

*   **Eloquent ORM:** Једноставан и моћан Active Record имплементација за рад са базама података.
*   **Artisan конзола:** Алат командне линије који пружа корисне команде за развој (нпр. миграције базе података, генерисање кода).
*   **Blade шаблони:** Једноставан, али моћан енџин за шаблоне који омогућава писање чистог PHP кода унутар шаблона.
*   **Рутирање:** Елегантан и флексибилан систем за дефинисање рута апликације.
*   **Миграције и Seeding:** Систем за контролу верзија шеме базе података и попуњавање базе података тестним подацима.
*   **Сигурност:** Пружа уграђене механизме за заштиту од уобичајених веб рањивости као што су CSRF (Cross-Site Request Forgery) и SQL инјекције.
*   **Велики екосистем:** Нуди мноштво званичних и пакета заједнице (нпр. Laravel Breeze/Jetstream за аутентификацију, Telescope за дебаговање).

## Пример (Дефинисање руте у Laravel-у):

```php
// routes/web.php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Овде можете регистровати веб руте за вашу апликацију. Ове
| руте учитава RouteServiceProvider и све ће
| бити додељене "web" middleware групи. Направите нешто сјајно!
|
*/

Route::get('/', function () {
    // Враћање Blade view-а 'welcome' који се налази у resources/views/welcome.blade.php
    return view('welcome');
});

Route::get('/korisnici/{id}', function ($id) {
    return 'Приказујем корисника са ID-јем: ' . $id;
});
```

Laravel је један од најпопуларнијих PHP фрејмворка, познат по својој елеганцији, обимној документацији и великој заједници.
