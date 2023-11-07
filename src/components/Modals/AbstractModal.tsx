import React, { useEffect, useRef } from "react";
import ReactPortal from './ReactPortal/ReactPortal';
import { useDispatch } from "react-redux";
import { actionModalSlice } from "../../store/modalSlice";
import './AbstarctModal.css';

interface AbstractModalProps {
    children : any;
    isOpen: boolean;
};

const AbstractModal = ({children, isOpen}: AbstractModalProps) => {

    const nodeRef = useRef(null);

    if(!isOpen) return null;

    return (
        <ReactPortal wrapperId="react-portal-modal-container">
            <div className="modal">
                <div className="modal-content" ref={nodeRef}>
                    {children}
                </div>
            </div>
        </ReactPortal>  
    )
};

export default AbstractModal;