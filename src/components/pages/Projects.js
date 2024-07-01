import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./Projects.module.css";

import LinkButton from "../layout/LinkButton";
import Message from "../layout/Message";
import Loading from "../layout/Loading";
import ProjectCard from "../project/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch((error) => console.log(error));
    }, 300);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar projeto" />
      </div>
      {message && <Message msg={message} type="success" />}
      <div className={styles.projectsContainer}>
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              name={project.name}
              id={project.id}
              category={project.category.name}
              budget={project.budget}
              key={project.id}
            ></ProjectCard>
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
