import { useEffect, useState } from "react";

const useScroll = () => {

    const [supportsPassive, setSupportsPassive] = useState(false);
    const [wheelOpt, setWheelOpt] = useState();
    const [wheelEvent, setWheelEvent] = useState();

    const keys = { 32: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1 }

    const preventDefault = (e) => e.preventDefault();

    const preventDefaultForScrollKeys = (e) => {
        if(keys[e.keyCode]){
            preventDefault(e);
            return false;
        }
    }

    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
        window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.addEventListener(wheelEvent, preventDefault, wheelOpt);
        window.addEventListener('touchmove', preventDefault, wheelOpt);
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    const enableScroll = () => {
        document.body.style.overflow = 'visible';
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    useEffect(() => {

        try{
            window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
                get: () => setSupportsPassive(true)
            }));
        }catch(e){

        }

        setWheelOpt(supportsPassive ? { passive: false } : false);
        setWheelEvent('onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel');
        
        //eslint-disable-next-line
    }, []); 

    return [disableScroll, enableScroll];
}

export default useScroll;