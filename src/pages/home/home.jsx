import './home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className="containerR x">

                <div className="text-center">
                    <h1>Welcome to my shop</h1>
                    <div className="accent-divider" />
                    <h3>My name is Ziad and I'm a web developer and this is my front-end project.</h3>
                    <div className="btn-flex">
                        <Link className="btn" to="/products">Shop Now</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;