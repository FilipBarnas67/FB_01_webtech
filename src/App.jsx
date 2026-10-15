import Header from "./components/Header.jsx";
import Technology from "./components/TechnologyDestructuring.jsx";
import Footer from "./components/footer.jsx";
import Student from "./components/Student.jsx";
import InfoBox from "./components/InfoBox.jsx";
import Navigation from "./components/Navigation.jsx";
import CourseCard from "./components/CourseCard.jsx";
import Technologies from "./components/Zadaniecztery.jsx";
import Student_dwa from "./components/Student_dwa.jsx";
import Book from "./components/Book.jsx";
import TechnologyDestructuring from "./components/TechnologyDestructuring.jsx";
import Product from "./components/Product.jsx";
import Technologiesx from "./components/Technologiesx.jsx";

const technologiesx = [
  { id: 1, name: "React", category: "Frontend", hours: 30, image: "react.webp" },
  { id: 2, name: "Node.js", category: "Backend", hours: 40, image: "nodejs.webp" },
  { id: 3, name: "MySQL", category: "Baza danych", hours: 20, image: "mysql.webp" },
  { id: 4, name: "Express", category: "Backend", hours: 25, image: "express.webp" },
  { id: 5, name: "MongoDB", category: "Baza danych", hours: 30, image: "mongodb.webp" },
  { id: 6, name: "Bootstrap", category: "Frontend", hours: 15, image: "bootstrap.webp" },
  { id: 7, name: "CSS", category: "Frontend", hours: 20, image: "css.webp" },
  { id: 8, name: "HTML", category: "Frontend", hours: 10, image: "html.webp" },
  { id: 9, name: "PHP", category: "Backend", hours: 35, image: "php.webp" }
];

function showProduct(name, price) {
  console.log("Nazwa produktu: " + name);
  console.log("Cena produktu: " + price);
}

const technologies = [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    hours: 25
  },
  {
    id: 2,
    name: "Node.js",
    category: "Backend",
    hours: 25
  },
  {
    id: 3,
    name: "MySQL",
    category: "Database",
    hours: 25
  },
  {
    id: 4,
    name: "Express",
    category: "Backend",
    hours: 25
  },
  {
    id: 5,
    name: "MongoDB",
    category: "Baza danych",
    hours: 20
  }
];

const students = [
  { id: 1, name: "Anna", className: "4P" },
  { id: 2, name: "Jan", className: "4P" },
  { id: 3, name: "Adam", className: "4P" }
];

const books = [
  { id: 1, title: "Wiedźmin", author: "Andrzej Sapkowski" },
  { id: 2, title: "Hobbit", author: "J.R.R. Tolkien" },
  { id: 3, title: "Lalka", author: "Bolesław Prus" }
];

function App() {
  return (
    <>
      <Header />

      <CourseCard />

      <Technologies />

      <Navigation />

      <main>

        <Student />

        <InfoBox />

        {
          technologies.map((technologia) => {
            return (
              <TechnologyDestructuring
                key={technologia.id}
                name={technologia.name}
                category={technologia.category}
                hours={technologia.hours}
              />
            )
          })
        }

        {
          students.map((student) => (
            <Student_dwa
              id={student["id"]}
              name={student["name"]}
              className={student["className"]}
            />
          ))
        }

        {
          books.map((ksiazka) => {
            return (
              <Book
                title={ksiazka.title}
                author={ksiazka.author}
              />
            )
          })
        }

        <Product
          name={"sixseven"}
          price={67}
          showProduct={showProduct}
        />

      </main>

      <Footer />

      <article id="obrazki">
        <Technologiesx technologies={technologiesx} />
      </article>
    </>
  );
}

export default App;