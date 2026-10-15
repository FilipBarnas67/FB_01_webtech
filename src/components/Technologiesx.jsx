import { useState } from "react";
import "./Technologiesx.css";

export default function Technologiesx({ technologies = [] }) {
  const [items, setItems] = useState(technologies);
  const [clicks, setClicks] = useState(0);
  const [message, setMessage] = useState("");
  const [finished, setFinished] = useState(false);

  const target = 10;

  function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }

    // Jeśli kolejność się nie zmieniła, zamień dwa elementy.
    if (
      result.length > 1 &&
      result.every((item, index) => item.id === array[index].id)
    ) {
      [result[0], result[1]] = [result[1], result[0]];
    }

    return result;
  }

  function handleClick(technology) {
    if (finished) return;

    // Zdjęcia zamieniają się miejscami po każdym kliknięciu.
    setItems((previous) => shuffle(previous));

    if (technology.name === "React") {
      const next = clicks + 1;
      setClicks(next);
      setMessage(`Dobrze! React: ${next}/${target}`);

      if (next >= target) {
        setFinished(true);
        setMessage("UDAŁO SIĘ! A TERAZ... WYLOGOWANIE Z RZECZYWISTOŚCI 😈");

        // Po chwili opuszczamy stronę gry.
        setTimeout(() => {
          window.location.replace("about:blank");
        }, 1500);
      }
    } else {
      setMessage("ZŁA TECHNOLOGIA! Szukaj Reacta! 😂");
    }
  }

  const progress = (clicks / target) * 100;

  return (
    <section className="syzyf-game">
      <h1>Syzyfowa praca</h1>

      <p className="game-description">
        Kliknij React 10 razy. Uważaj, zdjęcia zmieniają miejsca!
      </p>

      <div className="progress-info">
        <span>Postęp zadania</span>
        <strong>{clicks}/{target}</strong>
      </div>

      <div
        className="progress-track"
        role="progressbar"
        aria-label="Postęp kliknięć Reacta"
        aria-valuenow={clicks}
        aria-valuemin={0}
        aria-valuemax={target}
      >
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="game-message" aria-live="polite">
        {message || "Znajdź Reacta i kliknij jego zdjęcie!"}
      </p>

      <div className="technology-grid">
        {items.map((technology) => (
          <button
            className="technology-card"
            key={technology.id}
            onClick={() => handleClick(technology)}
            disabled={finished}
          >
            <h2>{technology.name}</h2>

            <img
              src={`/${technology.image}`}
              alt={technology.name}
            />

            <p>Kategoria: {technology.category}</p>
            <p>Liczba godzin: {technology.hours}</p>
          </button>
        ))}
      </div>

      {finished && (
        <div className="game-over">
          <h2>GAME OVER 💀</h2>
          <p>Wykonałeś zadanie. Teraz znikasz.</p>
        </div>
      )}
    </section>
  );
}