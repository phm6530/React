import './Chartbar.css';

export default function Chartbar(props){
    let barPersent = 0;
    if(props.value > 0){
        barPersent = Math.round((props.value / props.MaxValue) * 100)
    }
    
    
    return(
        <>
            <div className="chart-bar">
                <div className="chart-bar__inner">
                    <div className="chart-bar__fill" style={{height: `${barPersent}%`}} ></div>
                </div>
                <div className="chart-bar__label">{props.label}</div>
            </div>
        </>
    )

}