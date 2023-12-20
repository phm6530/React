import { useParams , useNavigate , Link} from 'react-router-dom';

export default function ProductsDetail(){
    const params = useParams();
    const location = useNavigate();
    console.log('Param : ' , params);
    return(
        <>
            <h1>product Detail</h1>
            <p>{params.productId}</p>

            {/* 뒤로가기 */}
            <Link to='..' relative='path'>뒤로가기</Link>
            <button onClick={()=>location(-1)}>list</button>
        </>
    )
}