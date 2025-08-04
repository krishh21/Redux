// import { useSelector } from 'react-redux';
// import ProductCard from '../components/ProductCard';
// import FilterBar from '../components/FilterBar';

// const ProductPage = () => {
//     const { items } = useSelector(state => state.product);
//     const { category, price } = useSelector(state => state.filter);

//     const filtered = items.filter(p =>
//         (category === 'All' || p.category === category) &&
//         p.price <= price
//     );

//     return (
//         <div>
//             <FilterBar />
//             <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//                 {filtered.map(product => (
//                     <ProductCard key={product.id} product={product} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProductPage;





import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';

const ProductPage = () => {
    const { items } = useSelector(state => state.product);
    const { category, price } = useSelector(state => state.filter);

    const filtered = items.filter(p =>
        (category === 'All' || p.category === category) &&
        p.price <= price
    );

    return (
        <div className="container mx-auto p-4">
            <FilterBar />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                {filtered.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
