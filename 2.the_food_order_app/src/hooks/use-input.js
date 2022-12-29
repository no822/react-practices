import React, {useState} from 'react';

// useInput<A> :: (A => boolean) => void
const useInput = (validation) => {
    const [input, setInput] = useState("");
    const [isTouch, setIsTouch] = useState(false);

    const inputValid = !validation(input);
    const hasError = !inputValid && isTouch;

    const touched = () => setIsTouch(true);
    const onBlurHandler = () => {
        touched();
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
        touched,
    };
}

export default useInput;