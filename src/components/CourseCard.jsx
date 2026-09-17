const course = {
    name: "sixseven",
    teacher: "tungtungsahur",
    hours: 67,
    completed: false
}

function CourseCard()
{
    return(
        <section>
            <h2>CourseCard</h2>
            <p className="sixseven">Nazwa: {course.name}</p>
            <p>Nauczyciel: {course.teacher}</p>
            <p className="sixseven">Godziny: {course.hours}</p>
            <p>Minuty: {course.hours * 60}</p>
        </section>
    )
}

export default CourseCard;