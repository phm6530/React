import MainNavigation from './MainNavigation';
import { Outlet } from 'react-router-dom';

export default function RootLayout(){
    // const nav = useNavigation();
    
    return(
        <>
            <MainNavigation/>
            <main>
                {/* {nav.state === 'loading' && 'loading.......'} */}
                <Outlet/>
            </main>
        </>
    )
}
