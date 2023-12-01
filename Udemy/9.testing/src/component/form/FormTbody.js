export default function FormTbody(props){
    console.log(props);
    return(
        <>
        
        <tbody>
            {props.data.map((e,idx)=>{
                return(
                    <tr key={idx}>
                        <td>{e.year}</td>
                        <td>{e.savingsEndOfYear}</td>
                        <td>INTEREST GAINED IN YEAR</td>
                        <td>TOTAL INTEREST GAINED</td>
                        <td>TOTAL INVESTED CAPITAL</td>
                    </tr>
                )
            })}
          
        </tbody>
        </>
    )
}