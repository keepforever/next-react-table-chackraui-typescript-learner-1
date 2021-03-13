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
    const [decrement, increment] = div.querySelectorAll('button');
    const message = div.firstChild.querySelector('div');

    expect(message.textContent).toBe('Current count: 0');
    increment.click();
    increment.click();
    expect(message.textContent).toBe('Current count: 2');
    decrement.click();
    expect(message.textContent).toBe('Current count: 0');
});