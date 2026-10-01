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
            return(
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

      </main>

      <Footer />
    </>
  );
}

export default App;