import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
const modalRoot = document.getElementById("modal");
const Modal = ({ children }) => {
  // a ref is a container for state that you want to persist past the render cycle
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    //   whenever you get created , insert me into the dom
    modalRoot.appendChild(elRef.current);
    // whenever you are done , remove me from the dom
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
