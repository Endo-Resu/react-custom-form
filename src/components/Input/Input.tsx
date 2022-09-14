import React, {FC} from 'react';
import s from './Input.module.scss';

interface InputProps {
    id: string,
    name: string,
    placeholder: string,
    type: string,
    value: string | undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input: FC<InputProps> = ({id, name, placeholder, type, value, onChange}) => {
    return (
        <div className={s.input}>
            <label htmlFor={id}>
                {name}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;