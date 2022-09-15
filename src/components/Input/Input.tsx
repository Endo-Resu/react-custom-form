import React, {FC} from 'react';
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
}

const Input: FC<InputProps> = ({id, name, label, placeholder, type, value, errorMassage, onChange}) => {
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
            />
            <span>
                {errorMassage}
            </span>
        </div>
    );
};

export default Input;