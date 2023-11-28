import Concept from './Concept';

export default function concepts(props){
    
    return(
    <>
     <ul id="concepts"> 
        {props.data.map((e, idx)=> {
            return <Concept key={idx}  data={e}/>
        })}
    </ul>
    </>
    )
}