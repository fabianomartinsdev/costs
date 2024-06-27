import styles from "../pages/Home.module.css";

import savings from "../../images/savings.svg";
import LinkButton from "../layout/LinkButton";

function Home() {
  return (
    <section className={styles.homeContainer}>
      <h1>
        Bem vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar projeto" />
      <img src={savings} alt="Homem colocando dinheiro em seu cofre" />
    </section>
  );
}

export default Home;
