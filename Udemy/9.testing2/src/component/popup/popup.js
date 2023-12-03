import classes from './Popup.module.css';
import ReactDOM from 'react-dom';
import Button from '../ui/Button';



const Backdrop = (props)=>{
    return <div className={classes.backDrop} onClick={props.view}/>;
}

const ModalOverlay =(props) =>{
    const { data , view } = props;
    console.log(data);
    return(
        <div className={classes.PopupContent}>
            <div className={classes.popupHeader}>Invalid input</div>
            <div className={classes.Message}>{data.message}</div>
            <Button type='button' onClick={view}>Okay</Button>
        </div>
    )
}

export default function Popup(props) {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop  view={props.view}/> 
                , document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay data={props.data} view={props.view}/>
                , document.getElementById('modal-root')
            )}
        </>
    );
}