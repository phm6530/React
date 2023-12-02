import classes from './Popup.module.css';
import Button from '../ui/Button';

export default function Popup(props) {
    const ClosePopup = () => {
        props.view();
    }

    return (
        <>
            <div className={classes.backDrop} onClick={ClosePopup}/>
            <div className={classes.PopupContent}>
                <div className={classes.popupHeader}>Invalid input</div>
                <div className={classes.Message}>{props.message}</div>
                <Button type='button' onClick={ClosePopup}>Okay</Button>
            </div>
      
        </>
    );
}