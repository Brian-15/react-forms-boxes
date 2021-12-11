import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList.js';

/** mock uuid with an incrementing id starting from 0
 * from: https://medium.com/@tommybernaciak/a-missing-jest-mock-feature-b89b74d7a09c
 */
jest.mock('uuid', () => ({
    v4: jest.fn().mockImplementation(
      (function(n) {
        return function() {
          return ++n;
        };
      })(0)
    )
}));

test('smoke test: renders BoxList', () => {
    render(<BoxList />);
});

test('matches snapshot', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

test('should add new box', () => {
    const {
        queryAllByTestId,
        queryByTestId,
        queryByText
    } = render(<BoxList />);

    const btn = queryByText('Add Box');
    const color = queryByTestId('bg-color');
    const width = queryByTestId('width');
    const height = queryByTestId('height');

    expect(queryAllByTestId('box').length).toBe(3);

    fireEvent.change(color, { target: { value: 'pink' } });
    fireEvent.change(width, { target: { value: '50px' } });
    fireEvent.change(height, { target: { value: '50px' } });
    fireEvent.click(btn);

    const newBoxes = queryAllByTestId('box');
    expect(newBoxes.length).toBe(4);
    expect(newBoxes[3]).toHaveStyle('background-color: pink;');
});