import { useCallback, useMemo, useState } from "react";
import ListItem from "./ListItem";

const ITEMS = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
}));

export default function Dashboard() {
    const [darkMode, setDarkMode] = useState(false);

    const sortedItems = useMemo(() => {
        return [...ITEMS].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }, []);

    // ✅ useCallback giữ nguyên reference
    const handleDelete = useCallback((id) => {
        console.log("Delete item:", id);
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>

            <button onClick={() => setDarkMode(!darkMode)}>
                Toggle Theme ({darkMode ? "Dark" : "Light"})
            </button>

            <ul>
                {sortedItems.map((item) => (
                    <ListItem
                        key={item.id}
                        item={item}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
        </div>
    );
}
