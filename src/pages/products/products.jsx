import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../components/productcard/productcard';
import { useSelector } from 'react-redux';
import './products.css'

function Products() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortType, setSortType] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const { isLoggedIn } = useSelector((state) => state.user);

    useEffect(() => {
        async function fetchProducts() {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
            setFilteredProducts(response.data);
        }
        fetchProducts();
    }, []);

    const handleFilter = (category) => {
        setSelectedCategory(category);
        if (category === '') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter((item) => item.category === category));
        }
    };

    const handleSort = (type) => {
        setSortType(type);
        let sorted = [...filteredProducts];
        if (type === 'price-asc') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (type === 'price-desc') {
            sorted.sort((a, b) => b.price - a.price);
        } else if (type === 'name') {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        }
        setFilteredProducts(sorted);
    };

    const handleReset = () => {
        setSelectedCategory('');
        setSortType('');
        setSearchTerm('');
        setFilteredProducts(products);
    };

    const handleSearch = (value) => {
        setSearchTerm(value);
        const filtered = products.filter((item) =>
            item.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <>
            <div className='text-center mb-4 mt-5 margin-top'><h1>Products</h1></div>
            {!isLoggedIn && 
                <div className='texttt'>
                    <p>Please login to shop</p>
                </div>
            }

            <div className="products-search">
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>

            <div className="products-controls">
                <select onChange={(e) => handleSort(e.target.value)} value={sortType}>
                    <option value="">Sort</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name">Name</option>
                </select>
                <button onClick={handleReset} className="products-reset-btn">Reset</button>
            </div>

            <div className="products-categories">
                <button onClick={() => handleFilter("men's clothing")}>Men's Clothing</button>
                <button onClick={() => handleFilter("women's clothing")}>Women's Clothing</button>
                <button onClick={() => handleFilter("electronics")}>Electronics</button>
                <button onClick={() => handleFilter("jewelery")}>Jewelery</button>
            </div>

            <div className="product-list">
                <div className="product-grid">
                    {filteredProducts.map((item) => (
                        <ProductCard product={item} key={item.id}/>
                    ))}
                </div>
            </div>
        </>
    );
}       

export default Products;
