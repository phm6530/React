export default function student(props){
    console.log(props);
    const {id ,  name} = props.data;

    return( 
        <>
        <div>
           <span onClick={()=> props.dispatch({type:"change" ,  payload : { id }})}>{name} </span>

            <button onClick={()=>
                props.dispatch({
                    type:'delete',
                    payload : { id }
                })}>
                삭제
            </button>
        </div>
        </>
    )
}