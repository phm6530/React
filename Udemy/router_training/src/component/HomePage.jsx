import { useState } from 'react'

export default function HomePage(){
    const [state, setState] = useState([1,2,3]);

    return(
        <>

            {state.map((e, idx)=>{
                return <div key={idx}>{e}</div>
            })}

            
            <h1>Home</h1>
        </>
    )
}