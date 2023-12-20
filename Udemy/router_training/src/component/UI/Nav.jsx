import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
import { useEffect, useState } from 'react';



export default function Nav(){
    const [ darkMode, setDarkMode ] = useState('Home');
    const [ touched , setTouched ] = useState(0);

    useEffect(()=>{
        const get = document.querySelector('.View');
        get.classList.add('aniclass');
        setTimeout(()=>{
            get.classList.add('blockAnimation');
        },500);
    },[darkMode]);

    const btnChange = (e) =>{
        setTouched(prev => prev ++);
        setDarkMode(e);
    }

    return(
        <>
        <div className='balckWrap'>
           <header key={touched} className={`${darkMode} View `}>
            <nav>
                <ul>
                    <li>
                        <NavLink to=''
                            onClick={()=>btnChange('Home')}
                            className={({isActive})=>isActive ? classes.active : undefined}
                        >Home</ NavLink>
                    </li>
                    <li>
                        <NavLink     
                        onClick={()=>btnChange('page')}
                        className={({isActive})=>isActive ? classes.active : undefined}
                        to='page1'>Page 1</ NavLink>
                    </li>
                    <li>
                        <NavLink     onClick={()=>btnChange('products')}
                        className={({isActive})=>isActive ? classes.active : undefined}
                        to='products'>Products</ NavLink>
                    </li>

                </ul>
                <button onClick={()=>setDarkMode(prev => !prev)}>Toggle</button>
            </nav>
        </header>
        </div>
        </>
    )
}