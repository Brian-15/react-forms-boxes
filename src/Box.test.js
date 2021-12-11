import { render } from "@testing-library/react";
import Box from './Box.js';

test('smoke test: renders box', () => {
    render(
        <Box
            backgroundColor='blue'
            width='200px'
            height='200px'
        />);
});

test('matches snapshot', () => {
    const { asFragment } = render(
        <Box
            backgroundColor='blue'
            width='200px'
            height='200px'
        />
    );
    expect(asFragment()).toMatchSnapshot();
});