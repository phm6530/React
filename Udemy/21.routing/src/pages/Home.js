import { Link } from 'react-router-dom'

export default function Home() {

    return(
        <>
            <h1>MY Home Page</h1>
            go to <Link to='/products'>products</Link>
        </>
    )
}