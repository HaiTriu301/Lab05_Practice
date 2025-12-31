import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

test("user can login and see welcome message", async () => {
    render(<LoginForm />);

    // ACT: user nhập email & password
    await userEvent.type(
        screen.getByLabelText(/email/i),
        "test@example.com"
    );

    await userEvent.type(
        screen.getByLabelText(/password/i),
        "123456"
    );

    await userEvent.click(
        screen.getByRole("button", { name: /login/i })
    );

    // ASSERT: user thấy message
    const message = await screen.findByText(/welcome back/i);
    expect(message).toBeInTheDocument();
});
