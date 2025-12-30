import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import Tabs from "./part3-patterns/ex1/Tabs";

// Part 1
const UserProfile = lazy(() =>
    import("./part1-state/ex1/UserProfile.jsx")
);
const Cart = lazy(() =>
    import("./part1-state/ex2/Cart.jsx")
);

// Part 2
const Dashboard = lazy(() =>
    import("./part2-performance/ex1/Dashboard.jsx")
);
const Dashboard2 = lazy(() =>
    import("./part2-performance/ex2/Dashboard2.jsx")
);

// Loading UI
function Loading() {
    return <p>Loading...</p>;
}

// export default function App() {
//     return (
//         <BrowserRouter>
//             <nav style={{ marginBottom: 20 }}>
//                 <Link to="/ex1">Ex 1.1</Link> |{" "}
//                 <Link to="/ex2">Ex 1.2</Link> |{" "}
//                 <Link to="/ex3">Ex 2.1</Link> |{" "}
//                 <Link to="/ex4">Ex 2.2</Link>
//             </nav>
//
//             <Suspense fallback={<Loading />}>
//                 <Routes>
//                     <Route path="/ex1" element={<UserProfile />} />
//                     <Route path="/ex2" element={<Cart />} />
//                     <Route path="/ex3" element={<Dashboard />} />
//                     <Route path="/ex4" element={<Dashboard2 />} />
//                     <Route
//                         path="*"
//                         element={<p>Chọn bài ở menu phía trên</p>}
//                     />
//                 </Routes>
//             </Suspense>
//         </BrowserRouter>
//     );
// }

// Part 3
export default function App() {
    return (
        <div style={{ padding: 20 }}>
            <h3>Part 3 – Exercise 3.1</h3>

            <Tabs defaultIndex={0}>
                <Tabs.List>
                    <Tabs.Tab index={0}>React</Tabs.Tab>
                    <Tabs.Tab index={1}>Redux</Tabs.Tab>
                </Tabs.List>

                <div style={{ margin: "10px 0" }}>----</div>

                <Tabs.Panel index={0}>
                    React is a JavaScript library for building UI.
                </Tabs.Panel>

                <Tabs.Panel index={1}>
                    Redux is a state management library.
                </Tabs.Panel>
            </Tabs>
        </div>
    );
}
