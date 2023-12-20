import MainNav from '../components/MainNav';
import { useNavigate } from 'react-router-dom';



export default function Error(){
    const history = useNavigate();
    return(
        <>  
            <MainNav/>
            <main>
                <h1>404 Error Page</h1>       
                <button onClick={() => history(-1)}>back</button>
            </main>
        </>
    )
}