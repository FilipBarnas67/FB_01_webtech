const course = {
  name: "Podstawy React",
  teacher: "Jan Kowalski",
  hours: 20,
  completed: true
};

function CourseCard() {
  return (
    <section className="course-card">
      <h2>{course.name}</h2>
      <p>Nauczyciel: {course.teacher}</p>
      <p>Liczba godzin: {course.hours}</p>
      <p>Liczba minut: {course.hours * 60}</p>
      <p>Status: {course.completed ? "Ukończony" : "Nieukończony"}</p>
    </section>
  );
}

export default CourseCard;
