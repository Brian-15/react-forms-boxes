import { React, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box.js';
import NewBoxForm from './NewBoxForm.js';

const BoxList = ({ initialData }) => {
    const [ boxData, setBoxData ] = useState(initialData);

    const addBox = data => {
        setBoxData(boxData => [...boxData, {...data, id: uuid()}]);
    }

    const removeBox = evt => {
        const id = evt.target.parentElement.id;
        setBoxData(boxData => boxData.filter(box => box.id != id));
    }

    return (
        <div>
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