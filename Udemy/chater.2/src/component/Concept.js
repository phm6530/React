
export default function concepts(props){
  const { data } = props;
  
    return(
        <>
        <li className="concept">
          <img src={data.image} alt={data.description} />
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </li>
        </>
    )
}