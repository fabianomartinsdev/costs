import Input from "../form/Input";
import Select from "../form/Select";
import styles from "./ProjectForm.module.css";

function ProjectForm() {
  return (
    <form action="" className={styles.form}>
      <Input
        text="Nome do projeto"
        name="name"
        type="text"
        placeholder="Insira o nome do projeto"
      />

      <Input
        text="Orçamento total"
        name="budget"
        type="number"
        placeholder="Insira o orçamento total"
      />
      <Select />
      <div>
        <input type="submit" value="Criar projeto" />
      </div>
    </form>
  );
}

export default ProjectForm;
