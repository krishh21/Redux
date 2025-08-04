import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const cart = useSelector(state => state.cart.items)
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="bg-white mt-[ w-full fixed shadow-md px-6 py-1 flex justify-between items-center">
            {/* Logo or Home Link */}
            <Link to="/" className="text-xl font-bold text-blue-600">
                Home
            </Link>

            {/* Cart Icon */}
            <div className="relative">
                <Link to='/cart'><FiShoppingCart className="text-2xl text-gray-700 cursor-pointer" /></Link>
                {/* Optional Cart Count Badge */}
                {totalQuantity > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                        {totalQuantity}
                    </span>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
