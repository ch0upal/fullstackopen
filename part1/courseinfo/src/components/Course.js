const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  let total = parts.reduce((prev, curr) => prev + curr.exercises, 0);

  return (
    <p>
      <strong>Total of {total} exercises </strong>
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
