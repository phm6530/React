import ProductForm from './ProductForm';
import { useRouteLoaderData } from 'react-router-dom';

export default function ProductEdit(){
    const data = useRouteLoaderData('Products-Loader');
    const events = data.event;
    return(
        <>
            <ProductForm event={events}/>
        </>
    )
}