import React from 'react';

const Box = ({ removeBox, id, ...style }) => {
    return (
        <div id={id}>
            <div style={style} />
            <button onClick={removeBox}>X</button>
        </div>
    );
};

export default Box;