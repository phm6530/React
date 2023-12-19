import classes from './ProductsList.module.css';
import { Link } from 'react-router-dom';

export default function ProductsList({data}){
    return(
        <>
            <div className={classes.productList}>
                    <ul>
                        {data.map((e)=>{
                            return <li key={e.id}>
                                <Link to={e.id}>
                                    <div>
                                        <img src={e.image} alt={e.title} />
                                    </div>
                                    <div>
                                        <h1>{e.title}</h1>
                                        <p>{e.date}</p>
                                        <p>{e.description}</p>
                                    </div>
                                </Link>
                            </li>
                        })}
                    </ul>

            </div>
        </>
    )
}