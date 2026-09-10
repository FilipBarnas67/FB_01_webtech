import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {


  const technology = {
    name: "React",
    category: "Frontend",
    hours: 30,
    active: true
  };

  const app = {
    name: "WebTech",
    version: "1.0",
    author: "Twoje imię i nazwisko",
    technologiesCount: 3
  };

  const student = {
  name: "Filip",
  surname: "Barnaś",
  className: "4P",
  specialization: "technik programista"
};

const course = {
  name: "x",
  teacher: "xx",
  hours: 67,
  completed: 67
};

  return (
    <div>

      <h1>{app.name}</h1>

      <p>Wersja: {app.version}</p>

      <p>Autor: {app.author}</p>

      <p>
        Liczba technologii: {app.technologiesCount}
      </p>

      <h1>Technology</h1>

      <p>Nazwa: {technology.name}</p>

      <p>Kategoria: {technology.category}</p>

      <p>godziny: {technology.hours}</p>

      <p>Aktywny: {technology.active}</p>

      <h1>Student</h1>

      <p>Imie: {student.name}</p>

      <p>Nazwisko: {student.surname}</p>

      <p>Nazwa Klasy: {student.className}</p>

      <p>Specjalizacja: {student.specialization}</p>


      <section className='xxxxxx'>
      <h1>Student</h1>

      <p>Imie: {student.name}</p>

      <p>Nazwisko: {student.surname}</p>

      <p>Nazwa Klasy: {student.className}</p>

      <p>Specjalizacja: {student.specialization}</p>
      </section>
    </div>
  );
}

export default App
