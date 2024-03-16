import React from 'react';
import s from './Modal.module.css'
const ModalWindow = ({isOpen,children}) => {
    return (isOpen&&
        <div className={s.container}>

        <div className={s.modal}>
            {children}
        </div>

        </div>
    );
};

export default ModalWindow;
