// @ts-ignore
import style from './style.module.css';
interface Props {
    type: 'success' | 'error' | 'warning' | 'question'
    text: string
}

            {/*<Button type={'warning'} text={'button'}/>*/}
            {/*<Button type={'success'} text={'button'}/>*/}
            {/*<Button type={'error'} text={'button'}/>*/}
export const Button = ({type,text}: Props) => {
    return (
        <button className={style[type]}>{text}</button>
    )
}