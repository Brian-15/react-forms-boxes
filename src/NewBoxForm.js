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
        if (Object.values(formData).some(val => val === '')) return;
        addBox(formData);
        setFormData(initialData);
    };

    return (
        <form className='NewBoxForm' onSubmit={handleSubmit} data-testid="form">
            <label htmlFor='backgroundColor'>Color:
              <input
                name='backgroundColor'
                value={formData.backgroundColor}
                onChange={handleChange}
                data-testid='bg-color'
              />
            </label>
            <label htmlFor='width'>Width:
              <input
                name='width'
                value={formData.width}
                onChange={handleChange}
                data-testid='width'
              />
            </label>
            <label htmlFor='height'>Height:
              <input
                name='height'
                value={formData.height}
                onChange={handleChange}
                data-testid='height'
              />
            </label>
            <button>Add Box</button>
        </form>
    );
};

export default NewBoxForm;