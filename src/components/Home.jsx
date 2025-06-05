import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
        <h1>Welcome to my shopping site!</h1>
        <nav>
          <ul>
            <li>
              <Link to="shop">Shop</Link>
            </li>
            <li>
              <Link to="cart">View Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
}

export default Home;