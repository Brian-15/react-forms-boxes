import { render } from '@testing-library/react';
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
    const { asFragment } = render(
        <BoxList />
    );
    expect(asFragment()).toMatchSnapshot();
});