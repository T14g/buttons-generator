import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';

import ButtonsGenerator from './index';
import { act } from 'react-dom/test-utils';

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
        const submitButton = ButtonsGeneratorMain.baseElement.querySelector('input[type="submit"]')
        expect(submitButton).not.toBeNull();
    });

    it('should call generateButton and set button code', () => {
        const codeMock = `width: 100px
        background: #000;
        `;

        const useStateSpy = jest.spyOn(React, 'useState');
        useStateSpy.mockImplementationOnce(() => [false, '']);
        const ButtonsGeneratorMain = render(<ButtonsGenerator />);
        const submitButton = ButtonsGeneratorMain.baseElement.querySelector('input[type="submit"]')
        fireEvent.click(submitButton);

        act(async () => {
            await expect(useStateSpy).toHaveBeenCalledWith(codeMock);
        });
    });
});