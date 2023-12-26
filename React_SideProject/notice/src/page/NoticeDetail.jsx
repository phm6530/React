import { Link, useLoaderData } from 'react-router-dom';


export function NoticeDetail(){
    const detailData = useLoaderData();
    const { id, title, content , updatedAt } = detailData;

    return(
        <>  
            <p>title : {title}</p>
            <p>Num : {id}</p>
            <p>{content}</p>
            <p>date : {updatedAt}</p>
            
            <Link to='/notice'>
                <button>목록</button>
            </Link>
            
            <button>이전 글</button>
            <button>다음 글</button>

        </>
        
        
    )
}

// params , request 
export async function loader({params}){
    const response = await fetch(`https://koreanjson.com/posts/${params.item}`);

    if(!response.ok){
        console.log('error');
        return;
    }
    
    return await response.json();
}