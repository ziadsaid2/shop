import './productcard.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slice/userslice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ProductCard({ product }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAdd = (e) => {
        e.preventDefault();
        e.stopPropagation();
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
            
            <div className="card" onClick={() => navigate(`/productdetails/${product.id}`)}>
                <div className="tilt">
                    <div className="img">
                        <img src={product.image} alt={product.name} />
                    </div>
                </div>
                <div className="info">
                    <div className="cat">{product.category}</div>
                    <h2 className="title">{product.title}</h2>

                    <div className="bottoom">
                        <div className="price">
                            <div className="new">${product.price.toFixed(2)}</div>
                        </div>
                        <button type="button" className="btn" onClick={handleAdd}>
                            <span>Add to Cart</span>
                            <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 01-8 0" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}
export default ProductCard;