import Header from "./components/Header.jsx";
import Technology from "./components/technology.jsx";
import Footer from "./components/footer.jsx";
import Student from "./components/Student.jsx";
import InfoBox from "./components/InfoBox.jsx";
import Navigation from "./components/Navigation.jsx";
import CourseCard from "./components/CourseCard.jsx";
import Zadcztery from "./components/zadcztery.jsx";

function App() {
  return (
    <>
      <Header />

      <Navigation />

      <CourseCard />

      <main>

        <Student />

        <InfoBox />

        <Technology />

        <Technology />

        <Technology />

      </main>
      
      <Zadcztery />

      <Footer />
    </>
  );
}

export default App;
