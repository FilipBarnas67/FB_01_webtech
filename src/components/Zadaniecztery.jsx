const technologies = [
  {
    id: 1,
    name: "JavaScript",
    category: "Programowanie"
  },
  {
    id: 2,
    name: "React",
    category: "Biblioteka"
  },
  {
    id: 3,
    name: "HTML",
    category: "Technologia webowa"
  }
];

function Technologies() {
  return (
    <section className="technologies">
      <h2>Technologie</h2>

      <p>ID: {technologies[0].id}</p>
      <p>Nazwa: {technologies[0].name}</p>
      <p>Kategoria: {technologies[0].category}</p>

      <p>ID: {technologies[1].id}</p>
      <p>Nazwa: {technologies[1].name}</p>
      <p>Kategoria: {technologies[1].category}</p>

      <p>ID: {technologies[2].id}</p>
      <p>Nazwa: {technologies[2].name}</p>
      <p>Kategoria: {technologies[2].category}</p>
    </section>
  );
}

export default Technologies;