import React from "react"
export default function ActivatePage() {
    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <>
            <div className="container auth__container">
                <h1 className="main__title">Activate Account</h1>
                <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Activate Account</button>
            </div>
        </>
    )
}