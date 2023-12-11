import { useMemo } from 'react';

export default function Demo(props){
    const { title , item } = props;

    const sortItem = useMemo(()=>{
        console.log('Change');
        return item.sort((a,b) => a - b);
    },[item])

    
    return(
        <>
            <h1>
                {title}
            </h1>
            <div>
                {sortItem.map((e, idx)=>{
                    return <button key={idx}>{e}</button>
                })}
            </div>
        </>
    )
}