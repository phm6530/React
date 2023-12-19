import { useLoaderData } from 'react-router-dom';
import ProductsList from './ProductsList';

export default function Products(){
    const data = useLoaderData();
    // const data = useLoaderData('tester');
    const event = data.events;
    
    return(
        <>
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
