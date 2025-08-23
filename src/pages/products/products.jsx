import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import ProductCard from '../../components/productcard/productcard';
import { useSelector } from 'react-redux';
import './products.css'
function Products() {
    const [products, setProducts] = useState([]);
    const [cart, setcart] = useState([]);
    const { isLoggedIn } = useSelector((state) => state.user);    
    useEffect(() => {
        async function fetchProducts() {
            const response = await axios.get('https://fakestoreapi.com/products');
           setProducts(response.data);
        }
        fetchProducts();
    }, []);
    return (
        <>
                <div className='text-center mb-4 mt-5'><h1>Products</h1></div>
            {!isLoggedIn && 
                <div className='texttt'>
                <p>Please login to shop</p>
            </div>
        }
            <div className="product-list">
            <div className="product-grid">
            {products.map((item)=>{
                return<ProductCard product={item} key={item.id}/>
            })}          
            </div>
            </div>
        </>
    );
}       
export default Products;