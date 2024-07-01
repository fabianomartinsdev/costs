import { useNavigate } from "react-router-dom";

import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    // initialize cost and services -- deve ser feito no backend
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json)
      .then(() => {
        // redirect
        navigate("/projects", {
          state: { message: "Projeto criado com sucesso!" },
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newProjectContainer}>
      <h1>Crie seu projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </div>
  );
}

export default NewProject;
