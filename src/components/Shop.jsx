import { useEffect, useState } from "react";

import ItemCard from "./ItemCard";
import '../styles/styles.css';
import Loading from "./Loading";
import { useOutletContext } from "react-router-dom";

function Shop () {
    const [loading, setLoading] = useState(true);
    const { setItems, items, handleAdd } = useOutletContext();

    useEffect(() => {
        async function getData() {
            try {
                if (items.length === 0) {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setItems(
                    data.map(item => ({
                        title: item.title,
                        id: item.id,
                        image: item.image,
                        quantity: 0,
                        inCart: false
                    }))
                );
                }
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, []);

    if (loading) {
        return <Loading/>;
      }

    return (
    <div className="shop">
        <div className="shop-title">
            <h1>Shop</h1>
        </div>
        <div className="card-grid">
                {
                items.map(item => 
                <ItemCard 
                    key={item.id}
                    item={item}
                    handleAdd={handleAdd}
                    currentQuantity={item.quantity}
                    >
                </ItemCard>)
            }
        </div>
    </div>
    );
}

export default Shop;