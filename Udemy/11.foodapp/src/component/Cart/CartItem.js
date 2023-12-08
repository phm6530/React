import classes from './CartItem.module.css';

export default function CartItem(props){
    const {name, Amount , price , id , total } = props.data;
    console.log(props);
    return(
        <>
            <li className={classes['cart-item']}>
                <div>
                    <h2>{name}</h2>
                    <div className={classes.summary}>
                        <span className={classes.price}>$ {price.toFixed(2)}</span>
                        <span className={classes.amount}>x{Amount}</span>
                        <span className={classes.price}>: $ {total.toFixed(2)}</span>
                    </div>
                </div>
                <div className={classes.actions}>
                    <button onClick={() => props.plus(props.data)}>+</button>
                    <button onClick={() => props.minus(id)}>-</button>
                </div>
            </li>
        </>
    )
}