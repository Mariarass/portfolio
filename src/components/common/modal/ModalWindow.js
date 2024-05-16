import React from 'react';
import s from './Modal.module.css';

const ModalWindow = ({ isOpen, setOpen, children }) => {
    const handleClick = (e) => {
        e.stopPropagation();
        setOpen(false);
    };

    return (
        isOpen && (
            <div className={s.container} onClick={handleClick}>
                <div className={s.modal}>
                    {children}
                </div>
            </div>
        )
    );
};

export default ModalWindow;
