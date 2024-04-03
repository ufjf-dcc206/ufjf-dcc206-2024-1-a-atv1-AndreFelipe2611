import {test, expect} from 'vitest';

test("teste de div", () => {

    const div = document.createElement('div')
    div.textContent = "Hello Vite!"
    expect(div).toHaveTextContent("Hello Vite!")
})