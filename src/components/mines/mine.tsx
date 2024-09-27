
// @ts-ignore
import styles from './style.module.css'
import {useEffect, useState} from "react";


interface MineProps {
    is_mine: boolean
    game_over: boolean
    setGameOver: any
}


export const Mine = ({is_mine,game_over,setGameOver}: MineProps) => {
    const [mine, setMine] = useState('?')


    useEffect(()=>{
        if(game_over){
            if (is_mine){
            setMine('💣')
        }}
    },[game_over])


    function IsMine({event}: { event: any }){
        event.preventDefault()
        if(game_over){
            return
        }
        if(is_mine){
            setMine('💥')
            setGameOver(true)
            alert('GAME OVER')
        }
        else{

            setMine('✔')
        }
    }

    return (
        <div className={styles.mine}
            onClick={(event)=> IsMine({event: event})}>{mine}
        </div>
     )
}