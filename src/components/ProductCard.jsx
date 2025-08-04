// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../features/cartSlice';
// import ProductModal from './ProductModal';

// const ProductCard = ({ product }) => {
//   const dispatch = useDispatch();
//   const [open, setOpen] = useState(false);

//   return (
//     <div style={{ border: '1px solid gray', margin: 10, padding: 10 }}>
//       <img src={product.image} width={100} alt={product.name} />
//       <h3>{product.name}</h3>
//       <p>₹{product.price}</p>
//       <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
//       <button onClick={() => setOpen(true)}>Details</button>
//       {open && <ProductModal product={product} onClose={() => setOpen(false)} />}
//     </div>
//   );
// };

// export default ProductCard;




import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import ProductModal from './ProductModal';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <div className="flex justify-between mt-3">
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
        <button
          onClick={() => setOpen(true)}
          className="text-sm text-blue-600 hover:underline"
        >
          View Details
        </button>
      </div>

      {open && <ProductModal product={product} onClose={() => setOpen(false)} />}
    </div>
  );
};

export default ProductCard;
