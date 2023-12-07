import classes from './Modal.module.css';
import ReactDom from 'react-dom';

const Backdrop = (props)=>{
    return <div className={classes.backdrop} onClick={props.view}></div>;
}

const ModalOverlay = (props) =>{
    return (
        <div className={classes.modal}>
            {props.children}
        </div>
    )
}

export default function Modal(props){
    const Portal = document.getElementById('backdrop-root');
    return(
        <>
            {ReactDom.createPortal(<Backdrop view={props.view}/> , Portal)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , Portal)}
        </>
    )
}