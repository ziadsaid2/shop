import { useSelector } from "react-redux";
import "./cart.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Cart() {
    const { username, isLoggedIn, cart } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const totalAmount = cart.reduce((sum, product) => sum + product.price * product.qty, 0);

    if (!isLoggedIn) {
        return (
            <>
                <div className="x text-center fleex ">
                    <div className="tazbeet">
                        <h1>Please login to view your cart</h1>
                        <Link to="/login"><button className="btn">Login</button></Link>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="x text-center">
            <h1 className="mb-4 mt-4">Cart</h1>
            <hr />
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-list">
                    {cart.map((product) => (
                        <div className="cart-item" key={product.id} >
                            <img src={product.image} alt={product.title} />
                            <div>{product.title}</div>
                            <div>Quantity: {product.qty} <br />Price: ${product.price}</div>
                        </div>
                    ))}
                </div>
            )}
            <hr />
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
            <div className="btn-flex">
            <button type="button" className="btn " onClick={() => navigate('/products')}>
                                <span>back to products</span>
                            </button>
            </div>            
        </div>
    );
}
export default Cart;
