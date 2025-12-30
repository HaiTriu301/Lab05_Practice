import { useMemo, useState } from "react";
import ListItem from "./ListItem";

// Tạo danh sách lớn (10,000 items)
const ITEMS = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
}));

export default function Dashboard() {
    const [darkMode, setDarkMode] = useState(false);

    // ❌ Sorting nặng (sẽ được fix bằng useMemo)
    const sortedItems = useMemo(() => {
        console.log("Sorting items...");
        return [...ITEMS].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }, []); // ⚠️ chỉ chạy 1 lần

    return (
        <div>
            <h2>Dashboard</h2>

            <button onClick={() => setDarkMode(!darkMode)}>
                Toggle Theme ({darkMode ? "Dark" : "Light"})
            </button>

            <ul>
                {sortedItems.map((item) => (
                    <ListItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
}
