import classes from './Header.module.css';
import img from './meals.jpg';
import HeaderCartButton from './HeaderCartButton';

export default function Header(props){

    return(
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton cartBtn={props.view}/>
            </header>

            <div className={classes['main-image']}>
                <img src={img} alt="" />
            </div>
        </>
    )
}