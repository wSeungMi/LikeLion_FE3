// 1121-3시수업_custom Hook 만들어보기

import { useState } from "react";

function useSeungmi(initState) {
    const [value, setValue] = useState(initState);
    function onChange(e) {
        setValue(e.target.value);
    }
    return [value, onChange];
}

export default useSeungmi;
