import React, { useState } from "react";
import s from "./App.module.scss";
import Input from "./components/Input/Input";

interface ValuesState {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
}

function App() {
    const [values, setValues] = useState<ValuesState>({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const inputs: {
        id: string;
        name: keyof typeof values;
        type: string;
        label: string;
        placeholder: string;
        massage: string;
        required: boolean;
        pattern?: string,
    }[] = [
        {
            id: "username",
            name: "username",
            label: "Username",
            type: "text",
            placeholder: "Username",
            massage: "Username should be 3-16 characters and shouldn't include any special character.",
            required: true,
            pattern: "^[A-Za-z0-9]{3,16}$",
        },
        {
            id: "email",
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "@gmail.com",
            massage: "It should be a valid email address.",
            required: true,
        },
        {
            id: "password",
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Password",
            massage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character.",
            required: true,
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        },
        {
            id: "confirmPassword",
            name: "confirmPassword",
            label: "Confirm Password",
            type: "password",
            placeholder: "Confirm Password",
            massage: "Passwords don't match.",
            required: true,
            pattern: values.password,
        },
    ];

    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.id]: e.target.value });
    };

    return (
        <div className={s.app}>
            <form className={s.form} onSubmit={handleSubmit}>
                <h1 className={s.title}>Registration</h1>
                <div className={s.content}>
                    {inputs.map((input) => (
                        <Input
                            key={input.id}
                            id={input.id}
                            label={input.label}
                            name={input.name}
                            placeholder={input.placeholder}
                            type={input.type}
                            value={values[input.name]}
                            errorMassage={input.massage}
                            onChange={handleChange}
                            required={input.required}
                            pattern={input.pattern}
                        />
                    ))}
                </div>
                <button className={s.button}>Submit</button>
            </form>
        </div>
    );
}

export default App;