import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

export default function Nav(){

    return(
        <>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to=''
                            className={({isActive})=>isActive ? classes.active : undefined}
                        >Home</ NavLink>
                    </li>
                    <li>
                        <NavLink 
                        className={({isActive})=>isActive ? classes.active : undefined}
                        to='page1'>Page 1</ NavLink>
                    </li>
                    <li>
                        <NavLink 
                        className={({isActive})=>isActive ? classes.active : undefined}
                        to='products'>Products</ NavLink>
                    </li>

                </ul>
            </nav>
        </header>
        </>
    )
}