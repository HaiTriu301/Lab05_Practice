export default function BuggyComponent({ shouldCrash }) {
    if (shouldCrash) {
        throw new Error("Boom!");
    }

    return <h2>No error</h2>;
}
