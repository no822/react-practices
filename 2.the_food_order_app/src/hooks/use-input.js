import React, {useState} from 'react';

// useInput<A> :: (A => boolean) => void
const useInput = (validation) => {
    const [input, setInput] = useState("");
    const [isTouch, setIsTouch] = useState(false);

    const inputValid = !validation(input);
    const hasError = !inputValid && isTouch;

    const onBlurHandler = event => {
        setIsTouch(true);
    };

    const onChangeHandler = event => {
        setInput(event.target.value);
    };

    const reset = () => {
        setInput("");
        setIsTouch(false);
    }

    return {
        input,
        inputValid,
        onChangeHandler,
        onBlurHandler,
        hasError,
        reset,
    };
}

export default useInput;