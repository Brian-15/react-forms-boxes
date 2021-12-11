import { React, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box.js';
import NewBoxForm from './NewBoxForm.js';
import './BoxList.css';

function genBoxData(backgroundColor, width, height, id) {
    return { backgroundColor, width, height, id };
}

const defaultData = [
    genBoxData('blue', '500px', '200px', uuid()),
    genBoxData('green', '50px', '60px', uuid()),
    genBoxData('red', '50px', '60px', uuid()),
]

const BoxList = ({ initialData=defaultData }) => {
    const [ boxData, setBoxData ] = useState(initialData);

    const addBox = data => {
        setBoxData(boxData => [...boxData, {...data, id: uuid()}]);
    };

    const removeBox = evt => {
        const id = evt.target.parentElement.id;
        setBoxData(boxData => boxData.filter(box => box.id !== id));
    };

    return (
        <div className='BoxList'>
            <NewBoxForm addBox={addBox} />
            {boxData.map(({id, backgroundColor, width, height}) => (
                <Box
                    id={id}
                    backgroundColor={backgroundColor}
                    width={width}
                    height={height}
                    key={id}
                    removeBox={removeBox}
                />
            ))}
        </div>
    );
};

export default BoxList;