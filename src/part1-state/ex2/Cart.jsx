import { useDispatch, useSelector } from "react-redux";
import {
    addItem,
    removeItem,
    clearCart,
    selectCartTax,
} from "./cartSlice";

const DUMMY_PRODUCT = {
    id: "p1",
    name: "React Course",
    price: 100,
};

export default function Cart() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const tax = useSelector(selectCartTax);

    return (
        <div>
            <h2>Shopping Cart</h2>

            <button onClick={() => dispatch(addItem(DUMMY_PRODUCT))}>
                Add Item
            </button>
            <button onClick={() => dispatch(removeItem("p1"))}>
                Remove Item
            </button>
            <button onClick={() => dispatch(clearCart())}>
                Clear Cart
            </button>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} (x{item.quantity}) – ${item.price}
                    </li>
                ))}
            </ul>

            <p>
                <b>Total:</b> ${totalAmount}
            </p>
            <p>
                <b>Tax (10%):</b> ${tax}
            </p>
        </div>
    );
}
