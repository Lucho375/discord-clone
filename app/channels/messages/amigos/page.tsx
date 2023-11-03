import styles from './amigos.module.css'
import NavBar from './NavBar/navbar'

export default function Amigos(){

    return(
        <div className={styles.mainPage}>
            <NavBar />
            <h1>Amigos works!</h1>
        </div>
    )
}