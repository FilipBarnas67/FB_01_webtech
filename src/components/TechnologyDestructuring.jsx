export default function TechnologyDestructuring({ name, category, hours }) {

  function showTechnology()
  {
    console.log("Technolohia: " + name);
    console.log("Kategoria: " + category);
    console.log("Godziny: " + hours);
  }

  return (
    <section>
      <h2>{name}</h2>
      <p>Kategoria: {category}</p>
      <p>Liczba godzin: {hours}</p>

      <button onClick={showTechnology}>
        Pokaż Informacje
      </button>
    </section>
  );
}