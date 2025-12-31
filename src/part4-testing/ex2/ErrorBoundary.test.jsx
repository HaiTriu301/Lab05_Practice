import { render, screen } from "@testing-library/react";
import { ErrorBoundary } from "react-error-boundary";
import BuggyComponent from "./BuggyComponent";
import ErrorFallback from "./ErrorFallback";

test("shows fallback UI when component crashes", () => {
    // 🔇 Tắt console.error cho sạch log
    vi.spyOn(console, "error").mockImplementation(() => {});

    render(
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <BuggyComponent shouldCrash={true} />
        </ErrorBoundary>
    );

    expect(
        screen.getByText(/something went wrong/i)
    ).toBeInTheDocument();

    expect(
        screen.getByText(/boom/i)
    ).toBeInTheDocument();

    console.error.mockRestore();
});
