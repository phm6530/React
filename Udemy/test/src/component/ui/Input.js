export default function Input(props){
    const { type , onchange} = props.data;
    

    return(
        <>
        <div className='inputDiv'>
            <input 
                type={type}
                onChange={onchange}
            />
        </div>
        </>
    )
}