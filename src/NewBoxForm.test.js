import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('smoke test: renders form', () => {
    render(<NewBoxForm />);
});

test('matches snapshot', () => {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});

