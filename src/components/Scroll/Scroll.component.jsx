import React from 'react'

import './Scroll.style.scss'

const Scroll = ({children}) => {
    return (
        <div className="scroll">
            {children}
        </div>
    );
}

export default Scroll;

