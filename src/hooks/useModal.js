import { useState } from 'react';
import useScroll from './useScroll';

const useModal = (initialValue = false) => {

    const [disableScroll, enableScroll] = useScroll();
    
    const [isOpen, setIsOpen] = useState(initialValue);

    const openModal = () => {
        setIsOpen(true); 
        disableScroll();
    }

    const closeModal = () => {
        setIsOpen(false);
        enableScroll();
    }

    return [isOpen, openModal, closeModal];
}

export default useModal;