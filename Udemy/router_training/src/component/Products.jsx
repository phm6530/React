import { useLoaderData , Link } from 'react-router-dom';
import ProductsList from './ProductsList';

export default function Products(){
    const data = useLoaderData();

    const event = data.events;
    console.log(event);
    return(
        <>
            <Link to={'new'}>
                <button>New</button>
            </Link>
            <ProductsList data={event}/>
        </>
    )
}

export async function loader(){

    const response = await fetch('http://localhost:8080/events');

    if(!response.ok){
        throw new Error('error!');
    }

    return response.json();
}
