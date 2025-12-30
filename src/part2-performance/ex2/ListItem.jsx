import React from "react";

function ListItem({ item, onDelete }) {
    console.log("Render ListItem:", item.id);

    return (
        <li>
            {item.name}
            <button onClick={() => onDelete(item.id)}>
                Delete
            </button>
        </li>
    );
}

export default React.memo(ListItem);
