---
layout: ../../layouts/MarkdownLayout.astro
title: 'React - Библиотека за модерне корисничке интерфејсе'
description: 'Упознајте React - JavaScript библиотеку која је револуционизовала развој веб апликација'
---

# React

React је моћна JavaScript библиотека за креирање интерактивних корисничких интерфејса, развијена од стране Facebook-а (сада Meta). Данас је једна од најпопуларнијих технологија за фронтенд развој и налази се у срцу многих најуспешнијих веб апликација широм света.

## Кључне карактеристике

- **⚛️ Компонентна архитектура**: Ваша апликација се састоји од изолованих, поновно употребљивих компоненти које управљају сопственим стањем.

- **🔄 Виртуелни DOM**: Оптимизује перформансе преко ефикасног ажурирања DOM-а, мењајући само оно што је заиста потребно.

- **⚡ Декларативни приступ**: Опишите како би ваш UI требало да изгледа за различита стања апликације, а React ће се побринути за ажурирање.

- **🔀 Једносмерни ток података**: Чини апликације предвидљивијим и лакшим за дебаговање.

- **🌍 Велики екосистем**: Огромна заједница, богата документација, и мноштво библиотека које се савршено интегришу са React-ом.

## Примери кода

### Основна React компонента:

```jsx
import React from 'react';

function Welcome(props) {
  return <h1>Здраво, {props.name}!</h1>;
}

export default Welcome;
```

### Компонента са стањем и животним циклусом (Class Component):

```jsx
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <h2>Тајмер је активан</h2>
        <p>Прошло је {this.state.seconds} секунди.</p>
      </div>
    );
  }
}

export default Timer;
```

### Модерна React компонента са Hooks (Function Component):

```jsx
import React, { useState, useEffect } from 'react';

function FriendlyTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;
    
    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    
    // Функција чишћења која се извршава када се компонента демонтира 
    // или када се промене зависности (овде: isActive)
    return () => clearInterval(intervalId);
  }, [isActive]);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className="timer-container">
      <h2>Интерактивни тајмер</h2>
      <p className="time-display">{seconds} секунди</p>
      
      <div className="controls">
        <button onClick={handleToggle}>
          {isActive ? 'Пауза' : 'Старт'}
        </button>
        <button onClick={handleReset}>
          Ресетуј
        </button>
      </div>
    </div>
  );
}

export default FriendlyTimer;
```

### Пример апликације са више компоненти:

```jsx
import React, { useState } from 'react';
import './TodoApp.css';

// Компонента за појединачни задатак
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => onToggle(todo.id)} 
      />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Обриши</button>
    </li>
  );
}

// Компонента за унос новог задатка
function TodoForm({ onAdd }) {
  const [text, setText] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Додај нови задатак..." 
      />
      <button type="submit">Додај</button>
    </form>
  );
}

// Главна компонента апликације
function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Научити React', completed: true },
    { id: 2, text: 'Направити Todo апликацију', completed: false },
    { id: 3, text: 'Схватити React Hooks', completed: false }
  ]);
  
  // Додавање новог задатка
  const addTodo = (text) => {
    const newTodo = {
      id: Math.max(0, ...todos.map(t => t.id)) + 1,
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };
  
  // Означавање задатка као завршеног/незавршеног
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  // Брисање задатка
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div className="todo-app">
      <h1>Моји задаци</h1>
      <TodoForm onAdd={addTodo} />
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onToggle={toggleTodo} 
            onDelete={deleteTodo} 
          />
        ))}
      </ul>
      <div className="todo-stats">
        Преостало: {todos.filter(todo => !todo.completed).length} задатака
      </div>
    </div>
  );
}

export default TodoApp;
```

## Зашто изабрати React?

React нуди бројне предности које га чине одличним избором за модерне веб апликације:

| Предност | Опис |
|----------|------|
| Лак за учење | Јасна синтакса и концепти који су интуитивни за већину програмера |
| Висока перформанса | Оптимизовано ажурирање DOM-а за брзо рендеровање и глатко корисничко искуство |
| Поновна употребљивост | Компоненте се могу користити на више места, смањујући дупликацију кода |
| Тестирање | Лако је писати тестове за React компоненте и логику |
| SEO-friendly | Серверско рендеровање (са Next.js и сличним frameworks) омогућава бољу SEO оптимизацију |
| Подршка заједнице | Велика заједница програмера, решена питања и стални развој |

> 💡 **Добро је знати**: React није фрејмворк, већ библиотека. Ово значи да га можете користити у постојећим пројектима или га комбиновати са другим технологијама према вашим потребама.

## Почетак рада са React-ом

```bash
# Креирање нове React апликације помоћу Create React App
npx create-react-app moja-aplikacija

# Прелазак у директоријум апликације
cd moja-aplikacija

# Покретање развојног сервера
npm start
```

Са React-ом, могуће је изградити све - од једноставних компоненти до сложених enterprise апликација. Његова флексибилност и моћ га чине једним од најпопуларнијих избора за фронтенд развој данас.
