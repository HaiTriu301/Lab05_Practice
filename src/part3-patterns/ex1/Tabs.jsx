import { useState } from "react";
import { TabsContext, useTabsContext } from "./TabsContext";

function Tabs({ defaultIndex = 0, children }) {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    return (
        <TabsContext.Provider
            value={{ activeIndex, setActiveIndex }}
        >
            <div className="tabs">{children}</div>
        </TabsContext.Provider>
    );
}

function TabsList({ children }) {
    return <div className="tabs-list">{children}</div>;
}

function Tab({ index, children }) {
    const { activeIndex, setActiveIndex } = useTabsContext();

    const isActive = activeIndex === index;

    return (
        <button
            onClick={() => setActiveIndex(index)}
            style={{
                fontWeight: isActive ? "bold" : "normal",
                marginRight: 8,
            }}
        >
            {children}
        </button>
    );
}

function TabPanel({ index, children }) {
    const { activeIndex } = useTabsContext();

    if (activeIndex !== index) return null;

    return <div className="tab-panel">{children}</div>;
}

Tabs.List = TabsList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

export default Tabs;
