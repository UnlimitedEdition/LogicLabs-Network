---
layout: ../../layouts/MarkdownLayout.astro
title: 'Chart.js - Моћна библиотека за визуелизацију података'
description: 'Направите прелепе, интерактивне и прилагодљиве графиконе за своје веб апликације помоћу Chart.js'
---

# Chart.js

Chart.js је моћна JavaScript библиотека отвореног кода за креирање прелепих, интерактивних графикона на вашим веб страницама. Користећи HTML5 Canvas, Chart.js комбинује елеганцију, једноставност и перформансе, чинећи га одличним избором за визуелизацију података у модерним веб пројектима.

## Кључне карактеристике

- **📊 Разноврсност графикона**: Подржава 8 различитих типова графикона:
  - Стубичасти (Bar)
  - Линијски (Line)
  - Површински (Area)
  - Кружни (Pie)
  - Крофна (Doughnut)
  - Поларни (Polar Area)
  - Радарски (Radar)
  - Тачкасти (Scatter)
  
- **📱 Потпуно прилагодљив**: Аутоматски се скалира на различитим димензијама екрана.
  
- **✨ Анимације и интеракције**: Елегантне анимације и интерактивни tooltip-ови који побољшавају кориснички доживљај.
  
- **🎨 Високо прилагодљив**: Прилагодите боје, фонтове, стилове и много више према вашим потребама.
  
- **⚡ Оптимизоване перформансе**: Ефикасан рендеринг за брзо учитавање и глатке анимације.

## Примери кода

### Основни линијски графикон:

```javascript
// Креирање једноставног линијског графикона
const ctx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Јануар', 'Фебруар', 'Март', 'Април', 'Мај', 'Јун'],
        datasets: [{
            label: 'Месечна продаја',
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Анализа продаје по месецима'
            }
        }
    }
});
```

### Напредан пример са више скупова података:

```javascript
// Креирање графикона са више скупова података
const mixedChart = new Chart(document.getElementById('mixedChart'), {
    type: 'bar',
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [
            {
                label: 'Приходи',
                data: [150000, 190000, 170000, 210000, 250000, 300000],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1,
                order: 2
            },
            {
                label: 'Профит',
                data: [50000, 60000, 55000, 80000, 100000, 130000],
                type: 'line',
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgb(255, 99, 132)',
                tension: 0.3,
                order: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Динара (РСД)'
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('sr-RS').format(context.parsed.y) + ' РСД';
                        }
                        return label;
                    }
                }
            }
        }
    }
});
```

### Интеграција у HTML страницу:

```html
<!DOCTYPE html>
<html lang="sr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chart.js Демонстрација</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        .chart-container {
            width: 80%;
            max-width: 700px;
            margin: 2rem auto;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            background-color: white;
        }
        h1 {
            text-align: center;
            color: #333;
        }
    </style>
</head>
<body>
    <h1>Визуелизација података са Chart.js</h1>
    
    <div class="chart-container">
        <canvas id="lineChart"></canvas>
    </div>
    
    <div class="chart-container">
        <canvas id="mixedChart"></canvas>
    </div>
    
    <script src="charts.js"></script>
</body>
</html>
```

## Напредне функционалности

Chart.js нуди богат скуп напредних функција за професионалне визуелизације података:

- **Прилагођене легенде и tooltip-ови**
- **Анимиране ажурирања података**
- **Комбиновање различитих типова графикона**
- **Логаритамске и временске скале**
- **Догађаји и интеракције (кликови, ховер)**
- **Екстензије и плагинови**

> 💡 **Савет**: Користите Chart.js за dashboards, извештаје, аналитику и било које друге апликације где је визуелизација података кључна за разумевање информација.

## Како започети са Chart.js

```bash
# Инсталација преко npm-а
npm install chart.js

# Или коришћење CDN-а
# <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

Chart.js значајно поједностављује процес визуелизације података, омогућавајући вам да брзо креирате прелепе, интерактивне и прилагодљиве графиконе за своје веб апликације.
