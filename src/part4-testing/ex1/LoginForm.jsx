import { useState } from "react";

export default function LoginForm() {
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // giả lập gọi API
        await new Promise((res) => setTimeout(res, 300));

        setMessage("Welcome back!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email
                <input type="email" aria-label="email" />
            </label>

            <label>
                Password
                <input type="password" aria-label="password" />
            </label>

            <button type="submit">Login</button>

            {message && <p>{message}</p>}
        </form>
    );
}
