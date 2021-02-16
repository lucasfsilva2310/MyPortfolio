export const LucasFerreira = (challenges) => {
  while (challenges === "undone") {
    return "keep going!";
  }
  const name = "Lucas Ferreira Silva";
  const age = "26";
  const email = "lucasfsilva2310@gmail.com";

  return (
    <>
      <h1>Hi, my name is {name}.</h1>
      <p>I am {age} years old.</p>
      <p>My contact is: {email}</p>
    </>
  );
};

export const WorkExperience = () => {
  const jobs = [
    { title: "função", period: "período" },
    { title: "função", period: "período" },
    { title: "função", period: "período" },
    { title: "função", period: "período" },
  ];

  return (
    <div>
      {jobs.map((job) => {
        return (
          <div>
            <h2>{job.title}</h2>
            <p>{job.period}</p>
          </div>
        );
      })}
    </div>
  );
};

export const Education = () => {
  const studies = [
    { title: "curso", period: "quanto tempo" },
    { title: "curso", period: "quanto tempo" },
    { title: "curso", period: "quanto tempo" },
  ];

  return (
    <div>
      {studies.map((course) => {
        return (
          <div>
            <h3>{course.title}</h3>
            <p>{course.period}</p>
          </div>
        );
      })}
    </div>
  );
};

export const skills = () => {
  const allSkills = ["HTML/CSS", "JavaScript", "ReactJS", "Redux", "Python"];

  return (
    <ul>
      {allSkills.map((skill) => {
        return <li>{skill}</li>;
      })}
    </ul>
  );
};
