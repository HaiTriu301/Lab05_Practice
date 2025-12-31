import ReactDOM from "react-dom";

export default function Modal({ onClose }) {
    return ReactDOM.createPortal(
        <div
            style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.4)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            onClick={onClose}
        >
            <div
                style={{
                    background: "white",
                    padding: 20,
                    borderRadius: 8,
                    minWidth: 300,
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <h3>Modal Title</h3>
                <p>This modal is rendered using a Portal.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>,
        document.body
    );
}
