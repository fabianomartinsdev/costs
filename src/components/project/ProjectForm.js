import Input from "../form/Input";
import styles from "./ProjectForm.module.css";

function ProjectForm() {
  return (
    <form action="" className={styles.form}>
      <div>
        <Input placeholder="Insira o nome do projeto" type={"text"} />
      </div>
      <div>
        <Input placeholder="Insira o orçamento total" type="number" />
      </div>
      <div>
        <select name="category_id">
          <option disabled selected>
            Selecione a categoria
          </option>
        </select>
      </div>
      <div>
        <input type="submit" value="Criar projeto" />
      </div>
    </form>
  );
}

export default ProjectForm;
