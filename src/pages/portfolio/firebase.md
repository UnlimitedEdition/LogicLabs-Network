---
layout: ../../layouts/MarkdownLayout.astro
title: 'Firebase - Комплетна платформа за развој веб и мобилних апликација'
description: 'Упознајте Firebase - Google-ову свеобухватну платформу за брзи развој апликација са backend функционалностима без управљања серверима'
---

# Firebase

Firebase је моћна платформа за развој апликација коју је развио Google, која омогућава програмерима да брзо изграде висококвалитетне апликације без потребе за управљањем сопственом серверском инфраструктуром. Као Backend-as-a-Service (BaaS) решење, Firebase нуди широк спектар интегрисаних услуга које се могу лако применити у веб, мобилним и Unity пројектима.

## Кључне услуге

- **🔐 Authentication**: Имплементирајте робусну аутентификацију корисника за неколико минута, користећи:
  - Email/лозинка
  - Телефонски број
  - OAuth провајдере (Google, Facebook, Twitter, Apple, GitHub, итд.)
  - Анонимну пријаву
  
- **💾 Firestore и Realtime Database**: NoSQL базе података са подршком за синхронизацију у реалном времену:
  - Firestore: Скалабилнија и флексибилнија база са богатијим упитима
  - Realtime Database: Оптимизована за синхронизацију у реалном времену
  
- **🌐 Hosting**: Брзо и сигурно хостовање веб садржаја уз CDN подршку.
  
- **☁️ Cloud Functions**: Serverless функције које се покрећу у одговору на различите догађаје.
  
- **📊 Analytics**: Детаљни увид у понашање корисника, путање конверзије и активности.
  
- **📱 Cloud Messaging (FCM)**: Слање push обавештења корисницима на различитим платформама.
  
- **🗄️ Cloud Storage**: Сигурно складиштење корисничких фајлова (слике, видео, документи).
  
- **⚙️ Remote Config**: Динамичко прилагођавање понашања и изгледа апликације без објављивања нових верзија.
  
- **🐛 Crashlytics**: Праћење стабилности апликације са детаљним извештајима о падовима.

## Примери кода

### Аутентификација корисника (Web)

```javascript
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from "firebase/auth";

// Конфигурација Firebase-а
const firebaseConfig = {
  apiKey: "ваш-api-кључ",
  authDomain: "ваш-пројекат.firebaseapp.com",
  projectId: "ваш-пројекат",
  storageBucket: "ваш-пројекат.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456"
};

// Иницијализација Firebase-а
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Регистрација новог корисника
async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Корисник регистрован:", user.uid);
    return user;
  } catch (error) {
    console.error("Грешка при регистрацији:", error.code, error.message);
    throw error;
  }
}

// Пријава корисника
async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Корисник пријављен:", user.uid);
    return user;
  } catch (error) {
    console.error("Грешка при пријави:", error.code, error.message);
    throw error;
  }
}

// Одјава корисника
async function logoutUser() {
  try {
    await signOut(auth);
    console.log("Корисник одјављен");
  } catch (error) {
    console.error("Грешка при одјави:", error.code, error.message);
    throw error;
  }
}

// Ослушкивање промене стања аутентификације
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Корисник је пријављен:", user.uid);
  } else {
    console.log("Корисник није пријављен");
  }
});
```

### Firestore CRUD операције

```javascript
import { 
  getFirestore, 
  collection, 
  doc, 
  addDoc, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit, 
  onSnapshot 
} from "firebase/firestore";

const db = getFirestore(app);

// Креирање (Create)
async function addTask(task) {
  try {
    const docRef = await addDoc(collection(db, "tasks"), {
      title: task.title,
      description: task.description,
      priority: task.priority,
      completed: false,
      createdAt: new Date(),
      userId: auth.currentUser.uid
    });
    
    console.log("Задатак додат са ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Грешка при додавању задатка:", error);
    throw error;
  }
}

// Читање (Read)
async function getTask(taskId) {
  try {
    const docRef = doc(db, "tasks", taskId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Подаци задатка:", docSnap.data());
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("Не постоји такав задатак!");
      return null;
    }
  } catch (error) {
    console.error("Грешка при дохватању задатка:", error);
    throw error;
  }
}

// Ажурирање (Update)
async function updateTask(taskId, updates) {
  try {
    const taskRef = doc(db, "tasks", taskId);
    await updateDoc(taskRef, updates);
    console.log("Задатак ажуриран!");
  } catch (error) {
    console.error("Грешка при ажурирању задатка:", error);
    throw error;
  }
}

// Брисање (Delete)
async function deleteTask(taskId) {
  try {
    await deleteDoc(doc(db, "tasks", taskId));
    console.log("Задатак обрисан!");
  } catch (error) {
    console.error("Грешка при брисању задатка:", error);
    throw error;
  }
}

// Комплексан упит
async function getHighPriorityTasks() {
  try {
    const q = query(
      collection(db, "tasks"),
      where("userId", "==", auth.currentUser.uid),
      where("priority", "==", "high"),
      where("completed", "==", false),
      orderBy("createdAt", "desc"),
      limit(10)
    );
    
    const querySnapshot = await getDocs(q);
    const tasks = [];
    
    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() });
    });
    
    return tasks;
  } catch (error) {
    console.error("Грешка при дохватању задатака:", error);
    throw error;
  }
}

// Слушање промена у реалном времену
function subscribeToTasks(callback) {
  const q = query(
    collection(db, "tasks"),
    where("userId", "==", auth.currentUser.uid),
    orderBy("createdAt", "desc")
  );
  
  return onSnapshot(q, (querySnapshot) => {
    const tasks = [];
    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() });
    });
    callback(tasks);
  });
}
```

### Cloud Storage за управљање фајловима

```javascript
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

const storage = getStorage(app);

// Отпремање фајла
async function uploadFile(file, path) {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    console.log('Фајл отпремљен. Преузми га на:', downloadURL);
    return downloadURL;
  } catch (error) {
    console.error('Грешка при отпремању:', error);
    throw error;
  }
}

// Преузимање URL-а фајла
async function getFileURL(path) {
  try {
    const storageRef = ref(storage, path);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error('Грешка при преузимању URL-а:', error);
    throw error;
  }
}

// Брисање фајла
async function deleteFile(path) {
  try {
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
    console.log('Фајл успешно обрисан');
  } catch (error) {
    console.error('Грешка при брисању фајла:', error);
    throw error;
  }
}
```

## Интеграција Firebase-а са популарним фрејмворцима

### React + Firebase Hook пример

```jsx
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from './firebase';
import { collection, query, where, orderBy } from 'firebase/firestore';

function TaskList() {
  const [user] = useAuthState(auth);
  
  const q = query(
    collection(db, 'tasks'),
    where('userId', '==', user ? user.uid : 'none'),
    orderBy('createdAt', 'desc')
  );
  
  const [snapshot, loading, error] = useCollection(q);
  
  if (loading) return <div>Учитавање задатака...</div>;
  if (error) return <div>Грешка: {error.message}</div>;
  
  return (
    <div>
      <h2>Моји задаци</h2>
      <ul>
        {snapshot?.docs.map(doc => (
          <li key={doc.id}>
            <h3>{doc.data().title}</h3>
            <p>{doc.data().description}</p>
            <span>Приоритет: {doc.data().priority}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## Предности коришћења Firebase-а

| Предност | Опис |
|----------|------|
| **Брз развој** | Смањује време развоја елиминисањем потребе за писањем backend кода |
| **Скалабилност** | Аутоматско скалирање према потребама апликације без додатне конфигурације |
| **Интеграција** | Беспрекорна интеграција између различитих Firebase сервиса |
| **Реално време** | Уграђена подршка за синхронизацију података у реалном времену |
| **Мањи трошкови** | Бесплатан Spark план за мале пројекте и pay-as-you-go ценовник за веће |
| **Аналитика** | Детаљни увид у понашање корисника и перформансе апликације |

> 💡 **Савет**: Firebase је одличан избор за стартапе, MVP пројекте и тимове који желе да брзо развију производ. За комплексније апликације са специфичним захтевима, размотрите комбиновање Firebase-а са другим cloud сервисима.

Firebase значајно убрзава процес развоја и драстично смањује количину backend кода који треба написати, омогућавајући програмерима да се фокусирају на развој функционалности специфичних за њихове апликације.
