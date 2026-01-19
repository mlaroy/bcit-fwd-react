import { useState } from 'react'

function useDarkMode() {
    const [isDark, setIsDark] = useState(false);

    const toggle = () => {
        setIsDark((prev) => !prev);
    };

    const themeClass = isDark ? "dark" : "light";

    return {
        isDark,
        toggle,
        themeClass,
    };
}

export default useDarkMode
