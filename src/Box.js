import React from 'react';
import './Box.css';

const Box = ({ removeBox, id, ...style }) => {
    return (
        <div className='Box' id={id}>
            <div className='Box-body' style={style} data-testid="box" />
            <button className='Box-remove-btn' onClick={removeBox}>X</button>
        </div>
    );
};

export default Box;