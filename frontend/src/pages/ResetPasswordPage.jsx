import { useState } from "react"
export default function ResetPasswordPage() {
    const [formData, setFormData] = useState({
        "email": "",
    })

    const { email } = formData

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
                <h1 className="main__title">Reset Password</h1>

                <form className="auth__form">
                    <input type="text"
                        placeholder="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                    />

                    <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Reset</button>
                </form>
            </div>
        </>
    )
}