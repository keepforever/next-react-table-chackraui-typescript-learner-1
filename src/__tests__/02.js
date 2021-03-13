// simple test with React Testing Library
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('counter increments and decrements when the buttons are clicked', () => {
    // const view = render(<Counter />, div);
    // const div = view.container;
    /* with destructuring, we alias container to div */
    const { container } = render(<Counter />);

    const [decrement, increment] = container.querySelectorAll('button');
    const message = container.firstChild.querySelector('div');

    expect(message.textContent).toBe('Current count: 0');

    fireEvent.click(increment);
    /* without extended jest-dom */
    expect(message.textContent).toBe('Current count: 1');
    /* with extended jest-dom */
    expect(message).toHaveTextContent('Current count: 1');

    fireEvent.click(decrement);
    expect(message.textContent).toBe('Current count: 0');
});
