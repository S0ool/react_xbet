import {Mine} from "./mine.tsx";
// @ts-ignore
import styles from './style.module.css'
import {useState} from "react";
export const Mines = ({count}: {count: number}) => {
    const [game_over, setGameOver] = useState(false)

    return(
        <div className={styles.mines}>
            {[...Array(count)].map((_, index) => <Mine setGameOver={setGameOver} game_over={game_over} key={index} is_mine={Math.random() > 0.8}/>)}
        </div>
    )
}