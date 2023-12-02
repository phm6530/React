import styles from './listCard.module.css';

export default function ListCard(props){
    const { UserName , UserAge } = props.cardData;

    const Userdelete = (id) =>{
        props.onClick(id);
    }

    return(
        <div className={styles.Card} onClick={()=>Userdelete(props.id)}>
            <span>{UserName} / </span>
            <span>{UserAge} Year</span>
            
        </div>
    )
}