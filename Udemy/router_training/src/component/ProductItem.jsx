import { useParams , useNavigate , Link , useRouteLoaderData , useSubmit , redirect} from 'react-router-dom';

export default function ProductItem(){
    const submit = useSubmit();
    const params = useParams();
    const back = useNavigate();
    const data = useRouteLoaderData('Products-Loader');
    console.log('ProductItem : ', data);

    const noticeDelete = () =>{
        const target = window.confirm('삭제하시겠습니까?');
        if(target){
            submit(null , { method : 'DELETE' });
        }
    }
    return(
        <>
            id : {params.item}

            {/* back */}
            <button onClick={()=>back(-1)}>back</button>

            {/* edit Link */}
            <Link to={'edit'}>
                <button>edit</button>
            </Link>

            {/* 삭제 */}
            <button onClick={noticeDelete}>Delete</button>
        </>
    )
}

export async function loader({params}){
    console.log(params);
    const id = params.item;
    
    const response = await fetch('http://localhost:8080/events/' + id);
    return response;
}

export async function action({params}){
    console.log(params);
    const id = params.item;

    await fetch('http://localhost:8080/events/' + id , {
        method : 'DELETE'
    });

    return redirect('..');

}