import Header from "./components/Header.jsx";
import Technology from "./components/technology.jsx";
import Footer from "./components/footer.jsx";
import Student from "./components/Student.jsx";
import InfoBox from "./components/InfoBox.jsx";
import Navigation from "./components/Navigation.jsx";
import CourseCard from "./components/CourseCard.jsx";
import Technologies from "./components/Zadaniecztery.jsx";

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

      </main>

      <Footer />
    </>
  );
}

export default App;