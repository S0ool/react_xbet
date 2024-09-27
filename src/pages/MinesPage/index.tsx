import {Header} from "../../components/header";
// @ts-ignore
import styles from './style.module.css';
import {Mines} from "../../components/mines";
export const MinesPage = () => {
    return (
        <div className={styles.body}>
            <Header/>
            <h1>MinesPage</h1>
            <Mines count={25}/>
        </div>
    )
}