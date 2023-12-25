import { useParams , useRouteLoaderData } from 'react-router-dom';
import ProductForm from './ProductForm';


export default function ProductEdit(){
  const Params = useParams();
  const data = useRouteLoaderData('Products-Loader');
  // console.log(data);
  
  return(
    <>
      id : {Params.item}
      <ProductForm method='patch' event={data.event} />/
    </>
  )
}

