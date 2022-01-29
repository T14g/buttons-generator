import React from 'react';

const ButtonsGenerator = () => {

    return (
        <div>
            Generate custom buttons css code easy
            <input type="text" name="button-text" placeholder='Button text' />
            <input type="text" name="button-color" placeholder='Button Color' />
            <input type="submit" />
        </div>
    );
}

export default ButtonsGenerator;