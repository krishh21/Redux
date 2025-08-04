// const ProductModal = ({ product, onClose }) => (
//     <div style={{ position: 'fixed', top: 100, left: '30%', background: 'white', padding: 20, border: '1px solid black' }}>
//         <h2>{product.name}</h2>
//         <p>{product.desc}</p>
//         <p>Price: ₹{product.price}</p>
//         <img src={product.image} alt={product.name} />
//         <button onClick={onClose}>Close</button>
//     </div>
// );

// export default ProductModal;



const ProductModal = ({ product, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded p-6 w-[90%] max-w-md relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black"
                >
                    X
                </button>
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
                <h2 className="text-lg font-bold mt-3">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.desc}</p>
                <p className="font-semibold mt-2">Price: ₹{product.price}</p>
            </div>
        </div>
    );
};

export default ProductModal;
