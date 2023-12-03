export default function FormTbody(props){
  console.log(props);
    return(
        <>
        
        <tbody>
            {props.data.map((e,idx)=>{
                  
                return(
                    <tr key={idx}>
                        <td>{e.year}</td>
                        <td>{e.savingsEndOfYear.toFixed(2)}</td>
                        <td>{e.yearlyInterest}</td>
                        <td>{}</td>
                        <td>TOTAL INVESTED CAPITAL</td>
                    </tr>
                )
            })}
          
        </tbody>
        </>
    )
}