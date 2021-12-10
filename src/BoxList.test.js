import { render } from '@testing-library/react';
import BoxList from './BoxList.js';
import { initialData } from './App.js';

test('smoke test: renders BoxList', () => {
    render(<BoxList initialData={initialData} />);
});