import React from 'react';
import './Box.css';

const Box = ({ removeBox, id, ...style }) => {
    return (
        <div className='Box' id={id}>
            <div style={style} />
            <button onClick={removeBox}>X</button>
        </div>
    );
};

export default Box;