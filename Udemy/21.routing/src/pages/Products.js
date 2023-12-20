import { Link } from 'react-router-dom';

const PRODUCTS = [
    {id : 'p1' , title: 'product_1'},
    {id : 'p2' , title: 'product_2'},
    {id : 'p3' , title: 'product_3'},
]

export default function Products(){

    return(
        <>
            <h1>Products Page</h1>
            <ul>
                {PRODUCTS.map((e)=>{
                    return <li>
                    <Link key={e.id} to={`/products/${e.title}`} > 
                    {e.title} 
                    </Link></li>
                })}
            </ul>
        </>
    )
}