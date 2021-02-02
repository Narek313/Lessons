import React, {useState} from 'react';

export const CustomHook = ({g = 1, m = 1, initial = 0, min = 0, max = 100}) => {
    const [value, setvalue] = useState(initial);

    const gumar = () => {
        setvalue(prevState => prevState + g >= max ? max : prevState + g)
    }
    const minus = () => {
        setvalue(prevState => prevState - m <= min ? min : prevState - m)
    }
    const reset = () => {
        setvalue(initial)
    }

    return [value,{gumar , minus, reset}];
}