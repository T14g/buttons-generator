import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ButtonsGenerator from './index';

describe('ButtonsGenerator', () => {
    it('should render ButtonsGenerator', () => {
        const ButtonsGeneratorMain = render(<ButtonsGenerator />);
        expect(ButtonsGeneratorMain.baseElement).toBeInTheDocument();
    });
});