import React from 'react';
import styles from './Checkout.module.css';
import useInput from "../../hooks/use-input";

// name: 빈값인지 체크
// street: 빈값인지 체크
// postal: 5자리 정수인지 체크
// city: 빈값인지 체크
const isEmpty = value => value.trim().length === 0;
const isInvalidPostal = postalCode => {
    const num = parseFloat(postalCode);
    if (typeof num !== "number") return true;
    if (!Number.isInteger(num)) return true;
    if (postalCode.trim().length !== 5) return true;
    if (postalCode.trim().length === 5) {
        return false;
    }
}

const Checkout = props => {
    const {
        input: name,
        inputValid: isValidName,
        onChangeHandler: nameChangeHandler,
        onBlurHandler: nameBlurHandler,
        hasError: hasNameError,
        reset: resetName
    } = useInput(isEmpty);

    const {
        input: street,
        inputValid: isValidStreet,
        onChangeHandler: streetChangeHandler,
        onBlurHandler: streetBlurHandler,
        hasError: hasStreetError,
        reset: resetStreet
    } = useInput(isEmpty);

    const {
        input: postal,
        inputValid: isValidPostal,
        onChangeHandler: postalChangeHandler,
        onBlurHandler: postalBlurHandler,
        hasError: hasPostalError,
        reset: resetPostal
    } = useInput(isInvalidPostal);

    const {
        input: city,
        inputValid: isValidCity,
        onChangeHandler: cityChangeHandler,
        onBlurHandler: cityBlurHandler,
        hasError: hasCityError,
        reset: resetCity
    } = useInput(isEmpty);

    const onConfirmHandler = (e) => {
        e.preventDefault();

        if (!isValidName || !isValidStreet || !isValidPostal || !isValidCity) {
            console.log('invalid submit');
            return;
        }

        console.log('confirm!!');

        resetName();
        resetStreet();
        resetPostal();
        resetCity();
    }

    const nameClasses = hasNameError ? `${styles.control} ${styles.invalid}` : styles.control;
    const streetClasses = hasStreetError ? `${styles.control} ${styles.invalid}` : styles.control;
    const postalClasses = hasPostalError ? `${styles.control} ${styles.invalid}` : styles.control;
    const cityClasses = hasCityError ? `${styles.control} ${styles.invalid}` : styles.control;

    return (
        <form onSubmit={onConfirmHandler}>
            <div className={nameClasses}>
                <label htmlFor="name">Name</label>
                <input
                    value={name}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    type="text"
                    id="name"
                />
                {hasNameError && <div className={styles.msg}>이름을 입력해주세요.</div>}
            </div>
            <div className={streetClasses}>
                <label htmlFor="street">Street</label>
                <input
                    value={street}
                    onChange={streetChangeHandler}
                    onBlur={streetBlurHandler}
                    type="text"
                    id="street"
                />
                {hasStreetError && <div className={styles.msg}>주소를 입력해주세요.</div>}
            </div>
            <div className={postalClasses}>
                <label htmlFor="postal">Postal Code</label>
                <input
                    value={postal}
                    onChange={postalChangeHandler}
                    onBlur={postalBlurHandler}
                    type="text"
                    id="postal"
                />
                {hasPostalError && <div className={styles.msg}>유효하지 않은 postal code입니다.(5자리 숫자)</div>}
            </div>
            <div className={cityClasses}>
                <label htmlFor="city">City</label>
                <input
                    value={city}
                    onChange={cityChangeHandler}
                    onBlur={cityBlurHandler}
                    type="text"
                    id="postal"
                />
                {hasCityError && <div className={styles.msg}>도시명을 입력해 주세요.</div>}
            </div>
            <div className={styles.actions}>
                <button type="button" onClick={props.onCancel} className={styles.cancel}>cancel</button>
                <button className={styles.submit}>confirm</button>
            </div>
        </form>
    );
}

export default Checkout;