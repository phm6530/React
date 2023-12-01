
export default function Header(props){
    return(
        <>
            <header className="header">
            <img src={props.img} alt="logo" />
            <h1>Investment Calculator</h1>
            </header>
        </>
    )
}