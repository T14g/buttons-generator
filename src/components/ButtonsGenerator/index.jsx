import React, { useState } from 'react';

const ButtonsGenerator = () => {
    const [buttonCode, setButonCode] = ('');

    const generateButton = () => {
        let code = `width: 100px
        background: #000;
        `;

        setButonCode(code);
    };

    return (
        <div>
            Generate custom buttons css code easy
            <input type="text" name="button-text" placeholder='Button text' />
            <input type="text" name="button-color" placeholder='Button Color' />
            <input type="submit" value="Generate" onClick={() => generateButton} />
        </div>
    );
}

export default ButtonsGenerator;