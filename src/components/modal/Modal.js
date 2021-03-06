import React from 'react';
import { Close, Modal, ModalContainer } from './ModalElements';

const IntecelModal = ({ children, isOpen, closeModal }) => {

    return (
        <Modal 
            onClick={closeModal} 
            className={`${isOpen && 'isOpen'}`}
        >
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <Close onClick={closeModal}>X</Close>
                {children}
            </ModalContainer>
        </Modal>
    );
}

export default IntecelModal;