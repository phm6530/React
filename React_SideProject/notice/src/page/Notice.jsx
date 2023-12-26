import { Link, useLoaderData } from 'react-router-dom';


export function Notice(){
    const loaderData = useLoaderData();

    // console.log(loaderData);
    return(
        <>
        {
            loaderData.map((e)=> {
                return (
                    <Link to={`${e.id}`} key={e.id}>
                        <div >
                            <div>{e.id}</div>
                            <div>{e.title}</div>
                            <div>{e.createdAt}</div>
                        </div>
                    </Link>
                )
            })
        }
        </>
    )
}



export async function loader(){
    const response = await fetch('https://koreanjson.com/posts/');
    return await response.json();
}