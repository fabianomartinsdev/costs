import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Projects.module.css";

import LinkButton from "../layout/LinkButton";
import Message from "../layout/Message";

function Projects() {
  const [projects, setProjects] = useState([]);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.section}>
        <LinkButton to="/newproject" text="Criar projeto" />
      </div>
      <h1>Meus Projetos</h1>
      {message && <Message msg={message} type="success" />}
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.budget}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
