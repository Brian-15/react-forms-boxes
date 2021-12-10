import React, { useState } from 'react';
import './NewBoxForm.css';

const NewBoxForm = ({ addBox }) => {
    const initialData = { backgroundColor: '', width: '', height: ''};
    const [formData, setFormData] = useState(initialData);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };
    const handleSubmit = evt => {
        evt.preventDefault();
        if (Object.values(formData).some(val => val == '')) return;
        addBox(formData);
        setFormData(initialData);
    };

    return (
        <form className='NewBoxForm' onSubmit={handleSubmit}>
            <label htmlFor='backgroundColor'>Color:</label>
            <input
              name='backgroundColor'
              value={formData.backgroundColor}
              onChange={handleChange}
            />
            <label htmlFor='width'>Width:</label>
            <input
              name='width'
              value={formData.width}
              onChange={handleChange}
            />
            <label htmlFor='height'>Height:</label>
            <input
              name='height'
              value={formData.height}
              onChange={handleChange}
            />
            <button>Add Box</button>
        </form>
    );
};

export default NewBoxForm;