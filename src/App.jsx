import Header from "./components/Header.jsx";
import Technology from "./components/technology.jsx";
import Footer from "./components/footer.jsx";
import Student from "./components/Student.jsx";
import InfoBox from "./components/InfoBox.jsx";
import Navigation from "./components/Navigation.jsx";
import CourseCard from "./components/CourseCard.jsx";
import Technologies from "./components/Zadaniecztery.jsx";
import Student_dwa from "./components/Student_dwa.jsx";

const students = [
  { id: 1, name: "Anna", className: "4P" },
  { id: 2, name: "Jan", className: "4P" },
  { id: 3, name: "Adam", className: "4P" }
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

        <Technology />

        <Technology />

        <Technology />

        {
          students.map((student) => (
            <Student_dwa 
            id={student["id"]}
            name={student["name"]}
            className={student["className"]}
            />
          ))
        }

      </main>

      <Footer />
    </>
  );
}

export default App;