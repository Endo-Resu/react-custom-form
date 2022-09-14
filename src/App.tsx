import React, {useState} from 'react';
import s from './App.module.scss'
import Input from "./components/Input/Input";

function App() {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const inputs = [
        {
        id: "username",
        name: "UserName",
        type: "text",
        placeholder: "Username",
        },
        {
            id: "email",
            name: "Email",
            type: "text",
            placeholder: "@gmail.com",
        },
    ]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    return (
        <div className={s.app}>
            <form action="">
                {inputs.map((input) => (
                    <Input
                        key={input.id}
                        id={input.id}
                        name={input.name}
                        placeholder={input.placeholder}
                        type={input.type}
                        value={values[input.name]}
                        onChange={handleChange}
                    />
                ))}
            </form>
        </div>
    );
}

export default App;