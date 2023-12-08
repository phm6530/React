import React from 'react'
const Demo =(props) => {
    console.log('Demo 실행');
    return(
        <>
            <p>{props.show ? 'This is New!!!':''}</p>
        </>
    )
}

export default React.memo(Demo)