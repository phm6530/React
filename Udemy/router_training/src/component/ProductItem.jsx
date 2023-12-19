import { useParams , useNavigate , Link , useRouteLoaderData } from 'react-router-dom';

export default function ProductItem(){
    const params = useParams();
    const back = useNavigate();
    const data = useRouteLoaderData('Products-Loader');
    console.log('ProductItem : ', data);
    return(
        <>
            id : {params.item}
            <button onClick={()=>back(-1)}>back</button>
            <Link to={'edit'}>
                <button>edit</button>
            </Link>
        </>
    )
}

export async function loader({params}){
    const id = params.item;
    console.log(id);
    const response = await fetch('http://localhost:8080/events/' + id);
    return response;
}