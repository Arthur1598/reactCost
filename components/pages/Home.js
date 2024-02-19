import styles from './Home.module.css'
import cripto from '../img/cripto.jpg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            
            <LinkButton to="/newproject" text="Criar projetos"/>
            <img src={cripto} alt="Cripto"></img>
        </section>
    )
}

export default Home