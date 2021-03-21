import React, { useEffect } from 'react';

const Switcher = ({darkTheme, setDarkTheme}) => {
    return (
        <div className="Switcher">
            <input onChange={() => setDarkTheme(!darkTheme)} type="checkbox" id="switch" /><label for="switch">Toggle</label>
        </div>
    )
}

export default Switcher;
