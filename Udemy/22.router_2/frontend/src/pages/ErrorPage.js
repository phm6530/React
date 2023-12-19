import MainNavigation from '../components/MainNavigation';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage(){
    const back = useNavigate();
    
    return(
        <>
        {/* <MainNavigation/> */}

        <main>
            <h1>Error!</h1>
            <button onClick={()=>{back(-1)}}>Return page</button>
        </main>
        </>
    )
}