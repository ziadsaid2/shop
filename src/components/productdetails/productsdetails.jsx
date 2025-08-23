import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import './productsdetails.css'
import Image from 'react-bootstrap/Image';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slice/userslice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ProductDetails() {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchProduct() {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(response.data);
        }
        fetchProduct();
    }, []);
   const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product || !product.id) return;
    dispatch(addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.category,
    }));
    toast.success('Product added to cart');
   };
    return (
        <>
            <div className="single-product x">
                <div className="box">
                    <div className="imgg">
                        <Image src={product.image} alt="" rounded />
                    </div>
                </div>

                <div className="single-info">
                    <div className="infoo">
                        <h2>{product.title}</h2>
                        <p>{product.category}</p>
                        <h3>${product.price}</h3>
                        <h5>{product.description}</h5>
                        <div className="btn-flex">
                            <button type="button" className="btn" onClick={handleAdd}>
                                <span>Add to Cart</span>
                                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <path d="M16 10a4 4 0 01-8 0" />
                                </svg>
                            </button>
                            <button type="button" className="btn" onClick={() => navigate('/products')}>
                                <span>back to products</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
