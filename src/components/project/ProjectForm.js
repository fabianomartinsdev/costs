import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

function ProjectForm({ btnText }) {
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
      <Select name="category_id" text="Selecione a categoria" />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
