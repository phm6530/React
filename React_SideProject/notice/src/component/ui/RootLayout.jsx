import { Outlet } from 'react-router-dom';

// Nav
import RootNav from './RootNav';

export function RootLayout(){

    return(
        <>  
            <RootNav/>
            <Outlet/>
        </>
    )
}