/* This test doesn't use React Testing Library and thus requires more boilerplate. */
import * as React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../components/Counter';

beforeEach(() => {
    document.body.innerHTML = '';
});

test('counter increments and decrements when the buttons are clicked', () => {
    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(<Counter />, div);
    // console.log(document.body.innerHTML);
    const [decrement, increment] = div.querySelectorAll('button');
    const message = div.firstChild.querySelector('div');

    const incrementClickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        button: 0 // left click specified by setting button === 0
    });

    const decrementClickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        button: 0
    });

    expect(message.textContent).toBe('Current count: 0');
    // increment.click();
    increment.dispatchEvent(incrementClickEvent);
    increment.dispatchEvent(incrementClickEvent);

    expect(message.textContent).toBe('Current count: 2');
    decrement.dispatchEvent(decrementClickEvent);
    // decrement.click();
    expect(message.textContent).toBe('Current count: 1');
});
