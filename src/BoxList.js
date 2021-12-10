import { React, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box.js';
import NewBoxForm from './NewBoxForm.js';

const BoxList = ({ initialData }) => {
    const [ boxData, setBoxData ] = useState(initialData);

    const addBox = data => {
        setBoxData(boxData => [...boxData, data]);
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxData.map(({backgroundColor, width, height}) => (
                <Box
                    backgroundColor={backgroundColor}
                    width={width}
                    height={height}
                    key={uuid()}
                />
            ))}
        </div>
    );
};

export default BoxList;