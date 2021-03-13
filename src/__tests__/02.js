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

    // 🐨 replace the next two statements with `fireEvent.click(button)`
    const incrementClickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        button: 0
    });
    increment.dispatchEvent(incrementClickEvent);
    expect(message.textContent).toBe('Current count: 1');
    const decrementClickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        button: 0
    });
    decrement.dispatchEvent(decrementClickEvent);
    expect(message.textContent).toBe('Current count: 0');
});
