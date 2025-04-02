import http from 'k6/http';
import { sleep, check } from 'k6';

// Opcije testa - definisanje faza opterećenja (Test sa 200 korisnika)
export const options = {
  stages: [
    // Postepeno povećanje do 5 korisnika u 10 sekundi (blaži početak)
    { duration: '10s', target: 5 },
    // Održavanje 5 korisnika 20 sekundi
    { duration: '20s', target: 5 },
    // Postepeno povećanje do 50 korisnika u 30 sekundi
    { duration: '30s', target: 50 },
    // Održavanje 50 korisnika 1 minut
    { duration: '1m', target: 50 },
    // Postepeno povećanje do 200 korisnika u 30 sekundi ("najveći nivo")
    { duration: '30s', target: 200 },
    // Održavanje 200 korisnika 1 minut
    { duration: '1m', target: 200 },
    // Postepeno smanjenje na 0 korisnika u 30 sekundi
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    // Definišemo pragove za uspešnost testa
    'http_req_duration': ['p(95)<500'], // 95% zahteva treba da bude ispod 500ms
    'http_req_failed': ['rate<0.01'],   // Stopa neuspelih zahteva treba da bude manja od 1%
  },
};

// Glavna funkcija testa koju izvršava svaki virtuelni korisnik
export default function () {
  // Poseti početnu stranicu (na 192.168.16.1:8080)
  const res = http.get('http://192.168.16.1:8080/'); 

  // Proveri da li je status odgovora 200 OK
  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  // Sačekaj kratko pre sledećeg zahteva (simulira razmišljanje korisnika)
  sleep(1); 
}
