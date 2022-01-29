import React from 'react';
import { render } from '@testing-library/react';

import ButtonsGenerator from './index';

describe('ButtonsGenerator', () => {
    it('should render ButtonsGenerator', () => {
        const ButtonsGeneratorMain = render(<ButtonsGenerator />);
        expect(ButtonsGeneratorMain.baseElement).toBeInTheDocument();
    });

    it('should render button text input', () => {
        const ButtonsGeneratorMain = render(<ButtonsGenerator />);
        const buttonTextInput = ButtonsGeneratorMain.baseElement.querySelector('input[name="button-text"]')
        expect(buttonTextInput).not.toBeNull();
        expect(buttonTextInput.tagName).toEqual('INPUT');
    });

    it('should render button color input', () => {
        const ButtonsGeneratorMain = render(<ButtonsGenerator />);
        const buttonColoeInput = ButtonsGeneratorMain.baseElement.querySelector('input[name="button-color"]')
        expect(buttonColoeInput).not.toBeNull();
        expect(buttonColoeInput.tagName).toEqual('INPUT');
    });

    it('has a submit button', () => {
        const ButtonsGeneratorMain = render(<ButtonsGenerator />);
        const buttonColoeInput = ButtonsGeneratorMain.baseElement.querySelector('input[type="submit"]')
        expect(buttonColoeInput).not.toBeNull();
    });
});