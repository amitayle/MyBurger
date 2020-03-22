import React, {useEffect} from 'react';

import classes from './Modal.module.css';
import BackDrop from '../BackDrop/BackDrop';
import Aux from '../../../hoc/Aux';



const Modal = (props) => {
    
    useEffect(() => {
        console.log('modal did upsate');
        
    })
    return(
    <Aux>
        <BackDrop show={props.show} clicked={props.modalClosed}/>
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0' 
            }}>
            {props.children}
        </div>
    </Aux>
)};
function areEqual(prevProps, nextProps) {
    return nextProps.show == prevProps.show;
}
export default React.memo(Modal,areEqual);
