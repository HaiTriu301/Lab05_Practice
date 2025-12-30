import { useEffect, useReducer } from "react";

/**
 * INITIAL STATE
 * status:
 * - idle     : chưa fetch
 * - loading  : đang fetch
 * - resolved : fetch thành công
 * - rejected : fetch thất bại
 */
const initialState = {
    status: "idle",
    data: null,
    error: null,
};

/**
 * REDUCER (Finite State Machine)
 */
function fetchReducer(state, action) {
    switch (action.type) {
        case "FETCH_INIT":
            // Chỉ cho phép fetch khi đang idle
            if (state.status !== "idle") return state;
            return {
                status: "loading",
                data: null,
                error: null,
            };

        case "FETCH_SUCCESS":
            // Chỉ cho success khi đang loading
            if (state.status !== "loading") return state;
            return {
                status: "resolved",
                data: action.payload,
                error: null,
            };

        case "FETCH_FAILURE":
            // Chỉ cho failure khi đang loading
            if (state.status !== "loading") return state;
            return {
                status: "rejected",
                data: null,
                error: action.payload,
            };

        default:
            throw new Error("Unknown action type");
    }
}

export default function UserProfile() {
    const [state, dispatch] = useReducer(fetchReducer, initialState);

    useEffect(() => {
        dispatch({ type: "FETCH_INIT" });

        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => {
                if (!res.ok) throw new Error("Network error");
                return res.json();
            })
            .then((data) =>
                dispatch({ type: "FETCH_SUCCESS", payload: data })
            )
            .catch((err) =>
                dispatch({ type: "FETCH_FAILURE", payload: err.message })
            );
    }, []);

    // RENDER THEO STATUS
    if (state.status === "idle") {
        return <p>Idle...</p>;
    }

    if (state.status === "loading") {
        return <p>Loading user...</p>;
    }

    if (state.status === "rejected") {
        return <p style={{ color: "red" }}>Error: {state.error}</p>;
    }

    return (
        <div>
            <h2>User Profile</h2>
            <p>
                <b>Name:</b> Hai Trieu
            </p>
            <p>
                <b>Email:</b> haitrieu300105@gmail.com
            </p>
        </div>
    );
}
