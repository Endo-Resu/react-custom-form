import React, {FC, useState} from 'react';
import s from './Input.module.scss';

interface InputProps {
    id: string,
    name: string,
    placeholder: string,
    type: string,
    label?: string,
    value: string | undefined,
    errorMassage: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    required?: boolean,
    pattern?: string,
}

const Input: FC<InputProps> = ({id,
                                   name,
                                   label,
                                   placeholder,
                                   type,
                                   value,
                                   errorMassage,
                                   onChange,
                                   required,
                                   pattern}) => {

    const [focused, setFocused] = useState<boolean>(false);

    const handleFocus = () => {
        setFocused(true)
    }

    const onFocus = () => {
        name === 'confirmPassword' && setFocused(true)
    }

    return (
        <div className={s.wrapper}>
            <label className={s.label} htmlFor={id}>
                {label}
            </label>
            <input
                className={s.input}
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                pattern={pattern}
                onBlur={handleFocus}
                // @ts-ignore
                focused={`${focused}`}
                onFocus={onFocus}
                autoComplete="false"
            />
            <span className={s.massage}>
                {errorMassage}
            </span>
        </div>
    );
};

export default Input;