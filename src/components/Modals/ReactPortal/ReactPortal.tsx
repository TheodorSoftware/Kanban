import React, { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ReactPortalProps{
    children: React.ReactNode;
    wrapperId: string;
}

function createWrapperAndAppendBody(wrapperId: string): HTMLDivElement  {
    const wrapperElement: HTMLDivElement = document.createElement('div');
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}

const ReactPortal = ({children, wrapperId} : ReactPortalProps ) => {

    const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

    useLayoutEffect(() => {
        let systemCreated: boolean = false;
        let element : HTMLElement | null = document.getElementById(wrapperId);

        if(!element){
            systemCreated = true;
            element = createWrapperAndAppendBody(wrapperId)
        };

        setWrapperElement(element);

        return () => {
            if(systemCreated && element?.parentNode){
                element.parentNode.removeChild(element);
            }
        }
        
    },[wrapperId]);

    if(wrapperElement === null) {
        return null;
    }
    
    return createPortal(children, wrapperElement);
};

export default ReactPortal;