// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart } from '../features/cartSlice';

// const Cart = () => {
//     const cart = useSelector(state => state.cart.items);
//     const dispatch = useDispatch();
//     const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//     return (
//         <div>
//             <h2>Cart</h2>
//             {cart.map(item => (
//                 <div key={item.id}>
//                     <p>{item.name} x {item.quantity}</p>
//                     <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
//                 </div>
//             ))}
//             <h3>Total: ₹{total}</h3>
//         </div>
//     );
// };

// export default Cart;




















import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cartSlice';

const Cart = () => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty</p>
            ) : (
                <div className="space-y-4">
                    {cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded shadow">
                            <div>
                                <h3 className="font-semibold">{item.name}</h3>
                                <p>Qty: {item.quantity}</p>
                            </div>
                            <button
                                onClick={() => dispatch(removeFromCart(item.id))}
                                className="text-red-500 hover:underline"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="text-right mt-4 font-bold text-lg">Total: ₹{total}</div>
                </div>
            )}
        </div>
    );
};

export default Cart;
