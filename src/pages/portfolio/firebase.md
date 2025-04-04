---
layout: ../../layouts/MarkdownLayout.astro
title: 'Firebase' 
---
# Firebase

Firebase је платформа за развој мобилних и веб апликација коју је развио Google. Пружа широк спектар алата и услуга који помажу програмерима да брже изграде квалитетне апликације, побољшају базу корисника и зараде више новца. Firebase је Backend-as-a-Service (BaaS) решење.

## Кључне услуге:

*   **Authentication:** Једноставна и сигурна аутентификација корисника (email/лозинка, телефон, Google, Facebook, Twitter, итд.).
*   **Firestore Database:** NoSQL база података у облаку са синхронизацијом у реалном времену.
*   **Realtime Database:** Оригинална NoSQL база података Firebase-а, такође са синхронизацијом у реалном времену.
*   **Hosting:** Брз и сигуран хостинг за статичке и динамичке веб апликације и микросервисе.
*   **Cloud Functions:** Омогућава покретање бек-енд кода без управљања серверима (serverless).
*   **Cloud Storage:** Складиштење и сервирање кориснички генерисаног садржаја као што су слике и видео снимци.
*   **Cloud Messaging (FCM):** Слање обавештења (push notifications) и порука корисницима.
*   **Analytics:** Бесплатна и неограничена аналитика за мерење понашања корисника и атрибуције.
*   **Remote Config:** Прилагођавање изгледа и понашања апликације без потребе за ажурирањем.
*   **Crashlytics:** Праћење и извештавање о падовима апликације у реалном времену.

## Пример (Читање података из Firestore у JavaScript-у):

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Ваша конфигурација Firebase пројекта
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

// Иницијализација Firebase-а
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getUsers() {
  const usersCol = collection(db, 'users'); // Референца на колекцију 'users'
  const userSnapshot = await getDocs(usersCol);
  const userList = userSnapshot.docs.map(doc => doc.data());
  console.log(userList);
  return userList;
}

getUsers();
```

Firebase нуди комплетан сет алата за развој, лансирање и праћење апликација, значајно убрзавајући развојни циклус.
