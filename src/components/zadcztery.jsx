const tablica = [
  { id: 1, name: "sixseven", category: "brainrot" },
  { id: 2, name: "sixseven", category: "brainrot" },
  { id: 3, name: "sixseven", category: "brainrot" }
];

function zadcztery() {
  return (
    <div>
      {tablica.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <p>{item.name}</p>
          <p>{item.category}</p>
        </div>
      ))}
    </div>
  );
}

export default zadcztery;
