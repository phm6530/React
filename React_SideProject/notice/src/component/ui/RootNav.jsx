import { NavLink } from 'react-router-dom';
import classes from './RootNav.module.css';

export default function RootNav(){
    
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to='/'               
                            className={({isActive})=> isActive ? classes.active : undefined}
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=> isActive ? classes.active : undefined}
                        to='notice'>
                            
                            Notice
                        </NavLink>
                    </li>
                    
                </ul>
            </nav>
        </>
    )
}