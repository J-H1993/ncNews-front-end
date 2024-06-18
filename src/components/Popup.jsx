import React from 'react';


const Popup = ({children, onClose}) =>{
    return (
        <div onClick={onClose}> 
        <div onClick={event => event.stopPropagation()}>
        <button onClick={onClose}>close</button>
        {children}
         </div>
        </div>
    )
}

export default Popup