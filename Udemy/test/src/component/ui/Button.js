export default function Button(props){
    const {type , value , onClick , disabled} = props.data;
    return(
        <>
            <button 
                onClick={onClick}
                type={type}
                disabled={disabled}
            >{value}</button>
        </>
    )
}