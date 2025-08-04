// // import React from 'react'

// // const FilterBar = () => {
// //   return (
// //     <div>

// //     </div>
// //   )
// // }

// // export default FilterBar







// import { useDispatch } from 'react-redux';
// import { setCategory, setPrice } from '../features/filterSlice';

// const FilterBar = () => {
//     const dispatch = useDispatch();

//     return (
//         <div>
//             <select onChange={(e) => dispatch(setCategory(e.target.value))}>
//                 <option value="All">All</option>
//                 <option value="Clothing">Clothing</option>
//                 <option value="Footwear">Footwear</option>
//                 <option value="Accessories">Accessories</option>
//             </select>
//             <input
//                 type="range"
//                 min={0}
//                 max={150}
//                 step={5}
//                 onChange={(e) => dispatch(setPrice(Number(e.target.value)))}
//             />
//         </div>
//     );
// };

// export default FilterBar;



import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setPrice } from '../features/filterSlice';

const FilterBar = () => {
    const dispatch = useDispatch();
    const { price } = useSelector(state => state.filter);

    return (
        <div className="bg-white p-4 rounded shadow flex flex-col sm:flex-row items-center gap-4 justify-between">
            <select
                onChange={(e) => dispatch(setCategory(e.target.value))}
                className="border p-2 rounded"
            >
                <option value="All">All</option>
                <option value="Clothing">Clothing</option>
                <option value="Footwear">Footwear</option>
                <option value="Accessories">Accessories</option>
            </select>

            <div className="flex items-center gap-2">
                <label className="text-sm">Price: ₹{price}</label>
                <input
                    type="range"
                    min={0}
                    max={150}
                    step={5}
                    value={price}
                    onChange={(e) => dispatch(setPrice(Number(e.target.value)))}
                    className="w-40"
                />
            </div>
        </div>
    );
};

export default FilterBar;
