import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const [formData, setFormData] = useState({
        "email": "",
        "password": "",
    })

    const { email, password } = formData

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <>
            <div className="container auth__container">
                <h1 className="main__title">Login</h1>

                <form className="auth__form">
                    <input type="text"
                        placeholder="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                    />
                    <input type="password"
                        placeholder="password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        required
                    />
                    <Link to="/reset-password">Forget Password ?</Link>

                    <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </>
    )
}